(function(){
    var kupciController = function($scope, $stateParams){
        console.log($stateParams)
        $scope.label = "Kupci Test";
        $scope.kupci = [{
            firstName:'Marko',
            lastName: 'Markovic',
            street:'Bulevar Kralja Aleksandra 123',
            zip:'11000',
            city:'Beograd'
            
        }, {
            firstName:'Pera',
            lastName: 'Peric',
            street:'Ustanicka 23',
            zip:'11000',
            city:'Beograd'
            
        }, {
            firstName:'Mira',
            lastName: 'Miric',
            street:'Gospodara Vučića 123',
            zip:'11000',
            city:'Beograd'
            
        }];
        
        $scope.parseKupac = function(kupac){
            return kupac.street+', '+kupac.zip+' '+kupac.city;
        }
        
        console.log("Kupci inicijalizacija");
    }
    kupciController.$inject = ['$scope', '$stateParams'];
    angular.module('app.kupci').controller('kupciController', kupciController);
})();