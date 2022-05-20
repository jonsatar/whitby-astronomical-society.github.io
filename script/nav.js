// the responsive mode shall display the link list vertically when in mobile 
function reactiveTopNav() {
   const topNav = document.getElementById("navID");

   topNav.classList.contains("responsive")
      ? topNav.classList.remove("responsive")
      : topNav.classList.add("responsive");
}
      
// keep the navigation bar  on top when veering down from the header; that is call the sticky function
window.onscroll = function () {
   stickyTopNav();
};

var navbar = document.getElementById("navID");
var sticky = navbar.offsetTop;
// define the sticky function
function stickyTopNav() {
   if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
   } else {
      navbar.classList.remove("sticky");
   }
}