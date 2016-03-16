var app = angular.module( 'angularStore.modules.items', []);

app.config( ['$routeProvider', function( $routeProvider ){
	$routeProvider
		.when('/items', {
			templateUrl:'modules/items/itemsView.html',
			controller: 'itemCtrl'
		})
		.when('/items/:itemsid', {
			templateUrl:'modules/items/items-detail.html',
			controller: 'itemDetailsCtrl'
		})
}]);

app.controller('itemCtrl', function( $scope, $http ){
	$http.get('/json/items.json').success(function( data ){
		$scope.items=data;
	});
});

app.controller('itemDetailsCtrl', function( $scope, $http, $routeParams, $filter ){
	var itemsid = $routeParams.itemsid;
	$http.get('/json/items.json').success(function( data ){
		$scope.item = $filter('filter')( data, function(d){
			return d.id == itemsid;
		})[0];
		$scope.MainImage = $scope.item.images[0].name;

		$scope.setImage = function(image){
			$scope.MainImage = image.name;
		}
	});
})