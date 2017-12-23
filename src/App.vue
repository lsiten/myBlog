<template>
  <div id="app">
    <el-container>
      <el-header>
        <headerbar></headerbar>
      </el-header>
      <el-container>
        <el-aside class="hidden-md-and-up" v-show="leftNavShow" width="200px">
          <el-menu
            :default-active="activeIndex2"
            class="el-menu-vertical-demo"
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
            </el-menu>
        </el-aside> 
        <el-container>
          <el-main>
            <router-view/>
          </el-main>
          <el-footer height='auto'>
            <p>
              手　机：18565884671
            </p>
            <p>
              邮　箱：1304906404@qq.com
            </p>
            <p>
              备案号：津ICP备15007079号-1
            </p>
            <p>
              版　权：©2012-2016 lsiten版权所有
            </p>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import headerbar from './components/header';
import {mapGetters} from 'vuex';
export default {
  name: 'app',
  data(){
    return {
      activeIndex2: '1',
    }
  },
  components: {
        headerbar
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
  }
}
</script>

<style lang="less">
a{
   text-decoration: none;
   &:hover{
     text-decoration: none;
   }
   &:link{
     color: #fff;
   }
 }
 .el-menu-vertical-demo{
   height: 100%;
 }
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  color: #2c3e50;
}
body{
  margin: 0;
  padding: 0;
}
.el-header {
      background-color: #545c64;
}
.el-main{
  padding:0;
  margin:0;
}
.el-footer {
  background-color: #545c64;
  padding: 20px 0px;
  p{
    color: #fff;
    text-align: center;
    line-height: 25px;
    font-size: 12px;
    margin: 0;
  }
}
.el-aside{
  background-color: #D3DCE6;
}
.el-main {
   background-color: #E9EEF3;
   color: #333;
   text-align: center;
 }
</style>
