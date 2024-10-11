"use strict";

const jsArrows = document.querySelectorAll(".js-arrow");
const btnsJSBtn = document.querySelectorAll(".js-btn");

for (let i = 0; i < btnsJSBtn.length; i++)
  btnsJSBtn[i].addEventListener("click", function () {
    for (let i = 0; i < jsArrows.length; i++) {
      jsArrows[i].classList.toggle("js-hidden");
    }
  });
