
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
  copyToClipboard("#copyText");
  $(".coupon-alert").fadeIn("slow");
};

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}



