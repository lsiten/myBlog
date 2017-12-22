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
            label:'我的工作台',
            children: [
                {
                    id:'4',
                    router:{
                        name:'test'
                    },
                    isHref:false,
                    label:'选项1'
                },
                {
                    id:'5',
                    router:'/',
                    isHref:false,
                    label:'选项2'
                },
                {
                    id:'6',
                    router:'/',
                    isHref:false,
                    label:'选项3'
                },
            ]
        },
        {
            id:'3',
            router:'/',
            href:'https://my.lsiten.cn',
            isHref:true,
            label:'订单管理'
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