import React from 'react';
import { Quotes } from "../../type.ts";

interface Props {
    quote: Quotes;
    onDelete: (id: string) => void;
}

const Quote: React.FC<Props> = ({ quote,onDelete }) => {
    const handleDelete = () => {
        onDelete(quote.id);
    };

    return (
        <div className="card m-2 " style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{quote.author}</h5>
                <p className="card-text">{quote.text}</p>
                <p className="card-text">{quote.category}</p>
                <button className="btn btn-primary m-1">Change</button>
                <button className="btn btn-success" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
};

export default Quote;
