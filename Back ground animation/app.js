function bgchange() {
  if (window.scrollY > window.innerHeight / 1.7) {
    document.body.classList.add("bg-active");
  } else {
    document.body.classList.remove("bg-active");
  }
}

window.addEventListener("scroll", bgchange);
