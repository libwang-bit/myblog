import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/front/Home'
import AddArticle from '@/components/pages/AddArticle'
import EditArticle from '@/components/pages/EditArticle'
import Article from '@/views/front/Article'
import Catalog from '@/views/front/Catalog'
import About from '@/views/front/About'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        keepAlive: false
      }
    },
    /**
     * 新增文章
     */
    {
      path: '/article/add',
      name: 'addArticle',
      component: AddArticle
    },
    /**
     * 编辑文章
     */
    {
      path: '/article/edit/:id',
      name: 'editArticle',
      component: EditArticle
    },
    /**
     * 查看单个文章
     */
    {
      path: '/article/:id',
      name: 'getArticle',
      component: Article
    },
    /**
     * 查看文章目录
     */
    {
      path: '/catalog',
      name: 'catalog',
      component: Catalog
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
