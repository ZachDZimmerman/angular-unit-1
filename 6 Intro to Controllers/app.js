var app = angular.module("firstApp", []);

app.controller("ExercisesController", function($scope) {
    $scope.Favcolor = "Blue";
    $scope.secondsInACentury = 100 * 365 * 24 * 60 * 60;
    $scope.rightNow = new Date();
    $scope.number = 5;

    $scope.pickRandomNumber = function() {
        $scope.number = Math.floor(Math.random() * 10) + 1;
    };
    $scope.reverseWord = function() {
        $scope.aString = $scope.aString.split("").reverse().join("");
    };
});

app.controller("Pong", function($scope) {
    $scope.pong = {};
    $scope.pong.player1score = 0;
    $scope.pong.player2score = 0;
    $scope.pong.totalscore = 0;
    $scope.pong.score1 = function() {
        $scope.pong.player1score++;
        $scope.pong.totalscore++;
        if ($scope.pong.totalscore === 2 || $scope.pong.totalscore === 6 || $scope.pong.totalscore === 10) {
            $scope.pong.show1 = true;
            $scope.pong.show2 = false;
        } else if ($scope.pong.totalscore === 4 || $scope.pong.totalscore === 8 || $scope.pong.totalscore === 11) {
            $scope.pong.show1 = false;
            $scope.pong.show2 = true;
        }
    };
    $scope.pong.score2 = function() {
        $scope.pong.player2score++;
        $scope.pong.totalscore++;
        if ($scope.pong.totalscore === 2 || $scope.pong.totalscore === 6 || $scope.pong.totalscore === 10) {
            $scope.pong.show1 = true;
            $scope.pong.show2 = false;
        } else if ($scope.pong.totalscore === 4 || $scope.pong.totalscore === 8 || $scope.pong.totalscore === 11) {
            $scope.pong.show1 = false;
            $scope.pong.show2 = true;
        }
    };

    $scope.ResetScore = function() {
        $scope.pong.player1score = 0;
        $scope.pong.player2score = 0;
        $scope.pong.totalscore = 0;
        $scope.pong.show1 = false;
        $scope.pong.show2 = false;
    };
});
