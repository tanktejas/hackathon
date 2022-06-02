$(document).ready(function () {
  if (
    ($(".inrrs").hide(),
    $("#txtcountry").change(function () {
      "India" == this.value
        ? ($(".inrrs").show(), $(".allrs").hide())
        : ($(".inrrs").hide(), $(".allrs").show());
    }),
    "loading" in HTMLImageElement.prototype)
  ) {
    const e = document.querySelectorAll('img[loading="lazyload"]');
    e.forEach((e) => {
      e.src = e.dataset.src;
    });
  } else {
    const o = document.createElement("script");
    (o.src =
      "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js"),
      document.body.appendChild(o);
  }
  var c;
  $(".nav-folderized h5").click(function () {
    $(this).parent(".nav.footer-link").toggleClass("open");
  }),
    $(window)
      .scroll(function () {
        var e = $(window),
          o = $("body"),
          r = $(".parallax"),
          c = e.scrollTop() + e.height() / 2;
        r.each(function () {
          var e = $(this);
          e.position().top <= c &&
            e.position().top + e.height() > c &&
            (o.removeClass(function (e, o) {
              return (o.match(/(^|\s)color-\S+/g) || []).join(" ");
            }),
            o.addClass("color-" + $(this).data("color")));
        });
      })
      .scroll(),
    (c = jQuery)(window).on("load", function () {
      c("#carouselTicker").carouselTicker();
      var e = c("#carouselTicker-destructor-example").carouselTicker(),
        o = c("#destory-carouselTicker"),
        r = !0;
      o.on("click", function () {
        r
          ? (e.destructor(), (r = !1), c(this).text("Start"))
          : ((e = c("#carouselTicker-destructor-example").carouselTicker()),
            (r = !0),
            c(this).text("Destroy"));
      });
    }),
    c(".carouselTicker-start").carouselTicker({ direction: "next" }),
    c("#carouselTicker-vertical").carouselTicker({
      mode: "vertical",
      direction: "prev",
    }),
    c("#carouselTicker-vertical-with-callback").carouselTicker({
      mode: "vertical",
      direction: "next",
      onCarouselTickerLoad: function () {
        console.log("callback");
      },
    });
});
