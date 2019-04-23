<template>
  <div class="wrap">
    <div class="c" v-for="t in times"></div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      times: 300
    };
  }
};
</script>

<style lang="scss">
$total: 300; // total particles
$orb-size: 500px;
$particle-size: 4px;
$time: 14s;
$base-hue: 0; // change for diff colors (180 is nice)

.wrap {
  position: absolute;
  top: 0px;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  transform-style: preserve-3d;
  perspective: 1000px;
  animation: rotate $time infinite linear; // rotate orb
}

@keyframes rotate {
  100% {
    transform: rotateY(360deg) rotateX(360deg);
  }
}

.c {
  position: absolute;
  width: $particle-size;
  height: $particle-size;
  border-radius: 50%;
  opacity: 0;
}

@for $i from 1 through $total {
  $z: (random(360) * 1deg); // random angle to rotateZ
  $y: (random(360) * 1deg); // random to rotateX
  $hue: ((40 / $total * $i) + $base-hue); // set hue

  .c:nth-child(#{$i}) {
    // grab the nth particle
    animation: orbit#{$i} $time infinite;
    animation-delay: ($i * 0.01s);
    background-color: hsla($hue, 100%, 50%, 1);
  }

  @keyframes orbit#{$i} {
    20% {
      opacity: 1; // fade in
    }
    30% {
      transform: rotateZ(-$z) rotateY($y) translateX($orb-size) rotateZ($z); // form orb
    }
    80% {
      transform: rotateZ(-$z) rotateY($y) translateX($orb-size) rotateZ($z); // hold orb state 30-80
      opacity: 1; // hold opacity 20-80
    }
    100% {
      transform: rotateZ(-$z) rotateY($y) translateX(($orb-size * 3))
        rotateZ($z); // translateX * 3
    }
  }
}
</style>
