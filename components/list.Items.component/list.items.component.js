(function(){
    var listItem = function(){
        return {
            replace:true,
            controller:function(){
                
            },
            templateUrl:'./components/list.items.component/list.items.html',
            scope:{
               kupac:"=",
               parseKupac:"&"
            },
            link:function(scope, element, attr){
                console.log(scope, element, attr);
            }
            
        }
    }
    angular.module('app').directive('listItem', listItem);
})();