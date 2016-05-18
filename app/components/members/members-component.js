(function() {

    angular.module('keepr')
        .component('membersComponent', {
            templateUrl: 'app/components/members/members.html',
            controller: MembersController
        })


    function MembersController(AuthService, $state) {
        var mc = this;
        mc.show = 'keeps'

        mc.addKeep = function(keep) {
            keep.author = mc.member
            keep.viewCount = 0;
            keep.shareCount = 0;
            keep.keepCount = 0;
            keeps.$add(keep);
            mc.newKeep = null
        }

        mc.addVault = function(vault) {
            
        }

        mc.toggleView = function(viewName) {
            if (mc.show == viewName) {
                mc.show = 'keeps'
            } else {
                mc.show = viewName
            }
        }

        this.$onInit = function() {
            if (!AuthService.getAuth()) {
                return $state.go('home')
            }
            mc.member = AuthService.getMember();
        }

    }


} ())