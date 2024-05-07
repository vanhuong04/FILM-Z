import homeApi from "../../api/homeApi";
import { related2 } from "./related";

async function movie() {
    const api = await homeApi.getContentFilm(localStorage.getItem('slug'))
    const dataApi = api.episodes[0].server_data[0].link_embed
    const iframe = document.querySelector('.iframe')
    const count = document.querySelector('.movie__count')
    const title = document.querySelector('.movie__title > p')
    const count2 = api.episodes[0].server_data

    title.textContent = `${api.movie.name} ${api.episodes[0].server_data[0].name || ''}`
    iframe.src = dataApi
    iframe.poster = api.movie.thumb_url
    const count3 = count2.map((item, idx) => {
        return ` <div class="movie__item"><p>Tập ${idx + 1}</p></div>`
    })

    const api2 = await homeApi.getContentFilm(localStorage.getItem('slug'))
    const dataApi2 = api2.movie
    const category = dataApi2.category
    related2(category)


    count3.forEach(i => {
        count.innerHTML += i
    });
    const countList = document.querySelectorAll('.movie__item')
    countList.forEach((item, idx) => {
        item.addEventListener('click', () => {
            const dataApi = api.episodes[0].server_data[idx].link_embed
            iframe.src = dataApi
            title.textContent = `${api.movie.name} ${api.episodes[0].server_data[idx].name || ''}`

        })
    })
    console.log(api);
}

(() => {
    movie()
})()