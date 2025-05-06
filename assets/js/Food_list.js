import { params } from "./params.js";
import { fetchApi, menuProduct } from "./variable.js";

export function Food__List(){
    fetchApi(`https://dummyjson.com/c/03db-06b6-4415-b0b5/products/category/${params.category}`)
    .then(data => {
        let htmls = data.products.map(item => {
            return `<div class="product__item"><div class="product__image"><img src="${item.image}" alt=""></div>
                    <div class="product__name">${item.name}</div>
                    <div class="product__ingredients">${item.ingredients}</div>
                    <div class="product__price">${item.price}$</div></div>`
        })
        menuProduct.innerHTML = htmls.join("");
    })
}
