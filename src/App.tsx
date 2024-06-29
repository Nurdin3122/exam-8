
import './App.css'
import Header from "./container/Header/Header.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./container/Home/Home.tsx";
import React, {useCallback, useEffect, useState} from "react";
import {Categories, Quotes, QuotesAPI} from "./type.ts";
import CreateQuotes from "./container/CreateQuotes/CreateQuotes.tsx";
import axiosApi from "./axiosApi.ts";
import OneOfTheCategoryQuote from "./components/Quotes/OneOfTheCotegoryQuote.tsx";



const App = () => {
    const [quotes, setQuotes] = useState<Quotes[]>([]);
    const [categories, setCategories] = useState<Categories[]>([
        { title: 'Star wars', id: 'star-wars' },
        { title: 'Famous people', id: 'famous-people' },
        { title: 'Saying', id: 'saying' },
        { title: 'Humour', id: 'humour' },
        { title: 'Motivational', id: 'motivational' },
    ])

    const fetchQuotes = useCallback(async () => {
        try {
            const { data:response } = await axiosApi.get<QuotesAPI | null>('/quotes.json');
            const postsArray: Quotes[] = Object.keys(response).map(id => {
              return {
                  ...response[id],
                  id,
              }
            });
            setQuotes(postsArray);
        } catch (error) {
            console.error('Ошибка при загрузке цитат:', error);
        }
    }, []);
    
    

    useEffect(() => {
        void fetchQuotes();
    }, [fetchQuotes]);

    const deleteQuote = async (id: string) => {
        try {
            await axiosApi.delete(`/quotes/${id}.json`);
            setQuotes(prevQuotes => prevQuotes.filter(quote => quote.id !== id));
        } catch (error) {
            console.error('Ошибка при удалении цитаты:', error);
        }
    };





    return (
    <>
      <header>
          <Header/>
      </header>
      <main>
          <Routes>
              <Route path="/" element={<Home categories={categories} quotes={quotes} deleteQuote={deleteQuote}/>}/>
              <Route path="/add" element={<CreateQuotes categories={categories} quotes={quotes} onDelete/>}/>
              {categories.map(category => (
                  <Route key={category.id} path={`/category/${category.id}`} element={<OneOfTheCategoryQuote categoryId={category.id}  categoryTitle={category.title}/>} />
              ))}
          </Routes>

      </main>
    </>
  )
};

export default App
