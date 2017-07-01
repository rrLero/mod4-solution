(function () {

'use strict';

angular.module('data')

.service('MenuDataService', MenuDataService)

MenuDataService.$inject = ['$http', 'ApiBasePath']
function MenuDataService($http, ApiBasePath) {
	var service = this;

	service.getAllCategories = function () {
		var response = $http({
			method: "GET",
			url: (ApiBasePath + "/categories.json")
		});
		
	return response.then(function (argument) {
		// console.log(argument.data);
		return argument.data
	});
	};

	service.getItemsForCategory = function (categoryShortName) {
		var response = $http({
			method: "GET",
			url: (ApiBasePath + "/menu_items.json"),
			params: {
				category: categoryShortName
			}
		})
	return response.then(function (argument) {
		// console.log(argument.data);
		return argument.data.menu_items
	});
	}; 
}

})();