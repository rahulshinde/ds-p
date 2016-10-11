$(document).ready(function () {
    var offsetY = window.pageYOffset,
        $body = $('body'),
        $win = $(window),
        $close = $('#close'),
        $close2 = $('#close2'),
        $open = $('#resume'),
        $open2 = $('#artist_statement'),
        $holder = $('.resume'),
        $holder2 = $('.artist_statement');

    // Close with 'esc' key
    // $(document).keyup(function (e) {
    //     if (e.keyCode == 27) $close.trigger('click');
    // });


    $open.click(function () {
        offsetY = window.pageYOffset;
        // Block scrolling
        $body.css({
            'position': 'fixed',
            'z-index': '-1000000',
            'top': -offsetY + 'px'
        });
        // Show popup
        $holder.toggleClass('open');
        $('#close').delay(500).fadeToggle();
    });

    $open2.click(function () {
        offsetY = window.pageYOffset;
        // Block scrolling
        $body.css({
            'position': 'fixed',
            'z-index': '-1000000',
            'top': -offsetY + 'px'
        });
        // Show popup
        $holder2.toggleClass('open');
        $('#close2').delay(500).fadeToggle();
    });

    $close.click(function () {
        // Allow scrolling again
        $body.css({
            'position': 'static',
        });
        /**
         * Remove the following scrollTop()'s if you want.
         * just a UI tweak that the user would expect.
         **/
        // Make the page stay at the position it was at before the overlay
        $win.scrollTop(offsetY);
        // Reset the overlay scroll position to the top
        // Hide popup
        $holder.toggleClass('open');
        $('#close').fadeToggle(0);
    });

    $close2.click(function () {
        // Allow scrolling again
        $body.css({
            'position': 'static',
        });
        /**
         * Remove the following scrollTop()'s if you want.
         * just a UI tweak that the user would expect.
         **/
        // Make the page stay at the position it was at before the overlay
        $win.scrollTop(offsetY);
        // Hide popup
        $holder2.toggleClass('open');
        $('#close2').fadeToggle(0);
    });
});