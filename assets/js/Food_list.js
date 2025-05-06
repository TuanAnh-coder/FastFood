import { params } from "./params.js";
import { fetchApi, menuProduct } from "./variable.js";

export function Food__List(){
    fetchApi(`https://mocki.io/v1/268ac791-5cdf-4a57-ac3e-6eabbdbe9525?category=${params.category}`)
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
