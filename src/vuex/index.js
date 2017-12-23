/**
 * Create by zechun.chen on 2016/12/22
 */

import Vue from 'vue'
import Vuex from 'vuex'
import com from './modules/com'
import index from './modules/index'
import cate from './modules/cate'

Vue.use(Vuex)
const store = new Vuex.Store({
    modules:{
        com,
        index,
        cate
    },
    strict:process.env.NODE_ENV !== 'production'
})

export default store;