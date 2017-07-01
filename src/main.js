import { Game } from 'game';

(function (document) {
  let canvas = document.getElementById("game");
  let context = canvas.getContext('2d');

  let game = new Game(document, context, canvas.width, canvas.height);
  game.init();
})(document);