import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);
gsap.set("#srtlogo",{display:"block"});


let drawTL = gsap.timeline();


export function drawAnimation(){

    drawTL.to("#foreground",{duration:0, alpha:0})
    drawTL.from("#draw",{duration:.75, drawSVG:"50% 50%"})
    drawTL.fromTo("#srtlogo",{alpha:0},{alpha:1, duration:.5});

    return drawTL;
}