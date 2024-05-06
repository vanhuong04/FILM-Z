import homeApi from "../../api/homeApi";
let main
let wrappes
let gapWidth
let width
let positionX = 0
let idx = 0
export async function TV() {
    const api = await homeApi.getFilms('tv-shows', {
        params: {
            page: 0,
            limit: 10
        }
    })

    const body = document.querySelector('.TV__body')
    const animeApi = api.data.items
    const promises = await animeApi.map(async (film, idx) => {
        const infoFilm = await homeApi.getInfoFilm(film.slug)

        return `
        <div class="TV__item">
        <div class="TV__content">
            <div class="TV__title">
                <div class="TV__name"><p>${film.name}</p></div>
                <div class="TV__year"><p>${film.year}</p></div>
            </div>
            <div class="TV__button"><button>Xem ngay</button></div>
        </div>
        <img class="TV__img" src="${infoFilm.movie.poster_url}" alt="" />
    </div>      
    `

    })

    const template = await Promise.all(promises)
    template.forEach(film => {
        body.innerHTML += film
    })


    wrappes = document.querySelectorAll('.TV__item')
    main = document.querySelector('.TV__body')
    gapWidth = parseFloat(getComputedStyle(main).getPropertyValue('gap'));
    width = wrappes[0].offsetWidth + gapWidth

    wrappes.forEach((film, idx) => {
        film.addEventListener('click', async () => {

            window.location.href = './playFilm.html';
            localStorage.setItem('slug', animeApi[idx].slug)
        })
    })
    next()
    prev()

}


// next
export async function next() {
    const next = document.querySelector('.TV__next')
    next.addEventListener('click', () => {
        handleClick(1)
    })
}

// prev
export async function prev() {
    const next = document.querySelector('.TV__prev')
    next.addEventListener('click', () => {
        handleClick(-1)
    })
}


// handle click


function handleClick(value) {
    if (value === 1) {
        if (idx >= wrappes.length - 5) {
            idx = wrappes.length - 5
            return
        }
        idx++
        positionX = positionX - width
        main.style = `transform: translateX(${positionX}px)`
    }

    if (value === -1) {
        if (idx <= 0) {
            idx = 0
            return
        }
        idx--
        positionX = positionX + width
        main.style = `transform: translateX(${positionX}px)`
    }
}