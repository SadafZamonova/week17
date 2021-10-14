let clickButton = document.querySelector("button");
clickButton.addEventListener(`click`, function () {
    let randomNums = [];

    for (let i = 0; i < 10; i++) {
        randomNums[i] = Math.round(Math.random() * 20 - 10);
        document.querySelector(".result").textContent = randomNums.join(" ,");
    }
    let sum = 0;
    let multiply = 1;
    for (r of randomNums) {
        sum += r;
        multiply *= r;
    }
    document.querySelector(".sum").textContent = sum;
    document.querySelector(".multiply").textContent = multiply;


    let arifm = +sum / randomNums.length;
    document.querySelector(".arifm").textContent = arifm;

    let maxNumber = (a, b) => {
            return a > b ? a : b;
        },
        minNumber = (a, b) => {
            return a < b ? a : b
        };
    document.querySelector(".max").textContent = randomNums.reduce(maxNumber);
    document.querySelector(".min").textContent = randomNums.reduce(minNumber)


})