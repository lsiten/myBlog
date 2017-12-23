/**
 * 主页数据获取
 */
import * as types from '../types'
import api from '../api'

const state = {
    CateInfo:{},
    articleData: [],
    url:{
        Cate: 'api/index/getCate'
    }
}

const actions = {
    //获取栏目信息
    getCateInfo({commit},id){
        api.getCateInfoApi(state.url.Cate+'?id='+id,function(data){
            commit(types.GET_CATE_DATA,data.obj);
        })
    }
}

const getters = {
    getCateData:state=>state.CateInfo
}

const mutations = {
    //设置栏目信息
    [types.GET_CATE_DATA](state,data){
        state.CateInfo = data;
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}