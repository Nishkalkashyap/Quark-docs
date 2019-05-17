<template>
  <div class="page-bottom-container">
    <div
      class="tags"
      v-if="$page.frontmatter && $page.frontmatter.tags && $page.frontmatter.tags.length"
    >
      <div class="ta">Tags:</div>
      <Tag v-for="(page, index) of $page.frontmatter.tags" :key="page + index" :name="page"/>
    </div>

    <div class="footer">MIT Licensed | Copyright © 2019-present Nishkal Kashyap</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.tags {
  display: flex;
  justify-content: start;

  .ta,
  .tag-container {
    line-height: 20px;
    height: 20px;
    display: inline-block;
    font-size: 20px;
    font-family: var(--heading-font-family);
    padding: 12px 0px 12px 10px;
    margin: 10px 0px 10px 10px;
    color: var(--accent-color);
  }

  .tag-container {
    padding-right: 20px;
  }
}
.footer {
  padding: 20px;
  text-align: center;
  // margin: 0px 40px;
  // border-top: 1px solid var(--border-color);
  color: var(--text-color--light);
}
</style>
