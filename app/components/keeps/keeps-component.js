;(function () {
  angular.module('keepr')
    .component('keepsComponent', {
      templateUrl: 'app/components/keeps/keeps.html',
      controller: KeepsController
    })

  function KeepsController (Models) {
    var kc = this

    Models.Keeps.findAll({}).then(function (keeps) {
      kc.keeps = keeps
    })

  }
}())
