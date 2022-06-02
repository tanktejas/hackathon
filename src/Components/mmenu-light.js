!(function (n) {
  var i = {};
  function s(t) {
    if (i[t]) return i[t].exports;
    var e = (i[t] = { i: t, l: !1, exports: {} });
    return n[t].call(e.exports, e, e.exports, s), (e.l = !0), e.exports;
  }
  (s.m = n),
    (s.c = i),
    (s.d = function (t, e, n) {
      s.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (s.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (s.t = function (e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (s.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          s.d(
            n,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return n;
    }),
    (s.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return s.d(e, "a", e), e;
    }),
    (s.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (s.p = ""),
    s((s.s = 0));
})([
  function (t, e, n) {
    "use strict";
    n.r(e);
    function o(t) {
      return Array.prototype.slice.call(t);
    }
    function r(t, e) {
      return o((e || document).querySelectorAll(t));
    }
    var i =
        ((f.prototype.add = function (t, e) {
          this.matchFns.push(t),
            this.unmatchFns.push(e),
            (this.toggler.matches ? t : e)();
        }),
        f),
      a =
        ("ontouchstart" in window || navigator.msMaxTouchPoints,
        -1 < navigator.userAgent.indexOf("MSIE") ||
          -1 < navigator.appVersion.indexOf("Trident/")),
      c = "mm-spn",
      d =
        (Object.defineProperty(h.prototype, "prefix", {
          get: function () {
            return c;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (h.prototype.openPanel = function (t) {
          var e = t.parentElement;
          if (this.slidingSubmenus) {
            var n = t.dataset.mmSpnTitle;
            e === this.node
              ? this.node.classList.add(c + "--main")
              : (this.node.classList.remove(c + "--main"),
                n ||
                  o(e.children).forEach(function (t) {
                    t.matches("a, span") && (n = t.textContent);
                  })),
              (n = n || this.title),
              (this.node.dataset.mmSpnTitle = n),
              r("." + c + "--open", this.node).forEach(function (t) {
                t.classList.remove(c + "--open"),
                  t.classList.remove(c + "--parent");
              }),
              t.classList.add(c + "--open"),
              t.classList.remove(c + "--parent");
            for (var i = t.parentElement.closest("ul"); i; )
              i.classList.add(c + "--open"),
                i.classList.add(c + "--parent"),
                (i = i.parentElement.closest("ul"));
          } else {
            e = t.matches("." + c + "--open");
            r("." + c + "--open", this.node).forEach(function (t) {
              t.classList.remove(c + "--open");
            }),
              t.classList[e ? "remove" : "add"](c + "--open");
            for (var s = t.parentElement.closest("ul"); s; )
              s.classList.add(c + "--open"),
                (s = s.parentElement.closest("ul"));
          }
        }),
        (h.prototype._setSelectedl = function () {
          var t = r("." + this.selectedClass, this.node),
            e = t[t.length - 1],
            t = null;
          e && (t = e.closest("ul")),
            (t = t || this.node.querySelector("ul")),
            this.openPanel(t);
        }),
        (h.prototype._initAnchors = function () {
          var i = this;
          this.node.addEventListener("click", function (t) {
            var e,
              n = t.target;
            (!n.matches("a") &&
              (!(e = (e = n).closest("span")
                ? e.parentElement
                : !!e.closest("li") && e) ||
                (o(e.children).forEach(function (t) {
                  t.matches("ul") && i.openPanel(t);
                }),
                0)) &&
              !(function () {
                var t = r("." + c + "--open", n),
                  t = t[t.length - 1];
                if (t) {
                  t = t.parentElement.closest("ul");
                  if (t) return i.openPanel(t), !0;
                }
                return !1;
              })()) ||
              t.stopImmediatePropagation();
          });
        }),
        h),
      s = "mm-ocd",
      l =
        (Object.defineProperty(p.prototype, "prefix", {
          get: function () {
            return s;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (p.prototype.open = function () {
          this.wrapper.classList.add(s + "--open"),
            document.body.classList.add(s + "-opened");
        }),
        (p.prototype.close = function () {
          this.wrapper.classList.remove(s + "--open"),
            document.body.classList.remove(s + "-opened");
        }),
        p),
      n =
        ((u.prototype.navigation = function (t) {
          var e,
            n,
            i,
            s = this;
          return (
            this.navigator ||
              ((e = void 0 === (n = (t = t || {}).title) ? "Menu" : n),
              (n = void 0 === (i = t.selectedClass) ? "Selected" : i),
              (i = void 0 === (i = t.slidingSubmenus) || i),
              (t = void 0 === (t = t.theme) ? "light" : t),
              (this.navigator = new d(this.menu, e, n, i, t)),
              this.toggler.add(
                function () {
                  return s.menu.classList.add(s.navigator.prefix);
                },
                function () {
                  return s.menu.classList.remove(s.navigator.prefix);
                }
              )),
            this.navigator
          );
        }),
        (u.prototype.offcanvas = function (t) {
          var e,
            n = this;
          return (
            this.drawer ||
              ((t = void 0 === (t = (t = t || {}).position) ? "left" : t),
              (this.drawer = new l(null, t)),
              (e = document.createComment("original menu location")),
              this.menu.after(e),
              this.toggler.add(
                function () {
                  n.drawer.content.append(n.menu);
                },
                function () {
                  n.drawer.close(), e.after(n.menu);
                }
              )),
            this.drawer
          );
        }),
        u);
    function u(t, e) {
      void 0 === e && (e = "all"), (this.menu = t), (this.toggler = new i(e));
    }
    function p(t, e) {
      var n = this;
      void 0 === t && (t = null),
        (this.wrapper = document.createElement("div")),
        this.wrapper.classList.add(s),
        this.wrapper.classList.add(s + "--" + e),
        (this.content = document.createElement("div")),
        this.content.classList.add(s + "__content"),
        this.wrapper.append(this.content),
        (this.backdrop = document.createElement("div")),
        this.backdrop.classList.add(s + "__backdrop"),
        this.wrapper.append(this.backdrop),
        document.body.append(this.wrapper),
        t && this.content.append(t);
      t = function (t) {
        n.close(), t.preventDefault(), t.stopImmediatePropagation();
      };
      this.backdrop.addEventListener("touchstart", t, { passive: true }),
        this.backdrop.addEventListener("mousedown", t);
    }
    function h(t, e, n, i, s) {
      (this.node = t),
        (this.title = e),
        (this.slidingSubmenus = i),
        (this.selectedClass = n),
        this.node.classList.add(c),
        a && (this.slidingSubmenus = !1),
        this.node.classList.add(c + "--" + s),
        this.node.classList.add(
          c + "--" + (this.slidingSubmenus ? "navbar" : "vertical")
        ),
        this._setSelectedl(),
        this._initAnchors();
    }
    function f(t) {
      var e = this;
      (this.listener = function (t) {
        (t.matches ? e.matchFns : e.unmatchFns).forEach(function (t) {
          t();
        });
      }),
        (this.toggler = window.matchMedia(t)),
        this.toggler.addListener(this.listener),
        (this.matchFns = []),
        (this.unmatchFns = []);
    }
    (e.default = n), (window.MmenuLight = n);
  },
]);
