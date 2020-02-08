let linguistic;
linguistic = prompt("Is your message linguistic?", "Type yes or no here.");
if ( linguistic === "yes" ) {
  $("#response").html("Your message uses text.");
} else {
  $("#response").html("Your message is not linguistic");
}
