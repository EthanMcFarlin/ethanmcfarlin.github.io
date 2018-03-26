// Arctext - Intro

$(document).ready(function() {
  $(".line-2").arctext({radius: 400});
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

// Blur Scroll

        $(document).scroll(function() {
            var header = $('#intro').height();
            var scrolled = $(document).scrollTop();
            var opacity = 1 - scrolled / header;
            var blur = scrolled / header * 10;
            if (blur < 10) {
                $('h1').css({'filter': 'blur('+ blur + 'px)'});
            }
            $('#intro').css({'opacity': opacity});
            $('h1').css({'opacity': opacity});
            if (scrolled > header * 0.25) {
                arrow.css({'box-shadow': '0 -50px lightgrey inset',
                                     'color': 'black',
                                     'line-height': '70px'});
            } else {
                arrow.css({'box-shadow': '',
                                     'color': '',
                                     'line-height': ''});
            }
        });

// Icon Animation

$(document).ready(function() {
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
});
