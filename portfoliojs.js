// RUN AFTER PAGE LOAD
document.addEventListener("DOMContentLoaded", function () {

    // TYPING EFFECT
    const text = "BTech Student | Java Developer | Frontend Learner";
    const typingElement = document.getElementById("typing");

    let i = 0;

    function typingEffect() {
        if (i < text.length) {
            typingElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typingEffect, 50);
        }
    }

    // CLEAR BEFORE START (important fix)
    typingElement.innerHTML = "";
    typingEffect();
});
function downloadResume() {
    window.open("Resume.pdf", "_blank");
}

// SCROLL TO SECTION
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}


// BUTTON ACTIONS
function showMessage() {
    alert("Thanks for visiting my portfolio!");
}

function openCert() {
    window.open("java.html", "_blank");
}
function openC() {
    window.open("c.html", "_blank");
}
function openDSA() {
    window.open("dsa.html", "_blank");
}

function openHTML() {
    window.open("html.html", "_blank");
}

function openCSS() {
    window.open("css.html", "_blank");
}

function openJS() {
    window.open("js.html", "_blank");
}

function project1Alert() {
    window.open("https://github.com/nitinkumar-prog/JAVAchattingapplication", "_blank");
}
function project2Alert() {
  window.open("index.html", "_blank");
}

function downloadResume() {
    window.location.href = "Resume.pdf";
}
function hireMe() {
    window.open("hireme.html", "_blank");
}


// SOCIAL LINKS (UPDATE YOUR LINKS HERE)
function openGitHub() {
    window.open("https://github.com/dashboard", "_blank");
}

function openLinkedIn() {
    window.open("https://www.linkedin.com/in/nitin-kumar-prajapati-41abb2325/", "_blank");
}


// SCROLL ANIMATION (FADE IN)
window.addEventListener("scroll", function () {
    let sections = document.querySelectorAll("section");

    sections.forEach(section => {
        let position = section.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {
            section.classList.add("show");
        }
    });
});
