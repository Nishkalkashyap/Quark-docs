<template>
  <div class="sw-update-popup">
    {{message}}
    <br>
    <button @click="reload">{{buttonText}}</button>
  </div>
</template>

<script>
export default {
  props: {
    updateEvent: {
      type: Object,
      default: null
    }
  },

  computed: {
    popupConfig() {
      for (const config of [this.$themeLocaleConfig, this.$site.themeConfig]) {
        const sw = config.serviceWorker;
        if (sw && sw.updatePopup) {
          return typeof sw.updatePopup === "object" ? sw.updatePopup : {};
        }
      }
      return null;
    },

    enabled() {
      return Boolean(this.popupConfig && this.updateEvent);
    },

    message() {
      const c = this.popupConfig;
      return (c && c.message) || "New content is available.";
    },

    buttonText() {
      const c = this.popupConfig;
      return (c && c.buttonText) || "Refresh";
    }
  },

  methods: {
    reload() {
      if (this.updateEvent) {
        this.updateEvent.skipWaiting().then(() => {
          location.reload(true);
        });
        this.updateEvent = null;
      }
    }
  }
};
</script>

<style lang="scss">
div.sw-update-popup {
  border: none;
  font-family: var(--heading-font-family);
  background-color: var(--ion-color-dark);
  color: var(--ion-color-dark-contrast);
  border-radius: 2px;

  $buttonTextColor: var(--ion-color-dark);

  button {
    background-color: var(--ion-color-primary);
    color: $buttonTextColor;
    padding: 5px 40px;
    border: 0px;
    font-family: var(--heading-font-family);
    font-size: 15px;
    font-weight: 900;
    border-radius: 2px;
    cursor: pointer;
    position: relative;
  }

  button:before {
    width: 16px;
    height: 16px;
    display: inline-block;
    content: "";
    position: relative;
    left: -5px;
    top: 2px;
    mask: url("/images/icon-svg.svg") no-repeat 50% 50%;
    -webkit-mask: url("/images/icon-svg.svg") no-repeat 50% 50%;
    mask-size: cover;
    -webkit-mask-size: cover;
    background-color: $buttonTextColor;
    transition: 0.2s all;
  }
}
</style>
