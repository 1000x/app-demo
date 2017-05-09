/**
* マーケットコントローラ
*/
app.controller('homHom01Ctrl', function ($scope, $state) {

    // 画面初期化
    $scope.init = function () {
        
    };

    // TODO
    $scope.back = function () {
        $state.go("coa01");
    };
    
});