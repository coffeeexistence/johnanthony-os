
angular
  .module('app')
  .controller('BodyCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    var vm = this;
    vm.stage = 0;
    vm.totalStages = 2;
    $scope.bodyStyle = {};

    vm.nextStage = function(){
      if(vm.stage < vm.totalStages-1) {
        vm.stage++
      } else {
        console.log('no more stages');
      }
    }

    $rootScope.$on('changeBodyBackground', function (event, data) {
      console.log(data); // 'Emit!'
      $scope.bodyStyle['background-color'] = data;
    });

    $rootScope.$on('nextStage', function (event) {
      vm.nextStage();
    });

  }]
);
