import homeApi from "../../api/homeApi";
let main
let wrappes
let gapWidth
let width
let positionX = 0
let idx = 0
export async function slider() {
    document.addEventListener('DOMContentLoaded', async () => {

        const api = await homeApi.getNewFilm(1)
        const newFilm = api.items
        const body = document.querySelector('.slider__body')

        const promises = await newFilm.map(async (film, idx) => {
            const infoFilm = await homeApi.getInfoFilm(film.slug)
            const info = infoFilm.movie


            return `
            <div class="slider__item">
            <div class="slider__content">
            <div class="slider__top">
            <div class="slider__header">
            <p>${film.name}</p>
            </div>
                        <div class="slider__sub">
                            <p>Date Release: 21 October 2022</p>
                        </div>
                        <div class="slider__desc">
                            <p>
                            ${info.content}
                            </p>
                            </div>
                    </div>
                    
                    <div class="slider__botton">
                    <button>Thêm thông tin</button>
                    </div>
                    </div>
                    <div class="slider__img">
                    <img src="${film.thumb_url}" alt="" />
                    </div>
            </div>
        `

        })

        const template = await Promise.all(promises)
        template.forEach(film => {
            body.innerHTML += film
        })


        wrappes = document.querySelectorAll('.slider__item')
        main = document.querySelector('.slider__body')
        gapWidth = parseFloat(getComputedStyle(main).getPropertyValue('gap'));
        width = wrappes[0].offsetWidth + gapWidth

        wrappes.forEach((film, idx) => {
            film.addEventListener('click', async () => {

                window.location.href = './playFilm.html';
                localStorage.setItem('slug', newFilm[idx].slug)
            })
        })

        prev()
        next()
        autoScrol()
    })
}


// next
export async function next() {
    const next = document.querySelector('.slider__next')
    next.addEventListener('click', () => {
        handleClick(1)
    })
}

// prev
export async function prev() {
    const next = document.querySelector('.slider__prev')
    next.addEventListener('click', () => {
        handleClick(-1)
    })
}


// handle click


function handleClick(value) {
    if (value === 1) {
        if (idx >= wrappes.length - 2) {
            idx = wrappes.length - 2
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

// auto scroll
function autoScrol() {
    setInterval(() => {
        if (idx >= wrappes.length - 2) {
            idx = -1;
            if (idx !== 0) {
                positionX = 0 + width
            }
        }
        positionX = positionX - width
        main.style = `transform: translateX(${positionX}px)`
        idx++
    }, 4000);

}
