// Show Slide 1

var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {

    var i;
    var slides = document.getElementsByClassName('mySlides');
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";


}

// Auto slide 2

var slideIndex1 = 1;
showSlidesAuto();

function showSlidesAuto() {
    var i;
    var slides = document.getElementsByClassName("mySlides1");
    var dots = document.getElementsByClassName("dot1");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot1", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active-dot1";
    setTimeout(showSlidesAuto, 3000);
}

// Change slide 2

var slideIndex1_dot = 1;

function currentSlide(n) {
    showSlides1(slideIndex1_dot = n);
}

function showSlides1(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides1");
    var dots = document.getElementsByClassName("dot1");
    if (n > slides.length) { slideIndex1_dot = 1 }
    if (n < 1) { slideIndex1_dot = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot1", "");
    }
    slides[slideIndex1_dot - 1].style.display = "block";
    dots[slideIndex1_dot - 1].className += " active-dot1";
}





//
// document.addEventListener("scroll-mouse", function() {
//     var menu = document.querySelectorAll(".header");
//     var menu = menu[0];
//     var flag = true;
//     window.addEventListener("scroll", function() {
//         var x = pageYOffset;
//         if (x > 300) {
//             if (flag == true)
//                 menu.classList.add('scroll-header');
//             flag == false;

//         } else {
//             if (flag == false) {
//                 menu.classList.replace("scroll-header", "");
//                 flag = true
//             }

//         }
//     })
// })