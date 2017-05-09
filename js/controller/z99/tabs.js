/**
* tabs
*/
app.controller('z99TabsCtrl', function ($scope, $state) {
    var url = $state.current.url.toLowerCase();
    $scope.activeTab = 0;
    if (url.indexOf("/hom") == 0) {
    	$scope.activeTab = 1;
    } else if (url.indexOf("/tcc") == 0) {
    	$scope.activeTab = 2;
    } else if (url.indexOf("/tcb") == 0) {
    	$scope.activeTab = 3;
    } else if (url.indexOf("/cob") == 0) {
    	$scope.activeTab = 4;
    } else if (url.indexOf("/oth") == 0) {
    	$scope.activeTab = 5;
    }
});