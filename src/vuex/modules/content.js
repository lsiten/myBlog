/**
 * 内容页面数据获取
 */
import * as types from '../types'
import api from '../api'
const state = {
    articleContent: {},
    url:{
        content: "api/content/getContent"
    }
}

const actions = {
    getArticleContent({commit},params) {
        api.getContentArticleApi(state.url.content+'?id='+params.id,function(data){
            commit(types.GET_CONTENT_ARTICLE_DATA,data.obj)
            params.cb();
        })
    }
}

const getters = {
    getArticleContent: state=>state.articleContent
}

const mutations = {
 [types.GET_CONTENT_ARTICLE_DATA](state,data){
    state.articleContent = data;
 }
}

export default {
    state,
    actions,
    getters,
    mutations
}