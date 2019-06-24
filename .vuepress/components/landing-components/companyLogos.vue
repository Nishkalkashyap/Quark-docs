<template>
  <div>
    <div class="logo-list">
      <img
        v-for="(logo, index) of logos"
        class="item"
        alt="logo"
        :src="logo.path"
        :style="{'left' : index * 200 + movingIndex +  'px', transform : `translate3d(0, ${logo.y}px , 0)`}"
      >
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      logos: [
        "css",
        "javascript",
        "nodejs",
        "npm",
        "react_ts",
        "typescript",
        "webpack"
      ].map((val, ind) => {
        return {
          path: `/logos/${val}.svg`,
          y: 0
        };
      }),
      movingIndex: 0
    };
  },
  mounted: function() {
    setInterval(() => {
      var increase = Math.PI / 100;
      this.logos.map((logo, index) => {
        this.movingIndex = this.movingIndex + increase;
        const num = this.movingIndex.toString();
        logo.y =
          Math.sin(Number(num.substring(num.length - 3, num.length)) / 1000) *
          10;
      });
    }, 10);
  }
};

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
</script>

<style lang="scss">
.logo-list {
  display: flex;
  padding: 20px 0px;
  position: relative;
  .item {
    width: 90px;
    padding: 30px 30px;
    overflow: hidden;
    margin: 0px 30px;
    box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.1);
    border-radius: 200px;
    position: absolute;
  }
}
</style>
