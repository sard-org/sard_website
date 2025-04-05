let sliderImages = Array.from(document.querySelectorAll(".slider .row"));
// get number of slides
let sliderCount = sliderImages.length;
// set current slide
let currentSlide = 1;
// previous and next buttons
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");

let counter = (document.getElementById("counter").innerHTML = `
  <div class="total-number">0${sliderCount}</div>
  <span>...</span>
  <div class="box-number">0${currentSlide}</div>
`);
theChecker();
// next slide
function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
    counter = document.getElementById("counter").innerHTML = `
    <div class="total-number">0${sliderCount}</div>
    <span>...</span>
   <div class="box-number">0${++currentSlide}</div>
  `;
    theChecker();
  }
}
// prev slide
function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    return false;
  } else {
    counter = document.getElementById("counter").innerHTML = `
    <div class="total-number">0${sliderCount}</div>
    <span>...</span>
    <div class="box-number">0${--currentSlide}</div>
  `;
    theChecker();
  }
}
function theChecker() {
  removeAllActice();
  sliderImages[currentSlide - 1].classList.add("active");
  if (currentSlide == 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }
  if (currentSlide == sliderCount) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}
function removeAllActice() {
  sliderImages.forEach(function (row) {
    row.classList.remove("active");
  });
}
// ######################accardions##########################
let btn = document.querySelectorAll("#btn");
let answer = document.querySelectorAll(".answer");
let open = document.querySelectorAll("button");
let icon = document.querySelectorAll(".icon");
let q = document.querySelectorAll("#q");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    if (answer[i].style.height == 0) {
      answer[i].style.height = answer[i].scrollHeight + "px";
      btn[i].style.backgroundColor = "#70A972";
      btn[i].style.color = "#fcfcfc";
      answer[i].style.borderTop = "1px solid var(--second-color)";
      answer[i].style.width = "95%";
      icon[i].classList.replace("fa-plus", "fa-minus");
    } else {
      answer[i].style.height = null;
      icon[i].classList.replace("fa-minus", "fa-plus");
      btn[i].style.backgroundColor = "#70A9724D";
      answer[i].style.borderTop = "none";
      btn[i].style.color = "#70A972";
    }
  });
}
