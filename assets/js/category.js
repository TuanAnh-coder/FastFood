import { Food__List } from "./Food_list.js";
import { params } from "./params.js";
import { fetchApi, menuCategory } from "./variable.js";

fetchApi('https://raw.githubusercontent.com/TuanAnh-coder/FastFood/refs/heads/main/database/dbCategory.json')
    .then(data => {
        let htmls = "";
        data.categories.forEach(element => {
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
