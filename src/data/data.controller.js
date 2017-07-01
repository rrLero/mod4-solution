(function () {

'use strict';

angular.module('data')

.controller('categoriesController', categoriesController)
.controller('itemsController', itemsController)

categoriesController.$inject = ['categories'];
function categoriesController(categories) {
	var data = this;
	data.categories = categories;
	// dataController.items = items;
}

itemsController.$inject = ['items', '$stateParams'];
function itemsController(items, $stateParams) {
	var data = this;
	data.items = items;
	data.categorie = $stateParams.id
	// dataController.items = items;
}

})();