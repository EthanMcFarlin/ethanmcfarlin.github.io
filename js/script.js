// Arctext - Intro

$(document).ready(function() {
  $(".arc").arctext({radius: 10});
});


 $(document).ready(function() {
  $(".line-1").arctext({dir: -1, radius: 400});
});

// Materialize - Initializers

      $(document).ready(function(){
        $('.scrollspy').scrollSpy();
        // Initialize collapse button
        $(".button-collapse").sideNav({
            menuWidth: 190, // Default is 240
            edge: 'left', // Choose the horizontal origin
            closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
          }
        );

      });

// Icon Animation

$(document).ready(function() {
   setTimeout(function(){ 
    $(".r").each(function() {
        var element = $(this);
        var deg = element.data('rot');
        var animate = {
            rot: 0,
            pos: 0,
        };
        $(animate).animate({
            rot: deg,
            pos: 210
        }, {
            step: function(now, fx) {
                var pos = fx.elem.pos;
                var rot = fx.elem.rot;
                if (fx.prop == "pos") {
                    pos = now;
                } else if (fx.prop == "rot") {
                    rot = now;
                }
                element.css('transform', 'rotate(' + rot + 'deg) translate(' + pos + 'px) rotate(-' + rot + 'deg)')
            },
            duration: 1500,
        })
    });
    }, 0);
});

// Animate on Scroll

AOS.init();

// Scroll to Top Widget

$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {    // If page is scrolled more than 50px
        $('#top').fadeIn("fast");       // Fade in the arrow
    } else {
        $('#top').fadeOut("fast");      // Else fade out the arrow
    }
});
$('#top').click(function() {            // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                   // Scroll to top of body
    }, 500);
});


// Progress Bar

jQuery('.skillbar').each(function(){
	jQuery(this).find('.skillbar-bar').animate({
		width:jQuery(this).attr('data-percent')
	},2000);
});
