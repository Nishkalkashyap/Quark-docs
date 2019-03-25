<template>
  <div class="container">
    <div class="row">
      <div class="item">
        <video muted autoplay loop style="max-width:100%; height:auto" name="media">
          <source src="/guide/examples/system-monitor.mp4" type="video/mp4">Your browser does not support the video tag.
        </video>
      </div>

      <div class="item">
        <h1>Build and ship 🔥 your app ⚡ faster</h1>
        <p>Coder is an open source remote development environment serving Visual Studio Code. Accelerate your workflow and surpass the capabilities of your local development machine.</p>
        <!-- <vs-button color="primary" @click="goToGuide()">Get Started →</vs-button>
        <vs-button color="primary" type="flat" @click="goToDownload()">Download</vs-button> -->

        <ion-button>Button</ion-button>
      </div>
    </div>
    <hr>

    <div class="row">
      <div class="item">
        <h1>
          <ion-icon name="md-flame"></ion-icon>Your Host
        </h1>
        <p>
          Hi, I'm
          <strong>Nishkal Kashyap</strong> and I created this project to help people build and ship high-quality apps. My mission is simple 👉 produce practical content that <strong>increases developer happiness and productivity</strong> 🚀.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToGuide: function() {
      this.$router.push("/guide/");
    },
    goToDownload: function() {
      this.$router.push("/download/");
    }
  }
};
</script>

<style lang="scss">
.landing-page {
  .vs-button {
    margin: 10px 0px;
    border-radius: 2px;
  }
  .content:not(.custom) {
    max-width: 100%;
  }

  .page-edit {
    display: none;
  }

  .row {
    display: flex;
    flex-wrap: wrap;

    .item {
      flex-grow: 1;
      flex-basis: 0;
      padding: 10px 20px;
      min-width: 360px;
    }

    h1 {
      font-weight: 900;
      margin: 20px 0px;
      ion-icon {
        height: 44px;
        vertical-align: top;
      }
    }

    p {
      font-size: 1.5em;
      font-weight: 500;
      color: var(--text-light-color);
      margin: 20px 0px;
    }

    strong {
      font-weight: 800;
      color: var(--text-medium-color);
    }
  }
  hr {
    border-top: dashed 2px var(--text-light-color) !important;
  }
}
</style>
