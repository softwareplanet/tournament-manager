class Team {
    constructor(name, id) {
        this.id = id;
        this.name = name;
    }
}

class TeamBuilder {

    constructor(teamService, teams) {
        this.teamService = teamService;
        this.teamsArray = teams;
    }

    getTeamsNames() {
        return this.teamsArray;
    }


    getTeamsInputs() {
        let teamInputs = document.querySelectorAll('input[type="text"]');
        return teamInputs;
    }

    build() {
        let promises = [];
        let teamService = this.teamService;
        this.getTeamsNames().forEach(function (team) {
            if (team.id === undefined) {

                promises.push(teamService.save({name: team.name}));

            } else {

                promises.push(teamService.updateTeamById(team.id, {name: team.name}));
            }
        });
        return promises;
    }

    setTeams() {
        return Promise.all(this.build())
            .then(values => {
                console.log(values);
                let teams = [];
                values.forEach((teamId, index) => {
                    teams.push(new Team(this.teamsArray[index].name, teamId.key));
                });
                return teams;
            });
    }
}

function createTeamListener() {
    let teamBuilder = new TeamBuilder(new TeamService(DbConnection.getConnection()));
    teamBuilder.setTeams();
}

