var myAppModule = angular.module('myApp', ['ngRoute','ngAnimate']);
myAppModule.config(function ($routeProvider) {
	$routeProvider
	.when('/home',{
		templateUrl: 'partials/home.html'
	})
	.when('/about',{
		templateUrl:'partials/about.html'
	})
  .when('/project/1',{
    templateUrl:'partials/project-1.html'
  })
  .when('/project/2',{
    templateUrl:'partials/project-2.html'
  })
  .when('/project/3',{
    templateUrl:'partials/project-3.html'
  })
  .when('/project/4',{
    templateUrl:'partials/project-4.html'
  })
  .when('/project/5',{
    templateUrl:'partials/project-5.html'
  })
  .when('/project/6',{
    templateUrl:'partials/project-6.html'
  })
  .when('/contact',{
    templateUrl:'partials/contact2.html'
  })
	.otherwise({
		redirectTo: '/home'
	});
});
