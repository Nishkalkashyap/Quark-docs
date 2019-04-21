<template>
  <div class="container">
    <div class="windows platform">
      <img src="/images/windows-logo.png" style="width:100px">
      <button
        class="download-button"
        @click="openExternal('windows_exe', windows)"
        :class="windows? 'download-enabled' : null"
      >
        <img class="download-svg" src="/images/download.svg">
        <span class="platform-name">Windows</span>
        <span class="platform-distro" style="display:inline;">(.exe)</span>
        <span class="platform-distro">Windows 7, 8, 10</span>
        <span class="coming-soon" v-if="!windows">Coming Soon</span>
      </button>
    </div>

    <div class="linux platform">
      <img src="/images/linux-logo.png" style="width:100px">
      <button
        class="download-button"
        @click="openExternal('linux_appImage', linux)"
        :class="linux? 'download-enabled' : null"
      >
        <img class="download-svg" src="/images/download.svg">
        <span class="platform-name">Linux</span>
        <span class="platform-distro" style="display:inline;">(.AppImage)</span>
        <span class="platform-distro">Debian, Ubuntu, Red Hat, Fedora</span>
        <span class="coming-soon" v-if="!linux">Coming Soon</span>
      </button>
    </div>

    <div class="mac platform">
      <img src="/images/apple-logo.svg">
      <button
        class="download-button"
        @click="openExternal('mac_dmg',mac)"
        :class="mac? 'download-enabled' : null"
      >
        <img class="download-svg" src="/images/download.svg">
        <span class="platform-name">Mac</span>
        <span class="platform-distro" style="display:inline;">(.app)</span>
        <span class="platform-distro">macOS 10.9+</span>
        <span class="coming-soon" v-if="!mac">Coming Soon</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["windows", "linux", "mac"],
  methods: {
    openExternal: (baseUrl, link) => {
      if (!link) {
        return;
      }
      const finalUrl = `https://quarkjs.io/download-count/${baseUrl}?redirect=${link}`;
      window.open(finalUrl);
      // window.open(link);
    }
  }
};
</script>

<style lang="scss">
.container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.platform {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 200px;
  margin: 60px 0px;
  img {
    max-height: 100px !important;
  }

  .download-button {
    margin-top: 20px;
    position: relative;
    background-color: var(--text-color);
    color: var(--background-color);
    cursor: not-allowed !important;
    border: 0px;
    padding: 10px 0px;
    width: 220px;
    cursor: pointer;

    .download-svg {
      width: 18px;
    }

    .platform-name {
      padding-left: 20px;
      font-size: 20px;
      font-weight: 500;
    }

    .platform-distro {
      display: block;
      margin-top: 10px;
      color: #cccccc;
      font-size: 12px;
      font-weight: 700;
    }
  }

  .download-enabled {
    cursor: pointer !important;
    background-color: var(--accent-color);
    color: var(--background-color) !important;
  }

  .download-enabled:hover {
    background-color: lighten($color: #007acc, $amount: 8);
  }

  .coming-soon {
    position: absolute;
    background-color: var(--accent-color);
    padding: 5px 5px;
    border-radius: 3px;
    right: -30px;
    top: -15px;
    display: block;
  }
}
</style>
