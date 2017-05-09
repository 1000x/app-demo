/**
* ログインコントローラ
*/
app.controller('loginCtrl', function ($scope, $state) {

    // 画面初期化
    $scope.init = function () {
        $scope.user = {};
    };

    // ログインボタン押下
    $scope.login = function () {
        $state.go('market_list');
    };
});