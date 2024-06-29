import React from 'react';
import { Categories, Quotes } from '../../type.ts';
import {Route, Routes } from 'react-router-dom';
import CategoriesQuotes from "../../components/CotegoriesQuotes/CategoriesQuotes.tsx";

import OneOfTheCategoryQuote from "../../components/Quotes/OneOfTheCotegoryQuote.tsx";
import CategoriesLeftSide from "../../components/Categories/CategoriesLeftSide.tsx";

interface Props {
    quotes: Quotes[];
    categories: Categories[];
    deleteQuote: (id: string) => void;
}

const Home: React.FC<Props> = ({ quotes, categories,deleteQuote }) => {


    return (
        <div className="row">
           <CategoriesLeftSide categories={categories}/>
            <div className="col-8">
                <h3>All</h3>
                <div className="row">
                    <Routes>
                        <Route path="/" element={<CategoriesQuotes quotes={quotes} categories={categories} deleteQuote={deleteQuote} />} />
                        {categories.map(category => (
                            <Route key={category.id} path={`/category/${category.id}`} element={<OneOfTheCategoryQuote categoryId={category.id} categoryTitle={category.title} />} />
                        ))}
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Home;
