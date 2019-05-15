<template>
  <div class="card-container">
    <div class="title" @click="openLink()">{{title}}</div>
    <div class="description">{{description}}</div>
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

<style lang="scss">
.card-container {
  padding: 20px;
  margin: 40px 20px;
  min-width: 350px;
  max-width: 600px;
  display: inline-block;
  color: var();
  border-radius: 2px;
  box-shadow: 0px 4px 8px rgba(0, 30, 84, 0.12);
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
</style>
