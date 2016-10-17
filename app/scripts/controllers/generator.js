'use strict';

angular.module('cpsClientApp').controller('GeneratorListController',function($scope,$state,popupService,$window,Generator,Product){

    $scope.generators=Generator.query();
    $scope.products = Product.query();

    $scope.deleteGenerator=function(generator){
        if(popupService.showPopup('Really delete this?')){
            generator.$delete(function(){
                $window.location.href='';
            });
        }
    };

}).controller('GeneratorViewController',function($scope,$stateParams,Generator){

    $scope.generator=Generator.get({id:$stateParams.id});

}).controller('GeneratorCreateController',function($scope,$state,$stateParams,Generator,Product){

    $scope.generator=new Generator();
    $scope.products = Product.query();

    $scope.addGenerator=function(){
        $scope.generator.$save(function(){
            $state.go('generators');
        });
    };

}).controller('GeneratorEditController',function($scope,$state,$stateParams,Generator,Product){

    $scope.updateGenerator=function(){
        $scope.generator.$update(function(){
            $state.go('generators');
        });
    };

    $scope.loadGenerator=function(){
        $scope.generator=Generator.get({id:$stateParams.id});
        $scope.products = Product.query();
    };

    $scope.loadGenerator();
});