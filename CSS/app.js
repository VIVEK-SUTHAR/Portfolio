const menu = document.querySelector(".menu-list");
const menubtn = document.querySelector(".menu-btn");
const cancelbtn = document.querySelector(".cancel-btn");
const navbar = document.querySelector(".navbar");
const clsnav = document.querySelector(".navbar .menu-list");
const gotop = document.querySelector("#top");
function showNav() {
    clsnav.style.left = "0";
}
function closeNav() {
    clsnav.style.left = "-100%";
}
function gototop() {
    this.scrollTo(0, 0);
}

// menubtn.onclick=()=>{
// menu.classList.add("active");
// menubtn.classList.add("hide");
// }
cancelbtn.onclick = () => {
    clsnav.style.left = "-100%";
}
window.onload = () => {
    body.classList.add("animate__zoomInUp");
}
window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("stickey") : navbar.classList.remove("stickey");
    if (this.scrollY > 50) {
        let intro = document.getElementById('myintro');
        intro.classList.add("animate__slideInUp");
        let skill = document.getElementById('skills');
        skill.classList.add("animate__backInLeft");
        let i = document.querySelector("#about img");
        i.classList.add("animate__slideInDown");
    }
    if (this.scrollY > 55) {
        let edu_pic = document.getElementById('edu_poster');
        edu_pic.classList.add("animate__zoomInLeft");
    }
}

var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

function showSkills() {
    let about = document.querySelector("#about");
    about.style.height = "195vh";
    let skills = document.querySelector("#skill_section");
    skills.style.transition = "all 0.2s ease-in";
    skills.style.display = "block";
}
function closeSkill() {
    let close = document.querySelector("#skill_section");
    close.style.display = "none";
    let about = document.querySelector("#about");
    about.style.height = "146vh";
}