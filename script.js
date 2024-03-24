
// Add your custom JavaScript code here
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.1)";
        button.style.transition = "transform 0.3s";
    });
    button.addEventListener("mouseout", () => {
        button.style.transform = "scale(1)";
    });
});

const header = document.querySelector("header");
const h1 = header.querySelector("h1");

h1.addEventListener("mouseover", () => {
    h1.style.textShadow = "-1px -1px 10px blue, 1px -1px 10px blue, -1px 1px 10px black, 1px 1px 10px blue";
});

h1.addEventListener("mouseout", () => {
    h1.style.textShadow = "-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white";
});