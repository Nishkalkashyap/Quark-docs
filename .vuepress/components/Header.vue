<template>
  <span>{{label}}</span>
</template>

<script>
export default {
  props: ["label"]
};
</script>

<style scoped>
span {
  border-left: solid 3px var(--text-light-color);
  color: var(--text-light-color);
  padding-left: 10px;
  display: inline-block;
  margin: 5px 0px;
}
</style>
