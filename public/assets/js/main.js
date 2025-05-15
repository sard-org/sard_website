// ######################accardions##########################
let btn = document.querySelectorAll("#btn");
let acco = document.querySelectorAll(".accordion");
let answer = document.querySelectorAll(".answer");
let open = document.querySelectorAll("button");
let icon = document.querySelectorAll(".icon");
let q = document.querySelectorAll("#q");

for (let i = 0; i < btn.length; i++) {
  acco[i].addEventListener("click", function () {
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
