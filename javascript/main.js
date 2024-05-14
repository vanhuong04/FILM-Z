import { header2 } from "../javascript/page/category/category.js"
import { action } from "../javascript/page/home/action.js"
import { anime } from "../javascript/page/home/anime.js"
import { category } from "../javascript/page/home/category.js"
import { slider } from "../javascript/page/home/slider.js"
import { TV } from "../javascript/page/home/tvShows.js"
import { vietnam } from "../javascript/page/home/vietnam.js"
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