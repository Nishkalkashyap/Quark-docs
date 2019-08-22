<template>
<section class="hero-section-component landing-page-background" :class="side + '-side'">
    <div class="hero-section-wrapper" ref="containerElement" :class="{'can-show' : canShow}">
        <div class="hero-section-container">
            <h3>{{heading}}</h3>
            <p v-html="upper"></p>
            <slot name="image"></slot>
            <p v-html="lower"></p>
            <a :href="(learnMoreLink || '/download/')" v-if="(learnMoreLink ||'').startsWith('https')" target="_blank">Learn more</a>
            <router-link :to="(learnMoreLink || '/download/')" v-if="!(learnMoreLink ||'').startsWith('https')">Learn more</router-link>
        </div>
    </div>
    <floaters :side="side" />
</section>
</template>

<script>
import floaters from "./floaters";
import {
    isInViewport
} from './util';
export default {
    props: ["side", "heading", "upper", "lower", "image", "learnMoreLink"],
    components: {
        floaters
    },
    data() {
        return {
            canShow: true
        }
    },
    mounted() {
        window.addEventListener('scroll', () => {
            this.canShow = isInViewport(this.$refs.containerElement);
        });
    }
};
</script>

<style lang="scss" scoped>
.can-show video {
    opacity: 1;
}

video {
    opacity: 0;
    width: calc(100% - 40px);
    max-width: 800px;
    border-radius: 5px;
    z-index: 1;

    position: absolute;
    top: 25%;

    // display: none;
}

.hero-section-wrapper {
    max-width: 860px;
}

.hero-section-container {
    padding: 20px;
    // position: relative;
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
        left: 0% !important;
        margin-left: 0px !important;
        right: 0% !important;
        margin-right: 0px !important;
        top: 5%;
        margin: 0 auto !important;
    }

    .hero-section-container {
        padding-right: 20px !important;
        padding-left: 20px !important;
    }
}

h3 {
    position: relative;
}

h3::before {
    // border-top: solid 10px var(--accent-color);
    border-top: solid 10px var(--text-color--dark);
    content: "";
    display: block;
    position: absolute;
    width: 80px;
    top: 20px;
}

// h3::after {
//     content: "";
//     min-width: 30px;
//     height: 25px;
//     position: absolute;
//     top: 43px;
//     background-repeat: no-repeat !important;
//     background: url(~@buildAssets/landing-page-svgs/triangle.svg) 0% 0% / 25px;
// }

a {
    display: inline-block;
    padding: 0.5em 1em;
    line-height: inherit;
    font-size: inherit;
    font-weight: 500;
    text-decoration: none;
    border-radius: 5px;
    color: #ffffff;
    background-color: var(--accent-color);
}
</style>
