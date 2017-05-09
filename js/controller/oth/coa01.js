/**
 * ログインコントローラ
 */
app.controller('othOth01Ctrl', function ($scope, $state, coaService, $ionicPopup, $timeout, $check) {

    // 画面初期化
    $scope.init = function () {
        $scope.user = {};
    };

    // ログインボタン押下
    $scope.login = function () {
        if (!$scope.user.userId || !$scope.user.password)
            return;
        
        // email check
        if (!$check.isEmail($scope.user.userId)) {
            $ionicPopup.alert({ template: 'メールアドレスを正しく入力してください。' });
            return;
        }

        coaService.login($scope.user.userId, $scope.user.password, function (data) {
            if (!data) return;
            switch (data.recode) {
                case 'S00':
                    $timeout(function () {
                        $state.go("hom01");
                    });
                    break;
                case 'E00': $ionicPopup.alert({ title: 'ログイン失敗しました', template: 'E00' }); break;
                case 'E01': $ionicPopup.alert({ title: 'ログイン失敗しました', template: 'E01' }); break;
                case 'E11': $ionicPopup.alert({ title: 'ログイン失敗しました', template: 'E11' }); break;
                case 'E12': $ionicPopup.alert({ title: 'ログイン失敗しました', template: 'E12' }); break;
                case 'E13': $ionicPopup.alert({ title: 'ログイン失敗しました', template: 'E13' }); break;
                default: $ionicPopup.alert({ title: 'ログイン失敗しました', template: 'システムエラー' }); break;
            }
        });

    };
});