let linguistic;
linguistic = prompt("Does your message use text?", "Type yes or no here.");
if ( linguistic === "yes" ) {
  console.log("Your message is linguistic.");
} else {
  console.log("Your message is not linguistic.");
}

let literal;
literal = prompt("Is your message literal?", "Type yes or no here.");
if ( literal === "yes" ) {
  console.log("Your message is denoted.");
} else {
  console.log("Your message is not literal.");
}

let symbolic;
symbolic = prompt("Is your message symbolic?", "Type yes or no here.");
if ( symbolic === "yes" ) {
  console.log("Your message is connoted.");
} else {
  console.log("Your message is not symbolic.");
}

let anchor;
anchor = prompt("Does your message use text with the image to create a general meaning?", "Type yes or no here.");
if ( anchor === "yes" ) {
  console.log("Your message is anchored.");
} else {
  console.log("Your message is unclear.");
}

let relay;
relay = prompt("Does your message use an image and text to convey meaning?", "Type yes or no here.");
if ( anchor === "yes" ) {
  console.log("Your message is relayed.");
} else {
  console.log("Your message could use some more work.");
}
