import React from "react";
import "./Header.css";

export default function Header() {

    return (
        <div className="header-con">
            <div className="header-inner">
                <div className="header-logo">
                    <h3>My Experience!</h3>
                </div>
                <div className="header-input">
                    <input type="text" placeholder="Search..." className="input-tag"/>
                    <i className="fa-solid fa-magnifying-glass search-icon"></i>{/*Icon ထည့်ရန်!*/}
                </div>
                <ul className="header-ul">
                    <li className="header-li"><a className="header-a" href="#">Html</a></li>
                    <li className="header-li"><a className="header-a" href="#">Css</a></li>
                    <li className="header-li"><a className="header-a" href="#">JavaScript</a></li>
                    <li className="header-li"><a className="header-a" href="#">React.js</a></li>
                    <li className="header-li"><div className="nav-divider"></div></li>
                    <li className="header-li">
                        <select className="header-select">
                            <option className="header-option" value="1">Dark</option>
                            <option className="header-option" value="1">Light</option>
                            <option className="header-option" value="1">Auto</option>
                        </select>
                    </li>
                </ul>
            </div>
        </div>
    );
}