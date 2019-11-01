<template>
<ParentLayout>
    <!-- <PageBottom slot="page-bottom"/> -->
    <!-- <Disqus slot="page-bottom" /> -->
    <!-- <div slot="page-top">
        <Message />
    </div> -->

    <template #sidebar-top>
      <CarbonAds/>
    </template>

    <!-- <PageBottom slot="sidebar-top"/> -->
    <!-- <BuySellAds slot="page-bottom"/> -->
    <div slot="page-bottom">
        <div style="text-align:center;margin-top:50px;font-size:14px">
            MIT Licensed | Copyright © 2019-present <a href="https://nishkal.in" target="_blank">Nishkal Kashyap</a>
        </div>
        <div class="social-icon-container" style="display:flex;justify-content:center;margin-top:20px;">
            <SocialIcons />
        </div>
        <SWUpdatePopup :updateEvent="swUpdateEvent" />
    </div>
</ParentLayout>
</template>

<script>
// import ParentLayout from '@default-theme/Layout.vue';
import ParentLayout from "./Layouttt.vue";
import PageBottom from "./PageBottom.vue";
import Disqus from "./Disqus.vue";
import SWUpdatePopup from "@default-theme/SWUpdatePopup.vue";
import Message from "@vuepress/components/Message.vue";
export default {
    components: {
        ParentLayout,
        PageBottom,
        Disqus,
        SWUpdatePopup,
        Message
    },
    data() {
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