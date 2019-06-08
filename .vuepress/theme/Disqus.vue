<template>
  <div class="dis-container content">
    <div id="disqus_thread"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    var disqus_config = function() {
      this.page.url = window.location.origin; // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = window.location.pathname; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    let self = this;
    (function() {
      var d = document,
        s = d.createElement("script");
      s.src = "https://quarkjs-io-1.disqus.com/embed.js";
      s.setAttribute("data-timestamp", +new Date());
      (d.head || d.body).appendChild(s);

      s.addEventListener("load", () => {
        setTimeout(() => {
          self.addCss();
        }, 100);
      });
    })();
  },
  methods: {
    addCss: function() {
      const iframe = document.getElementById("disqus_thread").firstElementChild;
      if (iframe) {
        const style = document.createElement("style");
        style.innerHTML = css;
        console.log(style);
        iframe.appendChild(style);
      }
    }
  }
};
</script>

<style lang="scss">
#disqus_thread {
  width: calc(100% - 50px);
  /* max-width: calc(100% - 200px); */

  // iframe {
  //   background-color: green;
  // }
}
</style>
