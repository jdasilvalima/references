import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

export default defineNuxtPlugin(nuxtApp => {
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
  
  nuxtApp.provide("gsap", gsap);
  nuxtApp.provide("scrollToPlugin", ScrollToPlugin);
  nuxtApp.provide("scrollTrigger", ScrollTrigger);
})