import React from "react";
import { Link } from 'react-router-dom';
import './page_styles.scss';

function Home(props) {
    return (
        <div className="page home">
            <h2>strange birds &gt;&gt;</h2>
            <p>𓅪.˚⊹ ོ</p>
            <p></p>
            <p className="desc-home">
                This is Yawen's site. Here you can find things on&nbsp;
                <Link to="/cs">CS</Link>, <Link to="/art">art</Link>, linguistics, cognitive science,
                et cetera :)
            </p>
        </div>
    )
}

export default Home;