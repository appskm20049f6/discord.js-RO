import { createApp } from "vue"
import { createPinia } from "pinia"


export default() => {
    const vue = createApp({
    })
    const pinia = createPinia()

    vue.use(pinia)

    console.log('vue被執行pinia也被執行囉');    
}