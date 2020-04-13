<template>
  <div>
    <label>
      <input v-model="title" placeholder="请输入标题">
    </label>
    <mavon-editor
      @save="saveArticle"
      ref="editor">
    </mavon-editor>
  </div>
</template>
<script>
  import { mavonEditor } from "mavon-editor";
  import "mavon-editor/dist/css/index.css";
  export default {
    name: "Create",
    components: { mavonEditor },
    methods: {
      saveArticle(markdown, html) {
        // 此时会自动将 title 和 html 传递到这个方法中
        this.$http.post('/api/article/add', {
          title: this.title, markdown: markdown, content: html
        }).then((res) => {
          console.log('res', res)
        })
      }
    }
  };
</script>
