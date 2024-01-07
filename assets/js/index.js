var timeDisplayEl = $('#currentDay');

// handle displaying the time
function displayTime() {
    var rightNow = dayjs().format('DD MMM YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }

  setInterval(displayTime, 1000);