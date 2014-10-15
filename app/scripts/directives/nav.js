var app = angular.module('weddingSiteApp');

app.directive('navHeader', function(){
	return {
		restrict : 'A',
		templateUrl:'views/nav.html'
	}
});