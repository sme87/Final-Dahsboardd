import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);
gsap.set("#outline",{display:"block"});
gsap.set("#topbarz",{display:"block"});
gsap.set("#rightcover",{display:"block"});
gsap.set("#leftcover",{display:"block"});
gsap.set("#middle-divider",{display:"block"});
gsap.set("#left-dashes",{display:"block"});
gsap.set("#right-dashes",{display:"block"});


let revealTL = gsap.timeline();


export function drawplz(){

    revealTL.to("#foreground2",{duration:.1, alpha:0})
    revealTL.from("#outline",{duration:.75, drawSVG:"75% 25%"})
    revealTL.from("#topbarz",{duration:.5, drawSVG:"50% 50%"},"swa")
    revealTL.fromTo("#middle-divider",{alpha:0},{alpha:1, duration:.1},"swa")
    revealTL.fromTo("#middle-divider",{alpha:0},{alpha:1, duration:.1},"swa")
    revealTL.to("#rightcover",{duration:2.5, ease: "power4.out", x:650},"swa")
    revealTL.to("#leftcover",{duration:2.5, ease: "power4.out", x:-650},"swa")
    revealTL.to("#outline",{duration:.25, alpha:0})
    revealTL.fromTo("#left-dashes",{alpha:0},{alpha:1, duration:.35},"stroky","-=1")
    revealTL.fromTo("#right-dashes",{alpha:0},{alpha:1, duration:.35},"stroky","-=1");

    return revealTL;
}