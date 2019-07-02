<template>
  <div class="hero-download2-container">
    <div class="container">
      <div class="box">
        <span class="header" style="letter-spacing:0.3em;">Quark</span>
      </div>
      <div class="box">
        <span class="header">0.5.0</span>
        <span class="sub-header">Release Notes</span>
      </div>
      <div class="box">
        <span class="header">Windows</span>
        <span class="sub-header">For 64-bit Windows 7 or later</span>
      </div>
      <div class="box">
        <img src="/images/download.svg" alt="image">
        <div class="button">Download</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  display: inline-flex;
  margin-left: 20px;
  flex-direction: column;
  border: solid 1px var(--line-rule-color);
  border-radius: 20px;
  min-width: 260px;
}

.box:last-child {
  border-bottom: none !important;
}
.box {
  min-height: 30px;
  min-width: 50px;
  text-align: center;
  padding: 20px;
  border-bottom: solid 1px var(--line-rule-color);
  // color: var(--accent-color);
  color: var(--text-color);
  position: relative;
  .header {
    font-family: var(--heading-font-family);
    font-size: 28px;
    display: block;
    letter-spacing: 0.1em;
  }

  .sub-header {
    font-size: 14px;
    font-weight: 500;
  }

  img {
    display: inline-block;
    position: absolute;
    left: 40px;
    top: 45px;
    width: 16px;
  }

  .button {
    padding: 20px 32px 20px 42px;
    background-color: var(--accent-color);
    color: var(--ion-color-dark-contrast);
    transition: 0.2s color;
    font-size: 16px;
    font-family: var(--heading-font-family);
    border-radius: 5px;
    border: 0px;
    cursor: pointer;
    font-size: 18px;
  }
}
</style>
