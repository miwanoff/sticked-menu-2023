window.onload = function () {
  let imgDin = document.getElementById("din");
  let nav = document.querySelector("nav");
  let menuBottom = 100; // значення відступу від верхнього краю при прокрутці
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
      if (imgDin.classList.contains("fade")) imgDin.classList.remove("fade");
    }
    if (document.documentElement.scrollTop < menuBottom) {
      // або document.body.scrollTop > menuBottom
      nav.classList.remove("fixed"); // видаляємо клас 'fixed'
    } else {
      nav.classList.add("fixed"); // додаємо клас 'fixed'
    }
  };
};
