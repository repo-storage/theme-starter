/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

//Theme scripts
jQuery(document).ready(function($){
    $('a[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();

        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    //enable scrollspy
    //$('#top-nav').scrollspy()

    //$('.carousel').carousel()
    $('.bj-tooltip').tooltip();

    //add some responsive stuff

    var width = $(window).width();

    if ((width >= 1860)) {

        $('body').addClass('screen-xlarge');

    }else if ((width > 1560) && (width <= 1850)){

        $('body').addClass('screen-large');
    }
    else if((width > 1160) && (width <= 1550)){

        $('body').addClass('screen-medium');
    }
    else if ((width >= 920 ) && (width <= 1150)){

        $('body').addClass('screen-default');

    } else if ((width >= 768) && (width <= 918)){

        $('body').addClass('tablet-landscape');

    }else if ((width >= 481) && (width <= 767)){

        $('body').addClass('tablet-portrait');

    } else if ((width <= 480)){

        $('body').addClass('mobile-phone, phone');

    }

//    $('img').mouseenter(function(){
//        $(this).transition({ opacity: 0.2 }) ;
//        console.log('im transiting fired');
//    });


    var top_nav = $('#top-nav').data('trigger');

    $(top_nav).waypoint(function(direction){
      console.log("trigger " + top_nav +' ' + direction);
      if(direction == 'down'){
        $('#top-nav').transition({ opacity: 0.4});
        $('#top-nav').transition({ opacity: 0.85});
        $('#top-nav').addClass('navbar-fixed-top');

      } else if(direction == 'up') {
          $('#top-nav').removeClass('navbar-fixed-top');
      }



    }, { offset: 0});

})
