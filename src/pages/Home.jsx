import React from "react";
import { Link } from 'react-router-dom';
import './page_styles.scss';

import Footnote from "../components/Footnote";
function Home(props) {
    return (
        <div className="page home">
            <h1>strange birds &gt;&gt;</h1>
            <p>𓅪.˚⊹ ོ</p>
            <p></p>
            <p className="desc-home">
                Hii!! I am called Sam<sup>1</sup>, and this here is my website. I do <a href="/art">art</a> and writing, <a href="/cs">computation</a> and cognition<sup>2</sup>; 
                sometimes artifacts of such endeavors make their way here.
            </p>
            <p>I also like linguistics and Boston, MA.</p>
            <Footnote>
                <p>1. i am also called "yawen"</p>
                <p>2. barely</p>
            </Footnote>
        </div>
    )
}

export default Home;