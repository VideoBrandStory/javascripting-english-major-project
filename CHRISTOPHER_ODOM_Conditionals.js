let linguistic;
linguistic = prompt("Does your message use text?", "Type yes or no here.");
if ( linguistic === "yes" ) {
  $("#response").html("Your message is linguistic.");
} else {
  $("#response").html("Your message is not linguistic.");
}

let literal;
literal = prompt("Is your message literal?", "Type yes or no here.");
if ( literal === "yes" ) {
  $("#response").html("Your message is denoted.");
} else {
  $("#response").html("Your message is not literal.");
}

let symbolic;
symbolic = prompt("Is your message symbolic?", "Type yes or no here.");
if ( symbolic === "yes" ) {
  $("#response").html("Your message is connoted.");
} else {
  $("#response").html("Your message is not symbolic.");
}

let anchor;
anchor = prompt("Does your message use text with the image to create a general meaning?", "Type yes or no here.");
if ( anchor === "yes" ) {
  $("#response").html("Your message is anchored.");
} else {
  $("#response").html("Your message is unclear.");
}

let relay;
relay = prompt("Does your message use an image and text to convey meaning?", "Type yes or no here.");
if ( anchor === "yes" ) {
  $("#response").html("Your message is relayed.");
} else {
  $("#response").html("Your message could use some more work.");
}
