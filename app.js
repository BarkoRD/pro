// animate__pulse 
// animate__zoomIn
// animate__slideInLeft
// animate__slideInRight

// animacionaparecer
// animacionder
// animacionizq

const animacionder = document.querySelector('.animacionder');
const animacionizq = document.querySelectorAll('.animacionizq');
const animacionlatido = document.querySelector('.animacionlatido');

const animaciones = [
    { selector: '.animacionizq', animacion: 'animate__slideInLeft' },
    { selector: '.animacionder', animacion: 'animate__slideInRight' },
    { selector: '.animacionlatido', animacion: 'animate__pulse' },
    { selector: '.animacionaparecer1', animacion: 'animate__zoomIn' },
    { selector: '.animacionaparecer2', animacion: 'animate__zoomIn' },
    { selector: '.animacionaparecer3', animacion: 'animate__zoomIn' },
    { selector: '.animacionaparecer4', animacion: 'animate__zoomIn' },
    { selector: '.animacionaparecer5', animacion: 'animate__zoomIn' },
    { selector: '.animacionaparecer6', animacion: 'animate__zoomIn' },
    { selector: '.animacionaparecer7', animacion: 'animate__zoomIn' },
    { selector: '.animacionaparecer8', animacion: 'animate__zoomIn' },
    { selector: '.animacionaparecer9', animacion: 'animate__zoomIn' },
  ];
  
  const animar = (elemento, animacion) => {
    elemento.classList.add('animate__animated', animacion);
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    animaciones.forEach((anim) => {
      const elementos = document.querySelectorAll(anim.selector);
      elementos.forEach((elemento) => {
        animar(elemento, anim.animacion);
      });
    });
  });

const elementos = document.querySelectorAll('.no')


document.addEventListener('DOMContentLoaded', () => {
    setTimeout(()=>{
        elementos.forEach(e => {
            e.classList.remove('no');
          });
    },700)

});