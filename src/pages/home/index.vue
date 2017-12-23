<template>
  <div class="home_index">
      <el-carousel>
        <el-carousel-item v-for="item in carouselData" :key="item.id">
            <a :href="item.href" :title="item.title">
              <img v-lazy="item.thumb"/>
            </a>
            <h3>
                <a :href="item.href" :title="item.title">
                    {{ item.title }}
                </a>
            </h3>
        </el-carousel-item>
      </el-carousel>

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
  </div>
</template>
<style lang="less" scoped>
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

.el-carousel__item {
    img {
        width: 100%;
        height: auto;
    }
    h3 {
        width: 100%;
        position: absolute;
        z-index: 1;
        bottom:0;
        line-height: 30px;
        color:#fff;
        font-size: 14px;
        text-align:left;
        padding: 10px 15px 20px 15px;
        margin: 0;
        background-color: rgba(0, 0, 0, 0.5);
    }
}
</style>
<script>
import {mapGetters} from 'vuex';
export default {
    name: "home_index",
    created () {
      this.$store.dispatch('getCarouselData');
      this.$store.dispatch('getArticleData');
    },
    data () {
        return {
            
        }
    },
    computed: {
        ...mapGetters({
            carouselData: 'getCarouselData',
            ArticleData: 'getArticleData'
        })
    }
}
</script>


