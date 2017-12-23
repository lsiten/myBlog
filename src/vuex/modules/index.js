/**
 * 主页数据获取
 */
import * as types from '../types'
import api from '../api'

const state = {
    carouselData:[],
    articleData: [],
    url:{
        Carousel: 'api/index/getCarousel',
        Articles: 'api/index/getArticles'
    }
}

const actions = {
    //获取走马灯数据
    getCarouselData({commit}){
        api.getCarouseDataApi(state.url.Carousel,(data)=>{   
            commit(types.GET_CAROUSEL_DATA,data.data)
        })
    },
    //获取文章数据
    getArticleData({commit}){
        api.getArticleDataApi(state.url.Articles+'?type=1&accessToken=ajdksf',(data)=>{
            commit(types.GET_ARTICLE_DATA,data.data)
        })
    },

}

const getters = {
    getCarouselData:state=>state.carouselData,
    getArticleData:state=>state.articleData
}

const mutations = {
    //设置走马灯数据
    [types.GET_CAROUSEL_DATA](state,data){
        state.carouselData = data;
    },
    //设置走马灯数据
    [types.GET_ARTICLE_DATA](state,data){
        state.articleData = data;
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}