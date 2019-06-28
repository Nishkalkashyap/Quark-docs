<template>
  <div class="home4-component">
    <div class="full-height flex-center first-container">
      <!-- <companyLogos /> -->
      <div class="image-container">
        <img src="~@buildAssets/guide/introduction.png" class="image-transition">
      </div>
      <heroDownload/>
    </div>
  </div>
</template>

<script>
import companyLogos from "./landing-components/companyLogos";
import heroDownload from "./landing-components/hero-download2";
export default {
  components: {
    companyLogos,
    heroDownload
  }
};
</script>

<style lang="scss" scoped>
.full-height {
  height: 100%;
  width: 100%;
}

.flex-center {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0px 50px;
  box-sizing: border-box;
}

.image-transition {
  transition: filter 2s;
  filter: brightness(0.75) contrast(1) sepia(0.7) hue-rotate(-5deg)
    saturate(3.5);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
}
.image-transition:hover {
  filter: brightness(1) contrast(1) sepia(0) hue-rotate(0deg) saturate(1);
}

.first-container {
  width: 1040px;
  overflow: hidden;

  div.image-container {
    width: 100%;
    display: flex;
    align-items: center;

    img {
      max-width: 100%;
    }
  }
  div.image-container:hover {
    filter: brightness(1) contrast(1) sepia(0) hue-rotate(0deg) saturate(1);
  }
}
</style>
