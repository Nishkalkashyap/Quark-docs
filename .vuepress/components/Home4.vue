<template>
  <div class="home4-component">
    <div class="full-height flex-center first-container">
      <!-- <companyLogos /> -->
      <div class="image-container">
        <!-- <img src="~@buildAssets/guide/introduction.png" class="image-transition"> -->
        <video
          muted
          autoplay
          loop
          name="media"
          poster="~@buildAssets/guide/showcase/web-browser.png"
          crossorigin="anonymous"
          class="image-transition"
        >
          <source src="~@buildAssets/guide/showcase/web-browser.mp4" type="video/mp4">Your browser does not support the video tag.
        </video>
      </div>
      <heroDownload/>
    </div>

    <heroSection
      side="left"
      heading="GitHub for Atom"
      upper="A text editor is at the core of a developer’s toolbox, but it doesn't usually work alone. Work with Git and GitHub directly from Atom with the GitHub package."
      lower="A text editor is at the core of a developer’s toolbox, but it doesn't usually work alone. Work with Git and GitHub directly from Atom with the GitHub package."
    >
      <video
        muted
        autoplay
        loop
        name="media"
        poster="~@buildAssets/guide/showcase/web-browser.png"
        crossorigin="anonymous"
        class="image-transition"
        slot="image"
      >
        <source src="~@buildAssets/guide/showcase/web-browser.mp4" type="video/mp4">Your browser does not support the video tag.
      </video>
    </heroSection>

    <heroSection
      side="right"
      heading="GitHub for Atom"
      upper="A text editor is at the core of a developer’s toolbox, but it doesn't usually work alone. Work with Git and GitHub directly from Atom with the GitHub package."
      lower="A text editor is at the core of a developer’s toolbox, but it doesn't usually work alone. Work with Git and GitHub directly from Atom with the GitHub package."
    >
      <video
        muted
        autoplay
        loop
        name="media"
        poster="~@buildAssets/guide/showcase/web-browser.png"
        crossorigin="anonymous"
        class="image-transition"
        slot="image"
      >
        <source src="~@buildAssets/guide/showcase/web-browser.mp4" type="video/mp4">Your browser does not support the video tag.
      </video>
    </heroSection>
    <Download
      disable_post_content="true"
      version="0.4.7"
      channel="stable"
      linux_main="Quark-linux-x86_64-0.4.7.AppImage"
      linux_other="['Quark-linux-amd64-0.4.7.deb','Quark-linux-x64-0.4.7.tar.gz']"
      windows_main="Quark-win-0.4.7.exe"
      windows_other="['Quark-win-x64-0.4.7.msi','Quark-win-x64-0.4.7.zip']"
    />
  </div>
</template>

<script>
import companyLogos from "./landing-components/companyLogos";
import heroDownload from "./landing-components/hero-download2";
import heroSection from "./landing-components/hero-section";
import Download from "./Download";
export default {
  components: {
    companyLogos,
    heroDownload,
    heroSection
  }
};
</script>

<style lang="scss" scoped>
.full-height {
  height: 100%;
  width: 100%;
}

.flex-center {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0px 50px;
  box-sizing: border-box;
}

.image-transition {
  transition: filter 2s;
  filter: brightness(0.75) contrast(1) sepia(0) hue-rotate(-100deg)
    saturate(5);
  // filter: brightness(0.75) contrast(1) sepia(0.7) hue-rotate(-5deg)
  //   saturate(3.5);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
}

.image-transition::before{
  content: 'Hello';

}

.image-transition:hover {
  filter: brightness(1) contrast(1) sepia(0) hue-rotate(0deg) saturate(1);
}

.first-container {
  width: 1040px;
  overflow: hidden;

  div.image-container {
    width: 100%;
    display: flex;
    align-items: center;

    video {
      max-width: 100%;
    }
  }
  div.image-container:hover {
    filter: brightness(1) contrast(1) sepia(0) hue-rotate(0deg) saturate(1);
  }
}
</style>
