var splashController = function($interval, $rootScope) {
	var splash = this;
	splash.initialized = true;

	splash.tickCount = 5;
	splash.currentTick = 0; // 5 ticks total, can be anywhere from 0-4

	splash.circles = [];
	for(var i=0; i<splash.tickCount; i++){ splash.circles.push({}); }
	console.log(splash.circles);

	//console.log('tick initialized at ' + splash.currentTick);

	splash.nextTick = function(){
		if(splash.currentTick >= splash.tickCount ){
			splash.currentTick = 0;
		} else { splash.currentTick++; }
		//console.log('updated tick to '+splash.currentTick);
	};

	splash.isActive = function(index) {
		return (index < splash.currentTick);
	};

	if(splash.initialized) { $interval(splash.nextTick, 1000); }

	$rootScope.$emit('changeBodyBackground', '#0B1436');

}


function splash() {
	return {
		restrict: 'E',
		templateUrl: 'templates/splash.html',
		controller: ['$interval', '$rootScope', splashController],
		controllerAs: 'splash',
		link: function(){

		}
	};
}

angular
	.module('app')
	.directive('splash', splash);
