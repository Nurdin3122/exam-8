import React from 'react';
import { Quotes} from "../../type.ts";
import Quote from "../Quote/Quote.tsx";
interface Props {
    quotes:Quotes[];
}

const CategoriesQuotes:React.FC<Props> = ({quotes}) => {
    console.log(quotes)
    return (
        <div>
            {quotes.map((quote => (
                <Quote key={quote.id}  quote={quote}></Quote>
            )))}
        </div>
    );
};

export default CategoriesQuotes;