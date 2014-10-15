var app = angular.module('weddingSiteApp');

app.directive('bridalParty', function(){
	return{
		restrict:'A',
		templateUrl:'views/bridalParty.html',
		controller:function($scope){
			$scope.girls=[
				{
					name:'Liz',
					job:'Maid of Honor',
					img:'',
					desc:'',
					selected:false,
					side:'right'
				},
				{
					name:'Julie',
					job:'Bridesmaid',
					img:'',
					desc:'',
					selected:false,
					side:'right'
				},
				{
					name:'Carolyn',
					job:'Bridesmaid',
					img:'',
					desc:'',
					selected:false,
					side:'right'
				},
				
				{
					name:'Erin',
					job:'Bridesmaid',
					img:'',
					desc:'',
					selected:false,
					side:'right'
				},
				{
					name:'Olivia',
					job:'Junior Bridesmaid',
					img:'',
					desc:'',
					selected:false,
					side:'right'
				},
				{
					name:'Caroline',
					job:'Flower Girl',
					img:'',
					desc:'',
					selected:false,
					side:'right'
				},
			];
			$scope.boys = [
				{
					name:'Justin',
					job:'Best Man',
					img:'',
					desc:'',
					selected:false,
					side:'left'
				},
				{
					name:'Michael',
					job:'Groomsman',
					img:'',
					desc:'',
					selected:false,
					side:'left'
				},
				
				{
					name:'Tyler',
					job:'Groomsman',
					img:'',
					desc:'',
					selected:false,
					side:'left'
				},

				{
					name:'Stuart',
					job:'Groomsman',
					img:'',
					desc:'',
					selected:false,
					side:'left'
				},

				{
					name:'Dylan',
					job:'Groomsman',
					img:'',
					desc:'',
					selected:false,
					side:'left'
				},
				{
					name:'John-Franklin',
					job:'Ring Bearer',
					img:'',
					desc:'',
					selected:false,
					side:'left'
				}
				
				
			];
			$scope.selectedMember = {};
			$scope.selectMember = function(member){
				$scope.selectedMember = member;
			}
		}
	};
});