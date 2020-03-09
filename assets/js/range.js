$(function() {
  var output = document.querySelectorAll("#output-range-slider-1")[0];

  $(document).on("input", 'input[type="range"]', function(e) {
    output.innerHTML = e.currentTarget.value;
  });

  $("input[type=range]").rangeslider({
    polyfill: false
  });
});

$(function() {
  var output = document.querySelectorAll("#output-range-slider-2")[0];

  $(document).on("input", 'input[type="range"]', function(e) {
    output.innerHTML = e.currentTarget.value;
  });

  $("input[type=range]").rangeslider({
    polyfill: false
  });
});
