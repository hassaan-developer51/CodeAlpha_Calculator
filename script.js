const display = document.getElementById("display");

function append(value){

    display.value += value;

}

function clearDisplay(){

    display.value = "";

}

function deleteLast(){

    display.value = display.value.slice(0,-1);

}

function calculate(){

    try{

        display.value = eval(display.value);

    }

    catch{

        display.value = "Error";

    }

}

document.addEventListener("keydown",function(e){

    const key = e.key;

    if(!isNaN(key) || key === "."){

        append(key);

    }

    else if(key==="+" || key==="-" || key==="*" || key==="/"){

        append(key);

    }

    else if(key==="Enter"){

        e.preventDefault();

        calculate();

    }

    else if(key==="Backspace"){

        deleteLast();

    }

    else if(key==="Escape"){

        clearDisplay();

    }

});