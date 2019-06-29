<template>
<section class="hero-section-component landing-page-background" :class="side + '-side'">
    <div class="hero-section-wrapper">
        <div class="hero-section-container">
            <h3>{{heading}}</h3>
            <p>{{upper}}</p>
            <slot name="image"></slot>
            <p>{{lower}}</p>
            <router-link to="/download/">Learn more</router-link>
        </div>
    </div>
    <div class="random-svgs-container">
        <svg
        class="random-svg"
        v-for="svg in svgs"
        v-html="svg.svg.shape"
        :viewBox="svg.svg.viewBox"
        :style="svg.style"
      ></svg>
    </div>
</section>
</template>

<script>
import _svgs from "./svg";
export default {
    props: ["side", "heading", "upper", "lower", "image"],
    data() {
        const svgs = JSON.parse(JSON.stringify(_svgs));
        if (this.side == "right") {
            Object.keys(svgs).map(key => {
                const left = svgs[key].style.left;
                const right = svgs[key].style.right;

                svgs[key].style.left = right;
                svgs[key].style.right = left;
            });
        }
        return {
            svgs
        };
    }
};
</script>

<style lang="scss" scoped>
video {
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

// .hero-section-container::before {
//   content: "";
//   // background: url("~@buildAssets/landing-page-svgs/upDown.svg");
//   // background: url("~@public/images/shapes-background.svg");
//   background-repeat: repeat;
//   left: 0px;
//   top: 0px;
//   padding: 50px;
//   // width: calc(100% - 100px);
//   // height: 100%;
//   position: absolute;
//   z-index: -2;
// }

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

.random-svgs-container {
    position: absolute;
    left: 0px;
    top: 0px;
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    margin: 20px;

    .random-svg {
        position: absolute;
    }
}
</style>
