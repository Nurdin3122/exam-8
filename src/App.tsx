
import './App.css'
import Header from "./container/Header/Header.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./container/Home/Home.tsx";
import {useState} from "react";
import {Categories, Quotes} from "./type.ts";
import CreateQuotes from "./container/CreateQuotes/CreateQuotes.tsx";

const App = () => {
    const [quotes, setQuotes] = useState<Quotes[]>([]);
    const [categories, setCategories] = useState<Categories[]>([
        { title: 'Star wars', id: 'star-wars' },
        { title: 'Famous people', id: 'famous-people' },
        { title: 'Saying', id: 'saying' },
        { title: 'Humour', id: 'humour' },
        { title: 'Motivational', id: 'motivational' },
    ])


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
