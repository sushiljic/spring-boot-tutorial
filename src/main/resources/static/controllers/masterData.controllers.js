'use strict';

angular.module('appDoCFD')

    .controller('masterDataCtrl', ['$scope', '$rootScope', 'masterDataAPI', 'saveFormDataSvc' ,
			function($scope, $rootScope, masterDataAPI, saveFormDataSvc) {

        $scope.entries = [];

        $scope.isDataSaved = saveFormDataSvc.isDataSaved;

        $scope.refresh = function() {
            masterDataAPI.getData().then( function( data ) {
                $rootScope.masterData = data[0];
				//console.log( data[0].configdetails[0].parameters );
				//console.log( data[0].volumegriddata );
            });
        };
        
		$scope.refresh();
		
		//
		$scope.submitForm = function( initialPlan ) {
			console.log( initialPlan );
		}
		
    }]);
	