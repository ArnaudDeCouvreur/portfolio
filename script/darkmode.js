"use strict";

const toggle = document.querySelector(".js-toggle");
const body = document.querySelector(".js-body");
const root = document.querySelector(":root");

function toggleDarkmode() {
  if (toggle.checked) {
    // lightmode
    root.style.setProperty("--light", "#1a1a1a");
    root.style.setProperty("--dark", "#fff");
    root.style.setProperty("--dark-bg", "#f0f0f0");
    root.style.setProperty("--accent", "#8d9bff");
    root.style.setProperty("--dark-nav", "#3d3d3d");
  } else {
    // darkmode
    root.style.setProperty("--light", "#fff");
    root.style.setProperty("--dark", "#1a1a1a");
    root.style.setProperty("--dark-bg", "#212121");
    root.style.setProperty("--accent", "#242e77");
    root.style.setProperty("--dark-nav", "#2a2a2a");
  }
}

function addTransition() {
    root.style.setProperty("--transition", "0.2s ease-out");
}

window.addEventListener("DOMContentLoaded", () => {
  toggle.checked = localStorage.toggle === "true";
  document.addEventListener(
    "change",
    (event) => {
      localStorage.toggle = toggle.checked;
    },
    false
  );
  root.style.setProperty("--transition", "0s");
  toggleDarkmode();
  toggle.addEventListener("click", toggleDarkmode);
  setTimeout(addTransition, 100);
});
