<template>
  <div class="footer-containe">
    <div class="rights">
      <p>Copyright © 2017 - {{ new Date().getFullYear() }} Ruirui's Blog</p>
    </div>
    <div class="to-admin">
      <router-link tag="a" to="/login">后台登陆</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/common/css/variable.scss';
  .footer-containe {
    height: 32px;
    line-height: 32px;
    font-size: 12px;
    color: $color-black;
    display: flex;
    justify-content: center;
    background: #f5f5f5;
    position: relative;
    z-index: 99;
    .rights {
      margin-right: 10px;
    }
    a {
      color: $color-black;
      &:hover {
        color: $color-blue;
      }
    }
  }
</style>
