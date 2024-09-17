const square = function(x) {
    return x * x;
}

let value = square(2)
// console.log(value)


const hummus = function(factor) {
    const ingredients = function(amount, unit, name) {
        let ingredientAmount = amount * factor

        if(ingredientAmount > 1) {
            unit += "s";
        }

        console.log(`${ingredientAmount}`)
    }

    
}


// fuction expression
const sayHello = function() {
    console.log("Hello")

}


var multiply = (a,b) => {
    return a * b
}

var multiply = function(a,b) {
    return a * b
}

function multiply(a,b) {
    return a * b
}

// 