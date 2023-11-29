$(function(){
    var url = window.location.href;

    $(".top-links li a").each(function() {
        if(url == (this.href)) { 
            $(this).closest("li").addClass("active");
        }
    });
});

// $(document).on("scroll", function() {
//     var pageTop = $(document).scrollTop();
//     var pageBottom = pageTop + $(window).height();
//     var tags = $(".fade-in");
  
//     for (var i = 0; i < tags.length; i++) {
//       var tag = tags[i];
//       if ($(tag).position().top < pageBottom) {
//         $(tag).addClass("visible");
//       } else {
//         $(tag).removeClass("visible");
//       }
//     }
// });

const nav = document.querySelector('.proj-nav');
window.addEventListener('scroll', () => {
  if (window.scrollY >= 550) {
    nav.classList.add('proj-nav-scrolled');
  }
  else if (window.scrollY < 550) {
    nav.classList.remove('proj-nav-scrolled');
  }
});

var fadeElements = document.getElementsByClassName('scrollFade');

function scrollFade() {
	var viewportBottom = window.scrollY + window.innerHeight;

	for (var index = 0; index < fadeElements.length; index++) {
		var element = fadeElements[index];
		var rect = element.getBoundingClientRect();

		var elementFourth = rect.height/4;
		var fadeInPoint = window.innerHeight - elementFourth;
		var fadeOutPoint = -(rect.height/2);

		if (rect.top <= fadeInPoint) {
			element.classList.add('scrollFade--visible');
			element.classList.add('scrollFade--animate');
			element.classList.remove('scrollFade--hidden');
		} else {
			element.classList.remove('scrollFade--visible');
			element.classList.add('scrollFade--hidden');
		}

		if (rect.top <= fadeOutPoint) {
			element.classList.remove('scrollFade--visible');
			element.classList.add('scrollFade--hidden');
		}
	}
}

document.addEventListener('scroll', scrollFade);
window.addEventListener('resize', scrollFade);
document.addEventListener('DOMContentLoaded', function() {
    scrollFade();
});

$('img[data-enlargable]').addClass('img-enlargable').click(function(){
  var src = $(this).attr('src');
  $('<div>').css({
      position: 'fixed',
      zIndex: '10000',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      cursor: 'zoom-out',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
      padding: '10px 0px',
      animation: 'fade-up 0.2s',
  }).append($('<img>').attr('src', src).css('max-height', 'calc(100% - 40px)').css('max-width', 'calc(100% - 40px)')).click(function(){
      $(this).remove();
  }).appendTo('body');
});


