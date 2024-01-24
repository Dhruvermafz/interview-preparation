// lexical scope defines how variable names are resolved in nested functions
// nested functions have access to the scope of their parent functions

// this is often confused with closure but lexical scope is only an important 

let x = 1;

const parentFunctions = () => {
    let myValue = 2;
    console.log(x)

    console.log(myValue)

    const childFunction = () => {
        console.log(x += 5)
        console.log(myValue += 1)
    }
    childFunction()
}

parentFunctions()