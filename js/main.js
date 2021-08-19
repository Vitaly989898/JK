$(document).ready(function () {
	var currentFloor = 2;
	var floorPath = $(".home__image path");
	var counterDown = $(".counter__down");
	var counterUp = $(".counter__up");

		floorPath.on("mouseover", function(){
		floorPath.removeClass("current__floor");
		currentFloor = $(this).attr("data-floor");
		$(".counter").text(currentFloor);
	 });

	 counterUp.on("click", function(){
		if (currentFloor < 18){
			currentFloor++;
			usCurrentFloor = currentFloor.toLocaleString("en-US",{minimumIntegerDigits: 2, useGrouping: false});
			$(".counter").text(usCurrentFloor);
			floorPath.removeClass("current__floor");
			$(`[data-floor=${usCurrentFloor}]`).toggleClass("current__floor");
		}

	});
	counterDown.on("click", function(){
		if (currentFloor > 2){
			currentFloor--;
			usCurrentFloor = currentFloor.toLocaleString("en-US",{minimumIntegerDigits: 2, useGrouping: false});
			$(".counter").text(usCurrentFloor);
			floorPath.removeClass("current__floor");
			$(`[data-floor=${usCurrentFloor}]`).toggleClass("current__floor");
		}
		})
});
