<template>
  <div class="template">
   <p>Parallax</p>
   <div class="box a">a</div>
   <div class="box b">b</div>
   <div ref="boxC" class="box c">c</div>
  </div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp();
const boxC = ref(null);

console.log('test2');

onMounted(() => {
  console.log('test');
  $gsap.to(boxC.value, {
    x: 400,
    rotation: 360,
    duration: 3
  })
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
</style>