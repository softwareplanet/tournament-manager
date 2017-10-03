import '../../lib/shared/esc-key.js';
import '../../lib/shared/enter-key.js';
import '../../lib/shared/focused.js';
import '../../lib/internalisation/internalisation.module.js';
import '../../lib/internalisation/internalisation.service.js';
import '../../lib/services/firebase-service/firebase-service.module.js';
import '../../lib/services/firebase-service/firebase-service.service.js';
import '../../lib/services/user-auth-service/user-auth-service.module.js';
import '../../lib/services/user-auth-service/user-auth-service.service.js';
import '../../lib/services/game-template-service/game-template-service.module.js';
import '../../lib/services/game-template-service/game-template-service.service.js';
import '../../lib/player/team-games-list/team-games-list.module.js';
import '../../lib/player/team-games-list/team-games-list.component.js';
import '../../lib/services/team-service/team-service.module.js';
import '../../lib/services/team-service/team-service.service.js';
import '../../lib/services/game-service/game-service.module.js';
import '../../lib/services/game-service/game-service.service.js';
import '../../lib/services/result-service/result-service.module.js';
import '../../lib/services/game-request-service/game-request-service.module.js';
import '../../lib/services/game-request-service/game-request-service.service.js';
import '../../lib/admin/create-game/create-game.module.js';
import '../../lib/services/result-service/result-service.service.js';
import '../../lib/admin/round-builder/round-builder.module.js';
import '../../lib/admin/round-builder/round-builder.component.js';
import '../../lib/admin/team-list/team-list.module.js';
import '../../lib/admin/team-list/team-list.component.js';
import '../../lib/app.js';
import '../../lib/services/firebase-service/firebase-offline.js';
import '../../lib/player/player.js';
import '../../lib/admin/admin.js';
import '../../lib/spinner/spinner.service.js';
import '../../lib/shared/outsideClick.js';
import '../../lib/player/team-register-form/team-register-form.module.js';
import '../../lib/player/team-register-form/team-register-form.component.js';
import '../../lib/admin/add-teams/add-teams.module.js';
import '../../lib/services/convert-service/convert-service.module.js';
import '../../lib/services/convert-service/convert-service.service.js';
import '../../lib/services/game-service/open-game-service/open-game.module.js';
import '../../lib/services/game-service/open-game-service/open-game.service.js';
import '../../lib/admin/game-results/game-results-page.module.js';
import '../../lib/admin/game-results/game-results-page.component.js';
import '../../lib/admin/game-results/game-results.component.js';
import '../../lib/presentation-mode/presentationMode.controller.js';
import '../../lib/admin/season/season.module.js';
import '../../lib/admin/season/season.component.js';
import '../../lib/admin/season/season-list/season-list.component.js';
import '../../lib/services/team-request-service/team-request-service.module.js';
import '../../lib/services/team-request-service/team-request-service.service.js';
import '../../lib/admin/create-game/create-game.component.js';
import '../../lib/admin/team-results/team-results.module.js';
import '../../lib/admin/team-results/team-results.component.js';
import '../../lib/admin/team-result-types/auction-result/auction-result.component.js';
import '../../lib/admin/team-result-types/captain-result/captain-result.component.js';
import '../../lib/admin/team-result-types/default-result/default-result.component.js';
import '../../lib/admin/team-result-types/hints-result/hints-result.component.js';
import '../../lib/admin/add-teams/team-exist.directive.js';
import '../../lib/admin/game-build/game-type/game-type.module.js';
import '../../lib/admin/game-build/game-type/game-type.component.js';
import '../../lib/admin/result-setup/result-setup.module.js';
import '../../lib/admin/result-setup/result-setup.service.js';
import '../../lib/admin/result-setup/result-setup.component.js';
import '../../lib/admin/result-setup/result-setup.builder.js';
import '../../lib/admin/game-build/config-game/config-game.module.js';
import '../../lib/admin/game-build/config-game/config-game.component.js';
import '../../lib/admin/add-teams/add-teams.component.js';
import '../../lib/admin/round-type/hints/hints-round.component.js';
import '../../lib/admin/round-type/captain/captain-round-type.component.js';
import '../../lib/admin/round-type/default/default-round.component.js';
import '../../lib/admin/round-type/default/default-round.service.js';
import '../../lib/admin/round-status/round-status.module.js';
import '../../lib/admin/round-status/round-status-component.js';
import '../../lib/admin/login/login.module.js';
import '../../lib/admin/login/login.component.js';
import '../../lib/admin/login-panel/login-panel.module.js';
import '../../lib/admin/login-panel/login-panel.component.js';
import '../../lib/admin/game-list/game-list.module.js';
import '../../lib/admin/game-list/game-list.component.js';
import '../../lib/admin/game-list/finished-game.component.js';
import '../../lib/admin/game-list/open-game-list.component.js';
import '../../lib/admin/game-list/game-teams-modal.component.js';
import '../../lib/admin/add-teams/print-teams/print-teams.component.js';
import '../../lib/services/round-service/round-service.module.js';
import '../../lib/services/round-service/round-service.service.js';
import 'app/services/firebase-service/firebase-initializr.ts';
import '../../lib/admin/game-list/current-game.component.js';
import '../../lib/services/game-build-service/game-build-service.module.js';
import '../../lib/services/game-build-service/game-build-service.service.js';
import '../../lib/services/season-service/season-service.module.js';
import '../../lib/services/season-service/season-service.service.js';
import '../../lib/services/round-type-service/round-type-service.module.js';
import '../../lib/services/round-type-service/round-type-service.service.js';

export const environment = {
  production: true
};

(function () {
  let method;
  const noop = function () {
  };
  const methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeStamp', 'trace', 'warn'
  ];
  let length = methods.length;
  const console = (window.console || {});

  while (length--) {
    method = methods[length];
    console[method] = noop;
  }
}());
