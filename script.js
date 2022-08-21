const graphicDesignButton = document.querySelector("#gd");
const writingSamplesButton = document.querySelector("#ws");
const webDesignButton = document.querySelector("#wd");
const illustrationButton = document.querySelector("#ill");

graphicDesignButton.addEventListener('click', () => {
    window.location.href = "graphic-design.html";
});

writingSamplesButton.addEventListener('click', () => {
    window.location.href = "writing-samples.html";
});

webDesignButton.addEventListener('click', () => {
    window.location.href = "web-design.html";
});

illustrationButton.addEventListener('click', () => {
    window.location.href = "illustrations.html";
});

const instagram = document.querySelector("#ig");
const linkedIn = document.querySelector("#li");
const email = document.querySelector("#email");

instagram.addEventListener('click', () => {
    window.location.href = "https://www.instagram.com/jazzlyn.miller.designs";
});

linkedIn.addEventListener('click', () => {
    window.location.href = "https://www.linkedin.com/in/jazzlyn-m/";
});

email.addEventListener('click', () => {
    window.location.href = "mailto: millerjazzlyna@gmail.com";
});