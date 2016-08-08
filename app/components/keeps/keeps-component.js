(function() {
    angular.module('keepr')
        .component('keepsComponent', {
            bindings: {
                member: '<'
            },
            templateUrl: 'app/components/keeps/keeps.html',
            controller: KeepsController
        })

    function KeepsController() {
        var kc = this;           
        
    }

} ())