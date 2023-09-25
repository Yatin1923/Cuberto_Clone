import Magnetic from "./magneticCursor.js";

var cursor = new MouseFollower();
// Skew effect
const skew = document.querySelector('#main');
skew.addEventListener('mouseenter', () => {
    cursor.setSkewing(3);
});

skew.addEventListener('mouseleave', () => {
    cursor.removeSkewing();
});

$('[data-magnetic]').each(function () {new Magnetic(this);});

gsap.to(".fleftelm",{
    scrollTrigger:{
        trigger:"#fimages",
        pin:".img1,#fimages",
        start: "top top",
        end:"bottom bottom",
        endTrigger:".last",
        scrub:0.5
        },
    y:"-300%",
    ease:Power1
});

  gsap.to(".img1",{
    scrollTrigger:{
        trigger:"#fimages",
        start: "top top",
        end:"bottom bottom",
        endTrigger:".last",
        scrub:0.5
        },
    y: "-300%",
    ease:Power1
  });

  