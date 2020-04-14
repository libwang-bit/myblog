<template>
  <div class="article-page">
    <div class="scroll-progress"></div>
    <div class="article-container" ref="articleContainer">
      <top-header ref="topHeader"></top-header>
      <div class="article-detail">
      {{ article.title }}
      <mavon-editor
        :subfield="false"
        :toolbarsFlag="false"
        defaultOpen="preview"
        ref="editor"
        v-model="article.markdown"
      >
      </mavon-editor>
      </div>
    </div>
    <bottom-footer></bottom-footer>
  </div>
</template>

<script>
  import TopHeader from '@/components/front/TopHeader'
  import BottomFooter from '@/components/front/BottomFooter'
  import IconFont from '@/components/Iconfont'

  export default {
      name: "GetArticle",
      data() {
        return {
          article: {title:'', markdown:''},
          chapterData: [],
          topShow: false,
          topIcon: 'icon-top-static',
        }
      },
      created() {
        this.getArticle()
      },
      methods: {
        getArticle() {
          this.$http.post('/api/article/get', {
            id: this.$route.params.id
          }).then(res => {
            console.log('res', res);
            this.article = res.data[0];
          })
        }
      },
      components: {
        TopHeader,
        BottomFooter,
        IconFont
      }

    }
</script>

<style lang="scss" scoped>
  @import '@/common/css/variable.scss';
  .article-page {
    position: relative;
  }
  .scroll-progress {
    position: absolute;
    top: 0; right: 0; left: 0; bottom: 0;
    background: linear-gradient(to right top, #0A74DA 50%, transparent 50%) no-repeat;
    background-size: 100% calc(100% - 100vh + 5px);
    z-index: 999;
    pointer-events: none;
    mix-blend-mode: darken;
    &::after {
      content: '';
      position: fixed;
      top: 3px; bottom: 0; right: 0; left: 0;
      background: #fff;
      z-index: 1;
    }
  }
  .article-container {
    position: relative;
  }
  .article-detail {
    background: $color-white;
    width: 80%;
    margin: auto;
    padding: 20px;
    padding-top: 100px;
    padding-bottom: 32px;
    h1 {
      font-size: 2em;
      font-weight: bold;
      margin-bottom: 20px;
      color: $color-black;
    }
  }
</style>
