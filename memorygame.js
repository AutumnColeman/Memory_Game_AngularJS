var app = angular.module('my-app', []);

function Card(url) {
  this.url = url;
  this.open = false;
  this.matched = false;
}

app.controller('MyController', function($scope, $timeout) {

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
  console.log($scope.cards);
  console.log($scope.cards[0][0]);
});
