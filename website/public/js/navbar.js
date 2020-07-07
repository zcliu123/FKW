var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.position = "sticky";
    document.getElementById("navbar").style.top = "0px";
    document.getElementById("navbar").style.transition = "all 0.5s";
  } else {
    document.getElementById("navbar").style.position = "absolute"; 
    document.getElementById("navbar").style.top = "-250px";
  }
  
  prevScrollpos = currentScrollPos;
}