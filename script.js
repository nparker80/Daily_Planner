let time = moment();

function plannerSetup() {
  // add current date and time to header of planner
  $("#currentDay").text(moment().format("dddd, MMMM Do YYYY [at] h:mm A z"));

  $(".time-block").each(function () {
    let id = $(this).attr("id");
    let LS = localStorage.getItem(id);

    if (LS !== null) {
      $(this).children(".planEvent").val(LS);
    }
  });
}
plannerSetup();
let addBtn = $(".addBtn");

$(".addBtn").on("click", function () {
  let time = $(this).parent().attr("id");
  var scheduleEntry = $(this).siblings(".planEvent").val();
  localStorage.setItem(time, scheduleEntry);
});

function pastPresentFuture() {
  hour = time.hours();

  $(".time-block").each(function () {
    let currentHour = parseInt($(this).attr("id"));
    // Add class based on relation to current hour and class will be styled with appropriate color coding.
    if (currentHour > hour) {
      $(this).addClass("future");
    } else if (currentHour === hour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("past");
    }
  });
}

$("9.planEvent").val(localStorage.getItem("9"));
$("10.planEvent").val(localStorage.getItem("10"));
$("11.planEvent").val(localStorage.getItem("11"));
$("12.planEvent").val(localStorage.getItem("12"));
$("13.planEvent").val(localStorage.getItem("13"));
$("14.planEvent").val(localStorage.getItem("14"));
$("15.planEvent").val(localStorage.getItem("15"));
$("16.planEvent").val(localStorage.getItem("16"));
$("17.planEvent").val(localStorage.getItem("17"));
// When page is loaded call this function
pastPresentFuture();
