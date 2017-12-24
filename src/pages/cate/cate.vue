<template>
  <div class="cate_cate">
     <el-row class="hidden-sm-and-down">
        <el-col :span="24">
            <div class="background-dark">
                {{cate.description}}
            </div>
        </el-col>
    </el-row>
    <el-row>
        <cate-content :type='cate.type'></cate-content>
    </el-row>
  </div>
</template>
<style lang="less" scoped>
.background-dark{
 background: #99a9bf;
 line-height: 100px;
 color: #fff;
 font-size: 20px;
}
</style>
<script>
import {mapGetters} from 'vuex';
import cateContent from './content'
export default {
    name: "cate_cate",
    beforeRouteUpdate(to, from, next){
        let id = this.$route.params.id;
        this.$store.dispatch('changeLoading',true);
        this.$store.dispatch('getCateInfo',id);
        next();
    },
    created () {
        let id = this.$route.params.id;
        this.$store.dispatch('changeLoading',true);
        this.$store.dispatch('getCateInfo',id);  
    },
    computed: {
        ...mapGetters({
            cate: 'getCateData'
        })
    },
    components: {
        cateContent
    }
}
</script>


