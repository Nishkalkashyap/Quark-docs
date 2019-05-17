<template>
  <div style="margin:0px;overflow-x:hidden;">
    <div class="dropdown" @click="toggle()">
      <span></span>
      <span
        class="icon"
        :style="{'transform' : isOpen? 'rotate(90deg)' : 'rotate(270deg)'}"
      >arrow_back_ios</span>
    </div>
    <div
      class="height-container"
      :style="{'max-height' : isOpen? (maxHeight || '600px') : '0px', 'overflow-y' : isOpen? 'auto' : 'hidden'}"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["maxHeight"],
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

<style lang="scss" scoped>
.dropdown {
  font-family: var(--heading-font-family);
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  line-height: 42px;
  width: calc(100% - 20px);

  position: absolute;
  top: 6px;
  left: 0px;

  span {
    display: inline-flex;
  }

  .icon {
    font-family: "Material Icons";
    transition: 0.2s transform;
    padding-left: 8px;
  }
}
.height-container {
  transition: 0.2s max-height;
  overflow-x: hidden !important;
}
</style>
