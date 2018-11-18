const productMenu = document.querySelectorAll('.product-menu');
const mainHeader = document.querySelector('.main-header');
const mobileButton = document.querySelector('.mobile-menu');
const menuRef = document.querySelector('.nav-item-rd');
var homeIntro = $('.home-intro-products');
    homeIntro.owlCarousel({
      items: 4, //10 items above 1000px browser width
      itemsDesktop: [1000, 2], //5 items between 1000px and 901px
      itemsDesktopSmall: [900, 2], // betweem 900px and 601px
      itemsTablet: [600, 1], //2 items between 600 and 0
      itemsMobile: 1, // itemsMobile disabled - inherit from itemsTablet option
      slideSpeed: 1000,
      loop:true,
      autoPlay: true,
      autoHeight: true
  });
var vpsSlider = $('.vps-slider-products');
    vpsSlider.owlCarousel({
      items: 1, //10 items above 1000px browser width
      itemsDesktop: [1000, 1], //5 items between 1000px and 901px
      itemsDesktopSmall: [900, 1], // betweem 900px and 601px
      itemsTablet: [600, 1], //2 items between 600 and 0
      itemsMobile: 1, // itemsMobile disabled - inherit from itemsTablet option
      slideSpeed: 1000,
      loop:true,
      autoPlay: true,
      autoHeight: true
  });
var dedicatedSlider = $('.dedicated-slider-products');
    dedicatedSlider.owlCarousel({
      items: 1, //10 items above 1000px browser width
      itemsDesktop: [1000, 1], //5 items between 1000px and 901px
      itemsDesktopSmall: [900, 1], // betweem 900px and 601px
      itemsTablet: [600, 1], //2 items between 600 and 0
      itemsMobile: 1, // itemsMobile disabled - inherit from itemsTablet option
      slideSpeed: 1000,
      loop:true,
      autoPlay: true,
      autoHeight: true
  });

var procuctsSet = $('.slider-products');
    procuctsSet.owlCarousel({
      items: 4, //10 items above 1000px browser width
      itemsDesktop: [1000, 2], //5 items between 1000px and 901px
      itemsDesktopSmall: [900, 2], // betweem 900px and 601px
      itemsTablet: [600, 1], //2 items between 600 and 0
      itemsMobile: 1, // itemsMobile disabled - inherit from itemsTablet option
      slideSpeed: 1000,
      loop:true,
      autoPlay: true,
      autoHeight: true,
  });

  window.onload = function(){
      productMenu.forEach(function(iterator){
        iterator.addEventListener('click', function(e){
            productMenu.forEach(function(iterator){
                iterator.classList.remove('pactive');
            });
            e.target.classList.add('pactive');
        });
      });

      mobileButton.addEventListener('click', function(){
          if(window.innerWidth < 891){
            menuRef.classList.toggle('show');
          }
      });
  }

  window.onscroll = function(){
      const sticky = mainHeader.offsetHeight;
      
      if(window.pageYOffset > sticky){
        mainHeader.classList.add('sticky');
      } else {
        mainHeader.classList.remove('sticky');
      }
  }

  window.onresize = function(){
      if(window.innerWidth > 891){
          menuRef.classList.remove('show');
      }
  }