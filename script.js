
$(document).ready(function(){
var collapsed=false;
$("#showMore").hide();
$("#showLessButton").hide();
  $("button").click(function(){
	  $("#showMore").toggle();
	  if(!collapsed){
	  $("#showButton").hide();
	  $("#showLessButton").show();
	  collapsed=true;
	  }
	  else{
	  $("#showButton").show();
	  $("#showLessButton").hide();
	  collapsed=false;
	  }
  });
});