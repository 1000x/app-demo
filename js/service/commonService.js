/**
 * commonService
 */
app.service('commonService', function($api) {
    
    this.setData = function(key, data) {
        return window.localStorage.setItem(key, window.JSON.stringify(data));
    };

    this.getData = function(key) {
        return window.JSON.parse(window.localStorage.getItem(key));
    };

    this.removeData = function(key) {
        return window.localStorage.removeItem(key);
    };

    return this;

});