angular.module('gameResultsPage')
    .component('gameResults', {
        templateUrl: 'admin/game-results/game-results.html',
        controller: ['ResultServiceFactory','$routeParams', '$location', function (ResultService, $routeParams, $location) {
            this.getDetails = function (teamResult) {
                console.log(teamResult.teamId);
                $location.path(`/games/${$routeParams.gameId}/results/${teamResult.teamId}`);
            };
            ResultService.getParsedResults($routeParams.gameId)
                .then((result) => {
                    this.results = result;
                });
        }]
});