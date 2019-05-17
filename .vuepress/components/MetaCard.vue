<template>
  <div>
    <div class="card-container">
      <div class="image-container" @click="openLink()">
        <slot></slot>
      </div>
      <div class="card-content">
        <div class="last-updated" v-if="lastUpdated">{{lastUpdated}}</div>
        <div class="title" @click="openLink()">{{page.title}}</div>
        <div class="description">{{frontmatter.description}}</div>
        <div class="tags">
          <Tag v-for="tag of frontmatter.tags" :name="tag" :key="tag"></Tag>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from "./Tag.vue";
export default {
  props: ["link"],
  data: () => {
    return {
      page: {},
      frontmatter: {}
    };
  },
  mounted: function() {
    this.page = this.$site.pages.find(page => {
      return page.path.includes(this.link);
    });
    this.frontmatter = this.page.frontmatter;
  },
  computed: {
    lastUpdated() {
      if (this.page && this.page.lastUpdated) {
        return (
          this.lastUpdatedText +
          ":  " +
          new Date(this.page.lastUpdated).toLocaleString()
        );
      }
    },
    lastUpdatedText() {
      if (typeof this.$themeLocaleConfig.lastUpdated === "string") {
        return this.$themeLocaleConfig.lastUpdated;
      }
      if (typeof this.$site.themeConfig.lastUpdated === "string") {
        return this.$site.themeConfig.lastUpdated;
      }
      return "Last Updated";
    }
  },
  methods: {
    openLink: function() {
      this.$router.push({ path: `${this.link}` });
    }
  },
  components: {
    Tag
  }
};
</script>

<style lang="scss" scoped>
.card-container {
  margin: 40px 20px;
  flex-grow: 1;
  min-width: 300px;
  max-width: 450px;
  display: inline-block;
  color: var();
  overflow: hidden;
  border-radius: 2px;
  box-shadow: 0px 0.175em 0.5em rgba(2, 8, 20, 0.1),
    0px 0.085em 0.175em rgba(2, 8, 20, 0.08);
  transition: all 250ms;

  img {
    cursor: pointer;
  }

  .card-content {
    padding: 10px 20px;
    .last-updated {
      font-size: 14px;
    }

    .title {
      font-family: var(--heading-font-family);
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
}
.card-container:hover {
  transform: translateY(-2px);
  box-shadow: 0 0.35em 1.175em rgba(2, 8, 20, 0.1),
    0 0.175em 0.5em rgba(2, 8, 20, 0.08);
}
</style>
