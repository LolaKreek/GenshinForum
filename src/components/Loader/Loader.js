import React from "react";
import "../../styles/loader.css";

const Loader = () => {
    return (
        <div className="spinner-container">
            <div className="loading-spinner">
                <div className="spinner"></div>
            </div>
        </div>
    );
}

export default Loader;