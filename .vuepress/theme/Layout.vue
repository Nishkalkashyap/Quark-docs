<template>
  <ParentLayout>
    <!-- <PageBottom slot="page-bottom"/> -->
    <!-- <Disqus slot="page-bottom" /> -->

    <!-- <PageBottom slot="sidebar-top"/> -->
    <!-- <BuySellAds slot="page-bottom"/> -->
    <div slot="page-bottom">
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
export default {
  components: {
    ParentLayout,
    PageBottom,
    Disqus,
    SWUpdatePopup
  },
  data() {
    return {
      swUpdateEvent: null
    };
  },
  mounted() {
    console.log(`Mounted`);
    this.$on("sw-updated", this.onSWUpdated);
  },
  methods: {
    onSWUpdated(e) {
      console.log(e);
      console.log(`Service Worker Updated`);
      this.swUpdateEvent = e;
    }
  }
};
</script>