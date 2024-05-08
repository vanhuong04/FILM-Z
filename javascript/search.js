import homeApi from "./api/homeApi";

export async function search() {
    const search = document.querySelector('.header__search > input')
    const table = document.querySelector('.search__table')

    // search.addEventListener('input', async (event) => {
    search.addEventListener('keydown', async (e) => {
        if (e.keyCode === 13) {
            const api = await homeApi.getSearch(search.value, {
                params: {
                    limit: 5
                }
            })
            const data = api.data.items
            const table = document.querySelector('.search__table')

            const promises = await data.map(async (film, idx) => {
                const infoFilm = await homeApi.getInfoFilm(film.slug)

                return `
                <div class="search__item">
                <img src="${infoFilm.movie.poster_url}" alt="" class="search" />
                <div class="search__title"><p>${film.name}</p></div>
              </div>
                `

            })
            const template = await Promise.all(promises)
            template.forEach(film => {
                table.innerHTML += film
            })
            table.classList.remove('none')
            console.log(data);

            const item = document.querySelectorAll('.search__item')
            item.forEach((i, idx) => {
                i.addEventListener('click', () => {
                    localStorage.setItem('slug', data[idx].slug)
                    window.location.href = './playFilm.html'
                })
            })
        }
    })






    search.addEventListener('input', (e) => {

        if (e.target.value === '') {
            const item = document.querySelectorAll('.search__item')
            console.log(item);
            item.forEach(i => {
                i.classList.add('none')
            })
            table.classList.add('none')
        }
    })

    // })
}

search()