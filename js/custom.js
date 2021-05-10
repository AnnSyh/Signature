
document.addEventListener('DOMContentLoaded', () => {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  });
});

var text = document.getElementById("copyText");
var btn = document.getElementById("copyButton");

function copytext() {
  console.log("Button clicked.");
  text.select();
  document.execCommand("copy");
};


