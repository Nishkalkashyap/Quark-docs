<template>
  <ParentLayout>
    <!-- <PageBottom slot="page-bottom"/> -->
    <Disqus slot="page-bottom" />

    <!-- <PageBottom slot="sidebar-top"/> -->
    <!-- <BuySellAds slot="page-bottom"/> -->
  </ParentLayout>
</template>

<script>
import ParentLayout from '@default-theme/Layout.vue';
import PageBottom from './PageBottom.vue';
import Disqus from './Disqus.vue';
export default {
  components: {
    ParentLayout,
    PageBottom,
    Disqus
  }
}
</script>