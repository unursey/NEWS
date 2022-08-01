
import {renderPage, } from "./renderPage.js";
import { search } from "./search.js";
import { changeSelect } from "./changeSelect.js";


export const init = () => { 
    renderPage();
    search();
    changeSelect();
}

