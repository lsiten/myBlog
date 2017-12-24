<template>
    <div class="cate_article">
        <el-container>
            <el-main>
                <div style="width: 100%; position: relative">
                    <article class="article-list" v-for="article in ArticleData" v-bind:key="article.id">
                        <el-card :body-style="{ padding: '0px' }">
                                <a :href="article.href" :title="article.title">
                                    <div class="article-image">
                                        <img v-lazy='article.thumb'>
                                    </div>
                                    <div class='article-detail'>
                                        <h3>{{article.title}}</h3>
                                        <div class="article-info">
                                            <time class="time">
                                                <i class="iconfont blog-time"></i>
                                                {{article.time}}
                                            </time>
                                            <span class="author">
                                                <i class="iconfont blog-user"></i>                                
                                                {{article.author}}
                                            </span>
                                        </div>
                                        <div class="article-summary">
                                            {{article.summary}}
                                        </div>
                                    </div>
                                </a>
                            </el-card>
                    </article>
                    <mugen-scroll :handler="loadBottom" :should-handle="!loading">
                        <div class="loading" v-show="loading">
                            loading...
                        </div>
                    </mugen-scroll>
                    <div class="no-data" v-show="noDataStatus">
                        <div class="text">
                            没有更多数据了
                        </div>
                    </div>
                </div>
            </el-main>
            <el-aside class="hidden-sm-and-down" width="300px">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>加我微信</span>
                </div>
                <el-tooltip class="item" effect="dark" content="扫一扫，加我为好友" placement="bottom">
                   <img src="../../assets/weixin.jpg" alt="搜索’lsiten‘加我微信">
                </el-tooltip>
                </el-card>

                <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>我的微博</span>
                </div>
                <el-tooltip class="item" effect="dark" content="扫一扫，关注我吧" placement="bottom">
                   <img src="../../assets/xinlang.jpg" alt="我的微博">
                </el-tooltip>
                </el-card>
            </el-aside>            
        </el-container>
    </div>
</template>
<style lang="less" scoped>
.loading{
    padding: 10px 0;
    background: #fff;
}
.no-data{
    width: 100%;
    line-height: 30px;
    color: #999;
    background: #fff;
    .text{
        position: relative;
        width: 150px;
        height: 30px;
        line-height: 30px;
        margin: 0 auto;
        &::before{
            position: absolute;
            line-height: 30px;
            content: '------';
            top:0;
            left: -25px;
            color: #ccc;
        }
        &::after{
            position: absolute;
            line-height: 30px;
            content: '------';
            top:0;
            right: -25px;
            color: #ccc;
        }
    }
}
.article-list{
    a{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        padding: 10px;
        .article-image{
            width: 300px;
            height: auto;
            img{
                width: 100%;
                height: auto;
            }
        }
        .article-detail{
            flex: 1;
            color: #555;
            text-align: left;
            padding-left: 15px;
            h3{
                margin: 5px 0;
                font-size: 18px;
            }
            .article-info{
                width: 100%;
                font-size: 14px;
                color:#999;
                i{
                   font-size: 12px; 
                }
                .author{
                    margin-left:10px;
                }
            }
            .article-summary{
                margin-top: 10px;
                font-size: 14px;
                color:#999;
            }
        }
    }
}
.el-container{
    margin-top:5px;
}
.el-aside{
    padding: 0 10px;
    .box-card{
        margin: 5px 0;
        &:first-child{
            margin-top: 0;
        }
        img {
            padding: 5px;
            border-radius: 4px;
            width: 100%;
            height: auto;
        }
    }
}
</style>
<script>
import {mapGetters} from 'vuex';
import MugenScroll from 'vue-mugen-scroll';
export default {
  name: 'cate_article',
  data () {
      return {
          loading: false,
          noDataStatus: false,
          cateId: ''
      }
  },
  watch: {
    '$route' (to,from) {
        this.cateId = this.$route.params.id;
        this.getArticles(true);
    }
  },
  created () {
      this.cateId = this.$route.params.id;
      this.getArticles(false);
  },
  methods: {
      //获取文章数据
      getArticles(isRefresh){
            let params = {
                id: this.cateId,
                isRefresh: isRefresh,
                cb: this.cbArticleData
            }
            this.$store.dispatch('getCateArticle',params);
      },
      loadBottom(){
          this.loading = true;
          if(!this.hasMore)
          {
              this.loading = false;
              this.noDataStatus = true;
              return ;
          }
          this.getArticles(false);
      },
    //获取文章数据后回调用
      cbArticleData(data){
          this.$store.dispatch('changeLoading',false);
          this.$nextTick(() => {
            this.loading = false;
         })
      }
  },
  computed: {
      ...mapGetters({
          ArticleData: 'getCateArticleData',
          hasMore: 'getCateArticleMore',
      })
  },
  components: {MugenScroll}
}
</script>
