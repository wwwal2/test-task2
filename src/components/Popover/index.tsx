import React, { useState } from "react";
import "./styles.css"

type PopoverProps = {
    tooltipMessage?: string;
    children: React.ReactNode
};

const Popover = ({ tooltipMessage, children }: PopoverProps) => {
    const [show, setShow] = useState<boolean>();

    const togglePopover = () => {
        setShow(!show)
    }

    // usually using classnames lib in this case, but didn"t want to overload the App with libs
    const messageStyle = `message ${show ? "visible" : "hidden"}`

    return (
        <div className="popover">
            <div className="popover-content" onClick={togglePopover}>
                {children}
            </div>
            <div className={messageStyle}>
                {tooltipMessage}
                <div className="hide-btn" onClick={togglePopover}>
                    Hide
                </div>
            </div>
        </div>
    );
};

export default Popover;