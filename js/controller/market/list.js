/**
* マーケットコントローラ
*/
app.controller('marketListCtrl', function ($scope, $state) {

    // 画面初期化
    $scope.init = function () {
        
    };

    // TODO
    $scope.back = function () {
        $state.go("login");
    };
    
});