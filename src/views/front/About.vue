<template>
  <div class="home">
    <top-header ref="topHeader"></top-header>
    <div class="background" ref="background">
    </div>
  </div>
</template>

<script>
  import TopHeader from '@/components/front/TopHeader';
  // import BottomFooter from '@/components/front/BottomFooter'
  // import ArticleList from '@/components/front/ArticleList'
  import IconFont from '@/components/Iconfont';
  export default {
    name: "About",
    components: {
      TopHeader,
      // BottomFooter,
      // ArticleList,
      IconFont
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/common/css/variable.scss';
  .home {
    color: $color-black;
    height: 100%;
    width: 100%;
  }
  .background-wrapper {
    .background {
      width: 100%;
      background: url('https://cl8023-1255423800.cos.ap-guangzhou.myqcloud.com/bg.jpg') no-repeat;
      background-size: cover;
      background-attachment: fixed;
      display: flex;
      align-items: center;
    }
  }
</style>
