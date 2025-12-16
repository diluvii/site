import React from "react";
import './page_styles.scss'

function Home(props) {
    return (
        <div className="page home">
            <h2>&gt;&gt; welcome to my site! :)</h2>
            <p>—</p>
            <p>
                Hello!! I'm Yawen (they/any). I do software development, systems programming, NLP, 
                and all sorts of art. 🍊🌿✨
            </p>
            <p>
                I'm a senior at Dartmouth College, where I am acquiring majors in Computer Science and Cognitive Science. 
                I've done software work on several projects, and am branching out into systems and NLP. Currently researching
                hardware fault injection in a cybersecurity lab, and developing a 2D platformer game in my free time.
            </p>
            <p>
                I adore post-punk music and my favorite programming language is Rust. In my free time I like 
                to learn languages (natural or programming) and take walks in the woods.
            </p>
            <p>
                Feel free to reach out with queries regarding art commissions (I do illustrations, graphic design, and UI/UX) or any sort of programming 
                project! I am emailable at <a href="mailto:yawen.xue.26@dartmouth.edu">yawen.xue.26@dartmouth.edu</a>.
            </p>

            <div className="section resume">
                {/*<div className="soc-med-bar">
                    <button className="soc-med">github</button>
                    <button className="soc-med">goodreads</button>
                    <button className="soc-med">instagram</button>
                </div>*/}
                <p>&gt;&gt; <a href="https://github.com/diluvii" target="_blank">github</a></p>
                <p>&gt;&gt; <a href="/resume2.pdf" target="_blank" rel="noopener noreferrer">click here for my resume</a> :)</p>
            </div>
        </div>
    )
}

export default Home;