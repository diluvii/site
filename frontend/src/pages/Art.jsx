import React from "react";
import './page_styles.scss'

function Art(props) {
    const dummyArtposts = [
        {
            "title": "placeholder",
            "desc": "placeholder",
            "img": "/art/hanged-man.jpg"
        },
        {
            "title": "placeholder",
            "desc": "placeholder",
            "img": "/art/armand.webm"
        },
        {
            "title": "placeholder",
            "desc": "placeholder",
            "img": "/art/giordano.jpg"
        },
        {
            "title": "placeholder",
            "desc": "placeholder",
            "img": "/art/collage.jpg"
        },
        {
            "title": "placeholder",
            "desc": "placeholder",
            "img": "/art/anim-1.webm"
        },
        {
            "title": "placeholder",
            "desc": "placeholder",
            "img": "/art/boat.jpg"
        }
    ]

    return (
        <div className="page">
            <h2>&gt;&gt; art</h2>

            <div className="post-area art">
            {dummyArtposts.map((item, i) => {
                const isImage = item.img.endsWith(".webp") || item.img.endsWith(".png") || item.img.endsWith(".jpg");

                return (
                <div className="post art" key={i}>
                    {isImage ? (
                    <img src={item.img} loading="lazy" />
                    ) : (
                    <video
                        src={item.img}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    )}
                </div>
                );
            })}
            </div>
        </div>
    );
}

export default Art;