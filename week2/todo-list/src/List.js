import React, {Component} from "react";
import App from "./App.js";
import "./App.css";


const list = (props) => {
    console.log(props);
    return (
        <div>
            <button onClick={(e) => props.eventHandler}> Add </button>
        </div>
    )
}
export default list;