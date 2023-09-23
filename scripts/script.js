import Magnetic from "./magnetic";

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
