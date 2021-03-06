const nav = document.querySelector(".nav");
const nav2bar = document.querySelector(".nav2bar");
const header = document.querySelector(".header");
const btnNav_open = document.querySelector(".nav__open");
const nav_overlay = document.querySelector(".nav__overlay");
const overlay = document.querySelector(".overlay");
let window_width = window.innerWidth;
if (window_width < 900 && !nav.classList.contains("hidden")) {
  nav.classList.add("hidden");
  nav2bar.classList.remove("hidden");
}
const navHeight = nav.getBoundingClientRect().height;
const obsCallBack = function (entries) {
  const [entry] = entries;
  const current = nav.classList.contains("hidden") ? nav2bar : nav;
  if (!entry.isIntersecting) current.classList.add("sticky");
  else current.classList.remove("sticky");
};
const obsOptions = {
  root: null,
  threshold: 0.89,
};

const observer = new IntersectionObserver(obsCallBack, obsOptions);
const windowWidth = window.innerWidth;
observer.observe(header);

const section2Container = document.querySelectorAll(".section--2__item");
section2Container.forEach(function (el) {
  el.addEventListener("mouseenter", function (e) {
    const btn = document.querySelector(`.btn-${e.target.dataset.value}`);
    btn.classList.remove("visible");
  });
  el.addEventListener("mouseleave", function (e) {
    const btn = document.querySelector(`.btn-${e.target.dataset.value}`);
    btn.classList.add("visible");
  });
});

window.addEventListener("resize", function () {
  window_width = window.innerWidth;

  if (
    nav.classList.contains("hidden") &&
    window_width > 900 &&
    !nav2bar.classList.contains("hidden")
  ) {
    nav.classList.remove("hidden");
    nav2bar.classList.add("hidden");
  }
  if (
    !nav.classList.contains("hidden") &&
    window_width < 900 &&
    nav2bar.classList.contains("hidden")
  ) {
    nav.classList.add("hidden");
    nav2bar.classList.remove("hidden");
  }
});

btnNav_open.addEventListener("click", function () {
  nav_overlay.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

overlay.addEventListener("click", function () {
  nav_overlay.classList.add("hidden");
  overlay.classList.add("hidden");
});

// ---------------------------------------------------------------------------- slider
const slides = document.querySelectorAll(".slide");
const dotContainer = document.querySelector(".dots");
// const slider = document.querySelector(".slider");
// slider.style.transform = "scale(0.4) translateX(-800px)";
// slider.style.overflow = "visible";
slides.forEach(
  (img, index) => (img.style.transform = `translateX(${100 * index}%)`)
);

const btnRight = document.querySelector(".slider__btn--right");
const btnLeft = document.querySelector(".slider__btn--left");
let curSlide = 0;
const maxSlide = slides.length;
const createDots = function () {
  slides.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

const goToSilde = function (cur) {
  slides.forEach(
    (img, index) =>
      (img.style.transform = `translateX(${100 * (index - cur)}%)`)
  );
};
const activateDots = function (slideNumber) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));
  document
    .querySelector(`.dots__dot[data-slide="${slideNumber}"]`)
    .classList.add("dots__dot--active");
};
createDots();
goToSilde(0);
activateDots(0);
const nextSlide = function () {
  if (curSlide == maxSlide - 1) curSlide = 0;
  else curSlide++;
  //console.log(curSlide);
  goToSilde(curSlide);
  activateDots(curSlide);
};
const prevSilde = function () {
  if (curSlide == 0) curSlide = maxSlide - 1;
  else curSlide--;
  goToSilde(curSlide);
  activateDots(curSlide);
};
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSilde);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") prevSilde();
  e.key === "ArrowRight" && nextSlide(); //short cuircuiting both are corret
});

dotContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("dots__dot")) {
    curSlide = event.target.dataset.slide;

    goToSilde(curSlide);
    activateDots(curSlide);
  }
});

setInterval(nextSlide, 4000);

const slides5 = document.querySelectorAll(".slide5");
const dotContainer5 = document.querySelector(".dots5");
// const slider = document.querySelector(".slider");
// slider.style.transform = "scale(0.4) translateX(-800px)";
// slider.style.overflow = "visible";
console.log(slides5);
slides5.forEach(
  (img, index) => (img.style.transform = `translateX(${100 * index}%)`)
);

const btn5Right = document.querySelector(".slider5__btn--right");
const btn5Left = document.querySelector(".slider5__btn--left");
let curSlide5 = 0;
const maxSlide5 = slides5.length;
const createDots5 = function () {
  slides5.forEach((_, i) => {
    dotContainer5.insertAdjacentHTML(
      "beforeend",
      `<button class="dots5__dot" data-slide5="${i}"></button>`
    );
  });
};

