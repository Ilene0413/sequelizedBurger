//following code is for when the devoured button is selected
$(function () {
  $(".devour").on("click", function (event) {
    let devour = $(this).data();
    // Send the PUT request.
    $.ajax("/api/burgers/", {
      type: "PUT",
      data: devour
    }).then(
      function (result) {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // following code is for adding a new burger
  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let newBurger = {
      burger_name: $("#bgr").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function (result) {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
