import { action } from "./page/home/action"
import { anime } from "./page/home/anime"
import { slider } from "./page/home/slider"
import { vietnam } from "./page/home/vietnam"

(() => {
    slider()
    anime()
    vietnam()
    action()
})()