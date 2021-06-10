import { gsap } from "gsap";

gsap.set("#srtglow",{display:"block"});
gsap.set("#eye",{display:"block"});




export let eyeTL = gsap.timeline();
eyeTL.fromTo("#eye",{alpha:0},{alpha:1, duration:.25,ease: "power4.out"},"-=2.25")
eyeTL.fromTo("#srtglow",{alpha:0},{alpha:1, duration:.25, ease: "power4.out"},"-=2.25")
eyeTL.to("#letters",{x:-300, duration:.5, ease: "power4.out"},"left")
eyeTL.to("#main",{x:200, duration:.5, ease: "power4.out"},"left");