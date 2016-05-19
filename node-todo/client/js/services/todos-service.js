angular.module('todoService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Todos', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/todos');
			},
			create : function(todoData) {
				console.log($http);
				todoData.snoozed = false;
				todoData.completed = false;
				//console.log(todoData);
				return $http.post('/api/todos', todoData);
			},
			delete : function() {
				
				return $http.post('/api/todos', null);
			}

		}
	}]);
