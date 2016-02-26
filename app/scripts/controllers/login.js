'use strict';
angular.module('docbay.controllers').controller('loginCtrl', function(
  $rootScope, $scope, $state, Users, Auth) {

  $scope.login = () => {
    Users.login($scope.user, (err, user) => {
      if (user) {
        Auth.setUser(user);
        $rootScope.currentUser = user.data;
        $rootScope.$broadcast('updateHeader');
        $state.go('documents', null, {
          reload: true
        });
      } else {
        $scope.statusMsg = 'Incorrect username or password';
      }
    });
  };
});
