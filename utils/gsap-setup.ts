import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { CustomEase } from "gsap/dist/CustomEase";
// CustomBounce requires CustomEase
// import { CustomBounce } from "gsap/dist/CustomBounce";
// CustomWiggle requires CustomEase
// import { CustomWiggle } from "gsap/dist/CustomWiggle";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/dist/EasePack";

import { Draggable } from "gsap/dist/Draggable";
// import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";
import { EaselPlugin } from "gsap/dist/EaselPlugin";
import { Flip } from "gsap/dist/Flip";
// import { GSDevTools } from "gsap/dist/GSDevTools";
// import { InertiaPlugin } from "gsap/dist/InertiaPlugin"; // CLUB GSAP (Sometimes draggable includes inertia? No, distinct)
// import { MotionPathHelper } from "gsap/dist/MotionPathHelper";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
// import { MorphSVGPlugin } from "gsap/dist/MorphSVGPlugin";
import { Observer } from "gsap/dist/Observer";
// import { Physics2DPlugin } from "gsap/dist/Physics2DPlugin";
// import { PhysicsPropsPlugin } from "gsap/dist/PhysicsPropsPlugin";
import { PixiPlugin } from "gsap/dist/PixiPlugin";
// import { ScrambleTextPlugin } from "gsap/dist/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
// import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
// import { SplitText } from "gsap/dist/SplitText";
import { TextPlugin } from "gsap/dist/TextPlugin";

// Note: Many plugins requested are "Club GSAP" (Paid) features and are not available
// in the standard 'gsap' npm package. They have been commented out to prevent build errors.
// If you have the bonus package, please install it and uncomment these lines.

gsap.registerPlugin(
    useGSAP,
    // DrawSVGPlugin,
    EaselPlugin,
    // GSDevTools,
    // InertiaPlugin,
    // MotionPathHelper,
    MotionPathPlugin,
    // MorphSVGPlugin,
    Observer,
    // Physics2DPlugin,
    // PhysicsPropsPlugin,
    PixiPlugin,
    // ScrambleTextPlugin,
    ScrollTrigger,
    // ScrollSmoother,
    ScrollToPlugin,
    // SplitText,
    TextPlugin,
    RoughEase,
    ExpoScaleEase,
    SlowMo,
    CustomEase,
    // CustomBounce,
    // CustomWiggle
);

export default gsap;
