import React from "react";
import './page_styles.scss'

function Art(props) {
    const dummyArtposts = [
        {
            "title": "placeholder",
            "desc": "placeholder",
            "img-link": "/public/giordano.png"
        },
        {
            "title": "placeholder",
            "desc": "placeholder",
            "img-link": "/public/giordano.png"
        },
        {
            "title": "placeholder",
            "desc": "placeholder",
            "img-link": "/public/giordano.png"
        },
        {
            "title": "placeholder",
            "desc": "placeholder",
            "img-link": "/public/giordano.png"
        },
        {
            "title": "placeholder",
            "desc": "placeholder",
            "img-link": "/public/giordano.png"
        },
        {
            "title": "placeholder",
            "desc": "placeholder",
            "img-link": "/public/giordano.png"
        },
        {
            "title": "placeholder",
            "desc": "placeholder",
            "img-link": "/public/giordano.png"
        }
    ]

    return (
        <div className="page">
            <h2>&gt;&gt; art</h2>
            <div className="post-area art">
                {dummyArtposts.map(item => (
                    <div className="post art"
                    >
                        <img
                            src="/public/giordano.png"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Art;