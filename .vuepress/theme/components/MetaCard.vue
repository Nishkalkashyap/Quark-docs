<template>
  <div>
    <div class="card-container">
      <slot></slot>
      <div class="title" @click="openLink()">{{title}}</div>
      <div class="description">{{description}}</div>
      <div class="tags">
        <Tag v-for="tag of dtags" :name="tag" :key="tag"></Tag>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from "./Tag.vue";
export default {
  props: ["title", "description", "tags", "link", "cover"],
  data: () => {
    return {
      dtags: []
    };
  },
  mounted: function() {
    this.dtags = JSON.parse(this.tags);
  },
  methods: {
    openLink: function() {
      this.$router.push({ path: `/${this.link}` });
    }
  },
  components: {
    Tag
  }
};
</script>

<style lang="scss" scoped>
.card-container {
  padding: 20px;
  margin: 40px 20px;
  flex-grow: 1;
  min-width: 300px;
  max-width: 450px;
  display: inline-block;
  color: var();
  border-radius: 2px;
  box-shadow: 0px 0.175em 0.5em rgba(2, 8, 20, 0.1),
    0px 0.085em 0.175em rgba(2, 8, 20, 0.08);
  transition: all 250ms;

  img {
    cursor: pointer;
  }
  .title {
    font-family: var(--heading-font-family);
    margin: 10px 0px;
    font-size: 28px;
    color: var(--text-color--dark);
    cursor: pointer;
  }

  .description {
    font-size: 18px;
    font-weight: 500;
    padding: 10px 0px;
  }

  .tag-container {
    font-size: 14px;
    margin: 5px 5px;
    padding: 6px 10px 6px 10px;
  }
}
.card-container:hover {
  transform: translateY(-2px);
  box-shadow: 0 0.35em 1.175em rgba(2, 8, 20, 0.1),
    0 0.175em 0.5em rgba(2, 8, 20, 0.08);
}
</style>
