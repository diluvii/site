import React from "react";
import './page_styles.scss'

const asset = (path) => `${import.meta.env.BASE_URL}${path}`.replace(/\/+/g, '/');

function About(props) {
    return (
        <div className="page about">
            <h2>about &gt;&gt;</h2>
            <p></p>
            <p>
                My name is Yawen (they/them). I dwell in 
                the swamps where the fish are afraid of me.
                (This is pictured below.)
            </p>
            <p>
                I study CS and linguistics, and aim to live 
                close to nature and make things with my hands. 
                My academic interests are as follows—compilers, 
                PL, natural language as a representational medium 
                for cognition. I also like semantic typology, 
                learning languages, long walks on the train tracks or
                in the woods, post-punk music, all kinds of art.
            </p>
            <p>
                I've lived in Nanjing, the San Francisco Bay Area, and 
                Hanover NH.
            </p>
            <p className="center">𓆝 𓆟 𓆞</p>
            <img 
                className="img-about"
                src={asset("/me.webp")}
                loading="lazy"
            />
        </div>
    )
}

export default About;