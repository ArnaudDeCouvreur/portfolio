"use strict";

const title = document.querySelector(".js-title");

var i = 0;
var txt =
  `Front-end and Wordpress developer`;
var speed = 60;

function typeWriter() {
  if (i < txt.length) {
    title.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();