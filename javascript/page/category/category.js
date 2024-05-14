import { movieList } from "./movieListByCategory.js"


// import { header } from "../../main"
export function header2() {
    const nav = document.querySelectorAll('.header__item')
    nav.forEach((item, idx) => {
        item.addEventListener('click', () => {
            window.location.href = './category.html'
            localStorage.setItem('category', item.dataset.category)
            localStorage.setItem('apiCategory', '2')

        })
    })
}
(() => {
    header2()
    movieList()
})()