'use strict';
angular.module('gameType')
  .component('gameType', {
    templateUrl: 'app/admin/game-build/game-type/game-type.html',
    css: 'app/admin/game-build/game-type/game-type.css',
    controller: GameType
  });

GameType.$inject = ['gameTemplateServiceFactory', 'OpenGameServiceFactory', '$routeParams', '$timeout','ToastsManager','$translate'];

function GameType(gameTemplateService, openGameService, $routeParams, $timeout ,ToastsManager,$translate) {
  let vm = this;

  let templateRounds = [];

  vm.templateName = "";

  vm.$onInit = onInit;

  function onInit() {
    vm.gameId = $routeParams.gameId;

    vm.configRounds = [];

    gameTemplateService.getAll()
      .then((templates) => {
        vm.templates = templates;
      });

    getGameTemplate(vm.gameId);
  }

  vm.saveRounds = function () {
    if (angular.equals(templateRounds, vm.configRounds))
      openGameService.setTemplateName(vm.gameId, vm.templateName);
    else {
      vm.templateName = '';
      openGameService.setTemplateName(vm.gameId, vm.templateName)
    }

    if (vm.configRounds.length >= 2) {
      openGameService.addRounds(vm.gameId, vm.configRounds);
      vm.templateFormShow = true;
      showSuccessNotification('ROUND_SAVED_MESSAGE');
    }
    else {
      showErrorNotification('FEW_ROUNDS_ERROR');
    }

  };

  function showSuccessNotification(message) {
    $translate(message)
      .then((message)=>{
        ToastsManager.success(message, '',{showCloseButton: true,toastLife: 2000});
      })
  }

  function showErrorNotification(message) {
    $translate(message)
      .then((message)=>{
        ToastsManager.error(message, '', {showCloseButton: true,toastLife: 2000});
      })
  }

  let convertRoundsObjectToArray = function (object) {
    let array = [];
    angular.forEach(object, round => {
      array.push(round);
    });
    return array
  };

  vm.saveTemplate = function () {
    gameTemplateService.saveFromGame(vm.gameId, vm.templateName).then((res) => {
      if (res) {
        vm.templateFormShow = false;
        showSuccessNotification('TEMPLATE_SAVED_MESSAGE');
      } else {
        showErrorNotification('ROUND_NAME_EXIST_ERROR');
      }
    });


  };

  vm.selectTemplate = function (template) {
    if (template) getTemplate(template.$id)
  };

  vm.templateNameFilter = function () {
    if (vm.templateName) return "!" + vm.templateName;
    else return ''
  };

  let getTemplate = function (templateId) {
    gameTemplateService.getRounds(templateId).then(rounds => {
      templateRounds = angular.copy(rounds);
      vm.configRounds = angular.copy(rounds);
    });

    gameTemplateService.getTemplateName(templateId).then(templateName => {
      console.log(templateName);
      vm.templateName = templateName;
    });
  };

  let getGameTemplate = function (gameId) {
    openGameService.getRounds(gameId).then(rounds => {
      if (rounds.length) {
        templateRounds = angular.copy(rounds);
        vm.configRounds = angular.copy(rounds);
      }
    });

    openGameService.getTemplateName(gameId).then(templateName => {
      vm.templateName = templateName;
    })
  };

  function showRoundCountError() {
    vm.roundCountError = true;
    $timeout(() => {
      vm.roundCountError = false;
    }, 1500);
  }

  function showSubmittedMessage() {
    vm.submitted = true;
    $timeout(() => {
      vm.submitted = false;
    }, 1500);
  }
}
