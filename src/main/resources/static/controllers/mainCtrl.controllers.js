'use strict';

angular.module('appDoCFD')


.controller('mainCtrl', function($scope, $rootScope, saveFormDataSvc, masterDataAPI){

	//Data objects inherited across plan/setup/execute pages
	$scope.plan = {};
	$scope.setup = {};
	$scope.execute = {};

	//tags
	$scope.addToArray = function (evt, value, array) {

		if(evt.keyCode == 13){
			
			var v = evt.target.value;
			if(v != undefined && v != ""){
				array.push({"value" : v});
			}

			
			console.log(array);
			evt.target.value = "";
		}
	}


	$scope.delFromArray = function (index, array) {
		console.log(array);
		array.splice(index, 1);
		console.log(array);

	}

	//reference Data
	 masterDataAPI.getData().then( function( data ) {
	 	var ref = data[0].configdetails[0].referencedata;
		$scope.plan.refData = {	   
			"referenceArea": Number( ref.RefArea ),
			"referenceLength": Number ( ref.RollRefLength ),
			"referenceSpan":  Number ( ref.PitchRefLength ), //278.51,
			"momentOriginX":  Number ( ref.MomCenterX ), //1244.1,
			"momentOriginY":  Number ( ref.MomCenterY ), //0,
			"momentOriginZ":  Number ( ref.MomCenterZ ), //214.1,
			"geometryUnit":"in"	   
		};
	});

	$scope.save = function (form) {
		//Generic save for the plan pages 
		saveFormDataSvc.saveData($scope, form, $scope.plan);
		console.log("Saved Data: "+JSON.stringify(saveFormDataSvc.getData()));
	}
	
});