<template>
<div class="social-icon-container">
    <a class="social-icon" :title="item.title" v-for="item of social" v-html="item.svg" :href="item.link" target="_blank"></a>
</div>
</template>

<script>
export default {
    data() {
        return {
            social: [{
                    svg: require("!!svg-inline-loader!@buildAssets/signature/github.svg"),
                    link: "https://github.com/nishkalkashyap",
                    title : 'GitHub'
                },
                {
                    svg: require("!!svg-inline-loader!@buildAssets/signature/twitter.svg"),
                    link: "https://twitter.com/nishkalkashyap",
                    title : 'Twitter'
                },
                {
                    svg: require("!!svg-inline-loader!@buildAssets/signature/website.svg"),
                    link: "https://nishkal.in",
                    title : 'Website'
                },
                {
                    svg: require("!!svg-inline-loader!@buildAssets/signature/mail.svg"),
                    link: "mailto:hello@nishkal.in?subject=Hey%20Nishkal,",
                    title : 'Email'
                },
                {
                    svg: require("!!svg-inline-loader!@buildAssets/signature/instagram.svg"),
                    link: "https://www.instagram.com/nishkalkashyap/",
                    title : 'Instagram'
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
