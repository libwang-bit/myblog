<template>
  <div>
    <top-header ref="topHeader"></top-header>
    <div class="catalog-wrapper">
      <el-timeline>
        <el-timeline-item v-for="(list, key) in catalog" :key="key" :timestamp="key" placement="top">
          <el-card class="catalog-card" v-for="(item, i) in list" :key="i" @click.native="goDetail(item)">
            <h4>{{ item.title }}</h4>
<!--            <p>浏览量 {{ item.view }}，最后编辑于 {{ item.updateTime }}</p>-->
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
  import TopHeader from '@/components/front/TopHeader'
  import IconFont from '@/components/Iconfont'
  import { dateFormat } from '@/common/js/tool.js'


export default {
  name: 'catalog',
  data() {
    return {
      catalog: {}
    }
  },
  created() {
    this.getCatalog()
  },
  methods: {
    getCatalog() {
      this.$http.post('/api/catalog', {
        data: {}
      }).then(res => {
        console.log('res', res);
        res.data.forEach(ele => {
          let time = dateFormat(ele.create_time, 'yyyy-MM-dd');
          ele.create_time = dateFormat(ele.create_time, 'yyyy-MM-dd hh:mm');
          ele.update_time = dateFormat(ele.update_time, 'yyyy-MM-dd hh:mm');
          if (!this.catalog[time]) {
            this.$set(this.catalog, time, [])
          }
          this.catalog[time].push(ele)
        });
        // var first = {id:1, title: 'test', create_time:'2020-03-10', update_time:'2020-03-10'};
        // this.catalog['2020-03-10'].push(first);
      })
    },
    goDetail(article) {
      this.$router.push(`/article/${article.id}`)
    }
  },
  components: {
    TopHeader,
    // BottomFooter,
    IconFont
  }
}
</script>

<style lang="scss" scoped>
  @import '@/common/css/variable.scss';
  .catalog-wrapper {
    text-align: left;
    width: 70%;
    margin: 100px auto 0;
    &.mobile {
      padding: 60px 10px 10px 10px;
    }
  }
  .catalog-card {
    margin-bottom: 10px;
    cursor: pointer;
    &:hover {
      border-color: $color-blue;
    }
    h4 {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    p {
      color: $color-gray;
    }
  }
</style>
