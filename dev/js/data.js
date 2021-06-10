import { gsap } from "gsap";


gsap.set("#middleground",{display:"block"});
gsap.set("#foreground",{display:"block"});



export let dataTL = gsap.timeline();

dataTL.to("#foreground",{alpha:1, duration:1.25},"+=1.75")
dataTL.fromTo("#middleground",{alpha:0},{alpha:1, duration:.5, ease: "power4.out"},"-=.25");