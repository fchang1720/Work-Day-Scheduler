// Setting variables
var timeDisplayEl = $('#time-display');
var saveBtn1 = $(".saveBtn1");
var taskNineInput = $("#task9");
var taskTenInput = $("#task10");
var taskElevenInput = $("#task11");
var taskTwelveInput = $("#task12");
var taskOneInput = $("#task1");
var taskTwoInput = $("#task2");
var taskThreeInput = $("#task3");
var taskFourInput = $("#task4");
var taskFiveInput = $("#task5");


// function to display time in jumbotron
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY - hh:mm:ss a');
    timeDisplayEl.text(rightNow);

}setInterval(displayTime, 1000);

// change background color of timeslot:
function setColor() {
    var b = new Date();
    var bNow = b.getHours();
    if (bNow >= 9 && bNow < 10) {
        taskNineInput.addClass("present");
        taskTenInput.addClass("future");
        taskElevenInput.addClass("future");
        taskTwelveInput.addClass("future");
        taskOneInput.addClass("future");
        taskTwoInput.addClass("future");
        taskThreeInput.addClass("future");
        taskFourInput.addClass("future");
        taskFiveInput.addClass("future");
    }
    if (bNow >=10 && bNow <11) {
        taskNineInput.removeClass("present");
        taskNineInput.addClass("past");
        taskTenInput.removeClass("future");
        taskTenInput.addClass("present");
    }
    if (bNow >=11 && bNow <12) {
        taskTenInput.removeClass("present");
        taskTenInput.addClass("past");
        taskElevenInput.removeClass("future");
        taskElevenInput.addClass("present");
    }
    if (bNow >=12 && bNow <13) {
        taskElevenInput.removeClass("present");
        taskElevenInput.addClass("past");
        taskTwelveInput.removeClass("future");
        taskTwelveInput.addClass("present");
    }
    if (bNow >=13 && bNow <14) {
        taskTwelveInput.removeClass("present");
        taskTwelveInput.addClass("past");
        taskOneInput.removeClass("future");
        taskOneInput.addClass("present");
    }
    if (bNow >=14 && bNow <15) {
        taskOneInput.removeClass("present");
        taskOneInput.addClass("past");
        taskTwoInput.removeClass("future");
        taskTwoInput.addClass("present");
    }
    if (bNow >=15 && bNow <16) {
        taskTwoInput.removeClass("present");
        taskTwoInput.addClass("past");
        taskThreeInput.removeClass("future");
        taskThreeInput.addClass("present");
    }
    if (bNow >=16 && bNow <17) {
        taskThreeInput.removeClass("present");
        taskThreeInput.addClass("past");
        taskFourInput.removeClass("future");
        taskFourInput.addClass("present");
    }
    if (bNow >=17 && bNow <18) {
        taskFourInput.removeClass("present");
        taskFourInput.addClass("past");
        taskFiveInput.removeClass("future");
        taskFiveInput.addClass("present");
    }
    if (bNow >=18 && bnow <19) {
        taskNineInput.removeClass("past");
        taskTenInput.removeClass("past");
        taskElevenInput.removeClass("past");
        taskTwelveInput.removeClass("past");
        taskOneInput.removeClass("past");
        taskTwoInput.removeClass("past");
        taskThreeInput.removeClass("past");
        taskFourInput.removeClass("past");
        taskFiveInput.removeClass("present");
    }
  
}
setColor();

// function set9() {
//     var nineDisplay = localStorage.getItem("task 9");
//     if (lastGrade !== null) {
//     document.getElementById("#task9").innerHTML = nineDisplay
//     }
    
// }
// event listener to save to local storage
saveBtn1.on('click', function(e) {
    e.preventDefault();
    
    localStorage.setItem("task 9", taskNineInput.val())
    // set9();
});