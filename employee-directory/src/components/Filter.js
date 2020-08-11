import React from "react";
import "./filter.css";

function Filter() {
    return (
            <div className="table-responsive">
                <input className="input" type="text" ></input>
                <button type="submit">Search</button>
            </div>
    )
}

export default Filter;