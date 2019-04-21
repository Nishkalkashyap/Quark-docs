<template>
  <div style="margin:0px;">
    <div class="dropdown" @click="toggle()">
      <!-- <span>View Checksum</span> -->
      <span></span>
      <span
        class="icon"
        :style="{'transform' : isOpen? 'rotate(90deg)' : 'rotate(270deg)'}"
      >arrow_back_ios</span>
    </div>
    <table :style="{'max-height' : isOpen? '600px' : '0px'}">
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
  </div>
</template>

<script>
export default {
  props: ["sha"],
  data: function() {
    return {
      shasum: this.$props.sha,
      isOpen: false
    };
  },
  methods: {
    toggle: function() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style lang="scss">
.dropdown {
  font-family: var(--heading-font-family);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  line-height: 42px;
  width: calc(100% - 20px);

  position: absolute;
  top: 2px;
  left: 0px;

  span {
    display: inline-flex;
  }

  .icon {
    font-family: "Material Icons";
    transition: 0.2s transform;
  }
}

table {
  margin: 0px;
  transition: 0.2s max-height;
  border-top: 0px;
}
</style>
