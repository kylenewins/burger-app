$(function(){
    $(".eat").on("click", function(event) {
        var id = $(this).data("id");
        var devoured = $(this).data("devoured");
        devoured = true

        console.log("id: " + id)
        console.log("devoured: " + devoured)
    
        var newAteState = {
          devoured: devoured
        };
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newAteState
        }).then(
          function() {
            console.log("changed devoured to", devoured);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

      $(".uneat").on("click", function(event) {
        var id = $(this).data("id");
        var devoured = $(this).data("devoured");
        devoured = false

        console.log("id: " + id)
        console.log("devoured: " + devoured)
    
        var newAteState = {
          devoured: devoured
        };
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newAteState
        }).then(
          function() {
            console.log("changed devoured to", devoured);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

      $(".create-form").on("submit", function(event) {
        event.preventDefault();
    
        var newBurg = {
          burger_name: $("#ca").val().trim(),
          devoured: 0
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurg
        }).then(
          function() {
            console.log("created new Burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
})