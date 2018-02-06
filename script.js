$(function() {
  var tableSelected="";
$(".reservation").hide();
  $(".available").click(function() {
    $(this).css("background", "#ADAAAA");
    $(this).removeClass("available").addClass("reserved");
    tableSelected = $(this).attr("class")[0];
    $(".tableNumberDisplay").text("Table Number: " + tableSelected);
    $(".reservation").show(1500);
  });
  $(".xOut").click(function() {
    $('.'+tableSelected).css("background", "#EEE");
    $('.'+tableSelected).removeClass("reserved").addClass("available");
    $(".reservation").hide(1500);
  });
  $(".xOut, button").click(function() {
    $(".reservation").hide(1500);
  });
});
