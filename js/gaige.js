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
			cho1.animate({left:'0'});
			cho2.css("left","90%");
			cho3.css("left","90%");
			cho4.css("left","90%");
		}
		else{
			cho1.css("left","90%");
		}
	});
	snag2.click(function() {
		n++;
		if(n%2!=0){
			cho2.animate({left:'0'});
			cho1.css("left","90%");
			cho3.css("left","90%");
			cho4.css("left","90%");
		}
		else{
			cho2.css("left","90%");
		}
	});
	snag3.click(function() {
		n++;
		if(n%2!=0){
			cho3.animate({left:'0'});
			cho2.css("left","90%");
			cho1.css("left","90%");
			cho4.css("left","90%");
		}
		else{
			cho3.css("left","90%");
		}
	});
	snag4.click(function() {
		n++;
		if(n%2!=0){
			cho4.animate({left:'0'});
			cho2.css("left","90%");
			cho1.css("left","90%");
			cho3.css("left","90%");
		}
		else{
			cho4.css("left","90%");
		}
	});
//		for(n=1;n<=4;n++){
//			$(snag+n).click(function() {
//				n++;
//				if(n%2!=0){
//					$(cho+n).css("left","auto");
//				}
//				else{
//					$(cho+n).css("left","80%");
//				}
//			});
//		}
});