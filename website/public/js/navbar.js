var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.transition = "all 0.5s";
    
    console.log("show navbar");
  } else {
    document.getElementById("navbar").style.top = "-250px";
    console.log("hide");
  }
  prevScrollpos = currentScrollPos;
}