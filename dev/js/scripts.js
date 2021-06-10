import { gsap } from "gsap";


import { drawAnimation } from "./drawsvg";
import { fadeInTL } from "./fadein";
import { eyeTL } from "./eyetl";
import { morphTL } from "./morphlogo";
import { welcomeTL } from "./welcome";
import { drawplz } from "./reveal";
import { dataTL } from "./data";
import $ from "jquery"
import { speedCounter } from "./tag";
import { rpmcounter } from "./tagrpm";
import { mapTL } from "./map";


$(document).ready(function () {
      speedCounter();
  });

  $(document).ready(function () {
      rpmcounter();
  });

           let mainTL = gsap.timeline();
    mainTL.add(drawAnimation)
          .add(fadeInTL)
          .add(eyeTL)
          .add(morphTL)
          .add(welcomeTL)
          .add(drawplz)
          .add(dataTL)
          .add(speedCounter)
          .add(rpmcounter)
          .add(mapTL);
