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
