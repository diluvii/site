import React from "react";
import { Link } from 'react-router-dom';
import './page_styles.scss';

function Code(props) {
    return (
        <div className="page">
            <h2>CS & adjacencies &gt;&gt;</h2>
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
            <p>
                My GitHub is <a href="https://github.com/diluvii" target="_blank">here</a>. 
                My CV will be <Link to="/cv">here</Link>. 
                You can contact me at yawenxue [at] cmu [dot] edu.
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
                    >Oregon Programming Languages Summer School (OPLSS) 2026</a>: Types, proofs, and program logics
                    </li>
            </ul>

            <p className="center">𓆝 𓆟 𓆞</p>

            <h3>Other Work</h3>
            <ul>
                <li>
                    <strong>(In progress) </strong>
                    <a
                        href="https://github.com/diluvii/world-wide-whale"
                        target="_blank"
                    >World Wide Whale</a>: A computer game where you play as the World Wide Whale 
                    virus; your objective is to infiltrate someone's computer system.
                </li>
                <li>
                    <strong>(Upcoming) </strong>
                    <a
                    >Forgles</a>: My undergraduate Cognitive Science thesis on category learning under 
                    verbal interference.
                </li>
            </ul>
        </div>
    )
}

export default Code;