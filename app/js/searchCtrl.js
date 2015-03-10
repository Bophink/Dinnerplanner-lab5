// Search controller that we use whenever we have a search inputs
// and search results
dinnerPlannerApp.controller('SearchCtrl', function ($scope,Dinner) {


	$scope.numberOfGuests = function() {
		return Dinner.getNumberOfGuests();
	}
	$scope.search = function(query) {
		$scope.status = "Searching..."; 
		Dinner.getAllDishes.get({title_kw:query},function(data){
			$scope.dishes=data.Results; 
			$scope.status = "Showing " + data.Results.length + " results";
			console.log($scope.status);
		},function(data){ 
			$scope.status = "There was an error"; 
		}); 
		console.log("click"+query);
		console.log($scope.status);
	}

	$scope.addDishToMenu = function(obj){
		console.log("lägger till i menu");
		console.log(obj);
		return Dinner.addDishToMenu(obj);
	}
	
	$scope.search("");






  // TODO in Lab 5: you will need to implement a method that searchers for dishes
  // including the case while the search is still running.

});