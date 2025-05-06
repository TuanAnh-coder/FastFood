export const fetchApi = async (url) => {
    const response = await fetch(url);
    const result = await response.json();
    return result;
}
export const menuCategory = document.querySelector('.menu__category');
export const menuProduct = document.querySelector('.menu__product');