import React from 'react';
import {Categories} from "../../type.ts";
import {Link} from "react-router-dom";
interface Props {
    categories:Categories[];
}

const CategoriesLeftSide:React.FC<Props> = ({categories}) => {
    return (
        <div className="col-4">
            <ul>
                <li><Link to="/">All</Link></li>
                {categories.map(category => (
                    <li key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoriesLeftSide;