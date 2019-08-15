<template>
  <ParentLayout>
    <!-- <PageBottom slot="page-bottom"/> -->
    <!-- <Disqus slot="page-bottom" /> -->
    <div slot="page-top">
      <Message />
    </div>

    <!-- <PageBottom slot="sidebar-top"/> -->
    <!-- <BuySellAds slot="page-bottom"/> -->
    <div slot="page-bottom">
      <div style="text-align:center;margin-top:50px;font-size:14px">
        MIT Licensed | Copyright © 2019-present <router-link to="/FAQ/about.html">Nishkal Kashyap</router-link>
      </div>
      <SWUpdatePopup :updateEvent="swUpdateEvent"/>
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