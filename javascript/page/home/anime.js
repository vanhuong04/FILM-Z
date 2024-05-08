import homeApi from "../../api/homeApi";
let item
let conent
export async function anime() {
    document.addEventListener('DOMContentLoaded', async () => {
        const api = await homeApi.getAnime('limit=7')
        const animeApi = api.data.items
        const body = document.querySelector('.anime__body')
        console.log(animeApi);

        const promises = await animeApi.map(async (film, idx) => {
            const infoFilm = await homeApi.getInfoFilm(film.slug)

            return `
        <a href="../../../playFilm.html" class="anime__item">
            <div class="anime__content none">
                <div class="anime__title">
                    <div class="anime__name"><p>${film.name}</p></div>
                    <div class="anime__year"><p>${film.year}</p></div>
                </div>
                <div class="anime__button"><button>Xem ngay</button></div>
            </div>
            <img class="anime__img" src="${infoFilm.movie.poster_url}" alt="" />
        </a>       
        `

        })

        const template = await Promise.all(promises)
        template.forEach(film => {
            body.innerHTML += film
        })


        item = document.querySelectorAll('.anime__item')
        conent = document.querySelectorAll('.anime__content')
        item[0]?.classList.add('anime__full-with')
        conent[0]?.classList.remove('none')

        item.forEach((film, idx) => {
            film.addEventListener('mouseover', () => {
                item.forEach(film => {
                    film.classList.remove('anime__full-with')
                })
                conent.forEach(film => {
                    film.classList.add('none')
                })
                film.classList.add('anime__full-with')
                conent[idx].classList.remove('none')
            })
        })


        item.forEach((film, idx) => {
            film.addEventListener('click', async () => {
                // window.location.href = '../../../playFilm.html';
                localStorage.setItem('slug', animeApi[idx].slug)
            })
        })
    })


}


