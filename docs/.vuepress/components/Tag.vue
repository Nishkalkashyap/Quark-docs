<template>
  <div
    class="tag-container"
    :style="{'background' : background, 'color' : color}"
    @click="openTagPage()"
  >
    <span>#{{name}}</span>
  </div>
</template>

<script>
import { AllTags } from "@scripts/types";
export default {
  props: ["name"],
  data: () => {
    return {
      color: "",
      background: ""
    };
  },
  mounted: function() {
    const name = this.name.toLowerCase();
    this.color = AllTags[name] ? AllTags[name].color : "var(--text-color)";
    this.background = AllTags[name]
      ? AllTags[name].background
      : "var(--text-color--dark)";
  },
  methods: {
    openTagPage: function() {
      const name = this.name.toLowerCase();
      this.$router.push({ path: `/tags/${name}.html` });
    }
  }
};
</script>

<style lang="scss">
.tag-container {
  font-size: 28px;
  display: inline-block;
  padding: 12px 20px 12px 10px;
  font-family: var(--heading-font-family);
  border-radius: 3px;
  cursor: pointer;
  margin: 10px 10px;
  box-shadow: 4px 4px 12px 4px rgba(0, 0, 0, 0);
  transition: 0.2s box-shadow;
  word-break: keep-all;
}

.tag-container:hover {
  box-shadow: 4px 4px 12px 4px rgba(0, 0, 0, 0.15);
}
</style>
