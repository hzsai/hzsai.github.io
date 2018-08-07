$(document).ready(function() {
	var ggg1 = $(".ggg");
	var ggg2 = $(".ggg2");
	var ggcont1 = $(".ggg .ggcontent");
	var ggcont2 = $(".ggg2 .ggcontent");
	var more1 = $(".read_m1");
	var more2 = $(".read_m2");
	ggg1.show(1500);
	more1.click(function() {

		ggg1.fadeOut("slow");
		ggg2.fadeIn(2000);
	});
	more2.click(function() {

		ggg2.fadeOut("slow");
		ggg1.fadeIn(2000);
	});
});