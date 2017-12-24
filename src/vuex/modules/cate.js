/**
 * 主页数据获取
 */
import * as types from '../types'
import api from '../api'

const state = {
    CateInfo:{},
    articleData: [],
    hasMore: true,
    pageNumber: 0,
    url: {
        Cate: 'api/cate/getCate',
        Articles: 'api/cate/getCateArticles',
    }
}

const actions = {
    //获取栏目信息
    getCateInfo({commit},id){
        api.getCateInfoApi(state.url.Cate+'?id='+id,function(data){
            data.obj.type === 7 && commit(types.COM_LOADING_STATUS,false);
            id === 3 && commit(types.COM_LOADING_STATUS,false);
            commit(types.GET_CATE_DATA,data.obj);
        })
    },
    //获取栏目文章
    getCateArticle({commit},params){
        if(state.hasMore)
        { 
            let pageNumber = state.pageNumber;
            params.isRefresh && (pageNumber=0);
            api.getCateArticleApi(state.url.Articles+'?id='+params.id+'&page='+pageNumber,function(data){
                
                commit(types.GET_CATE_ARTICLES_DATA,data.data,params.isRefresh);
                commit(types.SET_CATE_ARTICLES_STATUS,{
                    hasMore: data.obj.hasMore,
                    pageNumber: ++pageNumber
                });
                params.cb(data);
            })
        }
    }
}

const getters = {
    getCateData: state=>state.CateInfo,
    getCateArticleData: state=>state.articleData,
    getCateArticleMore: state=>state.hasMore
}

const mutations = {
    //设置栏目信息
    [types.GET_CATE_DATA](state,data){
        state.CateInfo = data;
    },
    //设置栏目文章
    [types.SET_CATE_ARTICLES_STATUS](state,data){
        state.hasMore = data.hasMore;
        state.pageNumber = data.pageNumber;
    },
    [types.GET_CATE_ARTICLES_DATA](state,data,isRefresh){
        let articleData = state.articleData;
        if(isRefresh){
            state.articleData = data
            state.pageNumber = 1;
        }
        else{
            state.articleData = articleData.concat(data)  
        }
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}