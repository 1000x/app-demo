/**
 * coa Service
 */
app.service('coaService', function ($api, URLCONST) {

    this.login = function (userId, password, callback) {
        var param = {
            uid: userId,
            pwd: password
        };
        $api.post(URLCONST.coa.coa01_login, param, callback);
    };

    this.register_step1 = function (email, callback) {
        var param = {
            email: email
        };
        $api.post(URLCONST.coa.coa02_register_step1, param, callback);
    };

    this.register_step2 = function (email, callback) {
        var param = {
            email: email
        };
        $api.post(URLCONST.coa.coa02_register_step2, param, callback);
    };
    
    return this;
});