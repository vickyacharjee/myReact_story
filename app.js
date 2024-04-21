import React from "react"
import ReactDOM from "react-dom/client"




// its a good practice and a conventio to use the first letter as capital
const Title=()=>(
    <h1>hello from title jsx</h1>
)

const Title2=()=>(
    <h1>hello from title2 jsx</h1>
)

const HeadingComponent=()=>(
    
    <div id='container'>
        <Title/>
        <h1>hello from functional component</h1>
        <Title2/>
        <Title2/>
    </div>
)
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent/>);





