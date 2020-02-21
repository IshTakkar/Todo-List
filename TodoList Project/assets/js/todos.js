$("ul").on("click","li",function() {
   $(this).toggleClass("line")
});

$("ul").on("click","span",function(e){
    $(this).parent().fadeOut(350, function(){
        $(this).remove();
    });
    e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
    if(e.which===13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class ='fas fa-trash-alt'></i></span>" + todoText + "</li>");
    }
});

$(".fa-plus-circle").click(function(){
    $("input").fadeToggle(250);
});