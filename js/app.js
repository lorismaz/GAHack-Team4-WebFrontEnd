angular.module('theCarRepo', ['ui.router', 'ui.bootstrap'])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', router])
  .directive('navigationBar', navigationBar)

function router($stateProvider, $urlRouterProvider, $locationProvider) {
  // remove the base '/#/' from the url:
  $locationProvider.html5Mode(true)

  $urlRouterProvider.otherwise('/')
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html'
    })
    .state('index', {
      url: '/index',
      templateUrl: 'templates/index.html',
      controller: 'CarsController as ac'
    })
    .state('new', {
      url: '/idea/new',
      templateUrl: 'templates/newidea.html',
      controller: 'NewCarController as nc'
    })
    .state('show', {
      url: '/idea/:id',
      templateUrl: 'templates/show.html',
      controller: 'SingleCarController as sc'
    })
    .state('edit', {
      url: '/idea/:id/edit',
      templateUrl: 'templates/edit.html',
      controller: 'EditCarController as ec'
    })

}

function navigationBar() {
  return {
    restrict: 'E',
    templateUrl: 'partials/nav.html'
  }
}
