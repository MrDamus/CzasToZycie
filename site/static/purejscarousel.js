function Carousel(t) {
  function e() {
      h && a(),
      L && l(),
      y && o(),
      _ && v(),
      n(E - 1, -p.offsetWidth + "px", "afterBegin"),
      g && u(g)
  }
  function n(t, e, n) {
      var i = p.querySelectorAll(".b-carousel__items li")[t];
      i.style.marginLeft = e,
      p.querySelector(".b-carousel__items").removeChild(i),
      p.querySelector(".b-carousel__items").insertAdjacentHTML(n, i.outerHTML)
  }
  function i(t) {
      "LI" === t.target.tagName && u(t.target.getAttribute("data-position"))
  }
  function a() {
      var t = document.createElement("ul");
      t.classList.add("b-carousel__nav-dots"),
      t.addEventListener("click", i.bind(this));
      for (var e = 0; E > e; e++) {
          var n = document.createElement("li");
          n.setAttribute("data-position", e),
          t.appendChild(n)
      }
      p.appendChild(t),
      r()
  }
  function r() {
      switch (Array.prototype.forEach.call(p.querySelectorAll(".b-carousel__nav-dots li"), function(t) {
          t.classList.remove("active")
      }),
      A) {
      case -1:
          A = E - 1;
          break;
      case E:
          A = 0
      }
      p.querySelectorAll(".b-carousel__nav-dots li")[A].classList.add("active")
  }
  function l() {
      var t = document.createElement("button");
      t.innerHTML = "&lsaquo;",
      t.classList.add("b-carousel__nav-arrow_prev");
      var e = document.createElement("button");
      e.innerHTML = "&rsaquo;",
      e.classList.add("b-carousel__nav-arrow_next"),
      t.addEventListener("click", d),
      e.addEventListener("click", f),
      p.appendChild(t),
      p.appendChild(e)
  }
  function o() {
      var t = document.createElement("button");
      t.innerHTML = "Play",
      t.classList.add("b-carousel__button_play"),
      t.addEventListener("click", v);
      var e = document.createElement("button");
      e.innerHTML = "Stop",
      e.classList.add("b-carousel__button_stop"),
      e.addEventListener("click", m),
      p.appendChild(t),
      p.appendChild(e)
  }
  function s(t, e) {
      return e >= 0 ? (t.style.marginLeft = "",
      void 0) : (t.style.marginLeft = e + "px",
      setTimeout(function() {
          s(t, e + 100)
      }
      .bind(this), 20),
      void 0)
  }
  function c(t, e) {
      return e <= -p.offsetWidth ? (t.style.marginLeft = -p.offsetWidth + "px",
      void 0) : (t.style.marginLeft = e + "px",
      setTimeout(function() {
          c(t, e - 100)
      }
      .bind(this), 20),
      void 0)
  }
  function u(t) {
      var e = A - t;
      if (0 !== e)
          if (0 > e)
              for (var n = 0; -e > n; n++)
                  f();
          else
              for (var n = 0; e > n; n++)
                  d()
  }
  function d() {
      s(p.querySelectorAll(".b-carousel__items li")[0], 0),
      n(E - 1, -p.offsetWidth + "px", "afterBegin"),
      A--,
      r()
  }
  function f() {
      c(p.querySelectorAll(".b-carousel__items li")[1], -p.offsetWidth),
      n(0, "", "beforeEnd"),
      A++,
      r()
  }
  function v() {
      S || (S = setInterval(f.bind(this), b))
  }
  function m() {
      clearInterval(S),
      S = null
  }
  var p = document.getElementById(t.el)
    , _ = t.autoplay
    , b = t.interval
    , h = t.dots
    , L = t.arrows
    , y = t.buttons
    , E = p.querySelectorAll("li").length
    , g = t.initial >= E ? E : t.initial
    , A = 0
    , S = null;
  E > 1 && e(),
  this.initSlide = u,
  this.current = A,
  this.prev = d,
  this.next = f,
  this.play = v,
  this.stop = m
}

var { innerWidth } = window;

var breakpoint = 960;

var applyDots = innerWidth <= breakpoint;
var applyArrows = innerWidth >= breakpoint;

var carousel = new Carousel({
  el: "carousel",       // id of the carousel container
  infinite: true,       // infinite loop
  autoplay: true,       // starts the rotation automatically
  interval: 10000,      // interval between slide changes
  show: 0,              // slide to start with
  dots: applyDots,      // show navigation dots
  arrows: applyArrows,  // show navigation arrows
  buttons: false,       // show play/stop buttons
  arrNextText: '›',
  arrPrevText: '‹'
});
carousel.initSlide();

var carouselHistories = new Carousel({
  el: "carousel-histories",       // id of the carousel container
  infinite: true,       // infinite loop
  autoplay: true,       // starts the rotation automatically
  interval: 10000,      // interval between slide changes
  show: 0,              // slide to start with
  dots: applyDots,      // show navigation dots
  arrows: applyArrows,  // show navigation arrows
  buttons: false,       // show play/stop buttons
  arrNextText: '›',
  arrPrevText: '‹'
});

carouselHistories.initSlide();
