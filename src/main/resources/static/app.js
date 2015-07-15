'use strict';

angular.module('appDoCFD', ['ui.router', 'ngSanitize', 'ui.bootstrap', 'ngTagsInput', 'angularTreeview', 'dynform', 'ngGrid','jsonFormatter'])

    .value('masterDataURL', 'data/Master1.json')
    .value('flightConditionDataURL', 'data/computeFlightCondition.json')
	.config(['$stateProvider','$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
	
		$urlRouterProvider.otherwise('/bookecom');
		$urlRouterProvider.when('/bookecom', '/bookecom/listBooks');
		
        $stateProvider
            
			.state('bookecom', {
				url:'/bookecom',
				controller:'masterDataCtrl',
				templateUrl:'views/navigation/bookecom.html'                            
            })
			.state('bookecom.listBooks', {
				url: '/listBooks',
				controller:'listBooksCtrl',
				templateUrl: 'views/navigation/bookecom-listBooks.html'
			})
			.state('bookecom.checkout', {
				url: '/checkout',
				controller:'checkoutCtrl',
				templateUrl: 'views/navigation/bookecom-checkout.html'
			})
    }]);
