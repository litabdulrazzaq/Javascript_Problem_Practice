"use strict";

const model = document.querySelector(".model");
const overlay = document.querySelector(".overlay");
const btnCloseModel = document.querySelector(".close-model");
const btnOpenModel = document.querySelectorAll(".show-model");

for (let i = 0; i < btnOpenModel.length; i++) {
  btnOpenModel[i].addEventListener("click", function () {
    model.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

// btnCloseModel.addEventListener("click", function () {
//   model.classList.add("hidden");
//   overlay.classList.add("hidden");
// });

overlay.addEventListener("click", function () {
  model.classList.add("hidden");
  overlay.classList.add("hidden");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !model.classList.contains("hidden")) {
    model.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});
