// "use strict"

let buttons = Array.from(document.getElementsByClassName('btn-numeric'));
let clearBtn = document.getElementsByClassName('clr-btn')[0];
let signBtn = document.getElementsByClassName('sign-btn')[0];
let oprBtn = Array.from(document.getElementsByClassName('oprBtn'));
let display = document.getElementsByClassName('display')[0];

let equalBtn = document.getElementsByClassName('eqlBtn')[0];





clearBtn.addEventListener('click', () => {
    display.innerText = "";
})


signBtn.addEventListener('click', () => {
    let num = display.innerText;
    console.log(num)
    if (num >= 0) {
        display.innerText *= -1;
    } else {
        display.innerText *= -1;
    }
})



buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        display.innerText += btn.innerHTML;
    })
});

oprBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        let operand1 = display.innerText;
        let operator = btn.innerText;
        console.log(operand1 ," " ,operator)
        display.innerText = "";

        equalBtn.addEventListener('click', () => {
            let operand2 = display.innerText;
            if(operator!=null){
                display.innerText = eval(operand1 + operator + operand2);
            }
            console.log(operand1 ," " ,operator, " ",operand2)
            operand1 = display.innerText;
            operator = null;
        })
    })
})
