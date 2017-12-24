<template>
  <div class="content_index">
        <el-container>
            <el-main>
                <section class="content-header">
                    <h3 class="content-title">{{articleContent.title}}</h3>
                    <div class="content-info">
                        <time class="time">{{articleContent.date}}</time>
                        <span class="item">分类：<span style="color:#000">{{articleContent.cate}}</span></span>
                        <span class="item">阅读：({{articleContent.click}})</span>
                    </div>
                </section>
                <section class="content-body" v-html="compiledMarkdown">
                </section>

            </el-main>
            <el-aside>
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

.el-main{
    background: #fff;
    padding: 10px 20px;
    .content-title{
        text-align: center;
        color: #555;
        font-size: 26px;
        line-height: 36px;
    }
    .content-header{
        padding: 10px 0;
        border-bottom: 1px solid #ccc;
        .content-info{
            margin-top: 20px;
            font-size: 12px;
            color: #999;
            .item{
                margin-left: 10px;
            }
        }
    }

    .content-body{
        margin-top: 15px;
        line-height: 28px;
        font-size: 14px;
        text-align:justify;
    }
}
</style>

<script >
import {mapGetters} from 'vuex';
import marked from 'marked';
export default {
  name: 'content_index',
  beforeRouteUpdate(to, from, next){
        let id = this.$route.params.id;
        this.$store.dispatch('changeLoading',true);
        this.$store.dispatch('getArticleContent',id);
        next();
    },
    created () {
        let params = {
                id: this.$route.params.id,
                cb: this.cbArticleContentData
            }
        this.$store.dispatch('changeLoading',true);
        this.$store.dispatch('getArticleContent',params);  
    },
    computed: {
        ...mapGetters({
            articleContent: 'getArticleContent'
        }),
        compiledMarkdown () {
            return marked(this.articleContent.content, { sanitize: true })
        }
    },
    methods: {
        cbArticleContentData(){
            this.$store.dispatch('changeLoading',false);
        }
    }
}
</script>
