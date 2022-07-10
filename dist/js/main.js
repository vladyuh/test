//Remove animations on load
window.onload = function () {
    document.querySelector("body").classList.remove("perf-no-animation");
};

//100vh
var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
window.addEventListener("resize", function () {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
});

//Mobile menu
function mobileMenu() {
    var menu = document.querySelector(".mobile-menu");
    var body = document.querySelector("body");

    this.onOpen = function () {
        menu.classList.add("opened");
        body.classList.add("mobile");
        return true;
    };

    this.onClose = function () {
        menu.classList.remove("opened");
        body.classList.remove("mobile");
    };

    this.onToggle = function () {
        menu.classList.toggle("opened");
        body.classList.toggle("mobile");
    };

}

var mobile = new mobileMenu();
var burger = document.querySelector(".header-burger .burger");
var close = document.querySelector(".mobile-menu__close .burger");
burger.addEventListener("click", function (e) {
    e.preventDefault();
    mobile.onOpen();
});

close.addEventListener("click", function (e) {
    e.preventDefault();
    mobile.onClose();
});

var navLinks = document.querySelectorAll(".mobile-menu__nav a");
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
        mobile.onClose();
    });
}

//Lazyloading
if ("loading" in HTMLImageElement.prototype) {
    const images = document.querySelectorAll("img[loading=\"lazy\"]");
    for (var i = 0; i < images.length; i++) {
        images[i].src = images[i].dataset.src;
    }
}
else {
    const script = document.createElement("script");
    script.src = "js/lazysizes.min.js";
    document.body.appendChild(script);
}

var inputRange = document.querySelectorAll('.input-range input');
inputRange.forEach(function(el){

    var wrapper = el.parentElement;
    var parent = wrapper.parentElement;

    function setValue(){
        parent.querySelector('.label-value').textContent = el.value + " %"
    }

    setValue();

    el.addEventListener('change', function(){
        setValue();
    })
})

var inputFile = document.querySelectorAll('.input-file input');
inputFile.forEach(function(el){
    var wrapper = el.parentElement;
    el.addEventListener('change', function(e){
        if(e.target.files.length){
            wrapper.querySelector('.caption').textContent= e.target.files[0].name;
        }
        else{
            wrapper.querySelector('.caption').textContent = wrapper.getAttribute('data-caption')
        }
    })
})

//Load scripts after page load
window.addEventListener("load", function () {

    var select = document.createElement("script");
    select.src = "js/select.min.js";
    select.onload = function () {
        const selectCustom = new customSelect({
            selector: "select"
        });
        selectCustom.init();
    };
    document.body.appendChild(select);

    var smoothScroll = document.createElement("script");
    smoothScroll.src = "js/scrolltosmooth.min.js";
    smoothScroll.onload = function () {
        let smoothScroll = new scrollToSmooth('a', {
            targetAttribute: 'href',
            offset: document.querySelector('.header')
          });
          smoothScroll.init();
    };
    document.body.appendChild(smoothScroll);
});