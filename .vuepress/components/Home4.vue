<template>
<div class="home4-component">
    <heroTop />

    <!-- <div class="full-height first-container landing-page-background">
        <div class="first-container-wrapper flex-center">
            <div class="image-container">
                <video
            muted
            autoplay
            loop
            name="media"
            poster="~@buildAssets/guide/hello-world-intro.png"
            crossorigin="anonymous"
            class="image-transition"
          >
            <source src="~@buildAssets/guide/showcase/web-browser.mp4" type="video/mp4">Your browser does not support the video tag.
          </video>
            </div>
            <heroDownload />
        </div>
    </div> -->

    <heroSection side="left" heading="GitHub for Atom" upper="A text editor is at the core of a developer’s toolbox, but it doesn't usually work alone. Work with Git and GitHub directly from Atom with the GitHub package." lower="A text editor is at the core of a developer’s toolbox, but it doesn't usually work alone. Work with Git and GitHub directly from Atom with the GitHub package.">
        <video
        muted
        autoplay
        loop
        name="media"
        poster="~@buildAssets/guide/hello-world-intro.png"
        crossorigin="anonymous"
        class="image-transition"
        slot="image"
      >
        <source src="~@buildAssets/guide/showcase/web-browser.mp4" type="video/mp4">Your browser does not support the video tag.
      </video>
    </heroSection>

    <heroSection side="right" heading="GitHub for Atom" upper="A text editor is at the core of a developer’s toolbox, but it doesn't usually work alone. Work with Git and GitHub directly from Atom with the GitHub package." lower="A text editor is at the core of a developer’s toolbox, but it doesn't usually work alone. Work with Git and GitHub directly from Atom with the GitHub package.">
        <video
        muted
        autoplay
        loop
        name="media"
        poster="~@buildAssets/guide/hello-world-intro.png"
        crossorigin="anonymous"
        class="image-transition"
        slot="image"
      >
        <source src="~@buildAssets/guide/hello-world-intro.mp4" type="video/mp4">Your browser does not support the video tag.
      </video>
    </heroSection>

    <heroSection side="left" heading="GitHub for Atom" upper="A text editor is at the core of a developer’s toolbox, but it doesn't usually work alone. Work with Git and GitHub directly from Atom with the GitHub package." lower="A text editor is at the core of a developer’s toolbox, but it doesn't usually work alone. Work with Git and GitHub directly from Atom with the GitHub package.">
        <video
        muted
        autoplay
        loop
        name="media"
        poster="~@buildAssets/guide/hello-world-intro.png"
        crossorigin="anonymous"
        class="image-transition"
        slot="image"
      >
        <source src="~@buildAssets/guide/showcase/web-browser.mp4" type="video/mp4">Your browser does not support the video tag.
      </video>
    </heroSection>

    <!-- <div class="full-height first-container landing-page-background">
        <div class="first-container-wrapper flex-center">
            <div class="image-container">
                <video
            muted
            autoplay
            loop
            name="media"
            poster="~@buildAssets/guide/hello-world-intro.png"
            crossorigin="anonymous"
            class="image-transition"
          >
            <source src="~@buildAssets/guide/showcase/web-browser.mp4" type="video/mp4">Your browser does not support the video tag.
          </video>
            </div>
            <heroDownload />
        </div>
    </div> -->

    <div class="landing-page-background">
        <Download disable_post_content="true" version="0.4.7" channel="stable" linux_main="Quark-linux-x86_64-0.4.7.AppImage" linux_other='[" Quark-linux-amd64-0.4.7.deb","Quark-linux-x64-0.4.7.tar.gz"]' windows_main="Quark-win-0.4.7.exe" windows_other='[" Quark-win-x64-0.4.7.msi","Quark-win-x64-0.4.7.zip"]' />
    </div>

    <SWUpdatePopup :updateEvent="swUpdateEvent" />
</div>
</template>

<script>
import companyLogos from "./landing-components/companyLogos";
import heroDownload from "./landing-components/hero-download2";
import heroSection from "./landing-components/hero-section";
import heroTop from "./landing-components/hero-top";
import Download from "./Download";
import SWUpdatePopup from "@default-theme/SWUpdatePopup.vue";
export default {
    components: {
        SWUpdatePopup,
        companyLogos,
        heroDownload,
        heroSection,
        heroTop
    },
    data: () => {
        return {
            swUpdateEvent: null
        };
    },
    mounted() {
        this.$on("sw-updated", this.onSWUpdated);
    },
    methods: {
        onSWUpdated(e) {
            console.log(`Service Worker Updated`);
            this.swUpdateEvent = e;
        }
    }
};
</script>

<style lang="scss" scoped>
.full-height {
    height: 100vh;
    width: 100%;
    max-width: 100%;
}

.flex-center {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 0px 50px;
    box-sizing: border-box;
}

.first-container-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
}

.image-transition {
    transition: filter 2s;
    // filter: brightness(0.75) contrast(1) sepia(1) hue-rotate(190deg) saturate(5);
    filter: brightness(0.7) contrast(1) sepia(1) hue-rotate(140deg) saturate(1.5);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
}

.image-transition:hover {
    filter: brightness(1) contrast(1) sepia(0) hue-rotate(0deg) saturate(1);
}

.first-container {
    // width: 1040px;
    overflow: hidden;

    div.image-container {
        width: 100%;
        display: flex;
        align-items: center;

        video {
            max-width: 100%;
        }
    }

    div.image-container:hover {
        filter: brightness(1) contrast(1) sepia(0) hue-rotate(0deg) saturate(1);
    }
}
</style>
