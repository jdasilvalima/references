import Lenis from "@studio-freight/lenis";
import ScrollTrigger from 'gsap/ScrollTrigger';

const lenis = new Lenis({
  smoothWheel: true,
  smoothTouch: true,
  duration: 3,
});

// lenis.on("scroll", ({ scroll, limit }) => {
//   console.table({ scroll, limit });
// });

lenis.on('scroll', ScrollTrigger.update);

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
};

requestAnimationFrame(raf);

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
});

gsap.ticker.lagSmoothing(0);

// export default defineNuxtPlugin((nuxtApp) => {
//   nuxtApp.provide("lenis", lenis);
// });

export default defineNuxtPlugin({
  dependsOn: ['gsap.client'],
  async setup (nuxtApp) {
    nuxtApp.provide("lenis", lenis);
  }
})
