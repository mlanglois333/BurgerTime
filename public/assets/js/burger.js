$(function () {
    $(".change-devour").on("click", function (event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");

        var devoured = devoured();
        function devoured() {
            if (newDevour === true) { return 1 }
            else { return 0 };
        }
        var burgs = {
            burger: id,
            devoured: devoured
        };



        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: burgs
        }).then(function () {
            console.log("main ajax")
            location.reload();
        }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        const burgs = {
            burger: $("#newBurger").val().trim(),
            devoured: $("[name=devoured]:checked").val()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: burgs
        }).then(function () {
            location.reload();
        });
    });


    $(".delete-burger").on("click", function () {
        const id = $(this).data("id");

        $.ajax("api/burgers/" + id, {
            type: "DELETE"
        }).then(function () {
            location.reload();
        }
        );
    });
});