$(document).ready(function(){
    $.ajax({
        type: "GET",
        url:"/data",
        success: function(data){
            console.log(data);

            $.each(data,function(){
                $(".content").append("<div class='newStudent'><div>");
                var el = $('.newStudent').children().last()
                el.append("<p>Name: " + this.name +"</p>");
                el.append("<p>Elevator Pitch: " + this.desc +"</p>");
                el.append("<p>Shout out: " +this.thanks +"</p>");

            });
            $('.newStudent:first').addClass('activeStudent');

        }
    })

    $("#rightArrow").on('click',function(){
        var currentSlide = $('.activeStudent');
        var nextSlide = currentSlide.next();

        //if (nextSlide.length === 0){
        //    nextSlide = $('.newStudent:first');
        //}

        currentSlide.fadeOut(500).removeClass('activeStudent');
        nextSlide.fadeIn(500).addClass('activeStudent');

    });

    $("#leftArrow").on('click',function(){
        var currentSlide = $('.activeStudent');
        var nextSlide = currentSlide.last();

        //if (nextSlide.length ===0){
        //    nextSlide = $('.newStudent:first');
        //}

        currentSlide.fadeOut(500).removeClass('activeStudent');
        nextSlide.fadeIn(500).addClass('activeSudent');
    });

});

//var fiddlesticks = function(){
//
//    $("#rightArrow").on('click',function(){
//        var currentSlide = $('.activeStudent');
//        var nextSlide = currentSlide.next();
//
//        if (nextSlide.length === 0){
//            nextSlide = $('.newStudent:first');
//        }
//
//        currentSlide.fadeOut(500).removeClass('.activeStudent');
//        nextSlide.fadeIn(500).addClass('.activeStudent');
//
//    });
//
//    $("#leftArrow").on('click',function(){
//        var currentSlide = $('.activeStudent');
//        var nextSlide = currentSlide.next();
//
//        if (nextSlide.length ===0){
//            nextSlide = $('.newStudent:first');
//        }
//    });
//}
