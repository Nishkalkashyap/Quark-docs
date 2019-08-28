<template>
<div class="social-icon-container">
    <a class="social-icon" v-for="item of social" v-html="item.svg" :href="item.link" target="_blank"></a>
</div>
</template>

<script>
export default {
    data() {
        return {
            social: [{
                    svg: require("!!svg-inline-loader!@buildAssets/signature/instagram.svg"),
                    link: "https://www.instagram.com/nishkalkashyap/"
                },
                {
                    svg: require("!!svg-inline-loader!@buildAssets/signature/twitter.svg"),
                    link: "https://twitter.com/nishkalkashyap"
                },
                {
                    svg: require("!!svg-inline-loader!@buildAssets/signature/github.svg"),
                    link: "https://github.com/nishkalkashyap"
                },
                {
                    svg: require("!!svg-inline-loader!@buildAssets/signature/website.svg"),
                    link: "https://nishkal.in"
                },
                {
                    svg: require("!!svg-inline-loader!@buildAssets/signature/mail.svg"),
                    link: "mailto:hello@nishkal.in?subject=Hey%20Nishkal,"
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.social-icon {
    max-width: 30px;
    min-width: 30px;
    display: inline-block;
    cursor: pointer;
    margin-right: 10px;
}
</style>
