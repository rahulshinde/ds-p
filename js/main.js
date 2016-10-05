$(document).ready(function () {
    var offsetY = window.pageYOffset,
        $body = $('body'),
        $win = $(window),
        $close = $('#close'),
        $open = $('#resume'),
        $holder = $('.resume'),
        $stuff = $('#stuff');
    // Close with 'esc' key
    $(document).keyup(function (e) {
        if (e.keyCode == 27) $close.trigger('click');
    });
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
        $stuff.scrollTop(0);
        // Hide popup
        $holder.toggleClass('open');
    });
});