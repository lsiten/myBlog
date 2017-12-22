<template>
  <div class="header">
    <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo hidden-sm-and-down"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    :router="true"
    active-text-color="#ffd04b"> 
              <div v-for='item in navMenu' v-bind:key="item.id">
                  <el-submenu v-if='item.children' :index="item.id">
                    <template slot="title">{{item.label}}</template>
                    <div v-for='item2 in item.children' v-bind:key="item2.id">
                       <el-menu-item v-if='item2.isHref' :index="item2.id">
                         <a :href="item2.href" target="_blank">{{item2.label}}</a>                          
                       </el-menu-item>
                       <el-menu-item v-else :index="item2.id" :route='item2.router'>
                         {{item2.label}}
                       </el-menu-item>
                    </div>
                </el-submenu>
                 <el-menu-item v-else-if='item.isHref' :index="item.id">
                   <a :href="item.href" target="_blank">{{item.label}}</a>
                </el-menu-item>
                 <el-menu-item v-else :index="item.id" :route='item.router'>{{item.label}}</el-menu-item>
              </div>       
              
              
              <div class="buttonBar">
                <el-input v-model="keyword" placeholder="请输入关键字">
                  <el-button slot="append" icon="el-icon-search">搜索</el-button>
                </el-input>
              </div>
    </el-menu>
    <div class="hidden-md-and-up">
      <el-row :gutter="10">
        <el-col :xs='{span: 16, offset: 4}' :sm='{span: 14, offset: 5}'>
          <div class="content">
            <el-input v-model="keyword" placeholder="请输入关键字">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </el-col>
        <el-col :xs="4" :sm="5">
          <div class="menuButton">
            <el-button type='info' @click="showSideMenu" icon="el-icon-more"></el-button>
          </div>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<style lang="less" scoped>
    a{
      text-decoration: none;
      &:hover{
        text-decoration: none;
      }
    }
    .menuButton, .buttonBar{
        float: right;
        height: 60px;
        line-height: 60px;
    }
    .content{
      width: 100%;
      height: 60px;
      line-height: 60px;
      margin:0 auto;
    }
</style>

<script>
import {mapGetters} from 'vuex';
export default {
   data() {
      return {
        activeIndex2: '1',
        keyword:'',
        isShowSlideMenu:false
      };
    },
    computed: {
      ...mapGetters({
        leftNavShow: 'leftNavState',
        navMenu: 'getNavMenu'
      })
    },
    methods: {
      handleSelect(key, keyPath) {
        this.activeIndex2 = key;
        console.log(key, keyPath);
      },
      showSideMenu(){
        let leftmenu = !this.leftNavShow;
        this.$store.dispatch('changeLeftNavState',leftmenu);
      }
    }
}
</script>
