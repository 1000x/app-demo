﻿/**
* アカウント作成-2 コントローラ
*/
app.controller('coa02RegisterStep2Ctrl', function ($scope, $state, coaService, $ionicPopup, $timeout, $cordovaImagePicker) {

    // 画面初期化
    $scope.init = function () {
        $scope.user = {
            email: ''
        };
    };

    // 次に進むボタン押下
    $scope.register_step2 = function () {
        if (!$check.isEmail($scope.user.email)) {
            $ionicPopup.alert({ template: 'メールアドレスを正しく入力してください。' });
            return;
        }

        coaService.register_step2($scope.user.email, function (data) {
            if (!data) return;
            switch (data.recode) {
                case 'S00':
                    $timeout(function () {
                        $state.go("coa02_register_step3");
                    });
                    break;
                case 'E10': $ionicPopup.alert({ title: 'メールアドレスを入力してください。', template: 'E10' }); break;
                case 'E11': $ionicPopup.alert({ title: 'このメールアドレスは既に使用されています。別のメールアドレスを選択してください。', template: 'E11' }); break;
                default: $ionicPopup.alert({ title: 'アカウント作成に失敗しました', template: 'システムエラー' }); break;
            }
        });
    };
});