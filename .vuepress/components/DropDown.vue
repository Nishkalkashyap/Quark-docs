<template>
  <div style="margin:0px;">
    <div class="dropdown" @click="toggle()">
      <span></span>
      <span
        class="icon"
        :style="{'transform' : isOpen? 'rotate(90deg)' : 'rotate(270deg)'}"
      >arrow_back_ios</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["sha"],
  data: function() {
    return {
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
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  line-height: 42px;
  width: calc(100% - 20px);

  position: absolute;
  top: 2px;
  left: 0px;
}
</style>
