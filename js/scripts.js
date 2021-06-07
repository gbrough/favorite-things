$(document).ready(function() {
  $("form#favorites").submit(function(event) {
    const hobbyResult = $("input#hobbies").val();
    const drinkResult = $("input#drink").val();
    const hobbyArray = [hobbyResult]
    const drinkArray = [drinkResult]

    // myArray.push("100")

    console.log(hobbyArray[1])
    console.log(drinkArray)


    $("#output1").text(hobbyResult);
    $("#output2").text(drinkResult);
    event.preventDefault();
  });
});