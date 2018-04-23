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
    }, 100);
});


// Parallax Effects

$('.parallaxie').parallaxie({
	speed: 0.5,
	offset: -15,
    size: '850px',
    pos_x: '60%',
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


// Simple Page Loader

var cssIdowl = 'myCss';
if (!document.getElementById(cssIdowl))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssIdowl;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = '/static/css/preloader.css';
    link.media = 'all';
    head.appendChild(link);
}

var p = document.createElement("div");
p.innerHTML = "<div style='z-index:100000' id='owlreporter-preloader'><div id='loader'></div><div class='loader-section section-left'></div><div class='loader-section section-right'></div></div>";
document.body.insertBefore(p, document.body.firstChild);

function pageload() {
    var e = (new Date).getTime(),
        t = (e - before) / 1e3,
        n = document.getElementById("loadingtime");
    n.innerHTML = "Page load: " + t + " seconds."
}
window.onload = function() {
    pageload()
}, setTimeout(function() {
    document.body.className += " loaded"
}, 3000), document.addEventListener ? document.addEventListener("DOMContentLoaded", function() {
    document.removeEventListener("DOMContentLoaded", arguments.callee, !1), domReady()
}, !1) : document.attachEvent && document.attachEvent("onreadystatechange", function() {
    "complete" === document.readyState && (document.detachEvent("onreadystatechange", arguments.callee), domReady())
});

// Progress Bar

jQuery('.skillbar').each(function(){
	jQuery(this).find('.skillbar-bar').animate({
		width:jQuery(this).attr('data-percent')
	},2000);
});
