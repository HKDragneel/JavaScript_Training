/*
    $ is the alias for jQuery function
    
    -->$(document).ready()<-- is used to ensure that the page is
        in a state  where it is ready to be manipulated

    The code which is to be executed is put inside a function and
        that function is passed inside -->ready()<--
*/
// $(document).ready(() => alert('Page Loaded'));                      //Uncomment this and observe the same behaviour as code below

/*
    $() is a shorthand for $(document).ready() and will do double duty
    as an alias if a function is passed to it.
*/
// $(alert('Page loaded'));

/*
    jQuery elements, attributes, traversing and filtering
*/
$(function() {

    //Selecting elements by tag name and applying css to it's last element
    $('p').last().css({
        "color": "brown",
        "font-weight": "bolder"
    });

    //Selecting elements by class name and applying css
    $('.sizes').css({"color": "red"});
    $('.sizes').last().css({"font-size": "2em"});
});

/*
    jQuery events
*/
$(function() {

    $('#p1').hover(function() {
        console.log('You are on p1');
    });

    //handling multiple events at once using -->on()<-- method
    $('#p3').on("mouseenter mouseleave", function () {
        console.log('You are on p3');
    });

    //handling multiple events at once with individual event handlers
    $('#p3').on({
        mouseenter: () => {
            $('#p3').css("color", "blue");
        },
        mouseleave: () => {
            $('#p3').css("color", "brown");
        },
        click: () => {
            $('li').css({
                "color": "orange",
                "font-size": "1em"
            });
        }
    });
});

/*
    jQuery effects
*/
$(function() {
    $('#bbb').hide();
    $('#cb').change(function() {
        if(this.checked) {
            $('#bbb').show();
        } else {
            $('#bbb').hide();
        }
    });
});