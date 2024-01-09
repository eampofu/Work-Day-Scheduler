var timeDisplayEl = $("#currentDay");
var scheduleContainer = $(".container");
var hours = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];
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
console.log(currentHour);
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
		console.log(displayHour);
		
		var row = $("<div>");
		row.addClass("row");
		var timeBlock = $("<div>");
		timeBlock.addClass("col-2 time-block hour");
		timeBlock.text(displayHour);
		var todoText = $("<textarea>");
		todoText.addClass("col-8");
		var btnSave = $("<button>");
		btnSave.addClass("col-2 saveBtn data-hour=" + hour);

		row.append(timeBlock);
		row.append(todoText);
		row.append(btnSave);
		scheduleContainer.append(row);

		console.log(row);
	}
}
generatePlanner();
