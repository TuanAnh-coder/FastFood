import { Food__List } from "./Food_list.js";
import { params } from "./params.js";
import { fetchApi, menuCategory } from "./variable.js";

fetchApi('https://raw.githubusercontent.com/TuanAnh-coder/FastFood/refs/heads/main/database/db.json/categories')
    .then(data => {
        let htmls = "";
        data.forEach(element => {
            htmls += `<div class="category__item">${element.name}</div>`
        });
        menuCategory.innerHTML = htmls;
        const listCategory = document.querySelectorAll('.menu__category .category__item');
        listCategory.forEach(item => {
            item.addEventListener('click', () => {
                params.category = item.textContent;
                Food__List();
            })
        })
        Food__List();
    })
