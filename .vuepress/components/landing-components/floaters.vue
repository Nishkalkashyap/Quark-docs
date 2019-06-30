<template>
<div class="floaters-component">
    <div class="random-svgs-container">
        <svg
        class="random-svg"
        :class="svg.svg.className"
        v-for="svg in svgs"
        v-html="svg.svg.shape"
        :viewBox="svg.svg.viewBox"
        :style="svg.style"
      ></svg>
    </div>
</div>
</template>

<script>
import {
    darkSvgs,getSvgs
} from "./svg";
export default {
    props: ["side"],
    data() {
        const _svgs = getSvgs().concat(darkSvgs);
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
            svgs: svgs
        };
    }
};
</script>

<style lang="scss" scoped>
.random-svgs-container {
    position: absolute;
    left: 0px;
    top: 0px;
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    margin: 20px;
    z-index: -1;

    .random-svg {
        position: absolute;
    }
}
</style>
