<template>
  <div class="home">
    <top-header ref="topHeader"></top-header>
    <div class="background-wrapper">
      <div class="background" ref="background">
        <div class="txt">
          <p>I'm Ruirui</p>
        </div>
      </div>
    </div>
    <bottom-footer></bottom-footer>
  </div>
</template>

<script>
import TopHeader from '@/components/front/TopHeader';
import BottomFooter from '@/components/front/BottomFooter';

export default {
  name: 'home',
  props: ['resize'],
  created () {
  },
  mounted () {
    this.setHeight()
  },
  methods: {
    setHeight () {
      const height = document.documentElement.clientHeight;
      this.$refs.background.style.height = height + 'px';
    }
  },
  watch: {
    resize () {
      if (this.resize) {
        this.setHeight()
      }
    }
  },
  components: {
    TopHeader,
    BottomFooter
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
.txt {
  position: fixed;
  width: 100%;
  color: $color-white;
  font-size: 32px;
  font-family: KaiTi, SimSun;
}
</style>
