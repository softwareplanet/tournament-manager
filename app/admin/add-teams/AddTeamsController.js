angular.module('mhs.admin')
    .controller('AddTeamsController', AddTeamsController);

function AddTeamsController($rootScope, $location) {
    var ctrl = this;

    // This would be loaded by $http etc.
    ctrl.teams = [
        {
            name: 'Superman',
        },
        {
            name: 'Batman',
        }
    ];

    ctrl.addTeam = function () {
        ctrl.teams.push({name: 'Team'});
    };

    ctrl.deleteTeam = function (index) {
        if (ctrl.teams.length > 2) {
            ctrl.teams.splice(index, 1);
        }
        else {
            alert('min number of teams is 2');
        }
    };

    ctrl.saveTeams = function () {

        let teamBuilder = new TeamBuilder(new TeamService(DbConnection.getConnection()), ctrl.teams);
        teamBuilder.setTeams()
            .then(teams => {
                $rootScope.teams = ctrl.teams;
                $location.path('/setup-game-type');
            console.log(teams);

        });
    };

    /*ctrl.deleteHero = function(hero) {
        var idx = ctrl.list.indexOf(hero);
        if (idx >= 0) {
            ctrl.list.splice(idx, 1);
        }
    };*/
};

// angular.module('mhs.admin')
//     .component('addTeams', {
//         controller: 'AddTeamsController',
//         templateUrl: 'admin/add-teams/add-teams.html',
//         bindings:{
//             teams : '='
//
//         }
//     });