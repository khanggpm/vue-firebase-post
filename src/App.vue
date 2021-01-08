<template>
  <el-container>
    <el-header></el-header>
    <el-container>
      <el-aside width="200px">
        <MenuComponent class="menuComponent"/>
      </el-aside>
      <el-main background-color="#e8e2dc">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import MenuComponent from './layouts/Menu.vue'
  export  default {
    components : {
      MenuComponent,
    },
    data() {
      return {

      }
    }
  }
</script>
<style lang="scss">
  .container {
    display: flex;
  }

  .menuComponent {
    width: 30%;
  }

/*transition*/
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

</style>
