import React from "react"
import ReactDOM from "react-dom/client"


// using React Element
const reactElement=React.createElement('h1',{id:"heading"},"Hello From React");

// Same thing via JSX
const jsx=<h1>Hello from JSX</h1>;
/*
    JSX is an transpiller React element
    JSX used a library 'Babel' in order to use as same a like HTML
    Note: JSX is not HTML code but act as same alike

    compliling line: ReactElement
        ReactElement => javaScript[Object]


    compliling line: JSX
        JSX[Babel] => ReactElement => javaScript[Object]
*/ 

//  React Components
//  1- Class Based Components[old]
//  2- Function Based Component Based Components[NEW]

const JsxComponent=()=>{
    return <h1>Hello from inside JSX Functions</h1>;
}

// same thing in different way to declare
// First way
const JsxComponentOne=()=> <h1>Hello from JSX function from singe line</h1>;

// Second Way
const JsxComponentTwo=()=>(
    <h1>Hello from JSX using round braces</h1>
)

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(JsxComponentTwo());