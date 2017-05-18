app.controller('mainController',function($scope,$rootScope){
	
	var that = this;
	console.log($scope);
	console.log(that);
	$scope.vins="vinsly";
	$scope.title='Paulo Coelho Books';
	$scope.products = [{
		name: 'The Alchemist',
		price: 399,
		pubDate: new Date('2004','09','28'),
		cover: 'images/alchemist.jpg',
		likes: 0,
		dislikes: 0
	},
	{
		name: 'Brida',
		price: 299,
		pubDate: new Date('1990','05','18'),
		cover: 'images/brida.jpg',
		likes: 0,
		dislikes: 0
	},
	{
		name: 'Eleven Minutes',
		price: 459,
		pubDate: new Date('2003','05','18'),
		cover: 'images/eleven.jpg',
		likes: 0,
		dislikes: 0
	},
	{
		name: 'The Zahir',
		price: 699,
		pubDate: new Date('2005','12','18'),
		cover: 'images/zahir.jpg',
		likes: 0,
		dislikes: 0
	}];
	$scope.plusOne = function(index){
		$scope.products[index].likes+=1;
		console.log($scope.vins);
	};
	$scope.minusOne = function(index){
		$scope.products[index].dislikes+=1;
	}
})