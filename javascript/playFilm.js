import homeApi from "./api/homeApi"
import { related } from "./page/playFilm/related"

async function playFilm() {
    const title = document.querySelector('.playFilm__title > p')
    const img = document.querySelector('.playFilm__avt')
    const playQuocgia = document.querySelector('.playFilm__quocgia > p')
    const playThoigian = document.querySelector('.playFilm__thoigian> p')
    const playDienvien = document.querySelector('.playFilm__dienvien > p')
    const playTheloai = document.querySelector('.playFilm__theloai > p')
    const playNoidung = document.querySelector('.playFilm__noidung> p')
    const trailer = document.querySelector('.playFilm__trailer a')

    const api = await homeApi.getContentFilm(localStorage.getItem('slug'))
    const dataApi = api.movie
    const category = dataApi.category
    // console.log(category);
    related(category)

    playNoidung.textContent = dataApi.content
    playQuocgia.textContent = dataApi.country[0].name
    playThoigian.textContent = dataApi.time
    title.textContent = dataApi.name
    playTheloai.textContent = dataApi.type
    playDienvien.textContent = dataApi.actor
    img.src = dataApi.poster_url
    console.log(dataApi.trailer_url);
    trailer.href = dataApi.trailer_url

    // trailer.addEventListener('click', () => {
    //     window.location.href = 
    // })
}

(() => {
    playFilm()
})()