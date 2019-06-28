<template>
  <section class="hero-section-component" :class="side + '-side'">
    <div class="hero-section-container">
      <h3>{{heading}}</h3>
      <p>{{upper}}</p>
      <!-- <img :src="image"> -->
      <slot name="image"></slot>
      <p>{{lower}}</p>
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
  max-width: calc(100% - 40px);
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
    left: 0%;
    margin-left: 0px;
    top: 5%;
  }

  .hero-section-container {
    padding-right: 0px;
  }
}
</style>
