import homeApi from "../../api/homeApi";
import { category } from "../home/category";
let wrappes
let animeApi2
export async function movieList() {

    let page = 1
    const test = localStorage.getItem('apiCategory')
    let api

    // test seen category is the-loai or danh-sanh
    console.log(test);
    if (test === '1') {
        api = await homeApi.getByGenre(localStorage.getItem('category'), {
            params: {
                page,
                limit: 30
            }
        })
    } else if (test === '2') {

        api = await homeApi.getFilms(localStorage.getItem('category'), {
            params: {
                page,
                limit: 30
            }
        })
    }

    console.log(api);

    document.title = api.data.titlePage
    const body = document.querySelector('.Category__body')
    const title = document.querySelector('.Category__header > p')
    let animeApi = api.data.items
    title.textContent = api.data.titlePage

    // creat template
    const promises = await animeApi.map(async (film, idx) => {
        const infoFilm = await homeApi.getInfoFilm(film.slug)

        return `
        <div class="Category__item">
        <div class="Category__content">
            <div class="Category__title">
                <div class="Category__name"><p>${film.name}</p></div>
                <div class="Category__year"><p>${film.year}</p></div>
            </div>
            <div class="Category__button"><button>Xem ngay</button></div>
        </div>
        <img class="Category__img" src="${infoFilm?.movie?.poster_url}" alt="" />
    </div>      
    `

    })

    const template = await Promise.all(promises)
    template.forEach(film => {
        body.innerHTML += film
    })


    // Transfer me detail page 
    wrappes = document.querySelectorAll('.Category__item')
    wrappes.forEach((film, idx) => {
        film.addEventListener('click', async () => {
            window.location.href = './playFilm.html';
            localStorage.setItem('slug', animeApi[idx].slug || animeApi2[idx].slug)
        })
    })


    //Change the key when pressing the button ...
    const button = document.querySelector('.Category__footer > button')
    button.addEventListener('click', async () => {

        // test seen category is the-loai or danh-sanh
        page++
        if (test === '1') {
            api = await homeApi.getByGenre(localStorage.getItem('category'), {
                params: {
                    page,
                    limit: 30
                }
            })
            console.log('1');
        } else if (test === '2') {

            api = await homeApi.getFilms(localStorage.getItem('category'), {
                params: {
                    page,
                    limit: 30
                }
            })
            console.log('2');
        }
        window.scrollTo({
            top: 0,
            bahavior: 'smooth'
        })

        animeApi2 = api.data.items
        const name = document.querySelectorAll('.Category__name > p')
        const year = document.querySelectorAll('.Category__year > p')
        const img = document.querySelectorAll('.Category__img')

        animeApi2.forEach(async (item, idx) => {
            const infoFilm = await homeApi.getInfoFilm(item.slug)
            name[idx].textContent = item.name
            year[idx].textContent = item.year
            img[idx].src = infoFilm?.movie?.poster_url
        })

        wrappes.forEach((film, idx) => {
            film.addEventListener('click', async () => {
                localStorage.setItem('slug', animeApi2[idx].slug || animeApi[idx].slug)
                window.location.href = './playFilm.html';
            })
        })
    })
}

// movieList()



