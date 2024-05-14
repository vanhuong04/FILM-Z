import homeApi from "../../api/homeApi.js";
let main
let wrappes
let gapWidth
let width
let positionX = 0
let idx = 0
export async function related(category) {
    // console.log(category);
    const categoryList = category.map(async (cate, idx) => {
        const api = await homeApi.getByGenre(cate.slug, {
            params: {
                page: 0,
                limit: 3
            }
        })
        return api.data.items;
    })

    const listSlug = await Promise.all(categoryList)
    const arrSlug = listSlug.flat(Infinity)


    const body = document.querySelector('.related__body')
    const promises = arrSlug.map(async (film, idx) => {
        const infoFilm = await homeApi.getInfoFilm(film.slug)


        return `
        <div class="related__item">
        <div class="related__content">
        <div class="related__title">
        <div class="related__name"><p>${film.name}</p></div>
        <div class="related__year"><p>${film.year}</p></div>
        </div>
        <div class="related__button"><button>Xem ngay</button></div>
        </div>
        <img class="related__img" src="${infoFilm.movie.poster_url}" alt="" />
        </div>        
        `

    })

    const template = await Promise.all(promises)
    template.forEach(film => {
        body.innerHTML += film
    })



    wrappes = document.querySelectorAll('.related__item')
    main = document.querySelector('.related__body')
    gapWidth = parseFloat(getComputedStyle(main).getPropertyValue('gap'));
    width = wrappes[0]?.offsetWidth + gapWidth

    wrappes.forEach((film, idx) => {
        film.addEventListener('click', async () => {
            console.log('hi');
            window.location.href = '../../../playFilm.html';
            localStorage.setItem('slug', arrSlug[idx].slug)
        })
    })
    next()
    prev()

}


// next
export async function next() {
    const next = document.querySelector('.related__next')
    next.addEventListener('click', () => {
        handleClick(1)
    })
}

// prev
export async function prev() {
    const next = document.querySelector('.related__prev')
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