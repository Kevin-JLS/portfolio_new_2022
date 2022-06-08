window.addEventListener("DOMContentLoaded", () => {

     // Flickity slider JS
     var elem = document.querySelector('.main-carousel');
     var flkty = new Flickity( elem, {});

     // Sal for animation in scrolling
     sal({
          threshold: 0.5,
          once: true,
     });

     // Navigation sticky on scroll
     window.addEventListener('scroll', () => {
          const navigation = document.querySelector('#nav');
          navigation.classList.toggle('sticky', window.scrollY > 0)
     })

     // Navigation responsive 
     const icoNavMobile = document.querySelector('.ico-responsive');
     const navMobile = document.querySelector('.nav-mobile');
     icoNavMobile.addEventListener('click', () => {
          navMobile.classList.toggle('active');
     })


});