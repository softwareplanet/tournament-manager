angular.module('createGame')
    .component('createGame', {
        templateUrl: 'admin/create-game/create-game.html',
        css: 'admin/create-game/create-game.css',
        controller: ['TeamServiceFactory',
            'OpenGameServiceFactory',
            '$rootScope',
            '$location',

            function (TeamService, OpenGameServiceFactory, $rootScope, $location) {

                this.isCalendarVisible = false;
                this.isTimeVisible = false;
                this.options = {};
                this.options.minDate = new Date();
                this.gameDate = new Date();
                this.gameTime = new Date();
                this.gameTime.setSeconds(0);
                this.gameBuilder = new GameBuilder();
                this.location = null;

                this.createNewGame = function () {
                    let game = this.gameBuilder.addDate(this.gameDate).addTime(this.gameTime).addLocation(this.location).buildGame();

                    OpenGameServiceFactory.createNewGame(game)
                        .then(() => {
                            this.location = null;
                        });
                    this.isCalendarVisible = false;
                    this.isTimeVisible = false;

                };

                this.ChangeCalendarStatus = function () {
                    if (this.isCalendarVisible) {
                        this.isCalendarVisible = false;
                    } else if (this.isTimeVisible) {
                        this.isTimeVisible = false;
                        this.isCalendarVisible = true;
                    }
                    else {
                        this.isCalendarVisible = true;
                    }
                };

                this.ChangeTimeStatus = function () {
                    if (this.isTimeVisible) {
                        this.isTimeVisible = false;
                    }
                    else if (this.isCalendarVisible) {
                        this.isTimeVisible = true;
                        this.isCalendarVisible = false;
                    }
                    else {
                        this.isTimeVisible = true;
                    }
                };

            }]

    })
;