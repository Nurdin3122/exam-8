import React, { useState, useEffect } from 'react';
import { Quotes } from '../../type.ts';
import axiosApi from '../../axiosApi.ts';
import CategoriesQuotes from "../CotegoriesQuotes/CategoriesQuotes.tsx";

interface Props {
    categoryId: string;
    categoryTitle:string;
}

const OneOfTheCategoryQuote: React.FC<Props> = ({ categoryId,categoryTitle }) => {
    const [quotes, setQuotes] = useState<Quotes[]>([]);

    useEffect(() => {
        const fetchQuotesByCategory = async () => {
            try {
                const {data:response} = await axiosApi.get(`/quotes.json?orderBy="category"&equalTo="${categoryId}"`);
                const fetchedQuotes: Quotes[] = Object.keys(response).map(id => ({
                    ...response[id],
                    id,
                }));
                setQuotes(fetchedQuotes);
            } catch (error) {
                console.error('Ошибка при загрузке цитат по категории:', error);
            }
        };

        void fetchQuotesByCategory();
    }, [categoryId]);

    return (
        <div className="row">
            <h4 className="text-center mt-3">{categoryTitle}</h4>
            <div className="col-4">
            </div>
            <div className="col-8">
                <CategoriesQuotes quotes={quotes} deleteQuote=""/>
            </div>
        </div>

    );
};

export default OneOfTheCategoryQuote;
