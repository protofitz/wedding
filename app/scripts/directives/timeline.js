var app = app.module('weddingSiteApp');

app.directive('timeline', function(){
	return{
		restrict:'A',
		templateUrl:'app/views/timeline.html',
		controller:function($scope){
			$scope.andrew = [
				2000:[
					{
						eventDesc:"TestEventDrew2000"
					}
				],
				2001:[
					{
						eventDesc:"testEventDrew2001"
					}
				]
			];
			$scope.ashley = [
				2000:[
					{
						eventDesc:"TestEventAsh2000"
					}
				],
				2001:[
					{
						eventDesc:"testEventAsh2001"
					}
				]
			];

		}
	}
});