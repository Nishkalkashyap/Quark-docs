<template>
  <div class="card-container">
    <div class="title">{{title}}</div>
    <div class="description">{{description}}</div>
    <div class="description">{{link}}</div>
    <div class="tags">
      <Tag v-for="tag of dtags" :name="tag" :key="tag"></Tag>
    </div>
  </div>
</template>

<script>
import Tag from "./Tag.vue";
export default {
  props: ["title", "description", "tags", "link"],
  data: () => {
    return {
      dtags: []
    };
  },
  mounted: function() {
    console.log("Mounted");
    console.log(this.tags, typeof this.tags);
    this.dtags = JSON.parse(this.tags);
  },
  components: {
    Tag
  }
};
</script>

<style lang="scss">
.card-container {
  padding: 40px;
  background-color: var(--text-color--lighter);
  margin: 40px 0px;
  display: inline-block;
  color: var();
  border-radius: 2px;
  .title {
    font-family: var(--heading-font-family) !important;
    font-size: 26px;
    color: var(--text-color--dark);
  }

  .description {
    font-size: 13px;
  }
}
</style>
