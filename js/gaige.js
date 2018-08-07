$(document).ready(function() {
	var cho1 = $(".cho1");
	var cho2 = $(".cho2");
	var cho3 = $(".cho3");
	var cho4 = $(".cho4");
	var snag1 = $(".snag1");
	var snag2 = $(".snag2");
	var snag3 = $(".snag3");
	var snag4 = $(".snag4");
	//点击的次数
	var num = 0;
	var n = 0;
	snag1.click(function() {
		n++;
		if(n%2!=0){
			cho1.css("visibility","visible").animate({left:'0'});
			cho2.css("left","90%").css("visibility","hidden");
			cho3.css("left","90%").css("visibility","hidden");
			cho4.css("left","90%").css("visibility","hidden");
		}
		else{
			cho1.css("left","90%").css("visibility","hidden");
		}
	});
	snag2.click(function() {
		n++;
		if(n%2!=0){
			cho2.css("visibility","visible").animate({left:'0'});
			cho1.css("left","90%").css("visibility","hidden");
			cho3.css("left","90%").css("visibility","hidden");
			cho4.css("left","90%").css("visibility","hidden");
		}
		else{
			cho2.css("left","90%").css("visibility","hidden");
		}
	});
	snag3.click(function() {
		n++;
		if(n%2!=0){
			cho3.css("visibility","visible").animate({left:'0'});
			cho2.css("left","90%").css("visibility","hidden");
			cho1.css("left","90%").css("visibility","hidden");
			cho4.css("left","90%").css("visibility","hidden");
		}
		else{
			cho3.css("left","90%").css("visibility","hidden");
		}
	});
	snag4.click(function() {
		n++;
		if(n%2!=0){
			cho4.css("visibility","visible").animate({left:'0'});
			cho2.css("left","90%").css("visibility","hidden");
			cho1.css("left","90%").css("visibility","hidden");
			cho3.css("left","90%").css("visibility","hidden");
		}
		else{
			cho4.css("left","90%").css("visibility","hidden");
		}
	});
});