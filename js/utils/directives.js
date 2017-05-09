(function() {
    'use strict';
    angular.module('app.directives', []).directive('jhdatepicker', ['$check', function($check) {
        return {
            scope : {
                date : '=',
                ngDisabled : '=',
                changeCallback : '&'
            },
            restrict : 'E',
            replace : 'true',
            template : '<div class="jhdatepicker"><input style="box-sizing: border-box; width: calc(100% - 34px);" type="text" /><img src="images/bor_btn_time.jpg"/></div>',
            link : function(scope, elem, attrs) {
                if (!$check.isEmpty(attrs['width']))
                    elem.css("width", attrs['width']);
                var img = elem.find("img");
                var picker = elem.find("input");
                if (attrs["dateIcon"] == "false") {
                    img.hide();
                    picker.css("width", "100%");
                }
                img.bind("click", function() {
                    if (scope.ngDisabled)
                        return;
                    picker.datepicker('show');
                });
                picker.datepicker({
                    format : 'yyyy/mm/dd',
                    language : 'ja',
                    autoclose : true,
                    forceParse : false
                });
                scope.$parent.$watch(attrs.ngDisabled, function(newVal, oldVal) {
                    img.prop('disabled', newVal);
                    picker.prop('disabled', newVal);
                });
                
                scope.$parent.$watch(attrs.date, function(newVal, oldVal) {
                    if (!newVal) {
                        picker.val("");
                        picker.datepicker("update");
                        return;
                    }
                    if (newVal instanceof Date) {
                        newVal = newVal .getFullYear() + "/"
                                + (newVal.getMonth() + 1) + "/"
                                + newVal.getDate();
                    } else if (newVal.length >= 8) {
                        var date = moment(newVal.replace(/[-|\/]/g, ""), "YYYYMMDD");
                        if (date.isValid())
                            newVal = date.format("YYYY/MM/DD");
                        else
                            newVal = moment().format("YYYY/MM/DD");
                    }
                    picker.datepicker("setDate", newVal);
                });

                picker.bind('change', function() {
                    $(this).datepicker('hide');
                    if ($check.isEmpty(attrs["date"]))
                        return;
                    scope.date = $(this).val().replace(new RegExp("/", 'g'), "-");
                    if (!scope.$parent.$$phase) {
                        scope.$parent.$digest();
                        scope.changeCallback();
                    }
                });

                picker.bind('dblclick', function() {
                    $(this).datepicker("setDate", new Date());
                });

                elem.bind('mouseover', function() {
                    elem.css('cursor', 'pointer');
                });
            }
        };
    }]).directive('amountFormat',['$parse', '$filter', function($parse, $filter) {
        var numFilter = $filter('currency');
        return {
            restrict : 'A',
            require : 'ngModel',
            link : function(scope, element, attrs, ngModel) {

                function formatter(value) {
                    return numFilter(value, '￥', 0); // format
                }

                function parser(value) {
                    if (!value)
                        return value;
                    return String(value).replace(/[,￥]/g, "");
                }
                // model から view へ
                ngModel.$formatters.push(formatter);
                // view から model へ
                ngModel.$parsers.push(parser);

                $(element).bind("blur", function() {
                    $(this)[0].value = formatter(ngModel.$modelValue);
                });

                $(element).on("focus", function() {
                    $(this)[0].value = ngModel.$modelValue;
                    $(this).select();
                });
            }
        };
    }]).directive('autoNumber',['$check', function($check) {
        var Sys = {};
        var ua = navigator.userAgent.toLowerCase();
        var s;
        (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? Sys.ie = s[1]
        : (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1]
        : (s = ua.match(/edge\/([\d.]+)/)) ? Sys.edge = s[1]
        : (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1]
        : (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1]
        : (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1]
        : (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

        return {
            restrict : 'A',
            require : 'ngModel',
            link : function(scope, element, attrs, ngModel) {
                if (Sys.ie || Sys.firefox || Sys.edge) {
                    $(element).css("ime-mode", "disabled");
                }

                /**
                 * getCursortPosition
                 */ 
                function getCursortPosition() {
                    var CaretPos = 0;
                    // IE Support
                    if (document.selection) {
                        element[0].focus();
                        var Sel = document.selection.createRange();
                        Sel.moveStart('character', -element[0].value.length);
                        CaretPos = Sel.text.length;
                    } else {
                        CaretPos = element[0].selectionStart;
                    }
                    return (CaretPos);
                }

                /**
                 * setCaretPosition
                 */
                function setCaretPosition(pos) {
                    if (element[0].setSelectionRange) {
                        element[0].focus();
                        element[0].setSelectionRange(pos, pos);
                    } else if (element[0].createTextRange) {
                        var range = element[0].createTextRange();
                        range.collapse(true);
                        range.moveEnd('character', pos);
                        range.moveStart('character', pos);
                        range.select();
                    }
                }

                $(element).on("input", function() {
                    var position = getCursortPosition(), 
                        selection = window.getSelection().toString();

                    if (!$(this).val()) {
                        ngModel.$setViewValue(null);
                        ngModel.$render();
                        return;
                    }
                    var str = jQuery.trim(String($(this).val()).replace(/[,￥]/g, ""));
                    if (!str) {
                        ngModel.$setViewValue(null);
                        ngModel.$render();
                        return;
                    }

                    if (!$check.isEmpty(attrs["maxlength"])) {
                        var maxlength = Number(attrs["maxlength"]);
                        if (str.length > maxlength) {
                            ngModel.$setViewValue(ngModel.$viewValue);
                            ngModel.$render();
                            setCaretPosition(position);
                            return;
                        }
                    }

                    var positionIndex = 0;
                    // 全角→半角
                    if (str.match(/[^0-9]/)) {
                        str = str.replace(/[０-９]/, function(s) {
                            return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
                        });
                        str = str.replace(/[^\d]/g, "");
                        if (str)
                            str = Number(str.replace(/[^\d]/g, "")) + "";
                        if (ngModel.$viewValue === null
                                || selection
                                || ngModel.$viewValue === undefined
                                || str.length > String(ngModel.$viewValue).length) {
                            positionIndex = 1;
                        }
                        ngModel.$setViewValue(str);
                        ngModel.$render();
                    } else {
                        str = Number(str) + "";
                        if (ngModel.$viewValue === null
                                || selection
                                || ngModel.$viewValue === undefined) {
                            positionIndex = 1;
                        }
                        ngModel.$setViewValue(str);
                        ngModel.$render();
                    }
                    setCaretPosition(position + positionIndex);

                }).on("paste", function(e) {
                    var $this = $(this), 
                        original = e.originalEvent, 
                        val = null;

                    // Get the text
                    // content stream.
                    if (window.clipboardData && window.clipboardData.getData) { // IE
                        val = window.clipboardData.getData('Text');
                    } else if (original.clipboardData && original.clipboardData.getData) {
                        val = original.clipboardData.getData('text/plain');
                    }

                    if (val) {
                        val = val.replace(/[０-９]/g, function(s) {
                            return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
                        });
                        val = val.replace(/[^\d]/g, '');

                        // maxlength
                        if (!$check.isEmpty(attrs["maxlength"])) {
                            var maxlength = Number(attrs["maxlength"]);
                            if (val.length > maxlength) {
                                val = val.substr(0, maxlength);
                            }
                        }

                        val = !val ? null : String(Number(val))
                    }
                    ngModel.$setViewValue(val);
                    ngModel.$render();

                    return false;
                });

            }
        };
    }]).directive('multiselect',['$timeout', function($timeout) {
        return {
            restrict : 'A',
            scope : {
                model : '='
            },
            transclude : true,
            require : 'ngModel',
            link : function(scope, element, attrs, ngModel, transclude) {
                // multiSelect
                function multiSelect() {
                    transclude(function(clone) {
                        element.append(clone);
                        jQuery(element).multiselect({
                            height : "auto",
                            minWidth : 170,
                            selectedList : 100,
                            checkAllText : "一括選択",
                            uncheckAllText : "クリア",
                            noneSelectedText : attrs['noneSelectedText'],
                            selectedText : "# 個選択"
                        });
                    });
                }

                // ngmodel value watch
                scope.$watch(function() {
                    return ngModel.$modelValue;
                }, function(newValue, oldVal) {
                    // title
                    $timeout(function() {
                        var selectedText = jQuery(element).next().children(":eq(1)").text();
                        jQuery(element).next().attr("title", selectedText);
                    }, 200);
                });

                // options change
                if (attrs.ngOptions && /\sin\s/.test(attrs.ngOptions)) {
                    var options = attrs.ngOptions.replace(/.*\sin\s([^ ]+).*/, '$1');
                    scope.$watch("$parent." + options, function(newVal, oldVal) {
                        $timeout(function() {
                            multiSelect();
                            jQuery(element).multiselect('refresh');
                        });
                    });
                }

                // 初期化
                $timeout(function() {
                    multiSelect();
                });
            }
        };
    }]).directive('ngMin', function() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, elem, attr, ctrl) {
                scope.$watch(attr.ngMin, function(){
                    ctrl.$setViewValue(ctrl.$viewValue);
                });
                var minValidator = function(value) {
                    var min = jQuery.isNumeric(attr.ngMin) ? attr.ngMin : scope.$eval(attr.ngMin) || 0;
                    if (value && value < min) {
                        ctrl.$setValidity('ngMin', false);
                        return undefined;
                    } else {
                        ctrl.$setValidity('ngMin', true);
                        return value;
                    }
                };
                ctrl.$parsers.push(minValidator);
                ctrl.$formatters.push(minValidator);
            }
        };
    }).directive('ngMax', function() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, elem, attr, ctrl) {
                scope.$watch(attr.ngMax, function(){
                    ctrl.$setViewValue(ctrl.$viewValue);
                });
                var maxValidator = function(value) {
                    var max = jQuery.isNumeric(attr.ngMax) ? attr.ngMax : scope.$eval(attr.ngMax) || Infinity;
                    if (value && value > max) {
                        ctrl.$setValidity('ngMax', false);
                        return undefined;
                    } else {
                        ctrl.$setValidity('ngMax', true);
                        return value;
                    }
                };
                ctrl.$parsers.push(maxValidator);
                ctrl.$formatters.push(maxValidator);
            }
        };
    });
    
}).call(this);
