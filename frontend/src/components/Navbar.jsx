import React, { useState } from 'react';
import { NavLink } from 'react-router';
import './components_styles.scss'

function Navbar(props) {
    const [isMin, setIsMin] = useState(false);
    const handleClick = () => {
        setIsMin(isMin => !isMin)
    }

    return (
        <nav>
            <ul className="nav-pt2">
                <li><button>+</button></li>
                <li><button>t</button></li>
                <li><NavLink to="settings" className="NavLink">s</NavLink></li>
            </ul>
            <ul className={`
                nav-pt1 
                ${isMin ? "min" : "max"}
            `}>
                <li><NavLink to="/" className="NavLink">home</NavLink></li>
                <li><NavLink to="/art" className="NavLink">art</NavLink></li>
                <li><NavLink to="/code" className="NavLink">code</NavLink></li>
                {/*<li><NavLink to="/about" className="NavLink">about</NavLink></li>*/}
            </ul>
            <button
                className="min-max"
                onClick={handleClick}
            >
                {isMin? "<" : ">"}
            </button>
        </nav>
    )
}

export default Navbar;