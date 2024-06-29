import React from 'react';
import {Categories, Quotes} from "../../type.ts";
import {NavLink} from "react-router-dom";

interface Props {
    quotes:Quotes[];
    categories:Categories[];
}

const Home:React.FC<Props> = ({quotes,categories}) => {
    return (
        <div className="row">
            <div className="col-4">
               <ul className="mt-5">
                   {categories.map((category) => (
                       <li className="mt-3">
                           <a className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                              href="#">
                               <NavLink
                               to={"/"}>{category.title}</NavLink>
                           </a>
                       </li>
                   ))}
               </ul>
            </div>
            <div className="col-8">
                <h3>All</h3>
                <div className="row">

                </div>
            </div>

        </div>
    );
};

export default Home;