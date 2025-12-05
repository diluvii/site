import React from "react";
import './page_styles.scss'

function Art(props) {
    const dummyArtposts = [
        {
            "title": "placeholder",
            "desc": "placeholder",
            "img": "/art/hanged-man.PNG"
        },
        {
            "title": "placeholder",
            "desc": "placeholder",
            "img": "/art/armand.GIF"
        },
        {
            "title": "placeholder",
            "desc": "placeholder",
            "img": "/art/giordano.png"
        },
        {
            "title": "placeholder",
            "desc": "placeholder",
            "img": "/art/collage.PNG"
        },
        {
            "title": "placeholder",
            "desc": "placeholder",
            "img": "/art/anim-1.gif"
        },
        {
            "title": "placeholder",
            "desc": "placeholder",
            "img": "/art/boat.PNG"
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
                            src={item.img}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Art;