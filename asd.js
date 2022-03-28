function sum(num1, num2) {
    try {
        if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
            throw new Error("Number must be an integer");
        }
        return num1 + num2;
    } catch (e) {
        return e.message;
    }
}

function diff(num1, num2) {
    try {
        if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
            throw new Error("Number must be an integer");
        }
        return num1 - num2;
    } catch (e) {
        return e.message;
    }
}
function mult(num1, num2) {
    try {
        if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
            throw new Error("Number must be an integer");
        }
        return num1 * num2;
    } catch (e) {
        return e.message;
    }
}
function div(num1, num2) {
    try {
        if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
            throw new Error("Number must be an integer");
        }
        return num1 / num2;
    } catch (e) {
        return e.message;
    }
}
