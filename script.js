const search = element => document.querySelector(element);
const searchAll = element => document.querySelectorAll(element);

let totalSlides = searchAll('.slider--item').length;
let menuHeight = search('.header').clientHeight;

let currentSlide = 0;

search('.slider--width').style.width = `calc(100vw * ${totalSlides})`;
search('.slider--controls').style.height = `calc(100% - ${menuHeight}px)`;

const goPrev = () => {
  currentSlide--;
  if(currentSlide < 0) {
    currentSlide = totalSlides - 1;
  };
  updateMargin();
};

const goNext = () => {
  currentSlide++;
  if(currentSlide > totalSlides - 1){
    currentSlide = 0;
  };
  updateMargin();
};

const updateMargin = () => {
  let newMargin = (currentSlide * window.innerWidth);
  search('.slider--width').style.marginLeft = `-${newMargin}px`;
};

setInterval(goNext, 5000);