import { gsap } from "gsap";

gsap.set("#morning",{display:"block"});
gsap.set("#morning",{transformOrigin:"center"});

export let welcomeTL = gsap.timeline();
welcomeTL.to("#box2-logo",{alpha:0, duration:.5},"small")
welcomeTL.to("#box-logo",{alpha:0, duration:.5},"small")
welcomeTL.to("#dodgeletters",{alpha:0, duration:.5},"small")
welcomeTL.fromTo("#morning",{alpha:0},{alpha:1, duration:1.5})
welcomeTL.to("#morning",{scale:.05, duration:.25})
welcomeTL.to("#morning",{y:-400, duration:1.3, ease: "power4.out"},"-=.25");