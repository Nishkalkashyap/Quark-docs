<template>
  <h1>Hello {{this.val}}</h1>
</template>

<script>
// export default {
//   data() {
//     return {
//       val: "yo"
//     };
//   }
// };
//
</script>

var test = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

export default test;
