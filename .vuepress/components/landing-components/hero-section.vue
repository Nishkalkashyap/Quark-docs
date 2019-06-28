<template>
  <section class="hero-section-component landing-page-background" :class="side + '-side'">
    <div class="hero-section-container">
      <h3>{{heading}}</h3>
      <p>{{upper}}</p>
      <slot name="image"></slot>
      <p>{{lower}}</p>
      <router-link to="/download/">Learn more</router-link>
    </div>
  </section>
</template>

<script>
export default {
  props: ["side", "heading", "upper", "lower", "image"]
};
</script>


<style lang="scss" scoped>
video {
  width: calc(100% - 40px);
  border-radius: 5px;

  position: absolute;
  top: 25%;
}

.hero-section-container {
  padding: 20px;
}

.left-side {
  video {
    left: 50%;
    margin-left: 60px;
  }

  .hero-section-container {
    padding-right: 450px;
  }
}

.right-side {
  video {
    right: 50%;
    margin-right: 60px;
  }
  .hero-section-container {
    padding-left: 450px;
  }
}

@media only screen and (max-width: 760px) {
  video {
    position: relative;
    left: 0% !important;
    margin-left: 0px !important;
    right: 0% !important;
    margin-right: 0px !important;
    top: 5%;
    margin: 0 auto !important;
  }

  .hero-section-container {
    padding-right: 20px !important;
    padding-left: 20px !important;
  }
}

h3 {
  position: relative;
}

h3::before {
  // border-top: solid 10px var(--accent-color);
  border-top: solid 10px var(--text-color--dark);
  content: "";
  display: block;
  position: absolute;
  width: 80px;
  top: 20px;
}

a {
  display: inline-block;
  padding: 0.5em 1em;
  line-height: inherit;
  font-size: inherit;
  font-weight: 500;
  text-decoration: none;
  border-radius: 5px;
  color: #ffffff;
  background-color: var(--accent-color);
}
</style>
