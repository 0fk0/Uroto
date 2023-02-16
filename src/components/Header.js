import React from "react";
import miniIcon from "../img/miniIcon.png"

function Header(){
    return (
        <div id="Header">
            <img src={miniIcon}/>
            <i>Uroto</i>
        </div>
    );
}

export default Header