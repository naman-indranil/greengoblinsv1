! function() {
    function e(e) {
        return document.querySelector(e)
    }

    function t(e) {
        return e.getBoundingClientRect()
    }
    var i = e(".navToggle"),
        n = e(".nav"),
        s = e(".header");
    i.addEventListener("click", function() {
            i.classList.toggle("-active"), n.classList.toggle("-active"), s.classList.toggle("-active")
        }),
        function() {
            function i() {
                n = t(d).top, c = window.pageYOffset, a = c > n, a && !o ? (o = !0, s.classList.add("-fixed")) : !a && o && (o = !1, s.classList.remove("-fixed"))
            }
            var n, c, a, o, d = e("#hero");
            return d ? (addEventListener("scroll", i), void addEventListener("resize", i)) : void s.classList.add("-fixed")
        }()
}();