var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos & currentScrollPos > 150) {
    document.getElementById("sticky-nav").style.position = "sticky";
    document.getElementById("sticky-nav").style.top = "0px";
    document.getElementById("sticky-nav").style.transition = "all 0.5s";
  } else {
    document.getElementById("sticky-nav").style.position = "absolute"; 
    document.getElementById("sticky-nav").style.top = "-250px";
    document.getElementById("sticky-nav").style.transition = "all 0.2s";
  }
  
  prevScrollpos = currentScrollPos;
}