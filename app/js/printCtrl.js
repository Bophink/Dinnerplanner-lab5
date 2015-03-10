dinnerPlannerApp.controller('PrintCtrl', function ($scope,Dinner) {

  $scope.numberOfGuests = Dinner.getNumberOfGuests();
  $scope.fullMenu = function() {
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