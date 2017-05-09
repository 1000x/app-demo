/**
 * 自定义标签
 */
(function(){
    angular.module('app.customLabels', []).directive('hello', function() {
            return {
                restrict: 'E',
                template: '<div>hello world</div>'
            }
        });
    }
)
.call(this);
