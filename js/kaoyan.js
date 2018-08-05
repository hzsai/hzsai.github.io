$(document).ready(function() {
	var page1 = $(".page1");
	var page2 = $(".page2");
	var lf = $(".lfjiantou");
	var lr = $(".lrjiantou");
	page1.show("slow");
	lr.show("slow");
	lr.click(function() {

		page1.hide();
		lr.hide("slow");
		page2.show("slow");
		lf.show("slow");
	});

	lf.click(function() {

		page2.hide();
		lf.hide("slow");
		page1.show("slow");
		lr.show("slow");
	});

});