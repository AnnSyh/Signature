
document.addEventListener('DOMContentLoaded', () => {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  });
});

var text = document.getElementById("copyText");
var btn = document.getElementById("copyButton");

var text1 = document.getElementById("copyText1");
var btn1 = document.getElementById("copyButton1");

function copytext() {
  console.log("Button clicked.");

  var copyText = document.getElementById("copyText");
  console.log('copyText = ',copyText);
  copyText.select();
  document.execCommand("copy");
  // alert("Copied the text: " + copyText.value);
};

function copytext1() {
  console.log("Button clicked.");

  var copyText = document.getElementById("copyText1");
  console.log('copyText1 = ',copyText1);
  copyText.select();
  document.execCommand("copy");
  // alert("Copied the text: " + copyText1.value);
};






