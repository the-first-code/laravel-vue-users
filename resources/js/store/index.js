import { createStore } from 'vuex'
import getUser from '@/store/getUser'

const store = createStore({
    modules:{
        getUser
    }
})

export default store
