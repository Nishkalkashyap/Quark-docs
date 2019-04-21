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
  border-left: solid 3px var(--text-color--light);
  font-weight: 500;
  color: var(--text-color--light);
  padding-left: 10px;
  display: inline-block;
  margin: 5px 0px;
}
</style>
