'use strict';

angular.module( 'jKemsley', [
	'templates-app',
	'templates-common',
	'jKemsley.home',
	'ui.router',
	'duScroll',
	'duParallax'
])

.config(['$stateProvider', '$urlRouterProvider', function ( $stateProvider, $urlRouterProvider ) {
	$urlRouterProvider.otherwise( '/' );

}])

.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
}])

.controller( 'AppCtrl', ['$scope', '$location', '$state', function ( $scope, $location, $state) {
	$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
		if ( angular.isDefined( toState.data.pageTitle ) ) {
			$scope.pageTitle = toState.data.pageTitle + ' | Jody Kemsley' ;
		}
	});
	$scope.$on('jKemsley:changeTitle', function($event, state){
		if ( angular.isDefined(state.data.pageTitle ) ) {
			$scope.pageTitle = state.data.pageTitle + ' | Jody Kemsley' ;
		}
	});
}]);

