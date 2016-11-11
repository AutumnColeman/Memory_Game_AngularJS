var app = angular.module('my-app', []);

function Card(url) {
  this.url = url;
  this.open = false;
  this.matched = false;
}

app.controller('MyController', function($scope, $timeout) {
  $scope.state = "first";
  $scope.firstCard;
  $scope.secondCard;
  $scope.cards = [
    [
      new Card('images/monsters-01.png'),
      new Card('images/monsters-02.png'),
      new Card('images/monsters-03.png'),
      new Card('images/monsters-04.png')
    ],
    [
      new Card('images/monsters-01.png'),
      new Card('images/monsters-02.png'),
      new Card('images/monsters-03.png'),
      new Card('images/monsters-04.png')
    ]

  ];


  $scope.click = function(card) {
    if ($scope.state === "first") {
        card.open = true;
        $scope.firstCard = card;
        $scope.state = "second";
        console.log($scope.firstCard.url);
      }
    else if ($scope.state === "second") {
        card.open = true;
        $scope.secondCard = card;
        console.log($scope.secondCard.url);
        if ($scope.firstCard.url === $scope.secondCard.url) {
          console.log("check");
          $scope.state = "first";
          console.log($scope.state);
          }
        if ($scope.firstCard.url !== $scope.secondCard.url) {
          console.log("not matched");
          $timeout(function() {
            $scope.firstCard.open = false;
            $scope.secondCard.open = false;
          }, 1000);

          $scope.state = "first";
          console.log($scope.state);
        }
        }

};
  // $scope.click = function(card) {
  //       card.open = true;
  //     };



});
