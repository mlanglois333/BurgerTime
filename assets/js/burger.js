$(function(){
    $(".change-devour").on("click", function(){
        const id = $(this).data("id");
        const newDevour = $(this).data("newdevour");

        const devoured = {devoured: newDevour};

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devoured
        }).then(function(){
            location.reload();
        }
        );
    });

    $(".create-form").on("submit", function(event){
        event.preventDefault();
        const burgs = {
            burger_name: $("#burg").val(),
            devoured: $("[name=devoured]:checked").val()
        };

        $.ajax("/api/burgers",{
            type:"POST",
            data: burgs
        }).then(function(){
            location.reload();
        });
    });


    $(".delete-burger").on("click", function(){
        const id = $(this).data("id");

        $.ajax("api/burgers/"+ id, {
            type:"DELETE"
        }).then(function(){
            location.reload();
        }
        );
    });
});
