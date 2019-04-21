<template>
  <div class="container">
    <div class="platform">
      <img src="/images/windows-logo.png" style="width:100px">
      <button
        class="download-button"
        @click="openExternal(windows_main)"
        :class="windows_main? 'download-enabled' : null"
      >
        <img class="download-svg" src="/images/download.svg">
        <span class="platform-name">Windows</span>
        <span class="platform-distro" style="display:inline;">(.exe)</span>
        <span class="platform-distro">Windows 7, 8, 10</span>
        <span class="coming-soon" v-if="!windows_main">Coming Soon</span>
      </button>
      <div class="other-downloads-heading">Other downloads</div>
      <div v-for="bin in all_windows_downloads" class="other-downloads">
        <span>{{getExtensionFromBinary(bin)}}</span>
        <a :href="getLinkFromBinary(bin)" target="_blank">Download</a>
      </div>
    </div>

    <div class="platform">
      <img src="/images/linux-logo.png" style="width:100px">
      <button
        class="download-button"
        @click="openExternal(linux_main)"
        :class="linux_main? 'download-enabled' : null"
      >
        <img class="download-svg" src="/images/download.svg">
        <span class="platform-name">Linux</span>
        <span class="platform-distro" style="display:inline;">(.AppImage)</span>
        <span class="platform-distro">Debian, Ubuntu, Red Hat, Fedora</span>
        <span class="coming-soon" v-if="!linux_main">Coming Soon</span>
      </button>
      <div class="other-downloads-heading">Other downloads</div>
      <div v-for="bin in all_linux_downloads" class="other-downloads">
        <span>{{getExtensionFromBinary(bin)}}</span>
        <a :href="getLinkFromBinary(bin)" target="_blank">Download</a>
      </div>
    </div>

    <div class="platform">
      <img src="/images/apple-logo.svg">
      <button
        class="download-button"
        @click="openExternal(mac)"
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
  props: [
    "version",
    "linux_main",
    "linux_other",
    "windows_main",
    "windows_other",
    "mac"
  ],
  data: function() {
    const all_windows_downloads = JSON.parse(this.$props.windows_other);
    all_windows_downloads.push(this.windows_main);

    const all_linux_downloads = JSON.parse(this.$props.linux_other);
    all_linux_downloads.push(this.linux_main);
    return {
      all_windows_downloads,
      all_linux_downloads
    };

    const obj = {
      image: "",
      mainDownload: "",
      platformName: "",
      platformExt: "",
      platformSupported: ""
    };
  },
  methods: {
    getLinkFromBinary: function(bin) {
      if (!bin) {
        return;
      }
      const finalUrl = `https://quarkjs.io/download-count/?version=${
        this.$props.version
      }&&binary=${bin}`;
      return finalUrl;
    },
    openExternal: function(bin) {
      window.open(this.getLinkFromBinary(bin));
    },
    getExtensionFromBinary: function(bin) {
      console.log(bin);
      if (bin.endsWith(".exe")) {
        return ".exe";
      }
      if (bin.endsWith(".zip")) {
        return ".zip";
      }
      if (bin.endsWith(".deb")) {
        return ".deb";
      }
      if (bin.endsWith(".AppImage")) {
        return ".appImage";
      }
      if (bin.endsWith(".tar.gz")) {
        return ".tar.gz";
      }
      return bin;
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
    background-color: var(--text-color--darker);
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
    background-color: var(--ion-color-primary-tint);
  }

  .other-downloads-heading {
    margin-top: 10px;
    font-size: 16px;
    font-weight: 700;
  }

  .other-downloads {
    margin-top: 10px;
    display: flex;
    width: 100%;
    text-align: center;
    justify-content: space-between;

    span,
    a {
      display: inline-block;
      width: 50%;
      font-size: 14px;
      font-weight: 500;
    }
    a {
      cursor: pointer;
    }
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
