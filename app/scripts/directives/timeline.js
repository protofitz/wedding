var app = angular.module('weddingSiteApp');

app.directive('timeline', function(){
	return{
		restrict:'A',
		templateUrl:'views/timeline.html',
		controller:function($scope){
			$scope.andrew = [
					{
						eventDesc:"TestEventDrew2000",
						year:2000
					},
					{
						eventDesc:"testEventDrew2001",
						year:2001
					}
			];
			$scope.ashley = [
				
					{
						eventDesc:"TestEventAsh2000",
						year:2000
					},
				
				
					{
						eventDesc:"testEventAsh2001",
						year:2000
					}
				
			];

			for(var i=0;i<$scope.andrew.length; i++){
				$scope.andrew[i].selected=false;
			}

			for(var i=0;i<$scope.ashley.length; i++){
				$scope.ashley[i].selected=false;
			}

		}
	}
});