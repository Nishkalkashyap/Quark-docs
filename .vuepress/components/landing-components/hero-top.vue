<template>
  <div class="hero-top-component">
    <div class="hero landing-page-background">
      <img src="/images/icon-svg.svg" alt="hero" class="logo">
      <h1>Lightning fast app creation.</h1>
      <p
        class="description"
      >Ionic Studio is a powerful app builder that delivers a smooth developer experience for teams building with Ionic. Get started with the fastest and easiest way to create award-winning cross-platform apps, from a single tool.</p>
      <p class="action">
        <router-link to="/guide/intro.html" class="nav-link action-button">Get Started →</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero {
  text-align: center;

  img {
    margin-top: -20px;
    max-width: 250px;
    position: relative;
    top: -40px;
  }

  h1 {
    margin-top: 0px;
    margin-bottom: 10px !important;
  }

  p {
    margin: 10px 0px !important;
  }

  p.description {
    font-size: 22px;
    max-width: 90%;
    color: var(--text-color--light) !important;
    margin-bottom: 20px !important;
  }

  p.action a {
    border-radius: 3px !important;
    padding: 0.8rem 1.6rem;
    background-color: var(--accent-color);
    color: #ffffff;
    cursor: pointer;
  }
}

@media only screen and (max-width: 600px) {
  img {
    max-width: 200px !important;
  }
  h1 {
    font-size: 36px !important;
  }
  p.description {
    font-size: 14px !important;
  }
}
</style>
