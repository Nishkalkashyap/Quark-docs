<template>
  <div
    class="hero-download"
    style="display: inline-flex;justify-content: center;align-items: center;"
  >
    <div class="download-button">
      <span style="display:inline-block;" class="download-type">Download for {{getOS()}}</span>
      <span style="display:inline-block;" class="build-type">Stable Build</span>
    </div>
    <div class="download-dropdown" @click="dropDown = !dropDown">
      <img class="download-svg" src="/images/download.svg">
    </div>
    <div
      class="drop-down"
      :style="{'max-height' : dropDown? '600px' : '0px', 'overflow-y' : dropDown? 'auto' : 'hidden', 'padding' : dropDown? '' : '0px'}"
    >
      <div>Hello</div>
    </div>
  </div>
</template>

<script>
import DropDown from "./../DropDown";
export default {
  data: () => {
    return {
      dropDown: false
    };
  },
  mounted: () => {
    // console.log(platform);
  },
  methods: {
    getOS() {
      let OS;
      const userAgent = navigator.userAgent;
      if (
        /Mac/i.test(userAgent) &&
        !/iPhone/i.test(userAgent) &&
        !/iPad/i.test(userAgent)
      ) {
        OS = "Mac";
      } else if (/Windows/i.test(userAgent)) {
        OS = "Windows";
      } else if (/Fedora/i.test(userAgent)) {
        OS = "Fedora";
      } else if (/Ubuntu/i.test(userAgent)) {
        OS = "Ubuntu";
      } else if (/Linux/i.test(userAgent)) {
        OS = "Linux";
      } else {
        OS = "Linux";
      }
      return OS;
    }
  }
};
</script>

<style lang="scss" scoped>
.download-button {
  display: inline-flex;
  flex-direction: column;
  text-align: center;
  background-color: var(--accent-color);
  font-size: 18px;
  width: 210px;
  font-family: var(--heading-font-family);
  padding: 10px 20px;
  height: 40px;
  cursor: pointer;
  .download-type {
    color: #ffffff;
  }

  .build-type {
    font-size: 13px;
    font-weight: 300;
    color: var(--text-color--lighter);
  }
}
.download-button:hover {
  box-shadow: 4px 4px 12px 4px rgba(0, 0, 0, 0.15);
}

.download-dropdown {
  display: inline-flex;
  cursor: pointer;
  width: 50px;
  height: 60px;
  margin-left: 5px;
  background-color: var(--accent-color);
  img {
    width: 30px;
    margin-left: 10px;
  }
}

.drop-down {
  background-color: var(--accent-color);
  color: #ffffff;
  font-weight: 500;
  margin-top: 10px;
  padding: 10px 0px;
  position: relative;
  top: 50px;
  left: -305px;
  width: 305px;
}
</style>
