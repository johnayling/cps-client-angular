
angular.module('cpsClientApp.services', [])
		.factory('Product', function($resource) {
			  return $resource('http://localhost:8000/api/products/:id', { id: '@_id' }, {
			    update: {
			      method: 'PUT'
			    }
		});
});