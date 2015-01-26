'use strict';

angular.module( 'jKemsley.home', [
	'ui.router'
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'home', {
		url: '/',
		views: {
			head: { templateUrl: 'home/head.tpl.html'},
			main: {
				controller: 'HomeCtrl',
				templateUrl: 'home/home.tpl.html'
			}
		},
		data:{
			pageTitle: 'Home',
			section: 'home'
		}
	})
	.state('home.about', {
		url: 'about',
		data: {
			pageTitle: 'About',
			section: 'about'
		}
	})
	.state('home.dev', {
		url: 'dev',
		data: {
			pageTitle: 'Dev',
			section: 'dev'
		}
	})
	.state('home.des', {
		url: 'des',
		data: {
			pageTitle: 'Des',
			section: 'des'
		}
	});
})

.controller( 'HomeCtrl',['$scope', '$rootScope', '$document', '$state', 'parallaxHelper', function( $scope, $rootScope, $document, $state, parallaxHelper) {
		$scope.$on('$stateChangeSuccess', function(event, toState) {
			var el = angular.element(document.getElementById(toState.data.section));
			$document.scrollToElement(el, 0, 1000);
		});
		$scope.$on('duScrollspy:becameActive', function($event, $element){
			$state.go($element.attr('ui-sref'), {}, {notify:false}).then(function(state) {
				$rootScope.$broadcast('jKemsley:changeTitle', state);
			});
		});

		$scope.pTwo = parallaxHelper.createAnimator(0.2);
		$scope.mThree = parallaxHelper.createAnimator(-0.3);
		$scope.mFive = parallaxHelper.createAnimator(-0.5);
}]);

