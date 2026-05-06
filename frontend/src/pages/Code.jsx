import React from "react";
import './page_styles.scss'

function Code(props) {
    return (
        <div className="page">
            <h2>CS &gt;&gt;</h2>
            <p></p>
            <p>
                Hello!! I like compilers and programming languages, though am quite 
                interested in making and learning all kinds of computational things 
                really. Especially interested in making systems that preserve representational integrity 
                and behavioral guarantees under duress. I've done a few years of 
                software and NLP work, and studied 
                hardware security through voltage-based fault injection.
            </p>
            <p>
                I am about to start the MSCS program at Carnegie Mellon University. 
                For undergraduate studies, I double majored in Computer Science and 
                Cognitive Science (focus area in Linguistics) at Dartmouth College.
            </p>

            <p className="center">𓆝 𓆟 𓆞</p>

            <h3>Projects</h3>
            <ul>
                <li>
                    <a
                        href="https://glitch.cs.dartmouth.edu/" 
                        target="_blank"
                    >Fault injection research </a>
                    @ Trust Lab, Dartmouth College
                </li>
                <li>
                    <a 
                        href="https://github.com/diluvii/compiler"
                        target="_blank"
                    >miniC compiler </a>
                    with LLVM IR and a few optimizations (CSE, DCE, constant folding, 
                    constant propagation)
                </li>
            </ul>
            <p></p>
            <h3>Conferences</h3>
            <ul>
                <li>
                    <a
                        href="https://www.cs.uoregon.edu/research/summerschool/summer26"
                        target="_blank"
                    >OPLSS 2026</a>: Types, proofs, and program logics
                    </li>
            </ul>

            <p className="center">𓆝 𓆟 𓆞</p>

            <p>
                My GitHub is <a href="https://github.com/diluvii" target="_blank">here</a>.
            </p>
        </div>
    )
}

export default Code;