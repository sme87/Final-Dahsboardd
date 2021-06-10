import { gsap } from "gsap";


gsap.set("#srtfill",{display:"block"});



export let fadeInTL = gsap.timeline();


fadeInTL.to("#srtfill",{alpha:1, duration:.5});
