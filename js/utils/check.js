/**
 * check.js
 */
(function() {
    'use strict';
    angular.module('app.check', []).factory('$check', function() {
        /**
         * is empty
         */
        var isEmpty = function(str) {
            return str === null || str === "" || str === undefined;
        };
        
        /**
         * is empty with trim
         */
        var isEmptyWithTrim = function(str) {
            return str === null || str === "" || str === undefined || jQuery.trim(str) === "";
        };
        
        /**
         * isEmail
         */
        var isEmail = function(str) {
            if (this.isEmpty(str)) return false;
            return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(str);
        };

        /**
         * 函数名 : maxLength
         * 概要 : max length check
         * 参数 1 : val
         * 参数 2 : max length
         * 返回值 : true,false
         * 备考
         */
        var isMaxLenOver = function(val,maxl) {
            var maxlen = val.length;
            return maxlen > maxl;
        };
        
        /**
         * 函数名 : isDate
         * 概要 : isDate check
         * 参数 1 : val
         * 返回值 : true,false
         * 备考 : check类型： yyyyMMdd, yyyy/MM/dd, yyyy-MM-dd
        */
        var isDate = function(val) {
            var rtn_obj = new Object();
            if (val == "" || val == undefined || val == null) {
                rtn_obj.success = true;
                rtn_obj.isNull = true;
                return rtn_obj;
            }
            val = $.trim(String(val).replace(/\//g, "").replace(/-/g, ""));
            if (val.length != 8) {
                rtn_obj.success = false;
                return rtn_obj;
            }
            
            try {
                var year = parseInt(val.substr(0, 4), 10);
                var month = parseInt(val.substr(4, 2), 10);
                var day = parseInt(val.substr(6, 2), 10);
                
                if (year < 1753 || year > 9999 || month < 1 || month > 12 || day < 1 || day > 31) {
                    rtn_obj.success = false;
                    return rtn_obj;
                }
                if (month == 4 || month == 6 || month == 9 || month == 11) {
                    if (day > 30) {
                        rtn_obj.success = false;
                        return rtn_obj;
                    }
                }
                
                if (month == 2) {
                    // 闰年
                    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) { 
                        if (day > 29) {
                            rtn_obj.success = false;
                            return rtn_obj;
                        }
                    } else {
                        if (day > 28) {
                            rtn_obj.success = false;
                            return rtn_obj;
                        }
                    }
                }
                
                rtn_obj.success = true;
                rtn_obj.isNull = false;
                rtn_obj.year = year;
                rtn_obj.month = month;
                rtn_obj.day = day;
                return rtn_obj;
                
            } catch(err) {
                rtn_obj.success = false;
                return rtn_obj;
            }
            
        };

        //
        return {
            isEmpty: isEmpty,
            isEmptyWithTrim: isEmptyWithTrim,
            isEmail: isEmail,
            isMaxLenOver: isMaxLenOver,
            isDate: isDate
        };
    })

}).call(this);
