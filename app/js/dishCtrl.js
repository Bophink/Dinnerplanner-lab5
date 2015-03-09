// Dinner controller that we use whenever we want to display detailed
// information for one dish
dinnerPlannerApp.controller('DishCtrl', function ($scope,$routeParams,Dinner) {
  
  // TODO in Lab 5: you need to get the dish according to the routing parameter
  // $routingParams.paramName
  // Check the app.js to figure out what is the paramName in this case
  //console.log(location.hash);
  var dishId = (location.hash).substring(7);
  console.log(dishId);

  $scope.getDishAPI = function(dishId) {
		$scope.status = "Searching..."; 
		Dinner.getDishAPI.get({id:dishId},function(data){ 
			console.log(dishId);
			$scope.dish=data;
			console.log(data);
			$scope.status = "Showing " + data.Title;
		},function(data){ 
			$scope.status = "There was an error"; 
		}); 
	}

	$scope.getDishAPI(dishId);
	//console.log($scope.dish);

	$scope.getNumberOfGuests = function() {
	  	return Dinner.getNumberOfGuests();
	}

	$scope.getDishPrice = function(){
		return Dinner.getDishPrice($scope.dish);
	}

	$scope.addDishToMenu = function(){
		console.log("lägger till i menu");
		return Dinner.addDishToMenu($scope.dish);
	}


});