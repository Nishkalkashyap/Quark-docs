<template>
  <div>
    <h1>Quark Documentation</h1>
    <h3>{{title}}</h3>
    <a :href="path">{{title}}</a>
    <div>{{test}}</div>
  </div>
</template>

<script>
export default {
  props: ["url"],
  data: function() {
    return {
      path: this.$props.url.path,
      title: capitalize(this.$props.url.path.replace(/\//g, "")),
      test: this.$props.url
    };
  }
};

function capitalize(s) {
  var splitStr = s.split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
}
</script>

<style lang="scss">
</style>
