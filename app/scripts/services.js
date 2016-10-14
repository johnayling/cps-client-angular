'use strict';


angular.module('cpsClientApp.services', [])
	.factory('Product', function($resource) {
		  return $resource('http://localhost:8000/api/products/:id', { id: '@_id' }, {
		    update: {
		      method: 'PUT'
		    }
	});
});

angular.module('cpsClientApp.services')
	.factory('License', function($resource) {
		  return $resource('http://localhost:8000/api/licenses/:id', { id: '@_id' }, {
		    update: {
		      method: 'PUT'
		    }
	});
});

angular.module('cpsClientApp.services')
	.factory('Generator', function($resource) {
		  return $resource('http://localhost:8000/api/generators/:id', { id: '@_id' }, {
		    update: {
		      method: 'PUT'
		    }
	});
});

angular.module('cpsClientApp.services')
	.service('popupService',function($window){
	    this.showPopup=function(message){
	        return $window.confirm(message);
	    };
});