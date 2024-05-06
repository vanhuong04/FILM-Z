import homeApi from "../../api/homeApi";
let main
let wrappes
let gapWidth
let width
let positionX = 0
let idx = 0
export async function vietnam() {
    const api = await homeApi.getByCountry('viet-nam', {
        params: {
            page: 0,
            limit: 10
        }
    })

    const animeApi = api.data.items
    const body = document.querySelector('.vietnam__body')
    animeApi.forEach(async (film) => {

        const infoFilm = await homeApi.getInfoFilm(film.slug)
        const template = `
        <div class="vietnam__item">
            <div class="vietnam__content">
                <div class="vietnam__title">
                    <div class="vietnam__name"><p>${film.name}</p></div>
                    <div class="vietnam__year"><p>${film.year}</p></div>
                </div>
                <div class="vietnam__button"><button>Xem ngay</button></div>
            </div>
            <img class="vietnam__img" src="${infoFilm.movie.poster_url}" alt="" />
        </div>      
        `
        body.innerHTML += template

    });
    setTimeout(() => {
        wrappes = document.querySelectorAll('.vietnam__item')
        main = document.querySelector('.vietnam__body')
        gapWidth = parseFloat(getComputedStyle(main).getPropertyValue('gap'));
        width = wrappes[0].offsetWidth + gapWidth
    }, 2000)
    next()
    prev()

}


// next
export async function next() {
    const next = document.querySelector('.vietnam__next')
    next.addEventListener('click', () => {
        handleClick(1)
        console.log('next');
    })
}

// prev
export async function prev() {
    const next = document.querySelector('.vietnam__prev')
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