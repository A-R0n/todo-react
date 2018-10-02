import React, {Component} from "react";
import App from "./App.js";
import "./App.css";

const list = (props) => {
    return (
        <div>
            <button onClick={(e) => props.eventHandler}> {props.textBox}</button>
        </div>
    )
}
export default list;