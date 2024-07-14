import { slideFunction, slideFunctionPop } from "./Controller/sliding.js";

slideFunction();

slideFunctionPop();

// document.querySelectorAll('.sliding-images img').forEach(elem => {
//   elem.style.width = window.innerWidth + 'px'
//   console.log(elem)
// })

console.log(window.innerHeight + 'px');

const bars = document.querySelector('.pop-menu-bar');
const spanElem = document.querySelector('.pop-menu-bar .bars-text');
const barsIcon = document.querySelector('.pop-menu-bar i');

bars.addEventListener('click', () => {

  if (spanElem.innerHTML === 'Menu') {
    spanElem.innerHTML = 'Close';
    barsIcon.classList.replace('fa-bars', 'fa-times');

    document.querySelectorAll('.pop-home, .pop-about, .pop-services, .pop-more, .pop-visit').forEach(elem => {
      elem.classList.add('translate')
    })

    document.querySelector('header')
      .classList.add('shadow')
    document.querySelector('nav')
      .classList.add('z-index')
  } else {
    headerDisplay();
  };
});

document.querySelectorAll('.body-section, .body-section-pop, .left-section, footer').forEach(elem => {
  elem.addEventListener('click', () => {
    headerDisplay();
    document.querySelector('.side-bar').classList.remove('visiblity');
  
    document.querySelectorAll('.home, .about, .services, .more, .visit').forEach(elem => {
      elem.classList.remove('translate');
    });
    document.querySelector('nav')
    .classList.remove('z-index')
  });
})


function headerDisplay() {
  spanElem.innerHTML = 'Menu';
  barsIcon.classList.replace( 'fa-times', 'fa-bars');
  document.querySelectorAll('.pop-home, .pop-about, .pop-services, .pop-more, .pop-visit').forEach(elem => {
    elem.classList.remove('translate')
  })
  document.querySelector('header')
    .classList.remove('shadow')
    document.querySelector('nav')
      .classList.remove('z-index')
};

document.querySelector('.menu-bars')
  .addEventListener('click', () => {
    document.querySelector('.side-bar').classList.add('visiblity');

    document.querySelectorAll('.home, .about, .services, .more, .visit').forEach(elem => {
      elem.classList.add('translate');
    });

    document.querySelector('nav')
    .classList.remove('z-index')

  })

document.querySelector('.side-bars-options')
  .addEventListener('click', () => {
    document.querySelector('.side-bar').classList.remove('visiblity')

    document.querySelectorAll('.home, .about, .services, .more, .visit').forEach(elem => {
      elem.classList.toggle('translate');
    });
  })

  const img = document.querySelectorAll('.sliding-images img, .sliding-images-cont, .sliding-images, .body-section')

// img.forEach(elem => {
//   elem.style.setProperty('--width', window.innerWidth + 'px')

//   elem.style.setProperty('--hight', window.innerHeight + 'px');
// });

console.log(window.innerHeight + 'px');