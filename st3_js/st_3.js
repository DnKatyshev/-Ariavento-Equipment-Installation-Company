// МЕНЮ
let menuBurger = document.querySelector('.menu-burger')
let headerBottom = document.querySelector('.header__bottom')
menuBurger.addEventListener('click', function(){
    this.classList.toggle('open-menu')
    headerBottom.classList.toggle('active')
    document.body.classList.toggle('fixed-page')
})


// 6й блок в Грид-Проектах
let projectButton = document.querySelector('.project__button')
projectButton.addEventListener('click', () => {
    document.querySelector('.six').classList.toggle('act_grid')
})


// ОТЗЫВЫ-СЛАЙДЕР
let reviewsItems = document.querySelectorAll('.reviews__item') 
reviewsItems.forEach((e) => {
    e.addEventListener('click', (event) => {
        let hidden = e.querySelector('.hidden') 
        hidden.classList.toggle('act_hidden')
    })
})

// --------- Попап ---------
let buttons = document.querySelectorAll('.layout__link-2')
let popup = document.querySelector('.popup__overlay')
let closeP = document.querySelectorAll('.popup img')

buttons.forEach(element => {
    element.addEventListener('click', () => {
        popup.classList.add('active')
        document.body.classList.add('fixed-page')
    })
})
closeP.forEach((element) => {
    element.addEventListener('click', () => {
        popup.classList.remove('active')
        document.body.classList.remove('fixed-page')
    })
})
document.addEventListener('click', (e) => {
    if (e.target == popup) {
        popup.classList.remove('active')
        document.body.classList.remove('fixed-page')  // почему не работает??? 
    }
})

// -------------------------- КНОПКА - НАВЕРХ --------------------------
    let backToTop = document.querySelector('.button__page__up');
    // Показать/скрыть кнопку при прокрутке страницы
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 3000) {
        backToTop.style.display = "block";
      } else {
        backToTop.style.display = "none";
      }
    });
  
    // Плавная прокрутка при клике на кнопку
    backToTop.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
// --------------------------------------------------------------------



const swiper = new Swiper('#slider', {
    //стрелки 
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          enabled: true,
                     
      },
      pagination: {
          el: '.sw-pagination',
          clickable: true,
      },

      spaceBetween: 26,

      slidesPerView: 1,
  
      breakpoints: {
  
          1024: {
                 enabled: false, 
                 slidesPerView: 3,
                 spaceBetween: 26,
          }
      }
      // loop: true,
  })
  const swiper2 = new Swiper('#slider2', {
    //стрелки 
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          enabled: true,
                     
      },
      pagination: {
          el: '.sw-pagination',
          clickable: true,
      },

      slidesPerView: 1,

      breakpoints: {
  
        768: {
            navigation: {
                nextEl: '#slider2 .swiper-button-next',
                prevEl: '#slider2 .swiper-button-prev',
                enabled: true,          
            },
        }
    }
})

      const swiper4 = new Swiper('#slider4', {
        //стрелки 
          navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              enabled: true,
                         
          },
          pagination: {
              el: '.sw-pagination',
              clickable: true,
          },
    
          spaceBetween: 20,
    
          slidesPerView: 1,
      
          breakpoints: {
      
              768: {
                     slidesPerView: 2,
                     spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
         }
    }
})




// Слайдер на Гридах
let breakpoint_mobile_min = window.matchMedia('(min-width: 768px)'),
projectInit = false,
projectSlider = Swiper;

function projectSliderInit() {
     if (breakpoint_mobile_min.matches) {
         if (projectInit) {
             if ($('#slider3').hasClass('swiper-initialized')) {
                 projectSlider.destroy();
                 projectInit = false;
             }                
         }            
     } 
     else { 
         if (!projectInit) {
             projectInit = true;
             projectSlider= new Swiper('#slider3', {
                 navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    enabled: false,  //определитесь нужны вам стрелки или нет
                 },
                 pagination: {
                    el: '.sw-pagination',
                    clickable: true,
                 },    
                 slidesPerView: 1,
                 centeredSlides: true,
                 spaceBetween: 30,
             });
         }           
     }
}
$(window).on('resize load', function () {
projectSliderInit();
});

