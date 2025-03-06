let images = [
  "https://via.placeholder.com/400x250/FF5733/FFFFFF?text=Image+1",
  "https://via.placeholder.com/400x250/33FF57/FFFFFF?text=Image+2",
  "https://via.placeholder.com/400x250/3357FF/FFFFFF?text=Image+3",
  "https://via.placeholder.com/400x250/FF33A1/FFFFFF?text=Image+4",
  "https://via.placeholder.com/400x250/F3FF33/000000?text=Image+5",
  "https://via.placeholder.com/400x250/F3FF33/000000?text=Image+6",
];

let index = 0;

function updateSlider() {
  document.getElementById("sliderImage").src = images[index];
  document.getElementById("counter").innerText =
    "0" + (index + 1) + " ... " + "0" + images.length;
}
function nextSlide() {
  index = (index + 1) % images.length;
  updateSlider();
}

function prevSlide() {
  index = (index - 1 + images.length) % images.length;
  updateSlider();
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
