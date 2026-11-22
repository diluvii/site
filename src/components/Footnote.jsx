import React from 'react';

function Footnote({ children }) {
    return (
        <div className="footnote">
            <hr />
            {children}
        </div>
    )
}

export default Footnote;