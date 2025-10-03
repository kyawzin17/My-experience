import React from "react";
import "./Body.css";

export default function Body({ref}) {

    return (
        <div className="body-con">
            <div className="html-div body-c" ref={ref.htmlRef}>
                <div class="head-design">
                    <h1>HTML!</h1>
                    <p>✦•┈๑⋅⋯ ⋯⋅๑┈•✦</p>
                </div>
            </div>
            <div className="css-div body-c" ref={ref.cssRef}>
                <div class="head-design">
                    <h1>Css!</h1>
                    <p>✦•┈๑⋅⋯ ⋯⋅๑┈•✦</p>
                </div>
            </div>
            <div className="javascript-div body-c" ref={ref.javascriptRef}>
                <div class="head-design">
                    <h1>JavaScript!</h1>
                    <p>✦•┈๑⋅⋯ ⋯⋅๑┈•✦</p>
                </div>
            </div>
            <div className="react-div body-c" ref={ref.reactRef}>
                <div class="head-design">
                    <h1>React!</h1>
                    <p>✦•┈๑⋅⋯ ⋯⋅๑┈•✦</p>
                </div>
            </div>
        </div>
    )
}