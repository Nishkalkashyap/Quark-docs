<template>
    <table>
      <thead>
        <tr>
          <th>File</th>
          <th>Hash</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, key) in shasum">
          <td>{{key}}</td>
          <td>{{value}}</td>
        </tr>
      </tbody>
    </table>
</template>

<script>
export default {
  props: ["sha"],
  data: function() {
    return {
      shasum: this.$props.sha,
      isOpen: false
    };
  }
};
</script>

<style lang="scss">
table {
  margin: 0px;
  border-top: 0px;
}
</style>