const goToSilde5 = function (cur) {
  slides5.forEach(
    (img, index) =>
      (img.style.transform = `translateX(${100 * (index - cur)}%)`)
  );
};
const activateDots5 = function (slideNumber) {
  document
    .querySelectorAll(".dots5__dot")
    .forEach((dot) => dot.classList.remove("dots5__dot--active"));
  document
    .querySelector(`.dots5__dot[data-slide5="${slideNumber}"]`)
    .classList.add("dots5__dot--active");
};
createDots5();
goToSilde5(0);
activateDots5(0);
const nextSlide5 = function () {
  if (curSlide5 == maxSlide5 - 1) curSlide5 = 0;
  else curSlide5++;
  //console.log(curSlide);
  goToSilde5(curSlide5);
  activateDots5(curSlide5);
};
const prevSilde5 = function () {
  if (curSlide5 == 0) curSlide5 = maxSlide5 - 1;
  else curSlide5--;
  goToSilde5(curSlide5);
  activateDots5(curSlide5);
};
btn5Right.addEventListener("click", nextSlide5);
btn5Left.addEventListener("click", prevSilde5);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") prevSilde5();
  e.key === "ArrowRight" && nextSlide5(); //short cuircuiting both are corret
});

dotContainer5.addEventListener("click", function (event) {
  if (event.target.classList.contains("dots5__dot")) {
    curSlide5 = event.target.dataset.slide5;
    console.log(typeof curSlide5);
    goToSilde5(curSlide5);
    activateDots5(curSlide5);
  }
});

setInterval(nextSlide5, 4000);

//------------------------------------------------------------------------------------
const formBtn = document.querySelectorAll(".form__btn");
const displayForm = document.querySelectorAll(".form__div");

formBtn.forEach(function (event, index) {
  event.addEventListener("click", function (e) {
    if (!e.target.classList.contains("btnwhite")) {
      formBtn.forEach(function (m, i) {
        if (m.classList.contains("btnwhite") && i !== index) {
          m.classList.add("btn");
          m.classList.remove("btnwhite");
        }
      });
      e.target.classList.add("btnwhite");
      e.target.classList.remove("btn");

      displayForm.forEach(function (k, inde) {
        if (!k.classList.contains("hidden")) k.classList.add("hidden");
        if (inde == index) k.classList.remove("hidden");
      });
      console.log(displayForm);
    }
  });
});
//--------------------------------------------------------------------------------------

const slides9 = document.querySelectorAll(".slide9");
const dotContainer9 = document.querySelector(".dots9");
// const slider = document.querySelector(".slider");
// slider.style.transform = "scale(0.4) translateX(-800px)";
// slider.style.overflow = "visible";

slides9.forEach(
  (img, index) => (img.style.transform = `translateX(${100 * index}%)`)
);

let curSlide9 = 0;
const maxSlide9 = slides9.length;
const createDots9 = function () {
  slides9.forEach((_, i) => {
    dotContainer9.insertAdjacentHTML(
      "beforeend",
      `<button class="dots9__dot" data-slide9="${i}"></button>`
    );
  });
};

const goToSilde9 = function (cur) {
  slides9.forEach(
    (img, index) =>
      (img.style.transform = `translateX(${100 * (index - cur)}%)`)
  );
};
const activateDots9 = function (slideNumber) {
  document
    .querySelectorAll(".dots9__dot")
    .forEach((dot) => dot.classList.remove("dots9__dot--active"));
  document
    .querySelector(`.dots9__dot[data-slide9="${slideNumber}"]`)
    .classList.add("dots9__dot--active");
};
createDots9();
goToSilde9(0);
activateDots9(0);
const nextSlide9 = function () {
  if (curSlide9 == maxSlide9 - 1) curSlide9 = 0;
  else curSlide9++;
  //console.log(curSlide);
  goToSilde9(curSlide5);
  activateDots9(curSlide9);
};
const prevSilde9 = function () {
  if (curSlide9 == 0) curSlide9 = maxSlide9 - 1;
  else curSlide9--;
  goToSilde9(curSlide9);
  activateDots9(curSlide9);
};

// document.addEventListener("keydown", function (e) {
//   if (e.key === "ArrowLeft") prevSilde5();
//   e.key === "ArrowRight" && nextSlide5(); //short cuircuiting both are corret
// });

dotContainer9.addEventListener("click", function (event) {
  if (event.target.classList.contains("dots9__dot")) {
    curSlide9 = event.target.dataset.slide5;
    // console.log(typeof curSlide5);
    goToSilde9(curSlide9);
    activateDots9(curSlide9);
  }
});

setInterval(nextSlide9, 4000);

var input = document.querySelectorAll("input");
var input2 = document.querySelectorAll(".date-input");
input.forEach(function(e){
  e.addEventListener("focus",function(ev){
    this.setAttribute('data-buffer',this.placeholder);
    this.placeholder='';
  })
});

input.forEach(function(e){
  e.addEventListener("blur",function(ev){
    this.setAttribute('placeholder',this.getAttribute('data-buffer'));
    this.removeAttribute('data-buffer');
  })
});

input2.forEach(function(e){
  e.addEventListener("focusin",function(ev){
    e.type = 'date';
  })
});
input2.forEach(function(e){
  e.addEventListener("focusout",function(ev){
    e.type = 'text';
  })
});
