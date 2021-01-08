<template>
  <div class="page-content">
    <el-carousel :interval="5000"
                 arrow="always"
                 height="200px"
                 type="card"
    >
      <el-carousel-item v-for="(pic,index) in arr_images" :key="index">
        <img :src="getImgUrl(pic)" v-bind:alt="pic">
      </el-carousel-item>
     
    </el-carousel>
  </div>
</template>
<script>
  
  import {IMAGES_LINK} from '../../config/global.js';

  export  default  {
    data() {
      return {
        arr_images :[],
      }
    },
    created() {
      this.arr_images = IMAGES_LINK;
    },
    methods : {
      getImgUrl(pet) {
        var images = require.context('../assets/images/', false, /\.jpg$/)
        return images('./' + pet )
      }
    }
  }
</script>
<style lang="scss" scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    /*background-color: #99a9bf;*/
    background-color: #FFFFFF;
  }

  .el-carousel__item:nth-child(2n+1) {
    /*background-color: #d3dce6;*/
    background-color: #FFFFFF;
  }

</style>
