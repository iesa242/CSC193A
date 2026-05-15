function makeBigger() {
  document.getElementById("textInput").style.fontSize = "24pt";
}

function changeStyle() {
  var textArea = document.getElementById("textInput");
  var fancy = document.getElementById("fancy");

  if (fancy.checked) {
    alert("FancyShmancy selected");
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else {
    alert("BoringBetty selected");
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
}

function mooText() {
  var textArea = document.getElementById("textInput");
  var text = textArea.value.toUpperCase();

  var sentences = text.split(".");
  text = sentences.join("-Moo.");

  textArea.value = text;
}