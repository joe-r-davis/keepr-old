;(function () {
  angular.module('keepr')
    .component('membersComponent', {
      templateUrl: 'app/components/members/members.html',
      controller: MembersController
    })

  function MembersController (AuthService, $state, Models) {
    var mc = this
    mc.show = 'k'

    mc.toggleView = function (viewName) {
      mc.show = viewName
    }

    // This method is called whenever the component is initialized
    // You can safely put this snippet into any component if you need 
    // the member info for that component
    this.$onInit = function () {
      if (!AuthService.getAuth()) {
        return $state.go('home')
      }
			//Note that the User is the auth object from the firebase authentication
			//This user object is read only you cannot directly modify it
			mc.user = AuthService.getAuth()
			
			//The member is the data that we store about the user in our database
			//You can put any property on the member 
      mc.member = AuthService.getMember()

    }
  }
}())
