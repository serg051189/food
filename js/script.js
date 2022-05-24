let nav = document.querySelector('.nav');
let menuBtn = document.querySelector('#menu-btn');
let searchForm = document.querySelector('.search-form__wrapper');
let searchIcon = document.querySelector('.fa-search');
let cart = document.querySelector('.shopping-cart__wrapper');
let cartIcon = document.querySelector('.fa-shopping-cart');
let loginForm = document.querySelector('.login-form__wrapper');
let loginIcon = document.querySelector('.fa-user');
let buyNow = document.querySelector('.food-preview__btn');

//burger

//open
menuBtn.onclick = () =>{
   menuBtn.classList.toggle('fa-times');
   nav.classList.toggle('active');
   document.body.classList.toggle('lock');
   searchForm.classList.remove('active');
   searchIcon.classList.remove('active');
   cart.classList.remove('active');
   cartIcon.classList.remove('active');
   loginForm.classList.remove('active');
   loginIcon.classList.remove('active');
   previewContainer.classList.remove('active');
   //previewBox.classList.remove('active');

};

//close
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(navLink=> {
    navLink.addEventListener('click',onNavLinkClick);
});
function onNavLinkClick (e) {
    const navLink = e.target;
    //if(nav.classList.contains('active')){
    document.body.classList.remove('lock');
    menuBtn.classList.remove('fa-times');
    nav.classList.remove('active'); 
    menuBtn.classList.remove('fa-times');
    nav.classList.remove('active');
    document.body.classList.remove('lock');
    searchForm.classList.remove('active');
    searchIcon.classList.remove('active');
    cart.classList.remove('active');
    cartIcon.classList.remove('active');
    loginForm.classList.remove('active');
    loginIcon.classList.remove('active');
        //}
        
};


//smooth scrolling
const smoothLinks = document.querySelectorAll('a[href^="#"]');
        for (let smoothLink of smoothLinks) {
            smoothLink.addEventListener('click', function (e) {
                e.preventDefault();
                const id = smoothLink.getAttribute('href');        
                document.querySelector(id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
};

// window.onscroll = () =>{
//    menuBtn.classList.remove('fa-times');
//    nav.classList.remove('active');
// };


//Search
document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
  searchIcon.classList.toggle('active');
  cart.classList.remove('active');    
  cartIcon.classList.remove('active');  
  nav.classList.remove('active');
  menuBtn.classList.remove('fa-times');
  document.body.classList.remove('lock');
  loginForm.classList.remove('active');
  loginIcon.classList.remove('active');
  previewContainer.classList.remove('active');
  //previewBox.classList.remove('active');
}


//shopping cart

document.querySelector('#cart-btn').onclick = () =>{
  cart.classList.toggle('active');
  cartIcon.classList.toggle('active');
  searchForm.classList.remove('active');
  searchIcon.classList.remove('active');
  nav.classList.remove('active');
  menuBtn.classList.remove('fa-times');
  document.body.classList.toggle('lock');
  loginForm.classList.remove('active');
  loginIcon.classList.remove('active');
  previewContainer.classList.remove('active');
  //previewBox.classList.remove('active');
}




//login-form
document.querySelector('#login-btn').onclick = () => {
  loginForm.classList.toggle('active');
  loginIcon.classList.toggle('active');
  cart.classList.remove('active');
  cartIcon.classList.remove('active');
  searchForm.classList.remove('active');
  searchIcon.classList.remove('active');
  nav.classList.remove('active');
  menuBtn.classList.remove('fa-times');
  document.body.classList.toggle('lock');
  previewContainer.classList.remove('active');
  //previewBox.classList.remove('active'); 
}

//home-slider
var swiper = new Swiper(".home-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    navigation: {
      nextEl: ".home__swiper-button-next",
      prevEl: ".home__swiper-button-prev",
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
 });

//food-slider
 var swiper = new Swiper(".food-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    spaceBetween: 10,
    pagination: {
       el: ".food-swiper-pagination",
       clickable: true,
    },
    breakpoints: {
       0: {
         slidesPerView: 1,
       },
       720: {
         slidesPerView: 3,
       },
       1480: {
         slidesPerView: 5,
       },
    },
 });

//food preview
let previewContainer = document.querySelector('.food-preview-container');
let previewBox = previewContainer.querySelectorAll('.food-preview');

//open
document.querySelectorAll('.food-slide').forEach(food => {
 food.onclick = () => {
  previewContainer.classList.toggle('active');
  document.body.classList.toggle('lock');
  let name = food.getAttribute('data-name');
  previewBox.forEach(preveiw => {
   let target = preveiw.getAttribute('data-target');
   if (name == target) {
    preveiw.classList.add('active');
   }
  });
 };
});
//close

previewContainer.querySelector('#close-preview').onclick = () => {
  previewContainer.classList.remove('active');
  document.body.classList.remove('lock');
  previewBox.forEach(close => {
  close.classList.remove('active');
  
  });
};


//gallery

lightGallery(document.querySelector('.gallery .gallery-container'));

//menu-slider
var swiper = new Swiper(".menu-slider", {
  grabCursor: true,
  loop: true,
  autoHeight: true,
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".menu__swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".menu__swiper-button-next",
    prevEl: ".menu__swiper-button-prev",
  },
  breakpoints: {
    1300: {
      // autoHeight: false,
    },
  },
});

//blogs-slider
var swiper = new Swiper(".blogs-slider", {
  grabCursor: true,
  loop: true,
  // centeredSlides: true,
  autoHeight: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    650: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});




 


