$( document ).ready(function() {
	$('.draggable').each(function() {
		for (i = 0; i <= 2; i++) { 
    		randomPlace(i);
		}
	});

	$(".draggable").fadeToggle();

	sizeContent()
    draggable();

});

// Randomly place links

var docHeight = $(window).height() - 100,
    docWidth = $(window).width(),
    $div = $('.draggable'),
    divWidth = $div.width(),
    divHeight = $div.height(),
    heightMax = docHeight - divHeight,
    widthMax = docWidth - divWidth;


function randomPlace(i) {
	var top = Math.floor( Math.random() * heightMax ),
		left = Math.floor( Math.random() * widthMax );

    $('#' + i).css({"position":"absolute","top": top + "px", "left": left + "px"});
}

function draggable() {
    $('.draggable').draggable();
}

// Link hover states

function hover(element) {
	var source = element.getAttribute('src');
	source = source.replace('.png', '_hover.png')
    element.setAttribute('src', source);
}
function unhover(element) {
	var source = element.getAttribute('src');
	source = source.replace('_hover.png', '.png')
    element.setAttribute('src', source);
}

// Info Panel

$(window).resize(sizeContent);

//Dynamically assign height
function sizeContent() {
	var newHeight = $(window).height() + "px";
	$(".info").css("top", newHeight);
}

$(window).scroll(function () {
	var oVal;
	oVal = $(window).scrollTop() / 200;
	console.log(oVal);
	return $('.background_blur').css('opacity', oVal);
});