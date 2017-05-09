/**
 * api
 */
(function() {
    'use strict';
    angular.module('app.api', []).factory('$api', ['$http', 'CONFIG', '$ionicPopup', '$ionicLoading', function ($http, CONFIG, $ionicPopup, $ionicLoading) {
        var getResource, postResource, groupBy;
        
        function call_web_api(method, url, data, callback)
        {
            var confHeaders;

            if (method == 'GET') {

                confHeaders =
                {
                    /*'Authorization': 'Bearer',*/
                    'Cache-Control': 'private, no-store, no-cache, must-revalidate',
                    'Pragma': 'no-cache',
                    'Expires': 0
                };
                data = {};

            } else {
                confHeaders = {
                    /*'Authorization': 'Bearer',*/ // TODO
                    'Content-Type': 'application/x-www-form-urlencoded',
                };
                data = jQuery.param(data);
            }

            var conf =
            {
                method: method,
                url: CONFIG.API_BASE + url,
                timeout: 0,
                headers: confHeaders,
                data: data
            };

            $ionicLoading.show({
                template: '<ion-spinner icon="ios"></ion-spinner>'
            });

            return $http(conf).then(function success(res) {
                $ionicLoading.hide();
                return callback(res.data);
            }, function error(res) {
                $ionicLoading.hide();
                var errMsg;
                if (res.status == '401') {
                    errMsg = 'システムエラーが発生しました。'; // TODO
                } else {
                    errMsg = 'システムエラーが発生しました。';
                }

                var popAlert = $ionicPopup.alert({
                    title: 'システムエラー',
                    template: errMsg
                });

                popAlert.then(function () {
                    popAlert.close();
                })
            });
        };

        /**
         * get
         */
        getResource = function(url, callback) {
            return call_web_api('GET', url, {}, callback);
        }

        /**
         * post
         */
        postResource = function(url, data, callback) {
            return call_web_api('POST', url, data, callback);
        }

        /**
         * groupBy
         */
        groupBy = function(array) {
            var group = {};
            for(var id in array) {
                var groupkey = "";
                for(var i =1; i< arguments.length; i++)
                {
                    groupkey = groupkey + "##" + getValueByMultikey(array[id], arguments[i]);
                }
                if(is_empty(group[groupkey]))
                {
                    group[groupkey] = {};
                    for(i =0; i< Object.keys(array[id]).length; i++)
                    {
                        group[groupkey][Object.keys(array[id])[i]] = array[id][Object.keys(array[id])[i]];
                    }
                    group[groupkey].key = groupkey;
                    group[groupkey].list = [array[id]];
                } else {
                    group[groupkey].list.push(array[id]);
                }
            }
        };
        
        return {
            get: getResource,
            post: postResource,
            groupBy: groupBy,
        };
    }])

}).call(this);
