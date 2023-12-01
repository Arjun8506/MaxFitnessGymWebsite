gsap.from(".logo", {
    y: -200,
    duration: 1,
    opacity: 0,
})
gsap.from("li", {
    y: 50,
    duration: 0.5,
    opacity: 0,
    stagger: 0.1,
    delay: 0.5
})

gsap.from(".search, .login", {
    y: -100,
    duration: 1.5,
    opacity: 0,
    stagger: 0.2,
    delay: 0.5
})
gsap.from(".prev", {
    x: -100,
    scale:0,
    duration:1
})
gsap.from(".next", {
    x: 100,
    scale:0,
    duration:1
})

gsap.from(".story", {
    y:-200,
    scale:0,
    duration:1.5,
    scrollTrigger: {
        trigger: ".story",
        scroll:"body",
        start: 'top center', 
        end: 'bottom center', 
        scrub: 1, 
      }
})


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

let successslideIndex = 0;
  successSlides();

  function successSlides() {
    let i;
    const slides = document.getElementsByClassName("successslides");
    const dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    successslideIndex++;
    if (successslideIndex > slides.length) {
      successslideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[successslideIndex - 1].style.display = "block";
    dots[successslideIndex - 1].className += " active";
    setTimeout(successSlides, 2000);
  }


function showmenu() {
    let menu = document.querySelector(".mobilemenubar");
    let click = document.querySelector("#click");
    click.addEventListener("click", function(){
        if (menu.style.display == "block") {
            menu.style.display = "none";
            gsap.from(".mobilemenubar",{
                x: -100,
                duration: 1,
                stagger: 0.1
            })
        }
        else{
            menu.style.display = "block";
        }
    })
}
showmenu()