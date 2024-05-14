import { header2 } from "./page/category/category.js"
import { action } from "./page/home/action.js"
import { anime } from "./page/home/anime.js"
import { category } from "./page/home/category.js"
import { slider } from "./page/home/slider.js"
import { TV } from "./page/home/tvShows.js"
import { vietnam } from "./page/home/vietnam.js"
import { search } from "./search"



(() => {
    slider()
    anime()
    vietnam()
    action()
    category()
    TV()
    header2()
    // search()
})()