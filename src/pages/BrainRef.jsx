import React from 'react';
import './page_styles.scss';

function BrainRef(props) {
    return (
        <div className="page">
            <h2>brain atlas &gt;&gt;</h2>
            <p>
                Reference manual, for research projects and general learning. Under construction.
            </p>
            <p className="center">𓆝 𓆟 𓆞</p>
            <div className="brain-containers">
            <div className="brain-container">
                <div className="left">
                    <img src="/brain/brain-lateral.png"></img>
                </div>
                <div className="right">
                    <h3>Gyri & sulci</h3>
                    <p>Hover over a region to read about it.</p>
                </div>
            </div>
            <div className="brain-container">
                <div className="left">
                    <img src="/brain/brain-lateral.png"></img>
                </div>
                <div className="right">
                    <h3>Neurolinguistics</h3>
                    <p>Hover over a region to read about it.</p>
                </div>
            </div>
            <div className="brain-container">
                <div className="left">
                    <img src="/brain/brain-medial.png"></img>
                </div>
                <div className="right">
                    <h3>Medial view</h3>
                    <p>Hover over a region to read about it.</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default BrainRef;