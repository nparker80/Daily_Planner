var hour9 = $("#9");
var hour10 = $("#10");
var hour11 = $("#11");
var hour12 = $("#12");
var hour1 = $("#13");
var hour2 = $("#14");
var hour3 = $("#15");
var hour4 = $("#16");
var hour5 = $("#17");
var time = moment();

function plannerSetup() {
  $("#currentDay").text(moment().format("dddd, MMMM Do YYYY [at] h:mm A z"));

  $(".time-block").each(function () {
    var id = $(this).attr("id");
    var schedule = localStorage.getItem(id);

    if (schedule !== null) {
      $(this).children(".schedule").val(schedule);
    }
  });
}

plannerSetup();
var addBtn = $(".addBtn");
