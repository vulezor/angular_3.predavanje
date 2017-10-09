(function(){
    angular.module('app').config(function($stateProvider){
            $stateProvider
            .state('dashboard', {
                url:'/',
                templateUrl:'./modules/dashboard/dashboard.html',
                controller: 'dashboardController'
            })
            .state('kupci', {
                url:'/kupci',
                templateUrl:'./modules/kupci/kupci.html',
                controller: 'kupciController'
            })
            .state('kupac', {
                url:'/kupac/:id',
                templateUrl:'./modules/kupci/kupci.html',
                controller: 'kupciController'
            })
        });
})();