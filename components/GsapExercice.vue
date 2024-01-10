<template>
  <div class="template">
   <h3>Exercice</h3>
   <div class="box a">a</div>
   <div ref="boxB" class="box b">b</div>
   <div class="box c">c</div>
   <div class="box d">d</div>
  </div>
</template>

<script setup>
const { $gsap } = useNuxtApp();
const boxB = ref(null);

onMounted(() => {

  $gsap.to(".a", {
    scrollTrigger: ".a", //wait for the div to be seen
    x: 400,
    rotation: 360,
    duration: 3
  });

  $gsap.to(boxB.value, {
    scrollTrigger: {
      trigger: boxB.value,
      start: "top center", // indicate when to start animation depending of the viewport
      end: () => "+=" + boxB.value.offsetWidth,
      //markers: true, // visualize scroll, start and stop animation
      toggleActions: "play pause reverse pause" // indicate how to play when no off to be seen
    },
    x: 600,
    rotation: 360,
    duration: 4
  });

  $gsap.to(".c", {
    scrollTrigger: {
      trigger: ".a",
      start: "top 10px", // indicate when to start animation depending of the viewport
      endTrigger: ".b",
      end: "bottom top",
      //markers: true, // visualize scroll, start and stop animation
      toggleActions: "play pause reverse pause" // indicate how to play when no off to be seen
    },
    x: 600,
    rotation: 360,
    duration: 4
  });

  $gsap.to(".d", {
    scrollTrigger: {
      trigger: ".c",
      start: "top center",
      end: "+=350px",
      scrub: 2, // true or seconds, depend if scroll or not
      markers: true, // visualize scroll, start and stop animation
    },
    x: 800,
    duration: 3
  });
})


</script>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: #28a92b;
  line-height: 100px;
  font-size: 50px;
  text-align: center;
}

.a {
  background-color: #8d3dae;
}

.b {
  top: 600px;
  margin-top: 70px
}

.c {
  background-color: #e26c16;
  margin-top: 70px
}

.d {
  background-color: #e21672;
  margin-top: 70px
}
</style>