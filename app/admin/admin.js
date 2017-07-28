angular
    .module('mhs.admin', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/setup-game-type', {
            templateUrl: 'admin/game-build/game-type/game-type.html',
            controller: 'GameTypeController',
            controllerAs: 'gameType'
        });
        $routeProvider.when('/add-teams', {
            templateUrl: 'admin/add-teams/add-teams.html',
            controller: 'AddTeamsController',
            controllerAs: 'addTeams',
            css:'admin/add-teams/add-teams.css'
        });
        $routeProvider.when('/edit-result', {
            templateUrl: 'admin/result-editor/result-editor.html',
            controller: 'resultEditorCtrl',
            controllerAs: 'editResult',
            css:'admin/result-editor/result-editor.css'
        });
    }]);