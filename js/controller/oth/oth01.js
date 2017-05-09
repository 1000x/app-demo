/**
 * ログインコントローラ
 */
app.controller('othOth01Ctrl', function ($scope, $state, $ionicActionSheet, $ionicPopup, $timeout, $check) {

    // 画面初期化
    $scope.init = function () {
        //
    };

    // ActionSheet
    $scope.show = function () {
    	
    	 // 显示上拉菜单
    	   var hideSheet = $ionicActionSheet.show({
    	     buttons: [
    	       { text: '<b>ログアウト</b>' },
    	     ],
    	     titleText: 'ログアウトでよろしいでしょうか。',
    	     cancelText: '取消',
    	     cancel: function() {
    	          // 这里添加取消代码
    	        },
    	     buttonClicked: function(index) {
    	    	 $ionicPopup.alert({ template: '['+index+ ']'});
    	       return true;
    	     }
    	   });

//    	   // 2秒后再次调用隐藏菜单
//    	   $timeout(function() {
//    	     hideSheet();
//    	   }, 2000);
    };
});
