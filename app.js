import React from "react"
import ReactDOM from "react-dom/client"


const Header=()=>{
    return(
        <div className="header">
          <div className="logo-container">
            <img className="logo-img" src="data:image/png;base64,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"/>
          </div>
          <div className="link-container">
            <ul type="none" className="ul-container">
                <li>Home</li>
                <li>About-us</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
          </div>
        </div>
    )
}

const Body=()=>{
    return(
        <div className="body">
            <div className="search"> Search </div>
            <div className="res-container">
            <RestaurantCard resName="KFC" cuisineType="western" rating="4.4" orderWithin="38-min" /> 
            <RestaurantCard resName="MC-Donald" cuisineType="american" rating="4.0" orderWithin="40-min"/>
            <RestaurantCard resName="DOMINOS" cuisineType="american" rating="3.9" orderWithin="40-min"/>
            </div>
        </div>
    )
}
const RestaurantCard=(props)=>{
    const {resName,cuisineType}=props;
    console.log(props);
    return(
        <div className="resCard">
            <img className="resCardImage" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mocil3npmwpcdcfaxql1"/>
            <h3>{props.resName}</h3>
            <h4>{props.cuisineType}</h4>
            <h4>{props.rating}</h4>
            <h5>{props.orderWithin}</h5>
        </div>
    )
}
const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);





