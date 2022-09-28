let hello = document.getElementsByClassName("favorites_icon");
console.log(hello);

function changeButtonOnclick(e) {
  if (e.target.classList[1] === "on") {
    e.target.classList.remove("on");
  } else {
    for (var i = 0; i < hello.length; i++) {
      hello[i].classList.remove("on");
    }

    e.target.classList.add("on");
  }
}

function init() {
  for (var i = 0; i < hello.length; i++) {
    hello[i].addEventListener("click", changeButtonOnclick);
  }
}

init();
