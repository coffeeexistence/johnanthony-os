
angular
  .module('app')
  .controller('BodyCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    var vm = this;
    vm.stage = 0;
    $scope.bodyStyle = {};

    vm.nextStage = function(){
      vm.stage++;
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
