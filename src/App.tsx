
import './App.css'
import Header from "./container/Header/Header.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./container/Home/Home.tsx";
import {useEffect, useState} from "react";
import {Categories, Quotes} from "./type.ts";
import CreateQuotes from "./container/CreateQuotes/CreateQuotes.tsx";
import axiosApi from "./axiosApi.ts";

const App = () => {
    const [quotes, setQuotes] = useState<Quotes[]>([]);
    const [categories, setCategories] = useState<Categories[]>([
        { title: 'Star wars', id: 'star-wars' },
        { title: 'Famous people', id: 'famous-people' },
        { title: 'Saying', id: 'saying' },
        { title: 'Humour', id: 'humour' },
        { title: 'Motivational', id: 'motivational' },
    ])

    useEffect(() => {
        const fetchQuotes = async () => {
            try {
                const { data } = await axiosApi.get('/quotes.json');
                const postsArray: Quotes[] = Object.keys(data).map(key => ({
                    id: key,
                    author: data[key].author,
                    category:data[key].category,
                    text:data[key].text,
                }));
                setQuotes(postsArray);
            } catch (error) {
                console.error('Ошибка при загрузке цитат:', error);
            }
        };
        void fetchQuotes();
    }, []);




  return (
    <>
      <header>
          <Header/>
      </header>
      <main>
          <Routes>
              <Route path="/" element={<Home categories={categories} quotes={quotes}/>}/>
              <Route path="/add" element={<CreateQuotes categories={categories} quotes={quotes}/>}/>
          </Routes>

      </main>
    </>
  )
};

export default App
