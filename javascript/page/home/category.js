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

    console.log(api);
    console.log(data);

    title.textContent = api.data.titlePage
    desc.textContent = api.data.seoOnPage.descriptionHead



    // creat template
    data.forEach(async (film) => {
        const infoApi = await homeApi.getInfoFilm(film.slug)
        const template = `
        <div class="category__item">
            <div class="category__content">
                <div class="category__title">
                    <div class="category__name"><p>${film.name}</p></div>
                    <div class="category__year"><p>${film.year}</p></div>
                </div>
                <div class="category__button">
                    <button>Xem ngay</button>
                </div>
            </div>
            <img
                class="category__img"
                src="${infoApi.movie.poster_url}"
                alt=""
            />
        </div>     
        `
        body.innerHTML += template
    });


    const menu = document.querySelectorAll('.category__menu')
    menu[0].classList.add('category__active')


    // get src when click menu
    setTimeout(() => {
        const name = document.querySelectorAll('.category__name')
        const year = document.querySelectorAll('.category__year')
        const img = document.querySelectorAll('.category__img')

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
                const data = api.data.items
                console.log(data);
                data.forEach(async (film, idx) => {
                    const infoApi = await homeApi.getInfoFilm(film.slug)
                    name[idx].textContent = film.name
                    year[idx].textContent = film.year
                    img[idx].src = infoApi.movie.poster_url
                    console.log(name);
                })
            })


        })
    }, 3000)
}
