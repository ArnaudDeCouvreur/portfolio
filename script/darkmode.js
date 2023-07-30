"use strict";

const toggle = document.querySelector(".js-toggle");
const root = document.querySelector(":root");

toggle.addEventListener("click", function(){
    if (toggle.checked) {
        // lightmode
        root.style.setProperty('--light', '#1a1a1a');
        root.style.setProperty('--dark', '#fff');
        root.style.setProperty('--dark-bg', '#f0f0f0');
    } else {
        // darkmode
        root.style.setProperty('--light', '#fff');
        root.style.setProperty('--dark', '#1a1a1a');
        root.style.setProperty('--dark-bg', '#212121');
    }
});