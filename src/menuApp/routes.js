(function () {

'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider

	.state('home', {
		url: '/',
		templateUrl: 'src/templates/home.html'
	})

	.state('categories', {
		url: '/categories',
		templateUrl: 'src/templates/categories.html',
		controller: "categoriesController as categories",
	    resolve: {
	      categories: ['MenuDataService', function (MenuDataService) {

	        return MenuDataService.getAllCategories();
	      }]
	    }		
	})
	.state('items', {
		url: '/items/{id}',
		templateUrl: 'src/templates/items.html',
		controller: "itemsController as items",
	    resolve: {
	      items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
	        console.log(MenuDataService.getItemsForCategory($stateParams.id));
	        return MenuDataService.getItemsForCategory($stateParams.id);
	      }]
	    }		
	})
}

})();