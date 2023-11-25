const btn = document.querySelectorAll(".button")
console.log(btn);
const body = document.querySelector("body")
btn.forEach((button) => {
    button.addEventListener("click", function (event) {
        if (event.target.id === "blue") {
            body.style.backgroundColor = "blue";
        }
        if (event.target.id === "green") {
            body.style.backgroundColor = "green";
        }
        if (event.target.id === "yellow") {
            body.style.backgroundColor = "yellow";
        }
        if (event.target.id === "pink") {
            body.style.backgroundColor = "pink";
        }
        if (event.target.id === "purple") {
            body.style.backgroundColor = event.target.id;
        }
    });
});

const form = document.querySelector("form")
form.addEventListener("submit", function (e) {
    e.preventDefault()
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#result")
    if (height === "" || height < 0 || isNaN(height)) {
        result.innerHTML = " Please give a valid height";
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = "Please give a valid weight";
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(1);
        result.innerHTML = `<span>${bmi}</span>`;
    }
});


const clock = document.getElementById("clock")

setInterval(function () {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);