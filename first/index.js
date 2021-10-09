let clickButton = document.querySelector("button");


function onClick() {
    let fromInput = document.querySelector(".all").value;
   //let changeInput = fromInput.replase(/\s+/g, " ").trim();
    let array = fromInput.split(" ");

    let array1 = array[0];
    array1 = array1[0].toUpperCase() + array1.slice(1);
    let array2 = array[1];
     array2 = array2[0].toUpperCase() + array2.slice(1);
    let array3 = array[2];
    array3 = array3[0].toUpperCase() + array3.slice(1);


    let Fam = document.querySelector(".Fam");
    Fam.value = array1;
    let name = document.querySelector(".name");
    name.value = array2;
    let Otch = document.querySelector(".Otch");
    Otch.value = array3;
}

clickButton.addEventListener("click", onClick);