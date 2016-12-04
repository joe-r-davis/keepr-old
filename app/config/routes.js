(function(){
	angular.module('keepr')
		.config(function($stateProvider, $urlRouterProvider){
			
			$stateProvider
				.state('home', {
					url: '/',
					template: '<keeps-component></keeps-component>'
				})
				//This is an abstract state which just works like a pass through
				//You cannot get to any other `auth.` state without passing through this abstract state
				//This is helpful if you look at the resolve property of this state you will notice 
				//the isAuthed property
				//This function forces anyone who is not logged in to be forced back to the home state 
				.state('auth', {
					abstract: true,
					template: '<ui-view></ui-view>',
					resolve: {
						isAuthed: function(AuthService, $state){
						//^^^ The authService and $state attributes are injected just like they would be for a controller  
							if(!AuthService.getAuth()){
								return $state.go('home')
							}
						}
					}
				})
				.state('auth.members', {
					// Notice this is an `auth.` state meaning to get here you have to first be authenticated.
					url: '/members',
					template: '<members-component></members-component>'
				})

				$urlRouterProvider.otherwise('/')
		})
}())