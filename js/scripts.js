
function getCelebrity(age, drink) {
  let celebrity = ''

  if (drink === "water") {
    celebrity = "Water"
  } else if (drink === "coffee") {
    celebrity = "Coffee"
  } else if (drink === "soda") {
    celebrity = "Soda"
  }
  return celebrity
}

$(document).ready(function() {
  $("form#favorites").submit(function(event) {
    const age = parseInt($("input#age").val());
    const drink = $("select#drink").val();

    // if (age >= 18) {
    //   const celebrity = getCelebrity(age, drink)
    //   alert('your celebrity match is: ' + celebrity)
    // } else {
    //   alert("Please check back when you're 18, kiddo");
    // }
    const celbrity = getCelebrity(age, drink)
    $("#output").text(celebrity);
    event.preventDefault();
  });
});