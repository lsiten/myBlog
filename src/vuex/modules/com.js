/**
 * Create by zechun.chen on 2016/12/22
 */
import * as types from '../types'
/**
 * App通用配置
 */
const state = {
    title:'',
    loading:0,
    leftNavState:false,
    navMenu:[
        {
            id:'1',
            router:{
                name:'index'
            },
            isHref:false,
            label:'首页'
        },
        {
            id:'2',
            router:'/',
            isHref:false,
            label:'前端日记',
            children: [
                {
                    id:'4',
                    router:{
                        name:'cate',
                        params:{id:4}
                    },
                    isHref:false,
                    label:'JavaScript'
                },
                {
                    id:'5',
                    router:{
                        name:'cate',
                        params:{id:5}
                    },
                    isHref:false,
                    label:'VueJs'
                },
                {
                    id:'6',
                    router:{
                        name:'cate',
                        params:{id:6}
                    },
                    isHref:false,
                    label:'ionic'
                },
                {
                    id:'7',
                    router:{
                        name:'cate',
                        params:{id:7}
                    },
                    isHref:false,
                    label:'基础内容'
                },
            ]
        },
        {
            id:'8',
            router:{
                name:'cate',
                params:{id:8}
            },
            isHref:false,
            label:'生活游记'
        },
        {
            id:'3',
            router:'/',
            href:'https://my.lsiten.cn',
            isHref:true,
            label:'自我介绍'
        },
        {
            id:'9',
            router:{
                name:'cate',
                params:{id:9}
            },
            isHref:false,
            label:'联系我'
        }
    ]
}

const actions = {
    //本程序主要设置标题栏，对于通用程序，则可以设置返回按钮，底部导航栏
    comConf({commit},settings){
        commit(types.COM_CONF,settings)
    },
    //左侧导航栏的开关
    changeLeftNavState({commit},status){
        commit(types.CHANGE_LEFTNAV_STATUS,status)
    }
}
const getters = {
    comConf: state => state,
    loading: state => state.loading,
    title: state => state.title,
    leftNavState: state => state.leftNavState,
    getNavMenu: state => state.navMenu
}
const mutations = {
    [types.COM_CONF](state,settings){
        state = Object.assign(state,settings)
    },
    [types.COM_LOADING_STATUS](state,status){
        if(state.loading == 0 && !status){
            return ;
        }
        state.loading = status ? ++state.loading : --state.loading;
    },
    [types.CHANGE_LEFTNAV_STATUS](state,status){
        state.leftNavState = status
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}