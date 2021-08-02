import React from "react";
import cx from "classnames";

const DarkModeSwitch = ({ rounded = false }) => {
    const sliderCX = cx("slider", { rounded: rounded });
    return (
        <label className="switch">
            <input type="checkbox" />
            <span className={sliderCX} />
        </label>
    );
};

export default DarkModeSwitch;
