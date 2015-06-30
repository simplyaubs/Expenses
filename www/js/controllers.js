angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, fireBaseData, $firebase) {
    $scope.expenses = $firebase(fireBaseData.refExpenses()).$asArray();
    $scope.addExpense = function(e) {
      $scope.expenses.$add({
        by: 'email',
        label: $scope.label,
        cost: $scope.cost
      });
      $scope.label = "";
      $scope.cost = 0;
    };
    $scope.getTotal = function() {
        var rtnTotal = 0;
        for (var i = 0; i < $scope.expenses.length; i++) {
            rtnTotal += $scope.expenses[i].cost;
        }
        return rtnTotal;
    };
})
.controller('FriendsCtrl', function($scope, fireBaseData, $firebase) {
  $scope.user = fireBaseData.ref().getAuth();
  $scope.expenses = $firebase(fireBaseData.refExpenses()).$asArray();
  $scope.roomies = $firebase(fireBaseData.refRoomMates()).$asArray();
  $scope.roomies.$loaded().then(function(array) {
    var i;
    //array = [[set1_rm1_email, set1_rm2_email], [set2_rm1_email, set2_rm2_email] ...]
    for (i = 0; i < array.length; i = i + i) {
      if (array[i][0] === $scope.user.password.email) {
        $scope.roomiesEmail = array[i][1];
      } else if (array[i][1] === $scope.user.password.email) {
        $scope.roomiesEmail = array[i][0];
      }
    }
    $scope.$apply();
  });
  $scope.addExpense = function(e) {
    $scope.expenses.$add({
      by: $scope.roomiesEmail,
      label: $scope.label,
      cost: $scope.cost
    });
    $scope.label = "";
    $scope.cost = 0;
  };
  $scope.getTotal = function () {
    var i, rtnTotal = 0;
    for (i = 0; i < $scope.expenses.length; i = i + 1) {
      rtnTotal = rtnTotal + $scope.expenses[i].cost;
    }
    return rtnTotal;
  };
})
