import homeApi from "../../api/homeApi";
let item
export async function category() {
    const api = await homeApi.getByGenre('hanh-dong', {
        params: {
            page: 0,
            limit: 4
        }
    })

    const data = api.data.items
    const body = document.querySelector('.category__list')
    const title = document.querySelector('.category__title > p')
    const desc = document.querySelector('.category__desc > p')

    title.textContent = api.data.titlePage
    desc.textContent = api.data.seoOnPage.descriptionHead


    const promises = await data.map(async (film, idx) => {
        const infoFilm = await homeApi.getInfoFilm(film.slug)

        return `
        <div class="category__item">
        <div class="category_content">
            <div class="category__title">
                <div class="category__name"><p>${film.name}</p></div>
                <div class="category__year"><p>${film.year}</p></div>
            </div>
            <div class="category__button"><button>Xem ngay</button></div>
        </div>
        <img class="category__img" src="${infoFilm.movie.poster_url}" alt="" />
    </div>      
    `

    })

    const template = await Promise.all(promises)
    template.forEach(film => {
        body.innerHTML += film
    })



    const menu = document.querySelectorAll('.category__menu')
    menu[0].classList.add('category__active')


    // get src when click menu

    const name = document.querySelectorAll('.category__name')
    const year = document.querySelectorAll('.category__year')
    const img = document.querySelectorAll('.category__img')

    let data2
    menu.forEach(async (li, idx) => {
        li.addEventListener('click', async () => {
            const api = await homeApi.getByGenre(li.dataset.category, {
                params: {
                    page: 0,
                    limit: 4
                }
            })

            title.textContent = api.data.titlePage
            desc.textContent = api.data.seoOnPage.descriptionHead
            data2 = api.data.items
            console.log(data2);
            data2.forEach(async (film, idx) => {
                const infoApi = await homeApi.getInfoFilm(film.slug)
                name[idx].textContent = film.name
                year[idx].textContent = film.year
                img[idx].src = infoApi.movie.poster_url
                console.log(name);
            })
        })

        const wrappes = document.querySelectorAll('.category__item')


        wrappes.forEach((film, idx) => {
            film.addEventListener('click', async () => {

                window.location.href = './playFilm.html';
                localStorage.setItem('slug', data2[idx].slug || data[idx].slug)
            })
        })
    })
    // const wrappes = document.querySelectorAll('.category__item')


    // wrappes.forEach((film, idx) => {
    //     film.addEventListener('click', async () => {

    //         window.location.href = './playFilm.html';
    //         localStorage.setItem('slug', data[idx].slug)
    //     })
    // })

}
