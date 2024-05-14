import React from "react"
import ReactDOM from "react-dom/client"

// its a good practice and a convention to use the first letter as capital
const Title=()=>(
    <h1>hello from title jsx</h1>
)

// for functional component 
const Title2=()=>(
    <h1>hello from title2 jsx</h1>
)
const Title3=()=>(
    <h1>hello from title3 jsx</h1>
)
// for passing as element
const testName=<span>Yo there from inside element</span>
const name=10// line no. 16 and 24 are embedding js inside jsx
const HeadingComponent=()=>(
    <div id='container'>
        <Title/>
        <h1>hello from functional component</h1>
        <Title2/>
        {/* {Title3()}// The functional component is used or passed as react element like {addOrCall The function here()} */}
        <Title2></Title2> // another way of adding the cmponent and that works the same 
        <Title2/>// This is component 
        {testName}// This is simple react element
       <h3> so the output is {name+112}</h3>
    </div>
)

//   This is done using normal function so here mandatorily we need to use or pass return statement along with () Braces
// const HeadingComponent=function(){
//     return(
//     <div id='container'>
//         <Title/>
//         <h1>hello from functional component</h1>
//         <Title2/>
//         <Title2/>
//     </div>
//     )
// }
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent/>);





