var app = angular.module('cjmUtilApp', []);
app.controller('cjmController', function($scope) {
  $scope.cjmShow = false;
  $scope.cjmHide = false;
  $scope.cjmShowMainModal = function() {
    $scope.cjmShow = !$scope.cjmShow;
  }
  $scope.cjmHideModal = function(){
    $scope.cjmHide = false;
    $scope.cjmShow = false;
  };
  cjmInnerApply = function(cjmRootSelector){
    // $scope.cjmLangSel ;
    jQuery('.'+cjmRootSelector+'').css({
        'color': $scope.cjmColor,
        'font-size':(100+$scope.cjmFsize)+'%',
        'font-family':$scope.cjmFoFamily
    });
    // Language changing need xml/json parsing
  }; 
  $scope.cjmApply = function(){
   let cjmRoot= $scope.cjmSelector;
    switch (cjmRoot) {
        case 'HE':
            cjmInnerApply('cjHeader');
            break;
        case 'AS':
            cjmInnerApply('cjAside');
            break;
        case 'MCN':
            cjmInnerApply('cjSection');
            break;
        case 'FT':
            cjmInnerApply('cjFooter');
            break;
        default:
            cjmInnerApply('mainWrapper');

    }
  };
});