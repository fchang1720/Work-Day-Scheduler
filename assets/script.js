// Setting variables
var timeDisplayEl = $('#time-display');
var saveBtn1 = $(".saveBtn1");
var saveBtn2 = $(".saveBtn2");
var saveBtn3 = $(".saveBtn3");
var saveBtn4 = $(".saveBtn4");
var saveBtn5 = $(".saveBtn5");
var saveBtn6 = $(".saveBtn6");
var saveBtn7 = $(".saveBtn7");
var saveBtn8 = $(".saveBtn8");
var saveBtn9 = $(".saveBtn9");
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
    if (bNow >= 9 && bNow < 18) {
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
    if (bNow >=10 && bNow <18) {
        taskNineInput.removeClass("present");
        taskNineInput.addClass("past");
        taskTenInput.removeClass("future");
        taskTenInput.addClass("present");
    }
    if (bNow >=11 && bNow <18) {
        taskTenInput.removeClass("present");
        taskTenInput.addClass("past");
        taskElevenInput.removeClass("future");
        taskElevenInput.addClass("present");
    }
    if (bNow >=12 && bNow <18) {
        taskElevenInput.removeClass("present");
        taskElevenInput.addClass("past");
        taskTwelveInput.removeClass("future");
        taskTwelveInput.addClass("present");
    }
    if (bNow >=13 && bNow <18) {
        taskTwelveInput.removeClass("present");
        taskTwelveInput.addClass("past");
        taskOneInput.removeClass("future");
        taskOneInput.addClass("present");
    }
    if (bNow >=14 && bNow <18) {
        taskOneInput.removeClass("present");
        taskOneInput.addClass("past");
        taskTwoInput.removeClass("future");
        taskTwoInput.addClass("present");
    }
    if (bNow >=15 && bNow <18) {
        taskTwoInput.removeClass("present");
        taskTwoInput.addClass("past");
        taskThreeInput.removeClass("future");
        taskThreeInput.addClass("present");
    }
    if (bNow >=16 && bNow <18) {
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
}
setColor();

// function that saves values in input text.
function setValues() {
    $("#task9").val(localStorage.getItem("task 9"))
    $("#task10").val(localStorage.getItem("task 10"))
    $("#task11").val(localStorage.getItem("task 11"))
    $("#task12").val(localStorage.getItem("task 12"))
    $("#task1").val(localStorage.getItem("task 1"))
    $("#task2").val(localStorage.getItem("task 2"))
    $("#task3").val(localStorage.getItem("task 3"))
    $("#task4").val(localStorage.getItem("task 4"))
    $("#task5").val(localStorage.getItem("task 5"))
}
setValues();

// event listener to save to local storage
saveBtn1.on('click', function(e) {
    e.preventDefault();
    localStorage.setItem("task 9", taskNineInput.val())
});

saveBtn2.on('click', function(e) {
    e.preventDefault();
    localStorage.setItem("task 10", taskTenInput.val())
});

saveBtn3.on('click', function(e) {
    e.preventDefault();
    localStorage.setItem("task 11", taskElevenInput.val())
});

saveBtn4.on('click', function(e) {
    e.preventDefault();
    localStorage.setItem("task 12", taskTwelveInput.val())
});

saveBtn5.on('click', function(e) {
    e.preventDefault();
    localStorage.setItem("task 1", taskOneInput.val())
});

saveBtn6.on('click', function(e) {
    e.preventDefault();
    localStorage.setItem("task 2", taskTwoInput.val())
});

saveBtn7.on('click', function(e) {
    e.preventDefault();
    localStorage.setItem("task 3", taskThreeInput.val())
});

saveBtn8.on('click', function(e) {
    e.preventDefault();
    localStorage.setItem("task 4", taskFourInput.val())
});

saveBtn9.on('click', function(e) {
    e.preventDefault();
    localStorage.setItem("task 5", taskFiveInput.val())
});