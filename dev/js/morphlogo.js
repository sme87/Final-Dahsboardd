import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
gsap.registerPlugin(MorphSVGPlugin);

gsap.set("#dodge",{display:"block"});
gsap.set("#dodgeletters",{display:"block"});

gsap.set("#dodge",{transformOrigin:"center"});
gsap.set("#srtlogot",{transformOrigin:"center"});
gsap.set("#srtlogob",{transformOrigin:"center"});



export let morphTL = gsap.timeline();
morphTL.to("#letters",{x:400, duration:.6, ease: "power4.out"},"+=1")
morphTL.to("#letters",{alpha:0, duration:.1})
morphTL.to("#draw",{alpha:0, duration:.1},"srtremain")
morphTL.to("#srtglow",{alpha:0, duration:.25},"srtremain")
morphTL.to("#eye",{alpha:0, duration:.25},"srtremain")
morphTL.to("#srtlogot", {duration: .75,x:-200, morphSVG:"#box-logo",fill:"#EE3829", ease: "power4.out"},"srtremain")
morphTL.to("#srtlogob", {duration: .75,x:-200, morphSVG:"#box2-logo",fill:"#EE3829", ease: "power4.out"},"srtremain")
morphTL.to("#srt",{alpha:0, duration:.2})
morphTL.fromTo("#dodgeletters",{alpha:0},{alpha:1, duration:.5, ease: "power4.out"},"+=.2");
