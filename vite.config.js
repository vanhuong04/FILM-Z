// vite.config.js
export default {
    build: {
        rollupOptions: {
            input: {
                main: 'index.html', // Tệp index.html mặc định
                categoy: 'category.html', // Tệp about.html
                playFilm: 'playFilm.html', // Tệp contact.html
                playMovie: 'playMovie.html', // Tệp contact.html
                // Thêm các tệp HTML khác tại đây
            },
        },
    },
};
