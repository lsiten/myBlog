<template>
  <div class="cate_content">
      <component keep-alive :is='componentView'></component>
  </div>
</template>
<style lang="less" scoped>

</style>
<script>
import article from './article-cate';
export default {
  name: 'cate_content',
  props: ['type'],
  data() {
      return {
          componentView:''
      }
  },
  created () {  
      this._getComponentByType();
  },
  components: {
      'article-cate':article
  },
  methods: {
      _getComponentByType(){
          if(this.type === undefined){
                setTimeout(()=>{
                    this._getComponentByType();
                },0);
           }
           else{
               this.componentView = this.type+'-cate';
           }
      }
  }
}
</script>
