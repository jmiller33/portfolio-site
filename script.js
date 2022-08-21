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