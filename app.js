// dark mode
function changeMode(themeObj){
    if(themeObj.dataset.mode == "light"){
        document.documentElement.setAttribute("data-theme", "dark");
        themeObj.dataset.mode = "dark";
    } else{
        document.documentElement.setAttribute("data-theme", "light");
        themeObj.dataset.mode = "light";
    }
}

// toggle
$(document).ready(function(){
    $(".toggle").click(function(){
      $(".menu").slideToggle(1000);
    });
  });