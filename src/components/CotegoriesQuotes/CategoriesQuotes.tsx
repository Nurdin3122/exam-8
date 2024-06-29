import React from 'react';
import { Quotes} from "../../type.ts";
import Quote from "../Quote/Quote.tsx";
interface Props {
    quotes:Quotes[];
    deleteQuote: (id: string) => void;
}

const CategoriesQuotes:React.FC<Props> = ({quotes,deleteQuote}) => {


    return (
        <div className="d-flex flex-wrap ">
            {quotes.map((quote => (
                <Quote key={quote.id}  quote={quote} onDelete={deleteQuote} ></Quote>
            )))}
        </div>
    );
};

export default CategoriesQuotes;