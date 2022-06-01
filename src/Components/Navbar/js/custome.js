
         function sticky_relocate() {
          var window_top = $(window).scrollTop();
          var div_top = $('.new-top-click').offset().top;
          if (window_top > div_top) {
            $('.new-top-div').addClass('sticky');
          } else {
            $('.new-top-div').removeClass('sticky');
          }
        }

        $(function() {
          $(window).scroll(sticky_relocate);
          sticky_relocate();
        });
    
        (function($, window, document){

            $('[data-toggles]').on('click', function(event) {
              event.preventDefault();
              var target = $(this.hash);
              target.toggle();
            });

            // Cache selectors
            var lastId,
              topMenu = $("#top-menu"),
              topMenuHeight = topMenu.outerHeight() + 15,
              // All list items
              menuItems = topMenu.find("a"),
              // Anchors corresponding to menu items
              scrollItems = menuItems.map(function() {
                var item = $(this).attr("href");
                if(item != '#') {return $(item)}
              });

            console.log(scrollItems)


            // Bind click handler to menu items
            // so we can get a fancy scroll animation
            menuItems.click(function(e) {
              var href = $(this).attr("href"),
                offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
              $('html, body').stop().animate({
                scrollTop: offsetTop
              }, 300);
              e.preventDefault();
            });

            // Bind to scroll
            $(window).scroll(function() {
              // Get container scroll position
              var fromTop = $(this).scrollTop() + topMenuHeight;

              // Get id of current scroll item
              var cur = scrollItems.map(function() {
                if ($(this).offset().top < fromTop)
                  // console.log(this)
                  return this;
              });
              // Get the id of the current element
              cur = cur[cur.length - 1];
              var id = cur && cur.length ? cur[0].id : "";

              if (lastId !== id) {
                lastId = id;
                // Set/remove active class
                menuItems
                  .parent().removeClass("active")
                  .end().filter("[href='#" + id + "']").parent().addClass("active");
              }
            });
          })(jQuery, window, document);
      
        $(window).on('load', function () {
            "use strict";
            typeJS();
            // typeJS Init
            function typeJS() {
                var typed = new Typed('.js-text-animation', {
                    stringsElement: '.js-text-animation-strings',
                    smartBackspace: true,
                    typeSpeed: 80,
                    backSpeed: 60,
                    backDelay: 2000,
                    loop: true,
                });
            };
        });
   $(document).ready(function() {

// Gets the video src from the data-src on each button

var $videoSrc;  
$('.video-btn').click(function() {
    $videoSrc = $(this).data( "src" );
});
console.log($videoSrc);

  
  
// when the modal is opened autoplay it  
$('#myModal').on('shown.bs.modal', function (e) {
    
// set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
$("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
})
  


// stop playing the youtube video when I close the modal
$('#myModal').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#video").attr('src',$videoSrc); 
}) 
    
    


  
  
// document ready  
});


