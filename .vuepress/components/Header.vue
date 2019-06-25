<template>
  <span v-html="(label || $page.frontmatter.description)"></span>
  <!-- <span>{{label || $page.frontmatter.description}}</span> -->
</template>

<script>
export default {
  props: ["label"]
};
</script>

<style scoped>
span {
  border-left: solid 4px var(--text-color--light);
  font-weight: 500;
  color: var(--text-color--light);
  padding-left: 10px;
  display: block;
  margin: 20px 0px;
}
</style>
