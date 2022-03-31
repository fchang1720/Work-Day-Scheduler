
var timeDisplayEl = $('#time-display');
var saveBtn1 = $(".saveBtn1");
var taskNineInput = $("#task9");


function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY - hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}
setInterval(displayTime, 1000);


saveBtn1.on('click', function(e) {
    e.preventDefault();
    
    localStorage.setItem("task 9", taskNineInput.val())

});