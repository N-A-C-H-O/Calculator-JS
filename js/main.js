const calculate = (number) => {
    display.value+= number;
}

const result = () => {
    try {
        display.value = eval(display.value)
    }
    catch {
        Swal.fire({
            icon: 'error',
            title: 'Syntax Error',
        });
    }
}

const clearDisplay = () => {
    display.value = " ";
}

const deleteDisplay = () => {
    display.value = display.value.slice(0,-1)
}

btnClear.onclick = (clearDisplay());
btnDel.onclick = deleteDisplay();
btnPercent.onclick = calculate('%');
btnDiv.onclick = calculate('/');
btnSeven.onclick = (calculate(7));
btnEight.onclick = calculate(8);
btnNine.onclick = calculate(9);
btnMul.onclick = calculate('*');
btnFour.onclick = calculate(4);
btnFive.onclick = calculate(5);
btnSix.onclick = calculate(6);
btnSub.onclick = calculate('-');
btnOne.onclick = calculate(1);
btnTwo.onclick = calculate(2);
btnThree.onclick = calculate(3);
btnAdd.onclick = calculate('+');
btnDot.onclick = calculate('.');
btnZero.onclick = calculate(0);