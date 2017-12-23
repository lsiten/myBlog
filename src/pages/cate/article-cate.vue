<template>
    <div class="cate_article">
        <el-container>
            <el-aside class="hidden-sm-and-down" width="200px">Aside</el-aside>
            <el-main>
                <p v-for="item in 10" :key="item">{{item}}</p>
            </el-main>
        </el-container>
    </div>
</template>
<style lang="less" scoped>

</style>
<script>
export default {
  name: 'cate_article',
  created () {
      
  }
}
</script>
