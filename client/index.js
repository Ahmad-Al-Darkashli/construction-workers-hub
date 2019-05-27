var app = angular.module("app", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "./compnent/homehtml.html",
      controller: "testctrl"
    })
    .when("/signup", {
      templateUrl: "./compnent/signup.html",
      controller: "signup"
    });
});

app.controller("testctrl", function($scope) {
  $scope.msg = "homeeeeeeeee";
});
app.controller("signup", function($scope) {
  $scope.msg = "signup";
});
