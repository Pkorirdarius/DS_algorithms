const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function bisectionMethod(equation, lowerBound, upperBound, tolerance, maxIterations) {
    let f = (x) => eval(equation.replace(/x/g, x));
    let a = lowerBound;
    let b = upperBound;
    let c;
    let iteration = 0;

    if (f(a) * f(b) >= 0) {
        console.log("The function must have different signs at the bounds.");
        return;
    }

    while ((b - a) / 2 > tolerance && iteration < maxIterations) {
        c = (a + b) / 2;
        if (f(c) === 0) {
            break;
        } else if (f(c) * f(a) < 0) {
            b = c;
        } else {
            a = c;
        }
        iteration++;
        console.log(`Iteration ${iteration}: c = ${c}, f(c) = ${f(c)}`);
    }

    console.log(`The root is approximately at x = ${c} after ${iteration} iterations.`);
}

rl.question('Enter the equation (use "x" as the variable): ', (equation) => {
    rl.question('Enter the lower bound: ', (lowerBound) => {
        rl.question('Enter the upper bound: ', (upperBound) => {
            rl.question('Enter the error tolerance: ', (tolerance) => {
                rl.question('Enter the maximum number of iterations: ', (maxIterations) => {
                    bisectionMethod(equation, parseFloat(lowerBound), parseFloat(upperBound), parseFloat(tolerance), parseInt(maxIterations));
                    rl.close();
                });
            });
        });
    });
});