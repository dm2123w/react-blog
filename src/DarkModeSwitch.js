import React from "react";
import cx from "classnames";

const DarkModeSwitch = ({ rounded = false, isToggled, onToggle }) => {
    const sliderCX = cx("slider", { rounded: rounded });
    return (
        <label className="switch">
            <input type="checkbox" checked={isToggled} onChange={onToggle} />
            <span className={sliderCX} />
        </label>
    );
};

export default DarkModeSwitch;
