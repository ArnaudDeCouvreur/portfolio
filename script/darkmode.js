"use strict";

const toggle = document.querySelector(".js-toggle");
const root = document.querySelector(":root");

toggle.addEventListener("click", function(){
    if (toggle.checked) {
        root.style.setProperty('--light', '#151515');
        root.style.setProperty('--dark', '#d8dbe0');
    } else {
        root.style.setProperty('--light', '#d8dbe0');
        root.style.setProperty('--dark', '#151515');
    }
});