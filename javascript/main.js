import { action } from "./page/home/action"
import { anime } from "./page/home/anime"
import { category } from "./page/home/category"
import { slider } from "./page/home/slider"
import { TV } from "./page/home/tvShows"
import { vietnam } from "./page/home/vietnam"

(() => {
    slider()
    anime()
    vietnam()
    action()
    category()
    TV()
})()