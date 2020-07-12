var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.width = "100%";
    document.getElementById("navbar").style.position = "sticky";
    document.getElementById("navbar").style.top = "0px";
    document.getElementById("navbar").style.transition = "all 0.5s";
  } else {
    document.getElementById("navbar").style.width = "0";
    document.getElementById("navbar").style.position = "absolute"; 
    document.getElementById("navbar").style.top = "-250px";
  }
  
  prevScrollpos = currentScrollPos;
}

$(document).ready(function(){
  $(".dropdown").hover(function(){
    $(this).children().eq(1).slideDown();
    }, function(){
    $(this).children().eq(1).slideUp();
  });
});