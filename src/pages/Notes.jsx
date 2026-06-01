import React from 'react';
import { Link } from 'react-router-dom';
import './page_styles.scss';

function Notes(props) {
    return (
        <div className="page">
            <h2>expository notes &gt;&gt;</h2>
            <p>
                Notes on various things I'm learning! Hopefully incoming notes on compilers, PL,
                theory of computation; semantics & pragmatics, semantic typology, syntax.
            </p>

            <ul>
                <li>
                    <Link to="/notes/15503">Machine programming basics</Link>, courtesy of 15-503 @ CMU
                    </li>
            </ul>
        </div>
    )
}

export default Notes;