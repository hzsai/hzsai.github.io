$(document).ready(function() {
	var a1 = $(".xiala li:nth-of-type(1) a");
	var a2 = $(".xiala li:nth-of-type(2) a");
	var a3 = $(".xiala li:nth-of-type(3) a");
	var div1 = $(".fupin");
	var div2 = $(".jianshe");
	var div3 = $(".jiancheng");
	var jiantou = $(".lfjiantou");
	var top = $(".notetop");
	var mid = $(".notemid");
	var bot = $(".notebot");
	var menu = $(".detail");
	var back1 = $(".backshow1");
	var back2 = $(".backshow2");
	//旋转的次数
	var num = 0;
	var flag = 1;
	//先让他们不见
	div1.show("slow");
	div2.hide();
	div3.hide();
	jiantou.show("slow");
	a1.click(function() {

		div2.hide();
		div3.hide();
		div1.show("slow");
		flag = 1;
	});
	a2.click(function() {

		div1.hide();
		div3.hide();
		div2.show("slow");
		flag = 2;
	});
	a3.click(function() {

		div1.hide();
		div2.hide();
		div3.show("slow");
		flag=3;
	});
	jiantou.click(function() {
		num++;
		if(num % 2 != 0) {
			menu.hide();
			div1.hide("slow");
			div2.hide("slow");
			div3.hide("slow");
			switch(flag){
				case 1:back1.css("transform", "rotateY(" + 180 * num + "deg)").show("slow");break;
				case 2:case 3:back2.css("transform", "rotateY(" + 180 * num + "deg)").show("slow");break;
			}
			
		} else {
			menu.show("slow");
			switch(flag){
				case 1:div1.show("slow");back1.hide();break;
				case 2:div2.show("slow");back2.hide();break;
				case 3:div3.show("slow");back2.hide();break;
				
			}
		}
		top.css("transform", "rotateY(" + 180 * num + "deg)");
		mid.css("transform", "rotateY(" + 180 * num + "deg)");
		bot.css("transform", "rotateY(" + 180 * num + "deg)");
	});

});