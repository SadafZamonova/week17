let input = document.querySelector("input");
let button = document.querySelector("button");
let resultNode = document.querySelector(".result");
let reg = /viagra|XXX/gim;

function onClick() {
    let value = input.value;
    if (reg.test(value)) {
        let result = value.replace(reg, "***");
        resultNode.textContent = result;
    } else {    
        resultNode.textContent = "Прошли!";
    }
}

button.addEventListener("click", onClick);