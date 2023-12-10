window.onload = function () {
  let nav = document.querySelector("nav");
  let menuBottom = 100; // значення відступу від верхнього краю при прокрутці
  window.onscroll = function () {
    if (document.documentElement.scrollTop < menuBottom) {
      // або document.body.scrollTop > menuBottom
      nav.classList.remove("fixed"); // видаляємо клас 'fixed'
    } else {
      nav.classList.add("fixed"); // додаємо клас 'fixed'
    }
  };
};
