import React from 'react';
import { Quotes } from "../../type.ts";

interface Props {
    quote: Quotes;
}

const Quote: React.FC<Props> = ({ quote }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{quote.author}</h5>
                <p className="card-text">{quote.text}</p>
                <p className="card-text">{quote.category}</p>
                <button className="btn btn-primary m-1">Remake</button>
                <button className="btn btn-success">Delete</button>
            </div>
        </div>
    );
};

export default Quote;
