import axiosClient from "./axiosClient"


const homeApi = {
    getNewFilm(id) {
        const url = `/danh-sach/phim-moi-cap-nhat?page=${id}`
        return axiosClient.get(url)
    },


    getInfoFilm(slug) {
        const url = `/phim/${slug}`
        return axiosClient.get(url)
    },

    getAnime(limit) {
        const url = `/v1/api/danh-sach/hoat-hinh?${limit}`
        return axiosClient.get(url)
    },

    getByGenre(genre, { params }) {
        const url = `/v1/api/the-loai/${genre}`
        return axiosClient.get(url, { params })
    },

    getByCountry(country, { params }) {
        const url = `v1/api/quoc-gia/${country}`
        return axiosClient.get(url, { params })
    },

    getFilms(name, { params }) {
        const url = `/v1/api/danh-sach/${name}`
        return axiosClient.get(url, { params })
    },


}

export default homeApi

// async function main() {
// const queryParams = {
//   _page: 1,
//   _limit: 15,
// }
//     const response = await homeApi.getInfoSong("ZOACFBBU")
//     console.log(response)
//   }