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
    </div>-->

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
        <source src="~@buildAssets/guide/showcase/web-browser.mp4" type="video/mp4" />Your browser does not support the video tag.
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
        <source src="~@buildAssets/guide/hello-world-intro.mp4" type="video/mp4" />Your browser does not support the video tag.
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
        <source src="~@buildAssets/guide/showcase/web-browser.mp4" type="video/mp4" />Your browser does not support the video tag.
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
    </div>-->

    <div class="landing-page-background downloads-container">
        <floaters side="right" />
        <!-- <svg viewBox="0 0 30 44.58" class="download-svg">
        <path d="M28.74,20.81H1.26a1.26,1.26,0,0,1-1-2L14.16.5a1.25,1.25,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,18.8a1.25,1.25,0,0,1-1,2ZM3.81,18.29H26.22L15.16,3.37Z" />
        <path d="M28.74,42H1.26a1.28,1.28,0,0,1-1.13-.71A1.26,1.26,0,0,1,.26,40l13.9-18.29a1.28,1.28,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,40a1.26,1.26,0,0,1,.12,1.32A1.28,1.28,0,0,1,28.74,42ZM3.81,39.47H26.22L15.16,24.55Z" />
      </svg>-->
        <h1>All Downloads</h1>
        <Download disable_post_content="true" channel="stable" />
        <h3>
            <router-link to="/download/insiders">Or get the insiders release</router-link>
        </h3>
    </div>

    <div class="landing-page-background">
        <floaters side="left" />
        <heroFeatures />
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
import floaters from "./landing-components/floaters";
import heroFeatures from "./landing-components/hero-features";
export default {
    components: {
        SWUpdatePopup,
        companyLogos,
        heroDownload,
        heroSection,
        heroTop,
        floaters,
        heroFeatures
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

.downloads-container {
    position: relative;

    h1 {
        // margin: 0px;
        // background-color: var(--text-color--dark);
        padding: 15px 35px;
        border-radius: 4px;
        text-align: center;
        top: 70px;
        position: relative;
        margin-bottom: 100px !important;
        // border-top-right-radius: 20px;
        // border-bottom-left-radius: 20px;
        // border-top: solid 10px var(--accent-color);
    }

    @media only screen and (max-width: 600px) {
        h1 {
            font-size: 36px !important;
        }
    }

    svg {
        // height: 50px;
        height: 3em;
        position: relative;
        left: -160px;
        // top: 90px;
        top: 5.5em;
        transform: rotate(180deg);
        stroke-width: 2 !important;
    }

    h3 {
        // border-top-right-radius: 10px;
        // border-bottom-left-radius: 10px;
        border-radius: 2px;
        margin-bottom: 150px;
        padding: 10px 20px;
    }
}
</style>
