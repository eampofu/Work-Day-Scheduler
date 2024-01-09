var timeDisplayEl = $("#currentDay");
var scheduleContainer = $(".container");
var hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
var workHours = [
	"9AM",
	"10AM",
	"11AM",
	"12AM",
	"1PM",
	"2PM",
	"3PM",
	"4PM",
	"5PM",
];
var currentHour = parseInt(dayjs().format("HH"));
console.log("current hour " + currentHour);
// handle displaying the time
function displayTime() {
	var rightNow = dayjs().format("DD MMM YYYY [at] hh:mm:ss a");
	timeDisplayEl.text(rightNow);
}

setInterval(displayTime, 1000);
console.log(hours.length);
// create the html
function generatePlanner() {
	for (var i = 0; i < hours.length; i++) {
		const hour = hours[i];
		const displayHour = workHours[i];

		var status = "";
		if (hour == currentHour) {
			status = "present";
		} else if (hour < currentHour) {
			status = "past";
		} else if (hour > currentHour) {
			status = "future";
		} else {
			status = "";
		}
		var row = $("<div>");
		row.addClass("row");
		var timeBlock = $("<div>");
		timeBlock.addClass("col-2 time-block hour");
		timeBlock.text(displayHour);
		var todoText = $("<textarea>");
		todoText.addClass("col-8 " + status);
		var btnSave = $("<button>");

		btnSave.append($("<i>").addClass("fas fa-save"));
		btnSave.addClass("col-2 saveBtn");
		btnSave.attr("data-hour", hour);

		row.append(timeBlock);
		row.append(todoText);
		row.append(btnSave);
		scheduleContainer.append(row);
	}
}
generatePlanner();
//event handler for the button click
$("button").on("click", (event) => {
	var key = $(event.target).attr("data-hour");
	var value = $(event.target).siblings("textarea").val();
	localStorage.setItem(key, value);
	console.log(key);
});
