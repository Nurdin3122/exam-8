import React, { useState } from 'react';
import { Categories, newQuotes } from "../../type.ts";
import { useNavigate } from "react-router-dom";
import axiosApi from "../../axiosApi.ts";

interface Props {
    categories: Categories[];
}

const CreateQuotes: React.FC<Props> = ({ categories }) => {
    const navigate = useNavigate();
    const [newQuote, setNewQuote] = useState<newQuotes>({
        author: '',
        text: '',
        category: '',
    });

    const onFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const selectedCategory = categories.find(category => category.title === newQuote.category);
        const saveQuote = {
            ...newQuote,
            category: selectedCategory ? selectedCategory.id : ''
        };

        try {
            await axiosApi.post('/quotes.json', saveQuote);
        } finally {
            navigate('/');
        }
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = event.target;

        setNewQuote((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <form onSubmit={onFormSubmit}>
            <div className="form-group mt-5">
                <select
                    className="form-select"
                    aria-label="Default select example"
                    value={newQuote.category}
                    name="category"
                    id="category"
                    onChange={onChange}
                >
                    <option value="" disabled>Выберите категорию</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.title}>{category.title}</option>
                    ))}
                </select>

                <div className="mb-3 mt-3">
                    <label htmlFor="author" className="form-label">Автор</label>
                    <input
                        name="author"
                        type="text"
                        className="form-control"
                        id="author"
                        placeholder="Author"
                        value={newQuote.author}
                        onChange={onChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Текст цитаты</label>
                    <textarea
                        name="text"
                        className="form-control"
                        id="text"
                        rows="3"
                        value={newQuote.text}
                        onChange={onChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Сохранить</button>
            </div>
        </form>
    );
};

export default CreateQuotes;
