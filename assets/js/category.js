import { Food__List } from "./Food_list.js";
import { params } from "./params.js";
import { fetchApi, menuCategory } from "./variable.js";

fetchApi('https://mocki.io/v1/26c3314d-e38c-4c54-895c-0338d94e6553')
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
