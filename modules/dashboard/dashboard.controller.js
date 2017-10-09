(function(){
    var dashboardController = function($scope){
        $scope.label = "Dashboard Test";
        console.log("Dashboard inicijalizacija");
    }
    dashboardController.$inject = ['$scope']
    angular.module('app.dashboard').controller('dashboardController', dashboardController);
})();