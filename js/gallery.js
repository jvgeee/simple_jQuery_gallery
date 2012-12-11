$('#controls #left').click(function() {
    var old = $('li.current');
		old.removeClass('current');

    if (old.is(':first-child')) {
        // search the siblings for the last child
        old.siblings(':last-child').addClass('current');
    } else {
        old.prev('li').addClass('current');
    }
});

$('#controls #right').click(function() {
    var old = $('li.current');
		old.removeClass('current');

    if (old.is(':last-child')) {
        old.siblings(':first-child').addClass('current');
    } else {
        old.next('li').addClass('current');
    }
});