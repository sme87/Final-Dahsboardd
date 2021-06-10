import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);


gsap.set("#map",{display:"block"});
gsap.set("#gradients",{display:"block"});
gsap.set("#bottombar",{display:"block"});
gsap.set("#map",{transformOrigin:"bottom"});


export let mapTL = gsap.timeline();

mapTL.to("#googlemaps",{alpha:0, duration:.1})
mapTL.fromTo("#map",{alpha:0, scale:.25, y:200},{alpha:1, duration:.75, scale:1, y:0})
mapTL.to("#googlemaps",{alpha:1, duration:.75})
mapTL.to("#To-Location",{duration:1, drawSVG:0});