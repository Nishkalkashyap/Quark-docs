<template>
  <div>
    <div class="sig-container border-left">
      <div>
        <span class="name">Nishkal Kashyap</span>
      </div>
      <div class="designation-container">
        <span class="designation">Engineer</span>
        <span class="designation border-left">Developer</span>
        <span class="designation border-left">Blogger</span>
        <span class="designation border-left">
          Creator of
          <a href="https://quarkjs.io" target="_blank">Quark.js</a>
        </span>
      </div>
      <a class="block-elements" href="https://nishkal.in" target="_blank">nishkal.in</a>
      <a
        class="block-elements"
        href="mailto:hello@nishkal.in?subject=Hey%20Nishkal,"
        target="_blank"
      >hello@nishkal.in</a>
      <div class="social-icon-container">
        <a class="social-icon" v-for="item of social" v-html="item.svg" :href="item.link" target="_blank"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      social: [
        {
          svg: require("!!svg-inline-loader!@buildAssets/signature/instagram.svg"),
          link: "https://www.instagram.com/nishkalkashyap/"
        },
        {
          svg: require("!!svg-inline-loader!@buildAssets/signature/twitter.svg"),
          link: "https://twitter.com/nishkalkashyap"
        },
        {
          svg: require("!!svg-inline-loader!@buildAssets/signature/github.svg"),
          link: "https://github.com/nishkalkashyap"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.border-left {
  border-left: solid 2px var(--accent-color);
  padding-left: 5px;
}

.sig-container {
  color: #000000;
  margin-top: 50px;
  padding-left: 10px;
    font-family: var(--heading-font-family);
}

.name {
  font-weight: 800;
  font-size: 18px;
}

a {
  cursor: pointer;
}

.designation-container {
  margin-top: 2px;
}

.designation {
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  display: inline-block;
}

.block-elements {
  display: block;
  font-size: 14px;
  margin-top: 5px;
}

.social-icon-container {
  margin-top: 3px;
}

.social-icon {
  max-width: 30px;
  min-width: 30px;
  display: inline-block;
  cursor: pointer;
  margin-right: 10px;
}
</style>
