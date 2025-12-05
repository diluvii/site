import React, { useState } from "react";

function ToggleButton(props) {
    const [isOn, setIsOn] = useState(false);

    return (
        <div className="toggle-button">
            <button 
                className={`toggle ${isOn ? "on" : "off"}`} 
                onClick={() => setIsOn(!isOn)}
            />
        </div>
    )    
}

export default ToggleButton;
