const body = document.querySelector("body");
const heading = document.querySelector(".heading");
const borderDiv = document.querySelector("#icon2").style;
// const btn = document.querySelector("button");
const text = document.querySelector(".text");

let r;
let g;
let b;

body.addEventListener("click", () => {
    const newColor = makeNewColor();
    // const value=newColor.indexOf("/");
    // const rgbValues = newColor.substring(0, );
    const theme = lightOrDarkColor(r, g, b);
    body.style.backgroundColor = newColor;
    text.textContent = newColor;
    if (theme === "dark") {
        heading.style.color = "#fefae0";
        borderDiv.borderColor = "#fefae0";
        borderDiv.color = "#fefae0";
        text.style.color = "#fefae0";
    } else if (theme === "light") {
        heading.style.color = "black";
        borderDiv.borderColor = "black";
        borderDiv.color = "black";
        text.style.color = "black";
    }

    // heading.classList.add(".");
});

function makeNewColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    r = red;
    g = green;
    b = blue;
    return newColor = `rgb(${red},${green},${blue})`;
};

function lightOrDarkColor(r, g, b) {
    let hsp = Math.sqrt(
        0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b)
    );

    if (hsp > 127.5) {
        return 'light';
    }
    else {
        return 'dark';
    }
}