<template>
  <div class="full-height">
      <companyLogos />
  </div>
</template>

<script>
import companyLogos from './landing-components/companyLogos'
export default {
    components : {
        companyLogos
    }
};
</script>

<style lang="scss">
.full-height {
  height: 100%;
  width: 100%;
}
</style>
