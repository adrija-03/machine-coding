const displayScreen = document.querySelector('#display-screen')
const buttons = document.querySelectorAll('button')
let displayedExp = ""

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let currentChar = e.target.textContent
        if (currentChar === "CE") {
            displayedExp = ""
            displayScreen.value = displayedExp
            return
        }
        if (currentChar === "=") {
            //calculation
            let result = calculation(displayedExp)
            displayedExp = ""
            displayScreen.value = result
            return
        }
        displayedExp = displayedExp + (currentChar);
        if(currentChar === '/' || currentChar === '*' || currentChar === '-' || currentChar === '+' || currentChar === '%'){
            return;
        }
        displayScreen.value = currentChar
    });
});

function calculation(expression) {
    const expressionArray = splitExpression(expression)
    const postfix = infixToPostfix(expressionArray)
    const result = calculate(postfix)
    return result;
}


function splitExpression(expression) {
    const expressionArr = [];
    let num = "";
    for (let x = 0; x < expression.length; x++) {
        let char = expression[x];

        if (/^(0|[1-9]\d*)?(\.\d+)?(?<=\d)$/.test(char)) {
            num += char;
            continue;
        }

        if (num) {
            expressionArr.push(num);
            num = "";
        }

        if (char === '(' || char === ')' || char === '%' || char === '/' || char === '*' || char === '-' || char === '+') {
            expressionArr.push(char);
        } else {
            throw new Error(char + " is an invalid character")
        }
    }

    if (num) {
        expressionArr.push(num);
    }
    return expressionArr;
}

function infixToPostfix(expArr) {
    const precedence = { '+': 1, '-': 1, '*': 2, '/': 2, '%': 2 };
    let stack = [];
    let result = [];

    for (let x = 0; x < expArr.length; x++) {
        let charac = expArr[x];

        if (/^(0|[1-9]\d*)?(\.\d+)?(?<=\d)$/.test(charac)) {
            result.push(parseFloat(charac))
        } else if (charac === '(')
            result.push(charac)
        else if (charac === ')') {
            while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                result.push(stack.pop());
            }
            stack.pop();
        } else {
            while (stack.length > 0 && stack[stack.length - 1] !== '(' && precedence[stack[stack.length - 1]] >= precedence[charac]) {
                result.push(stack.pop());
            }
            stack.push(charac)
        }
    }

    while (stack.length > 0) {
        result.push(stack.pop());
    }

    return result;
}

function calculate(postfix) {
    let stack = [];
    for (let x = 0; x < postfix.length; x++) {
        if (typeof postfix[x] === 'number') {
            stack.push(postfix[x])
            continue;
        }

        const a = stack.pop();
        const b = stack.pop();

        switch (postfix[x]) {
            case '+':
                stack.push(a + b);
                break;
            case '-':
                stack.push(b - a);
                break;
            case '*':
                stack.push(a * b);
                break;
            case '/':
                if (a === 0)
                    throw new Error("Division by zero error")
                stack.push(b / a);
                break;
            case '%':
                stack.push(b % a);
                break;
        }
    }

    return stack[0];
}


//scope of improvement
//multi input 2 + 1 = 3 + 6 = Nan arha hain usko calc karna hain
//2/0 should return error
//not able to style 100 or 10
//2 + (3) = NaN
