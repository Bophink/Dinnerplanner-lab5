dinnerPlannerApp.controller('OvCtrl', function ($scope,Dinner) {

  $scope.numberOfGuests = Dinner.getNumberOfGuests();
  $scope.fullMenu = Dinner.getFullMenu();
  $scope.getFullMenu = function() {
    console.log("SKICKAS UT I OvCtrl!!");
    console.log(Dinner.getFullMenu());
  	return Dinner.getFullMenu();
  }

  $scope.getNumberOfGuests = function() {
    return Dinner.getNumberOfGuests();
  }

  $scope.getTotalMenuPrice = function() {
    return Dinner.getTotalMenuPrice();
  }

  $scope.getDishPrice = function(obj){
	  return Dinner.getDishPrice(obj);
  }

  // MAN KAN ANTAGLIGEN ANVÄNDA DINNERCTRL ISTÄLLET

  // TODO in Lab 5: Implement the methods to get the dinner menu
  // add dish to menu and get total menu price

});