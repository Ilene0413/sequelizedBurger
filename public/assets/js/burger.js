//following code is for when the devoured button is selected
console.log(`in burger.js`);
$(function () {
  $(".devour").on("click", function (event) {
    let devour = $(this).data();
    console.log (`devour , ${devour}`);
  //  console.log(`devoured - ${this.data.id}`);
 //   let devoured = true;
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
        console.log(`added burger - reload page ${result}`);
        location.reload();
      }
    );
  });
});
