$(function() {
  var tableSelected="";
$(".reservation").hide();
  $(".available").click(function() {
    $(this).css("background", "#ADAAAA");
    $(this).removeClass("available").addClass("reserved");
    tableSelected = $(this).attr("class")[0];
    $(".reservation").show(1500);
  });
  $(".xOut").click(function() {
    console.log(tableSelected)
    // $("class=["table"]class=["5"]").css("background", "#EEE");
    // $("class=["table"]class=["5"]").removeClass("reserved").addClass("available");
    $(".reserved").css("background", "#EEE");
    $(".reserved").removeClass("reserved").addClass("available");
    // $(".reserved:nth-of-type(tableSelected-1)").css("background", "#EEE");
    // $(".reserved:nth-of-type(tableSelected-1)").removeClass("reserved").addClass("available");
    $(".reservation").hide(1500);
  });
  $(".xOut, button").click(function() {
    $(".reservation").hide(1500);
  });
// "unclicking the table"
  // $(".1.reserved").click(function() {
  //   $(this).css("background", "#EEE");
  //   $(this).removeClass("reserved").addClass("available");
  //   var classes = $(this).attr("class");
  // console.log(classes);
  // });
});
