'use strict';

angular.module('cpsClientApp')
.controller('LicenseListController',function($scope,$state,popupService,$window,License){

    $scope.licenses=License.query();

    $scope.deleteLicense=function(license){
        if(popupService.showPopup('Really delete this?')){
            license.$delete(function(){
                $window.location.href='';
            });
        }
    };

}).controller('LicenseViewController',function($scope,$stateParams,License){

    $scope.license=License.get({id:$stateParams.id});

}).controller('LicenseCreateController',function($scope,$state,$stateParams,License){

    $scope.license=new License();

    $scope.addLicense=function(){
        $scope.license.$save(function(){
            $state.go('licenses');
        });
    };

}).controller('LicenseEditController',function($scope,$state,$stateParams,License){

    $scope.updateLicense=function(){
        $scope.license.$update(function(){
            $state.go('licenses');
        });
    };

    $scope.loadLicense=function(){
        $scope.license=License.get({id:$stateParams.id});
    };

    $scope.loadLicense();
});