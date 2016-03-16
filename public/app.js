var app = angular.module( 'angularStore', [
	'ngRoute',
	'angularStore.modules.items'
]);

app.config( ['$routeProvider', function( $routeProvider ){
	$routeProvider
		.otherwise({
			redirectTo: '/items'
		})
}]);


/*app.controller('appCtrl', function( $scope ){
	$scope.title1='Home'
})*/


