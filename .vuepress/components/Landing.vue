<template>
<div class="home4-component">
    <heroTop />

    <heroSection side="left" heading="New genre of desktop applications" upper="Built to power a whole new genre of desktop applications">
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

    <div class="landing-page-background">
        <floaters side="left" />
        <heroFeatures />
    </div>

    <div class="landing-page-background downloads-container">
        <floaters side="right" />
        <h1>All Downloads</h1>
        <Download disable_post_content="true" channel="stable" />
        <h3>
            <router-link to="/download/insiders">Or get the insiders release</router-link>
        </h3>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 338.05" preserveAspectRatio="none">
            <path>
              <animate
                attributeName="d"
                values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                repeatCount="indefinite"
                dur="30s"
              />
            </path>
          </svg>
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
    filter: brightness(0.7) contrast(1) sepia(1) hue-rotate(140deg) saturate(1.5);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
}

.image-transition:hover {
    filter: brightness(1) contrast(1) sepia(0) hue-rotate(0deg) saturate(1);
}

.first-container {
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
        padding: 15px 35px;
        border-radius: 4px;
        text-align: center;
        top: 70px;
        position: relative;
        margin-bottom: 80px !important;
        box-shadow: 0 20px 30px rgba(0, 0, 0, 0.5);
    }

    @media only screen and (max-width: 600px) {
        h1 {
            font-size: 36px !important;
        }
    }

    svg {
        transform: rotate(180deg);
        bottom: 0vh;
        position: absolute;
        fill: #6574cd99;
        stroke: #6574cd99;
        z-index: -2;
    }

    h3 {
        border-radius: 2px;
        margin-top: 60px;
        margin-bottom: 50px;
        padding: 10px 20px;
    }
}
</style>
