$("#one").on('click', function() {
    alert("Pressed the button one");
});

$("#two").on("click", function () {
  $(this).toggleClass("bg-green-400 bg-blue-500");
});