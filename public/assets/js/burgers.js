// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-eaten").on("click", function(event) {
      var id = $(this).data("id");
      var newEaten = $(this).data("neweaten");
  
      var newEatenState = {
        devoured: eaten
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatenState
      }).then(
        function() {
          console.log("changed eaten to", newEaten);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#add-burger").val().trim(),
        // devoured: $("[name=sleepy]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newCat
      }).then(
        function() {
          console.log("added a new burger!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  