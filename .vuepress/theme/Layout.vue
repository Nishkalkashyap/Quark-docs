<template>
  <ParentLayout>
    <PageBottom slot="page-bottom"/>

    <!-- <PageBottom slot="sidebar-top"/> -->
    <!-- <BuySellAds slot="page-bottom"/> -->
  </ParentLayout>
</template>

<script>
import ParentLayout from '@default-theme/Layout.vue';
import PageBottom from './PageBottom.vue';
export default {
  components: {
    ParentLayout,
    PageBottom
  }
}
</script>