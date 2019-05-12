/*! TenVideoPlayer_V2 - v2.0.0 - 2018-10-23 11:05:06
 * Copyright (c) 2018
 * Powered by Tencent-Video Web Front End Team
*/
!function(a) {
    !function(a) {
        String.prototype.trim === a && (String.prototype.trim = function() {
            return this.replace(/^\s+|\s+$/g, "")
        }
        ),
        Array.prototype.reduce === a && (Array.prototype.reduce = function(b) {
            if (void 0 === this || null === this)
                throw new TypeError;
            var c, d = Object(this), e = d.length >>> 0, f = 0;
            if ("function" != typeof b)
                throw new TypeError;
            if (0 == e && 1 == arguments.length)
                throw new TypeError;
            if (arguments.length >= 2)
                c = arguments[1];
            else
                for (; ; ) {
                    if (f in d) {
                        c = d[f++];
                        break
                    }
                    if (++f >= e)
                        throw new TypeError
                }
            for (; e > f; )
                f in d && (c = b.call(a, c, d[f], f, d)),
                f++;
            return c
        }
        ),
        Array.prototype.forEach || (Array.prototype.forEach = function(a, b) {
            var c, d;
            if (null == this)
                throw new TypeError("this is null or not defined");
            var e = Object(this)
              , f = e.length >>> 0;
            if ("[object Function]" !== {}.toString.call(a))
                throw new TypeError(a + " is not a function");
            for (b && (c = b),
            d = 0; f > d; ) {
                var g;
                Object.prototype.hasOwnProperty.call(e, d) && (g = e[d],
                a.call(c, g, d, e)),
                d++
            }
        }
        ),
        Array.prototype.indexOf || (Array.prototype.indexOf = function(a) {
            var b = this.length >>> 0
              , c = Number(arguments[1]) || 0;
            for (c = 0 > c ? Math.ceil(c) : Math.floor(c),
            0 > c && (c += b); b > c; c++)
                if (c in this && this[c] === a)
                    return c;
            return -1
        }
        )
    }();
    var b = function() {
        function a(a) {
            return null == a ? String(a) : W[X.call(a)] || "object"
        }
        function b(b) {
            return "function" == a(b)
        }
        function c(a) {
            return null != a && a == a.window
        }
        function d(a) {
            return null != a && a.nodeType == a.DOCUMENT_NODE
        }
        function e(b) {
            return "object" == a(b)
        }
        function f(a) {
            if (!a || "[object Object]" !== a.toString() || a.nodeType || a.setInterval)
                return !1;
            if (a.constructor && !a.hasOwnProperty("constructor") && !a.constructor.prototype.hasOwnProperty("isPrototypeOf"))
                return !1;
            var b;
            for (b in a)
                ;
            return b === w || a.hasOwnProperty(b)
        }
        function g(a) {
            return a instanceof Array
        }
        function h(a) {
            return "number" == typeof a.length
        }
        function i(a) {
            return E.call(a, function(a) {
                return null != a
            })
        }
        function j(a) {
            return a.length > 0 ? y.fn.concat.apply([], a) : a
        }
        function k(a) {
            return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
        }
        function l(a) {
            return a in H ? H[a] : H[a] = new RegExp("(^|\\s)" + a + "(\\s|$)")
        }
        function m(a, b) {
            return "number" != typeof b || J[k(a)] ? b : b + "px"
        }
        function n(a) {
            var b, c;
            return G[a] || (b = F.createElement(a),
            F.body.appendChild(b),
            c = I(b, "").getPropertyValue("display"),
            b.parentNode.removeChild(b),
            "none" == c && (c = "block"),
            G[a] = c),
            G[a]
        }
        function o(a) {
            return "children"in a ? D.call(a.children) : y.map(a.childNodes, function(a) {
                return 1 == a.nodeType ? a : void 0
            })
        }
        function p(a, b, c) {
            for (x in b)
                c && (f(b[x]) || g(b[x])) ? (f(b[x]) && !f(a[x]) && (a[x] = {}),
                g(b[x]) && !g(a[x]) && (a[x] = []),
                p(a[x], b[x], c)) : b[x] !== w && (a[x] = b[x])
        }
        function q(a, b) {
            return b === w ? y(a) : y(a).filter(b)
        }
        function r(a, c, d, e) {
            return b(c) ? c.call(a, d, e) : c
        }
        function s(a, b, c) {
            null == c ? a.removeAttribute(b) : a.setAttribute(b, c)
        }
        function t(a, b) {
            var c = a.className
              , d = c && c.baseVal !== w;
            return b === w ? d ? c.baseVal : c : void (d ? c.baseVal = b : a.className = b)
        }
        function u(a) {
            var b;
            try {
                return a ? "true" == a || ("false" == a ? !1 : "null" == a ? null : isNaN(b = Number(a)) ? /^[\[\{]/.test(a) ? y.parseJSON(a) : a : b) : a
            } catch (c) {
                return a
            }
        }
        function v(a, b) {
            b(a);
            for (var c in a.childNodes)
                v(a.childNodes[c], b)
        }
        var w, x, y, z, A, B, C = [], D = C.slice, E = C.filter, F = window.document, G = {}, H = {}, I = F.defaultView ? F.defaultView.getComputedStyle : F.documentElement.currentStyle, J = {
            "column-count": 1,
            columns: 1,
            "font-weight": 1,
            "line-height": 1,
            opacity: 1,
            "z-index": 1,
            zoom: 1
        }, K = /^\s*<(\w+|!)[^>]*>/, L = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, M = /^(?:body|html)$/i, N = ["val", "css", "html", "text", "data", "width", "height", "offset"], O = ["after", "prepend", "before", "append"], P = F.createElement("table"), Q = F.createElement("tr"), R = {
            tr: F.createElement("tbody"),
            tbody: P,
            thead: P,
            tfoot: P,
            td: Q,
            th: Q,
            "*": F.createElement("div")
        }, S = /complete|loaded|interactive/, T = /^\.([\w-]+)$/, U = /^#([\w-]*)$/, V = /^[\w-]+$/, W = {}, X = W.toString, Y = {}, Z = F.createElement("div");
        return Y.matches = function(a, b) {
            if (!a || 1 !== a.nodeType)
                return !1;
            var c = a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.matchesSelector;
            if (c)
                return c.call(a, b);
            var d, e = a.parentNode, f = !e;
            return f && (e = Z).appendChild(a),
            d = ~Y.qsa(e, b).indexOf(a),
            f && Z.removeChild(a),
            d
        }
        ,
        A = function(a) {
            return a.replace(/-+(.)?/g, function(a, b) {
                return b ? b.toUpperCase() : ""
            })
        }
        ,
        B = function(a) {
            return E.call(a, function(b, c) {
                return a.indexOf(b) == c
            })
        }
        ,
        Y.fragment = function(a, b, c) {
            a.replace && (a = a.replace(L, "<$1></$2>")),
            b === w && (b = K.test(a) && RegExp.$1),
            b in R || (b = "*");
            var d, e, g = R[b];
            return g.innerHTML = "" + a,
            e = y.each(D.call(g.childNodes), function() {
                g.removeChild(this)
            }),
            f(c) && (d = y(e),
            y.each(c, function(a, b) {
                N.indexOf(a) > -1 ? d[a](b) : d.attr(a, b)
            })),
            e
        }
        ,
        Y.Z = function(a, b) {
            return a = a || [],
            a.__proto__ = y.fn,
            a.selector = b || "",
            a
        }
        ,
        Y.isZ = function(a) {
            return a instanceof Y.Z
        }
        ,
        Y.init = function(a, c) {
            if (a) {
                if (b(a))
                    return y(F).ready(a);
                if (Y.isZ(a))
                    return a;
                var d;
                if (g(a))
                    d = i(a);
                else if (e(a))
                    d = [f(a) ? y.extend({}, a) : a],
                    a = null;
                else if (K.test(a))
                    d = Y.fragment(a.trim(), RegExp.$1, c),
                    a = null;
                else {
                    if (c !== w)
                        return y(c).find(a);
                    d = Y.qsa(F, a)
                }
                return Y.Z(d, a)
            }
            return Y.Z()
        }
        ,
        y = function(a, b) {
            return Y.init(a, b)
        }
        ,
        y._tvp = !0,
        y.extend = function(a) {
            var b, c = D.call(arguments, 1);
            return "boolean" == typeof a && (b = a,
            a = c.shift()),
            c.forEach(function(c) {
                p(a, c, b)
            }),
            a
        }
        ,
        Y.qsa = function(a, b) {
            var c;
            return d(a) && U.test(b) ? (c = a.getElementById(RegExp.$1)) ? [c] : [] : 1 !== a.nodeType && 9 !== a.nodeType ? [] : D.call(T.test(b) ? a.getElementsByClassName(RegExp.$1) : V.test(b) ? a.getElementsByTagName(b) : a.querySelectorAll(b))
        }
        ,
        y.contains = function(a, b) {
            return a !== b && a.contains(b)
        }
        ,
        y.type = a,
        y.isFunction = b,
        y.isWindow = c,
        y.isArray = g,
        y.isPlainObject = f,
        y.isEmptyObject = function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        }
        ,
        y.inArray = function(a, b, c) {
            return C.indexOf.call(b, a, c)
        }
        ,
        y.camelCase = A,
        y.trim = function(a) {
            return a.trim()
        }
        ,
        y.uuid = 0,
        y.support = {},
        y.expr = {},
        y.map = function(a, b) {
            var c, d, e, f = [];
            if (h(a))
                for (d = 0; d < a.length; d++)
                    c = b(a[d], d),
                    null != c && f.push(c);
            else
                for (e in a)
                    c = b(a[e], e),
                    null != c && f.push(c);
            return j(f)
        }
        ,
        y.each = function(a, b) {
            var c, d;
            if (h(a)) {
                for (c = 0; c < a.length; c++)
                    if (b.call(a[c], c, a[c]) === !1)
                        return a
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1)
                        return a;
            return a
        }
        ,
        y.grep = function(a, b) {
            return E.call(a, b)
        }
        ,
        window.JSON && (y.parseJSON = JSON.parse),
        y.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
            W["[object " + b + "]"] = b.toLowerCase()
        }),
        y.fn = {
            forEach: C.forEach,
            reduce: C.reduce,
            push: C.push,
            sort: C.sort,
            indexOf: C.indexOf,
            concat: C.concat,
            map: function(a) {
                return y(y.map(this, function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            slice: function() {
                return y(D.apply(this, arguments))
            },
            ready: function(a) {
                return S.test(F.readyState) ? a(y) : F.addEventListener("DOMContentLoaded", function() {
                    a(y)
                }, !1),
                this
            },
            get: function(a) {
                return a === w ? D.call(this) : this[a >= 0 ? a : a + this.length]
            },
            toArray: function() {
                return this.get()
            },
            size: function() {
                return this.length
            },
            remove: function() {
                return this.each(function() {
                    null != this.parentNode && this.parentNode.removeChild(this)
                })
            },
            each: function(a) {
                return C.every.call(this, function(b, c) {
                    return a.call(b, c, b) !== !1
                }),
                this
            },
            filter: function(a) {
                return b(a) ? this.not(this.not(a)) : y(E.call(this, function(b) {
                    return Y.matches(b, a)
                }))
            },
            add: function(a, b) {
                return y(B(this.concat(y(a, b))))
            },
            is: function(a) {
                return this.length > 0 && Y.matches(this[0], a)
            },
            not: function(a) {
                var c = [];
                if (b(a) && a.call !== w)
                    this.each(function(b) {
                        a.call(this, b) || c.push(this)
                    });
                else {
                    var d = "string" == typeof a ? this.filter(a) : h(a) && b(a.item) ? D.call(a) : y(a);
                    this.forEach(function(a) {
                        d.indexOf(a) < 0 && c.push(a)
                    })
                }
                return y(c)
            },
            has: function(a) {
                return this.filter(function() {
                    return e(a) ? y.contains(this, a) : y(this).find(a).size()
                })
            },
            eq: function(a) {
                return -1 === a ? this.slice(a) : this.slice(a, +a + 1)
            },
            first: function() {
                var a = this[0];
                return a && !e(a) ? a : y(a)
            },
            last: function() {
                var a = this[this.length - 1];
                return a && !e(a) ? a : y(a)
            },
            find: function(a) {
                var b, c = this;
                return b = "object" == typeof a ? y(a).filter(function() {
                    var a = this;
                    return C.some.call(c, function(b) {
                        return y.contains(b, a)
                    })
                }) : 1 == this.length ? y(Y.qsa(this[0], a)) : this.map(function() {
                    return Y.qsa(this, a)
                })
            },
            closest: function(a, b) {
                var c = this[0]
                  , e = !1;
                for ("object" == typeof a && (e = y(a)); c && !(e ? e.indexOf(c) >= 0 : Y.matches(c, a)); )
                    c = c !== b && !d(c) && c.parentNode;
                return y(c)
            },
            parents: function(a) {
                for (var b = [], c = this; c.length > 0; )
                    c = y.map(c, function(a) {
                        return (a = a.parentNode) && !d(a) && b.indexOf(a) < 0 ? (b.push(a),
                        a) : void 0
                    });
                return q(b, a)
            },
            parent: function(a) {
                return q(B(this.pluck("parentNode")), a)
            },
            children: function(a) {
                return q(this.map(function() {
                    return o(this)
                }), a)
            },
            contents: function() {
                return this.map(function() {
                    return D.call(this.childNodes)
                })
            },
            siblings: function(a) {
                return q(this.map(function(a, b) {
                    return E.call(o(b.parentNode), function(a) {
                        return a !== b
                    })
                }), a)
            },
            empty: function() {
                return this.each(function() {
                    this.innerHTML = ""
                })
            },
            pluck: function(a) {
                return y.map(this, function(b) {
                    return b[a]
                })
            },
            show: function() {
                return this.each(function() {
                    "none" == this.style.display && (this.style.display = null),
                    "none" == I(this, "").getPropertyValue("display") && (this.style.display = n(this.nodeName))
                })
            },
            replaceWith: function(a) {
                return this.before(a).remove()
            },
            wrap: function(a) {
                var c = b(a);
                if (this[0] && !c)
                    var d = y(a).get(0)
                      , e = d.parentNode || this.length > 1;
                return this.each(function(b) {
                    y(this).wrapAll(c ? a.call(this, b) : e ? d.cloneNode(!0) : d)
                })
            },
            wrapAll: function(a) {
                if (this[0]) {
                    y(this[0]).before(a = y(a));
                    for (var b; (b = a.children()).length; )
                        a = b.first();
                    y(a).append(this)
                }
                return this
            },
            wrapInner: function(a) {
                var c = b(a);
                return this.each(function(b) {
                    var d = y(this)
                      , e = d.contents()
                      , f = c ? a.call(this, b) : a;
                    e.length ? e.wrapAll(f) : d.append(f)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    y(this).replaceWith(y(this).children())
                }),
                this
            },
            clone: function() {
                return this.map(function() {
                    return this.cloneNode(!0)
                })
            },
            hide: function() {
                return this.css("display", "none")
            },
            toggle: function(a) {
                return this.each(function() {
                    var b = y(this);
                    (a === w ? "none" == b.css("display") : a) ? b.show() : b.hide()
                })
            },
            prev: function(a) {
                return y(this.pluck("previousElementSibling")).filter(a || "*")
            },
            next: function(a) {
                return y(this.pluck("nextElementSibling")).filter(a || "*")
            },
            html: function(a) {
                return a === w ? this.length > 0 ? this[0].innerHTML : null : this.each(function(b) {
                    var c = this.innerHTML;
                    y(this).empty().append(r(this, a, b, c))
                })
            },
            text: function(a) {
                return a === w ? this.length > 0 ? this[0].textContent : null : this.each(function() {
                    this.textContent = a
                })
            },
            attr: function(a, b) {
                var c;
                return "string" == typeof a && b === w ? 0 == this.length || 1 !== this[0].nodeType ? w : "value" == a && "INPUT" == this[0].nodeName ? this.val() : !(c = this[0].getAttribute(a)) && a in this[0] ? this[0][a] : c : this.each(function(c) {
                    if (1 === this.nodeType)
                        if (e(a))
                            for (x in a)
                                s(this, x, a[x]);
                        else
                            s(this, a, r(this, b, c, this.getAttribute(a)))
                })
            },
            removeAttr: function(a) {
                return this.each(function() {
                    1 === this.nodeType && s(this, a)
                })
            },
            prop: function(a, b) {
                return b === w ? this[0] && this[0][a] : this.each(function(c) {
                    this[a] = r(this, b, c, this[a])
                })
            },
            data: function(a, b) {
                var c = this.attr("data-" + k(a), b);
                return null !== c ? u(c) : w
            },
            val: function(a) {
                return a === w ? this[0] && (this[0].multiple ? y(this[0]).find("option").filter(function(a) {
                    return this.selected
                }).pluck("value") : this[0].value) : this.each(function(b) {
                    this.value = r(this, a, b, this.value)
                })
            },
            offset: function(a) {
                if (a)
                    return this.each(function(b) {
                        var c = y(this)
                          , d = r(this, a, b, c.offset())
                          , e = c.offsetParent().offset()
                          , f = {
                            top: d.top - e.top,
                            left: d.left - e.left
                        };
                        "static" == c.css("position") && (f.position = "relative"),
                        c.css(f)
                    });
                if (0 == this.length)
                    return null;
                var b = this[0].getBoundingClientRect();
                return {
                    left: b.left + window.pageXOffset,
                    top: b.top + window.pageYOffset,
                    width: Math.round(b.width),
                    height: Math.round(b.height)
                }
            },
            css: function(b, c) {
                if (arguments.length < 2 && "string" == typeof b)
                    return this[0] && (this[0].style[A(b)] || I(this[0], "").getPropertyValue(b));
                var d = "";
                if ("string" == a(b))
                    c || 0 === c ? d = k(b) + ":" + m(b, c) : this.each(function() {
                        this.style.removeProperty(k(b))
                    });
                else
                    for (x in b)
                        b[x] || 0 === b[x] ? d += k(x) + ":" + m(x, b[x]) + ";" : this.each(function() {
                            this.style.removeProperty(k(x))
                        });
                return this.each(function() {
                    this.style.cssText += ";" + d
                })
            },
            index: function(a) {
                return a ? this.indexOf(y(a)[0]) : this.parent().children().indexOf(this[0])
            },
            hasClass: function(a) {
                return C.some.call(this, function(a) {
                    return this.test(t(a))
                }, l(a))
            },
            addClass: function(a) {
                return this.each(function(b) {
                    z = [];
                    var c = t(this)
                      , d = r(this, a, b, c);
                    d.split(/\s+/g).forEach(function(a) {
                        y(this).hasClass(a) || z.push(a)
                    }, this),
                    z.length && t(this, c + (c ? " " : "") + z.join(" "))
                })
            },
            removeClass: function(a) {
                return this.each(function(b) {
                    return a === w ? t(this, "") : (z = t(this),
                    r(this, a, b, z).split(/\s+/g).forEach(function(a) {
                        z = z.replace(l(a), " ")
                    }),
                    void t(this, z.trim()))
                })
            },
            toggleClass: function(a, b) {
                return this.each(function(c) {
                    var d = y(this)
                      , e = r(this, a, c, t(this));
                    e.split(/\s+/g).forEach(function(a) {
                        (b === w ? !d.hasClass(a) : b) ? d.addClass(a) : d.removeClass(a)
                    })
                })
            },
            scrollTop: function() {
                return this.length ? "scrollTop"in this[0] ? this[0].scrollTop : this[0].scrollY : void 0
            },
            position: function() {
                if (this.length) {
                    var a = this[0]
                      , b = this.offsetParent()
                      , c = this.offset()
                      , d = M.test(b[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : b.offset();
                    return c.top -= parseFloat(y(a).css("margin-top")) || 0,
                    c.left -= parseFloat(y(a).css("margin-left")) || 0,
                    d.top += parseFloat(y(b[0]).css("border-top-width")) || 0,
                    d.left += parseFloat(y(b[0]).css("border-left-width")) || 0,
                    {
                        top: c.top - d.top,
                        left: c.left - d.left
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var a = this.offsetParent || F.body; a && !M.test(a.nodeName) && "static" == y(a).css("position"); )
                        a = a.offsetParent;
                    return a
                })
            }
        },
        y.fn.detach = y.fn.remove,
        ["width", "height"].forEach(function(a) {
            y.fn[a] = function(b) {
                var e, f = this[0], g = a.replace(/./, function(a) {
                    return a[0].toUpperCase()
                });
                return b === w ? c(f) ? f["inner" + g] : d(f) ? f.documentElement["offset" + g] : (e = this.offset()) && e[a] : this.each(function(c) {
                    f = y(this),
                    f.css(a, r(this, b, c, f[a]()))
                })
            }
        }),
        O.forEach(function(b, c) {
            var d = c % 2;
            y.fn[b] = function() {
                var b, e, f = y.map(arguments, function(c) {
                    return b = a(c),
                    "object" == b || "array" == b || null == c ? c : Y.fragment(c)
                }), g = this.length > 1;
                return f.length < 1 ? this : this.each(function(a, b) {
                    e = d ? b : b.parentNode,
                    b = 0 == c ? b.nextSibling : 1 == c ? b.firstChild : 2 == c ? b : null,
                    f.forEach(function(a) {
                        if (g)
                            a = a.cloneNode(!0);
                        else if (!e)
                            return y(a).remove();
                        v(e.insertBefore(a, b), function(a) {
                            null == a.nodeName || "SCRIPT" !== a.nodeName.toUpperCase() || a.type && "text/javascript" !== a.type || a.src || window.eval.call(window, a.innerHTML)
                        })
                    })
                })
            }
            ,
            y.fn[d ? b + "To" : "insert" + (c ? "Before" : "After")] = function(a) {
                return y(a)[b](this),
                this
            }
        }),
        Y.Z.prototype = y.fn,
        Y.uniq = B,
        Y.deserializeValue = u,
        y.zepto = Y,
        y
    }();
    if ("undefined" == typeof a && (window.Zepto = b),
    function(a) {
        function b(a) {
            var b = this.os = {}
              , c = this.browser = {}
              , d = a.match(/WebKit\/([\d.]+)/)
              , e = a.match(/(Android)(\s+|\/)([\d.]+)/)
              , f = a.match(/(iPad).*OS\s([\d_]+)/)
              , g = !f && a.match(/(iPhone\sOS)\s([\d_]+)/)
              , h = a.match(/(webOS|hpwOS)[\s\/]([\d.]+)/)
              , i = h && a.match(/TouchPad/)
              , j = a.match(/Kindle\/([\d.]+)/)
              , k = a.match(/Silk\/([\d._]+)/)
              , l = a.match(/(BlackBerry).*Version\/([\d.]+)/)
              , m = a.match(/(BB10).*Version\/([\d.]+)/)
              , n = a.match(/(RIM\sTablet\sOS)\s([\d.]+)/)
              , o = a.match(/PlayBook/)
              , p = a.match(/Chrome\/([\d.]+)/) || a.match(/CriOS\/([\d.]+)/)
              , q = a.match(/Firefox\/([\d.]+)/);
            (c.webkit = !!d) && (c.version = d[1]),
            e && (b.android = !0,
            b.version = e[3]),
            g && (b.ios = b.iphone = !0,
            b.version = g[2].replace(/_/g, ".")),
            f && (b.ios = b.ipad = !0,
            b.version = f[2].replace(/_/g, ".")),
            h && (b.webos = !0,
            b.version = h[2]),
            i && (b.touchpad = !0),
            l && (b.blackberry = !0,
            b.version = l[2]),
            m && (b.bb10 = !0,
            b.version = m[2]),
            n && (b.rimtabletos = !0,
            b.version = n[2]),
            o && (c.playbook = !0),
            j && (b.kindle = !0,
            b.version = j[1]),
            k && (c.silk = !0,
            c.version = k[1]),
            !k && b.android && a.match(/Kindle Fire/) && (c.silk = !0),
            p && (c.chrome = !0,
            c.version = p[1]),
            q && (c.firefox = !0,
            c.version = q[1]),
            b.tablet = !!(f || o || e && !a.match(/Mobile/) || q && a.match(/Tablet/)),
            b.phone = !(b.tablet || !(e || g || h || l || m || p && a.match(/Android/) || p && a.match(/CriOS\/([\d.]+)/) || q && a.match(/Mobile/)))
        }
        b.call(a, navigator.userAgent),
        a.__detect = b
    }(b),
    function(a) {
        function b(a) {
            return a._zid || (a._zid = n++)
        }
        function c(a, c, f, g) {
            if (c = d(c),
            c.ns)
                var h = e(c.ns);
            return (m[b(a)] || []).filter(function(a) {
                return a && (!c.e || a.e == c.e) && (!c.ns || h.test(a.ns)) && (!f || b(a.fn) === b(f)) && (!g || a.sel == g)
            })
        }
        function d(a) {
            var b = ("" + a).split(".");
            return {
                e: b[0],
                ns: b.slice(1).sort().join(" ")
            }
        }
        function e(a) {
            return new RegExp("(?:^| )" + a.replace(" ", " .* ?") + "(?: |$)")
        }
        function f(b, c, d) {
            "string" != a.type(b) ? a.each(b, d) : b.split(/\s/).forEach(function(a) {
                d(a, c)
            })
        }
        function g(a, b) {
            return a.del && ("focus" == a.e || "blur" == a.e) || !!b
        }
        function h(a) {
            return p[a] || a
        }
        function i(c, e, i, j, k, l) {
            var n = b(c)
              , o = m[n] || (m[n] = []);
            f(e, i, function(b, e) {
                var f = d(b);
                f.fn = e,
                f.sel = j,
                f.e in p && (e = function(b) {
                    var c = b.relatedTarget;
                    return !c || c !== this && !a.contains(this, c) ? f.fn.apply(this, arguments) : void 0
                }
                ),
                f.del = k && k(e, b);
                var i = f.del || e;
                f.proxy = function(a) {
                    var b = i.apply(c, [a].concat(a.data));
                    return b === !1 && (a.preventDefault(),
                    a.stopPropagation()),
                    b
                }
                ,
                f.i = o.length,
                o.push(f),
                c.addEventListener ? c.addEventListener(h(f.e), f.proxy, g(f, l)) : c.attachEvent("on" + h(f.e), f.proxy, g(f, l))
            })
        }
        function j(a, d, e, i, j) {
            var k = b(a);
            f(d || "", e, function(b, d) {
                c(a, b, d, i).forEach(function(b) {
                    delete m[k][b.i],
                    a.removeEventListener ? a.removeEventListener(h(b.e), b.proxy, g(b, j)) : a.detachEvent("on" + h(b.e), b.proxy, g(b, j))
                })
            })
        }
        function k(b) {
            var c, d = {
                originalEvent: b
            };
            for (c in b)
                s.test(c) || void 0 === b[c] || (d[c] = b[c]);
            return a.each(t, function(a, c) {
                d[a] = function() {
                    return this[c] = q,
                    b[a].apply(b, arguments)
                }
                ,
                d[c] = r
            }),
            d
        }
        function l(a) {
            if (!("defaultPrevented"in a)) {
                a.defaultPrevented = !1;
                var b = a.preventDefault;
                a.preventDefault = function() {
                    this.defaultPrevented = !0,
                    b.call(this)
                }
            }
        }
        var m = (a.zepto.qsa,
        {})
          , n = 1
          , o = {}
          , p = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        };
        o.click = o.mousedown = o.mouseup = o.mousemove = "MouseEvents",
        a.event = {
            add: i,
            remove: j
        },
        a.proxy = function(c, d) {
            if (a.isFunction(c)) {
                var e = function() {
                    return c.apply(d, arguments)
                };
                return e._zid = b(c),
                e
            }
            if ("string" == typeof d)
                return a.proxy(c[d], c);
            throw new TypeError("expected function")
        }
        ,
        a.fn.bind = function(a, b) {
            return this.each(function() {
                i(this, a, b)
            })
        }
        ,
        a.fn.unbind = function(a, b) {
            return this.each(function() {
                j(this, a, b)
            })
        }
        ,
        a.fn.one = function(a, b) {
            return this.each(function(c, d) {
                i(this, a, b, null, function(a, b) {
                    return function() {
                        var c = a.apply(d, arguments);
                        return j(d, b, a),
                        c
                    }
                })
            })
        }
        ;
        var q = function() {
            return !0
        }
          , r = function() {
            return !1
        }
          , s = /^([A-Z]|layer[XY]$)/
          , t = {
            preventDefault: "isDefaultPrevented",
            stopImmediatePropagation: "isImmediatePropagationStopped",
            stopPropagation: "isPropagationStopped"
        };
        a.fn.delegate = function(b, c, d) {
            return this.each(function(e, f) {
                i(f, c, d, b, function(c) {
                    return function(d) {
                        var e, g = a(d.target).closest(b, f).get(0);
                        return g ? (e = a.extend(k(d), {
                            currentTarget: g,
                            liveFired: f
                        }),
                        c.apply(g, [e].concat([].slice.call(arguments, 1)))) : void 0
                    }
                })
            })
        }
        ,
        a.fn.undelegate = function(a, b, c) {
            return this.each(function() {
                j(this, b, c, a)
            })
        }
        ,
        a.fn.live = function(b, c) {
            return a(document.body).delegate(this.selector, b, c),
            this
        }
        ,
        a.fn.die = function(b, c) {
            return a(document.body).undelegate(this.selector, b, c),
            this
        }
        ,
        a.fn.on = function(b, c, d) {
            return !c || a.isFunction(c) ? this.bind(b, c || d) : this.delegate(c, b, d)
        }
        ,
        a.fn.off = function(b, c, d) {
            return !c || a.isFunction(c) ? this.unbind(b, c || d) : this.undelegate(c, b, d)
        }
        ,
        a.fn.trigger = function(b, c) {
            return ("string" == typeof b || a.isPlainObject(b)) && (b = a.Event(b)),
            l(b),
            b.data = c,
            this.each(function() {
                "dispatchEvent"in this && this.dispatchEvent(b)
            })
        }
        ,
        a.fn.triggerHandler = function(b, d) {
            var e, f;
            return this.each(function(g, h) {
                e = k("string" == typeof b ? a.Event(b) : b),
                e.data = d,
                e.target = h,
                a.each(c(h, b.type || b), function(a, b) {
                    return f = b.proxy(e),
                    e.isImmediatePropagationStopped() ? !1 : void 0
                })
            }),
            f
        }
        ,
        "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(b) {
            a.fn[b] = function(a) {
                return a ? this.bind(b, a) : this.trigger(b)
            }
        }),
        ["focus", "blur"].forEach(function(b) {
            a.fn[b] = function(a) {
                return a ? this.bind(b, a) : this.each(function() {
                    try {
                        this[b]()
                    } catch (a) {}
                }),
                this
            }
        }),
        a.Event = function(a, b) {
            "string" != typeof a && (b = a,
            a = b.type);
            var c = document.createEvent(o[a] || "Events")
              , d = !0;
            if (b)
                for (var e in b)
                    "bubbles" == e ? d = !!b[e] : c[e] = b[e];
            return c.initEvent(a, d, !0, null, null, null, null, null, null, null, null, null, null, null, null),
            c.isDefaultPrevented = function() {
                return this.defaultPrevented
            }
            ,
            c
        }
    }(b),
    function(a) {
        var b, c, d, e, f, g, h;
        c = function(a, b) {
            b.parentNode.removeChild(b),
            window[a] = void 0;
            try {
                delete window[a]
            } catch (c) {}
        }
        ,
        d = function(a, b) {
            var c, d, e = "";
            for (c in a)
                a.hasOwnProperty(c) && (c = b ? encodeURIComponent(c) : c,
                d = b ? encodeURIComponent(a[c]) : a[c],
                e += c + "=" + d + "&");
            return e.replace(/&$/, "")
        }
        ,
        e = function() {
            return "cb_" + tvp.$.createGUID(16)
        }
        ,
        f = function(a, b) {
            "undefined" != typeof a && a(b)
        }
        ,
        g = function(a, b) {
            "undefined" != typeof a && a(b)
        }
        ,
        h = function(a) {
            "undefined" != typeof a && a()
        }
        ,
        b = {},
        b.init = function(a) {
            var c;
            for (c in a)
                a.hasOwnProperty(c) && (b.options[c] = a[c]);
            return !0
        }
        ,
        b.get = function(a) {
            a = a || {};
            var b = a.url
              , i = a.callbackParameter || "callback"
              , j = a.data || {}
              , k = document.createElement("script")
              , l = a.jsonpCallback || e()
              , m = "?";
            b && (j[i] = l,
            b.indexOf("?") >= 0 && (m = "&"),
            b += m + d(j, !0),
            b = b.replace(/=\?/, "=" + l),
            window[l] = function(b) {
                "undefined" == typeof b ? f(a.error, "Invalid JSON data returned") : g(a.success, b),
                c(l, k),
                h(a.complete)
            }
            ,
            k.setAttribute("src", b),
            document.getElementsByTagName("head")[0].appendChild(k),
            k.onerror = function() {
                c(l, k),
                h(a.complete),
                f(a.error, "Error while trying to access the URL")
            }
            )
        }
        ,
        a.ajax = b.get
    }(b),
    function(a) {
        if ("__proto__"in {} || a.extend(a.zepto, {
            Z: function(b, c) {
                return b = b || [],
                a.extend(b, a.fn),
                b.selector = c || "",
                b.__Z = !0,
                b
            },
            isZ: function(b) {
                return "array" === a.type(b) && "__Z"in b
            }
        }),
        "function" == typeof window.getComputedStyle)
            try {
                getComputedStyle(void 0)
            } catch (b) {
                var c = window.getComputedStyle;
                window.getComputedStyle = function(a) {
                    try {
                        return c.apply(window, arguments)
                    } catch (b) {
                        return null
                    }
                }
            }
    }(b),
    function(a) {
        function b(b, c, d) {
            var e = a.Event(c);
            return a(b).trigger(e, d),
            !e.isDefaultPrevented()
        }
        function c(a, c, d, e) {
            return a.global ? b(c || s, d, e) : void 0
        }
        function d(b) {
            b.global && 0 === a.active++ && c(b, null, "ajaxStart")
        }
        function e(b) {
            b.global && !--a.active && c(b, null, "ajaxStop")
        }
        function f(a, b) {
            var d = b.context;
            return b.beforeSend.call(d, a, b) === !1 || c(b, d, "ajaxBeforeSend", a, b) === !1 ? !1 : void c(b, d, "ajaxSend", a, b)
        }
        function g(a, b, d, e) {
            var f = d.context
              , g = "success";
            d.success.call(f, a, g, b),
            e && e.resolveWith(f, a, g, b),
            c(d, f, "ajaxSuccess", b, d, a),
            i(g, b, d)
        }
        function h(a, b, d, e, f) {
            var g = e.context;
            e.error.call(g, d, b, a),
            f && f.rejectWith(g, d, b, a),
            c(e, g, "ajaxError", d, e, a || b),
            i(b, d, e)
        }
        function i(a, b, d) {
            var f = d.context;
            d.complete.call(f, b, a),
            c(d, f, "ajaxComplete", b, d),
            e(d)
        }
        function j() {}
        function k(a) {
            return a && (a = a.split(";", 2)[0]),
            a && (a == x ? "html" : a == w ? "json" : u.test(a) ? "script" : v.test(a) && "xml") || "text"
        }
        function l(a, b) {
            return "" == b ? a : (a + "&" + b).replace(/[&?]{1,2}/, "?")
        }
        function m(b) {
            b.processData && b.data && "string" != a.type(b.data) && (b.data = a.param(b.data, b.traditional)),
            !b.data || b.type && "GET" != b.type.toUpperCase() || (b.url = l(b.url, b.data),
            b.data = void 0)
        }
        function n(b, c, d, e) {
            return a.isFunction(c) && (e = d,
            d = c,
            c = void 0),
            a.isFunction(d) || (e = d,
            d = void 0),
            {
                url: b,
                data: c,
                success: d,
                dataType: e
            }
        }
        function o(b, c, d, e) {
            var f, g = a.isArray(c), h = a.isPlainObject(c);
            a.each(c, function(c, i) {
                f = a.type(i),
                e && (c = d ? e : e + "[" + (h || "object" == f || "array" == f ? c : "") + "]"),
                !e && g ? b.add(i.name, i.value) : "array" == f || !d && "object" == f ? o(b, i, d, c) : b.add(c, i)
            })
        }
        if (!(a.ajaxJSONP && a.getJSON && a.get && a.post)) {
            var p, q, r = 0, s = window.document, t = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, u = /^(?:text|application)\/javascript/i, v = /^(?:text|application)\/xml/i, w = "application/json", x = "text/html", y = /^\s*$/, z = s.createElement("a");
            z.href = window.location.href,
            a.active = 0,
            a.ajaxJSONP = function(b, c) {
                if (!("type"in b))
                    return a.Ajax(b);
                var d, e, i = b.jsonpCallback, j = (a.isFunction(i) ? i() : i) || "jsonp" + ++r, k = s.createElement("script"), l = window[j], m = function(b) {
                    a(k).triggerHandler("error", b || "abort")
                }, n = {
                    abort: m
                };
                return c && c.promise(n),
                a(k).on("load error", function(f, i) {
                    clearTimeout(e),
                    a(k).off().remove(),
                    "error" != f.type && d ? g(d[0], n, b, c) : h(null, i || "error", n, b, c),
                    window[j] = l,
                    d && a.isFunction(l) && l(d[0]),
                    l = d = void 0
                }),
                f(n, b) === !1 ? (m("abort"),
                n) : (window[j] = function() {
                    d = arguments
                }
                ,
                k.src = b.url.replace(/\?(.+)=\?/, "?$1=" + j),
                b.scriptCharset && (k.charset = b.scriptCharset),
                s.head.appendChild(k),
                b.timeout > 0 && (e = setTimeout(function() {
                    m("timeout")
                }, b.timeout)),
                n)
            }
            ,
            a.ajaxSettings = {
                type: "GET",
                beforeSend: j,
                success: j,
                error: j,
                complete: j,
                context: null,
                global: !0,
                xhr: function() {
                    return new window.XMLHttpRequest
                },
                accepts: {
                    script: "text/javascript, application/javascript, application/x-javascript",
                    json: w,
                    xml: "application/xml, text/xml",
                    html: x,
                    text: "text/plain"
                },
                crossDomain: !1,
                timeout: 0,
                processData: !0,
                cache: !0
            },
            a.Ajax = function(b) {
                var c, e, i = a.extend({}, b || {}), n = a.Deferred && a.Deferred();
                for (p in a.ajaxSettings)
                    void 0 === i[p] && (i[p] = a.ajaxSettings[p]);
                d(i),
                i.crossDomain || (c = s.createElement("a"),
                c.href = i.url,
                c.href = c.href,
                i.crossDomain = z.protocol + "//" + z.host != c.protocol + "//" + c.host),
                i.url || (i.url = window.location.toString()),
                (e = i.url.indexOf("#")) > -1 && (i.url = i.url.slice(0, e)),
                m(i);
                var o = i.dataType
                  , r = /\?.+=\?/.test(i.url);
                if (r && (o = "jsonp"),
                i.cache !== !1 && (b && b.cache === !0 || "script" != o && "jsonp" != o) || (i.url = l(i.url, "_=" + Date.now())),
                "jsonp" == o)
                    return r || (i.url = l(i.url, i.jsonp ? i.jsonp + "=?" : i.jsonp === !1 ? "" : "callback=?")),
                    a.ajaxJSONP(i, n);
                var t, u = i.accepts[o], v = {}, w = function(a, b) {
                    v[a.toLowerCase()] = [a, b]
                }, x = /^([\w-]+:)\/\//.test(i.url) ? RegExp.$1 : window.location.protocol, A = i.xhr(), B = A.setRequestHeader;
                if (n && n.promise(A),
                i.crossDomain || w("X-Requested-With", "XMLHttpRequest"),
                w("Accept", u || "*/*"),
                (u = i.mimeType || u) && (u.indexOf(",") > -1 && (u = u.split(",", 2)[0]),
                A.overrideMimeType && A.overrideMimeType(u)),
                (i.contentType || i.contentType !== !1 && i.data && "GET" != i.type.toUpperCase()) && w("Content-Type", i.contentType || "application/x-www-form-urlencoded"),
                i.headers)
                    for (q in i.headers)
                        w(q, i.headers[q]);
                if (A.setRequestHeader = w,
                A.onreadystatechange = function() {
                    if (4 == A.readyState) {
                        A.onreadystatechange = j,
                        clearTimeout(t);
                        var b, c = !1;
                        if (A.status >= 200 && A.status < 300 || 304 == A.status || 0 == A.status && "file:" == x) {
                            o = o || k(i.mimeType || A.getResponseHeader("content-type")),
                            b = A.responseText;
                            try {
                                "script" == o ? (1,
                                eval)(b) : "xml" == o ? b = A.responseXML : "json" == o && (b = y.test(b) ? null : a.parseJSON(b))
                            } catch (d) {
                                c = d
                            }
                            c ? h(c, "parsererror", A, i, n) : g(b, A, i, n)
                        } else
                            h(A.statusText || null, A.status ? "error" : "abort", A, i, n)
                    }
                }
                ,
                f(A, i) === !1)
                    return A.abort(),
                    h(null, "abort", A, i, n),
                    A;
                if (i.xhrFields)
                    for (q in i.xhrFields)
                        A[q] = i.xhrFields[q];
                var C = "async"in i ? i.async : !0;
                A.open(i.type, i.url, C, i.username, i.password);
                for (q in v)
                    B.apply(A, v[q]);
                return i.timeout > 0 && (t = setTimeout(function() {
                    A.onreadystatechange = j,
                    A.abort(),
                    h(null, "timeout", A, i, n)
                }, i.timeout)),
                A.send(i.data ? i.data : null),
                A
            }
            ,
            a.get = function() {
                return a.Ajax(n.apply(null, arguments))
            }
            ,
            a.post = function() {
                var b = n.apply(null, arguments);
                return b.type = "POST",
                a.Ajax(b)
            }
            ,
            a.getJSON = function() {
                var b = n.apply(null, arguments);
                return b.dataType = "json",
                a.Ajax(b)
            }
            ,
            a.fn.load = function(b, c, d) {
                if (!this.length)
                    return this;
                var e, f = this, g = b.split(/\s/), h = n(b, c, d), i = h.success;
                return g.length > 1 && (h.url = g[0],
                e = g[1]),
                h.success = function(b) {
                    f.html(e ? a("<div>").html(b.replace(t, "")).find(e) : b),
                    i && i.apply(f, arguments)
                }
                ,
                a.Ajax(h),
                this
            }
            ;
            var A = encodeURIComponent;
            a.param = function(b, c) {
                var d = [];
                return d.add = function(b, c) {
                    a.isFunction(c) && (c = c()),
                    null == c && (c = ""),
                    this.push(A(b) + "=" + A(c))
                }
                ,
                o(d, b, c),
                d.join("&").replace(/%20/g, "+")
            }
        }
    }(b),
    tvp = {},
    tvp.lastModify = "2018-10-23 11:05:05",
    tvp.ts = tvp.lastModify.replace(/\D/g, ""),
    tvp.ver = "$V2.0Build9502$",
    tvp.dataset = {
        openLazy: !0
    },
    tvp.name = "\u817e\u8baf\u89c6\u9891\u7edf\u4e00\u64ad\u653e\u5668",
    "undefined" == typeof window.DEBUG && (window.DEBUG = 1),
    window.FILEPATH = "//imgcache.qq.com/tencentvideo_v1/tvp/js/",
    "http:" === location.protocol ? window.FILEPATH = "http:" + window.FILEPATH : window.FILEPATH = "https:" + window.FILEPATH,
    top != window)
        try {
            tvp.topurl = top.location.href
        } catch (c) {}
    tvp.log = function(a) {
        if (window.DEBUG && null != document.getElementById("tvp_debug_console")) {
            var b = document.getElementById("tvp_debug_console");
            b.innerHTML += a + " | "
        } else
            window.console && window.console.log("[" + tvp.log.debugid++ + "] " + a)
    }
    ,
    tvp.debug = function(a) {
        window.DEBUG || -1 !== tvp.log.isDebug || (tvp.log.isDebug = "true" == tvp.$.getUrlParam("debug") ? 1 : 0),
        (window.DEBUG || tvp.log.isDebug) && tvp.log(a)
    }
    ,
    tvp.log.isDebug = -1,
    tvp.log.debugid = 1,
    tvp.DEVICE = {
        aphone: 1,
        iphone: 2,
        ipad: 3,
        other: 0
    },
    tvp.PLATFORM = {
        wechat: 1,
        mqq: 2,
        qqbrowser: 3,
        other: 0
    },
    tvp.APPID = {
        wechatPublic: 1e4,
        news: 10001,
        qqmusic: 10007
    },
    tvp.ACTION = {
        onVodH5Init: "tvp:vodhtml5:beforeInit",
        onFlashPlayerInited: "tvp:flash:inited"
    },
    function() {
        function a(a) {
            return a instanceof Array
        }
        if ("object" != typeof tvp || !tvp.$ || !tvp.$.Deferred) {
            var c, d, e, f, g, h, i, j, k, l, m, n, o, p = [].slice;
            g = "1.3.2",
            d = "pending",
            f = "resolved",
            e = "rejected",
            k = function(a, b) {
                return null != a ? a.hasOwnProperty(b) : void 0
            }
            ,
            m = function(a) {
                return k(a, "length") && k(a, "callee")
            }
            ,
            j = function(b) {
                return m(b) ? j(Array.prototype.slice.call(b)) : a(b) ? b.reduce(function(b, c) {
                    return a(c) ? b.concat(j(c)) : (b.push(c),
                    b)
                }, []) : [b]
            }
            ,
            h = function(a, b) {
                return 0 >= a ? b() : function() {
                    return --a < 1 ? b.apply(this, arguments) : void 0
                }
            }
            ,
            n = function(a, b) {
                return function() {
                    var c;
                    return c = [a].concat(Array.prototype.slice.call(arguments, 0)),
                    b.apply(this, c)
                }
            }
            ,
            i = function(a, b, c) {
                var d, e, f, g, h;
                for (g = j(a),
                h = [],
                e = 0,
                f = g.length; f > e; e++)
                    d = g[e],
                    h.push(d.call.apply(d, [c].concat(p.call(b))));
                return h
            }
            ,
            c = function() {
                var a, b, g, h, k, l;
                return l = d,
                h = [],
                k = [],
                a = [],
                g = {},
                this.promise = function(b) {
                    var m, n;
                    return b = b || {},
                    b.state = function() {
                        return l
                    }
                    ,
                    n = function(a, c) {
                        return function() {
                            return l === d && c.push.apply(c, j(arguments)),
                            a() && i(arguments, g),
                            b
                        }
                    }
                    ,
                    b.done = n(function() {
                        return l === f
                    }, h),
                    b.fail = n(function() {
                        return l === e
                    }, k),
                    b.always = n(function() {
                        return l !== d
                    }, a),
                    m = function(a, d) {
                        var e, f;
                        return e = new c,
                        f = function(a, b, c) {
                            return a(c ? function() {
                                return b(c.apply(null, j(arguments)))
                            }
                            : function() {
                                return b.apply(null, j(arguments))
                            }
                            )
                        }
                        ,
                        f(b.done, e.resolve, a),
                        f(b.fail, e.reject, d),
                        e
                    }
                    ,
                    b.pipe = m,
                    b.then = m,
                    b
                }
                ,
                this.promise(this),
                b = function(b, c, e) {
                    return function() {
                        return l === d && (l = b,
                        g = arguments,
                        i([c, a], g, e)),
                        this
                    }
                }
                ,
                this.resolve = b(f, h),
                this.reject = b(e, k),
                this.resolveWith = function() {
                    var a, c;
                    return c = arguments[0],
                    a = 2 <= arguments.length ? p.call(arguments, 1) : [],
                    b(f, h, c).apply(null, a)
                }
                ,
                this.rejectWith = function() {
                    var a, c;
                    return c = arguments[0],
                    a = 2 <= arguments.length ? p.call(arguments, 1) : [],
                    b(e, k, c).apply(null, a)
                }
                ,
                this
            }
            ,
            o = function() {
                var a, b, d, e, f, g, i, k;
                for (e = new c,
                b = j(arguments),
                d = h(b.length, e.resolve),
                f = 0,
                i = b.length; i > f; f++)
                    a = b[f],
                    a.done(d);
                for (g = 0,
                k = b.length; k > g; g++)
                    a = b[g],
                    a.fail(function(a, b) {
                        return e.reject(a, b)
                    });
                return e.promise()
            }
            ,
            l = function(a) {
                return a.Deferred = function() {
                    return new c
                }
                ,
                a.ajax = n(a.ajax, function(a, b) {
                    var d, e;
                    return null == b && (b = {}),
                    e = new c,
                    d = function(a, b) {
                        return n(a, function() {
                            var a, c;
                            return c = arguments[0],
                            a = 2 <= arguments.length ? p.call(arguments, 1) : [],
                            c && c.apply(null, a),
                            b.apply(null, a)
                        })
                    }
                    ,
                    b.success = d(b.success, e.resolve),
                    b.error = d(b.error, e.reject),
                    a(b),
                    e.promise()
                }),
                a.when = o
            }
            ,
            "undefined" != typeof exports ? (exports.Deferred = function() {
                return new c
            }
            ,
            exports.when = o,
            exports.installInto = l) : (this.Deferred = function() {
                return new c
            }
            ,
            this.Deferred.when = o,
            this.Deferred.installInto = l,
            this.DeferedClass = c),
            tvp.Deferred.installInto("undefined" != typeof b ? b : jq)
        }
    }
    .call(tvp),
    function(a) {
        a.param = function(b, c) {
            var d = [];
            for (var e in b)
                if (!a.isFunction(b[e])) {
                    var f = c ? c + "[" + e + "]" : e
                      , g = b[e];
                    d.push(a.isPlainObject(g) ? a.param(g, f) : f + "=" + encodeURIComponent(g))
                }
            return d.join("&")
        }
    }(b);
    var d = !1;
    "undefined" != typeof b && b._tvp ? (tvp.$ = b,
    d = !0) : (tvp.$ = {},
    d = !1),
    function() {
        return d ? void 0 : "function" == typeof window.Zepto ? void (tvp.$ = window.Zepto) : "function" == typeof window.jQuery && "function" == typeof window.jQuery.Deferred ? (tvp.$ = window.jQuery,
        void (!tvp.$.os && "undefined" != typeof b && b.__detect && b.__detect.call(tvp.$, navigator.userAgent))) : void ("function" == typeof window.jq && (tvp.$ = window.jq,
        !tvp.$.os && "undefined" != typeof b && b.__detect && b.__detect.call(tvp.$, navigator.userAgent)))
    }(),
    function() {
        "undefined" == typeof document.DOCUMENT_NODE && (document.DOCUMENT_NODE = 9)
    }(),
    function(a) {
        function b(a) {
            var b = this.os = {}
              , c = this.browser = {}
              , d = a.match(/WebKit\/([\d.]+)/)
              , e = a.match(/(Android)(\s+|\/)([\d.]+)/)
              , f = a.match(/(Android)(\s+)N/)
              , g = a.match(/(iPad).*OS\s([\d_]+)/)
              , h = !g && a.match(/(iPhone\sOS)\s([\d_]+)/)
              , i = a.match(/(webOS|hpwOS)[\s\/]([\d.]+)/)
              , j = i && a.match(/TouchPad/)
              , k = a.match(/Kindle\/([\d.]+)/)
              , l = a.match(/Silk\/([\d._]+)/)
              , m = a.match(/(BlackBerry).*Version\/([\d.]+)/)
              , n = a.match(/(BB10).*Version\/([\d.]+)/)
              , o = a.match(/(RIM\sTablet\sOS)\s([\d.]+)/)
              , p = a.match(/PlayBook/)
              , q = a.match(/Chrome\/([\d.]+)/) || a.match(/CriOS\/([\d.]+)/)
              , r = a.match(/Firefox\/([\d.]+)/);
            (c.webkit = !!d) && (c.version = d[1]),
            e && (b.android = !0,
            b.version = e[3]),
            f && (b.android = !0,
            b.version = "N"),
            h && (b.ios = b.iphone = !0,
            b.version = h[2].replace(/_/g, ".")),
            g && (b.ios = b.ipad = !0,
            b.version = g[2].replace(/_/g, ".")),
            i && (b.webos = !0,
            b.version = i[2]),
            j && (b.touchpad = !0),
            m && (b.blackberry = !0,
            b.version = m[2]),
            n && (b.bb10 = !0,
            b.version = n[2]),
            o && (b.rimtabletos = !0,
            b.version = o[2]),
            p && (c.playbook = !0),
            k && (b.kindle = !0,
            b.version = k[1]),
            l && (c.silk = !0,
            c.version = l[1]),
            !l && b.android && a.match(/Kindle Fire/) && (c.silk = !0),
            q && (c.chrome = !0,
            c.version = q[1]),
            r && (c.firefox = !0,
            c.version = r[1]),
            b.tablet = !!(g || p || e && !a.match(/Mobile/) || r && a.match(/Tablet/)),
            b.phone = !(b.tablet || !(e || h || i || m || n || q && a.match(/Android/) || q && a.match(/CriOS\/([\d.]+)/) || r && a.match(/Mobile/)))
        }
        b.call(a, navigator.userAgent)
    }(tvp.$),
    function(a) {
        function b(b) {
            var c = b.match(/MQQBrowser\/(\d+\.\d+)/i)
              , d = b.match(/QQ\/(\d+\.(\d+)\.(\d+)\.(\d+))/i) || b.match(/V1_AND_SQ_([\d\.]+)/)
              , e = b.match(/MicroMessenger\/((\d+)\.(\d+))\.(\d+)/) || b.match(/MicroMessenger\/((\d+)\.(\d+))/)
              , f = b.match(/Mac\sOS\sX\s(\d+\_\d+)/)
              , g = b.match(/Windows(\s+\w+)?\s+?(\d+\.\d+)/)
              , h = b.match(/MiuiBrowser\/(\d+\.\d+)/i)
              , i = b.match(/MI-ONE/)
              , j = b.match(/MI PAD/)
              , k = b.match(/UCBrowser\/(\d+\.\d+(\.\d+\.\d+)?)/) || b.match(/\sUC\s/)
              , l = b.match(/IEMobile(\/|\s+)(\d+\.\d+)/) || b.match(/WPDesktop/)
              , m = b.match(/(ipod).*\s([\d_]+)/i)
              , n = b.match(/(ipad).*\s([\d_]+)/i)
              , o = b.match(/(iphone)\sos\s([\d_]+)/i)
              , p = b.match(/Chrome\/(\d+\.\d+)/)
              , q = b.match(/qqnews\/(\d+\.\d+\.\d+)/i)
              , r = b.match(/qnreading\/(\d+\.\d+\.\d+)/i)
              , s = b.match(/LieBaoFast\/(\d+\.\d+\.\d+)/i)
              , t = b.match(/com\.douban\.frodo\/(\d+\.\d+\.\d+)/i)
              , u = b.match(/QQLiveBrowser\/(\d+\.\d+\.\d+)/i)
              , v = b.match(/MIDP-([\d\.]+)/i)
              , w = b.match(/Mozilla.*Linux.*Android.*AppleWebKit.*Mobile Safari/)
              , x = b.match(/(android)\s([\d\.]+)/i);
            if (a.browser = a.browser || {},
            a.os = a.os || {},
            window.ActiveXObject) {
                var y = 6;
                (window.XMLHttpRequest || b.indexOf("MSIE 7.0") > -1) && (y = 7),
                (window.XDomainRequest || b.indexOf("Trident/4.0") > -1) && (y = 8),
                b.indexOf("Trident/5.0") > -1 && (y = 9),
                b.indexOf("Trident/6.0") > -1 && (y = 10),
                a.browser.ie = !0,
                a.browser.version = y
            } else
                b.indexOf("Trident/7.0") > -1 && (a.browser.ie = !0,
                a.browser.version = 11);
            x && (this.os.android = !0,
            this.os.version = x[2]),
            v && (this.os.android = !0),
            m && (this.os.ios = this.os.ipod = !0,
            this.os.version = m[2].replace(/_/g, ".")),
            n && (this.os.ios = this.os.ipad = !0,
            this.os.version = n[2].replace(/_/g, ".")),
            o && (this.os.iphone = this.os.ios = !0,
            this.os.version = o[2].replace(/_/g, ".")),
            g && (this.os.windows = !0,
            this.os.version = g[2]),
            f && (this.os.Mac = !0,
            this.os.version = f[1]),
            b.indexOf("lepad_hls") > 0 && (this.os.LePad = !0),
            j && (this.os.MIPAD = !0),
            c && (this.browser.MQQ = !0,
            this.browser.version = c[1]),
            d && (this.browser.MQQClient = !0,
            this.browser.version = d[1]),
            e && (this.browser.WeChat = !0,
            this.browser.version = e[1]),
            h && (this.browser.MIUI = !0,
            this.browser.version = h[1]),
            k && (this.browser.UC = !0,
            this.browser.version = k[1] || NaN),
            l && (this.browser.IEMobile = !0,
            this.browser.version = l[2]),
            w && (this.browser.AndriodBrowser = !0),
            i && (this.browser.M1 = !0),
            p && (this.browser.Chrome = !0,
            this.browser.version = p[1]),
            q && (this.browser.qqnews = !0,
            this.browser.version = q[1]),
            r && (this.browser.kuaibao = !0,
            this.browser.version = r[1]),
            s && (this.browser.liebao = !0,
            this.browser.version = s[1]),
            t && (this.browser.douban = !0,
            this.browser.version = t[1]),
            u && (this.browser.qqlive = !0,
            this.browser.version = u[1]),
            this.os.windows && ("undefined" != typeof navigator.platform && "win64" == navigator.platform.toLowerCase() ? this.os.win64 = !0 : this.os.win64 = !1);
            var z = {
                iPad7: "iPad; CPU OS 7",
                LePad: "lepad_hls",
                XiaoMi: "MI-ONE",
                SonyDTV: "SonyDTV",
                SamSung: "SAMSUNG",
                HTC: "HTC",
                VIVO: "vivo"
            };
            for (var A in z)
                this.os[A] = -1 !== b.indexOf(z[A]);
            a.os.phone = a.os.phone || /windows phone/i.test(b),
            this.os.getNumVersion = function() {
                return parseFloat(a.os.version, "10")
            }
            ,
            this.os.hasTouch = "ontouchstart"in window,
            this.os.hasTouch && this.os.ios && this.os.getNumVersion() < 6 && (this.os.hasTouch = !1),
            a.browser.WeChat && a.browser.version < 5 && (this.os.hasTouch = !1),
            a.extend(a.browser, {
                getNumVersion: function() {
                    return parseFloat(a.browser.version, "10")
                },
                isFFCanOcx: function() {
                    return a.browser.firefox && a.browser.getNumVersion() >= 3 ? !0 : !1
                },
                isCanOcx: function() {
                    return !!a.os.windows && (!!a.browser.ie || a.browser.isFFCanOcx() || !!a.browser.webkit)
                },
                isNotIESupport: function() {
                    return !!a.os.windows && (!!a.browser.webkit || a.browser.isFFCanOcx())
                }
            }),
            a.userAgent = {},
            a.extend(a.userAgent, a.os),
            a.extend(a.userAgent, a.browser),
            a.userAgent.browserVersion = a.browser.version,
            a.userAgent.osVersion = a.os.version,
            delete a.userAgent.version
        }
        b.call(a, navigator.userAgent)
    }(tvp.$),
    function(a) {
        var b = {
            getByID: function(a) {
                return document.getElementById(a)
            },
            noop: function() {},
            isString: function(b) {
                return "string" === a.type(b)
            },
            isUndefined: function(b) {
                return "undefined" === a.type(b)
            },
            now: function() {
                return (new Date).getTime()
            },
            getISOTimeFormat: function() {
                var a = new Date
                  , b = a.getFullYear()
                  , c = a.getMonth() + 1
                  , d = a.getDate()
                  , e = a.getHours()
                  , f = a.getMinutes()
                  , g = a.getSeconds();
                return [[b, 10 > c ? "0" + c : c, 10 > d ? "0" + d : d].join("-"), [10 > e ? "0" + e : e, 10 > f ? "0" + f : f, 10 > g ? "0" + g : g].join(":")].join(" ")
            },
            formatSeconds: function(a) {
                a = parseInt(a);
                var b = parseInt(a / 60)
                  , c = b >= 60 ? parseInt(b / 60) : 0
                  , d = a % 60
                  , e = "";
                return b >= 60 && (b %= 60),
                c > 0 && (e += 10 > c ? "0" + c : c,
                e += ":"),
                e += 10 > b ? "0" + b : b,
                e += ":",
                e += 10 > d ? "0" + d : d
            },
            formatSecondsWithText: function(a) {
                var b = this.formatSeconds(a)
                  , c = b.split(":")
                  , d = "";
                switch (c.length) {
                case 1:
                    d = c[0] + "\u79d2";
                    break;
                case 2:
                    d = c[0] + "\u5206" + c[1] + "\u79d2";
                    break;
                case 3:
                    d = c[0] + "\u5c0f\u65f6" + c[1] + "\u5206" + c[2] + "\u79d2";
                    break;
                default:
                    d = b
                }
                return d
            },
            formatFileSize: function(a) {
                return a = parseInt(a, 10),
                a = a / 1024 / 1024,
                a = a.toFixed(1),
                a + "M"
            },
            getHost: function() {
                var a = window.location.hostname || window.location.host
                  , b = location.host.split(".");
                return b.length > 1 && (a = b.slice(b.length - 2).join(".")),
                a
            },
            getUrlParam: function(a, b) {
                b = b || document.location.toString();
                var c = new RegExp("(^|&|\\\\?)" + a + "=([^&]*)(&|$|#)")
                  , d = null;
                return d = b.match(c),
                d ? d[2] : ""
            },
            setUrlParam: function(a, b, c) {
                c = c || location.href;
                var d, e, f = new RegExp("[\\?&#]" + a + "=([^&#]+)","gi"), g = c.match(f), h = "{key" + (new Date).getTime() + "}";
                if (d = g && g.length > 0 ? g[g.length - 1] : "",
                e = a + "=" + b,
                d) {
                    var i = d.charAt(0);
                    c = c.replace(d, h),
                    c = c.replace(h, b ? i + e : "")
                } else
                    b && (c += c.indexOf("?") > -1 ? "&" + e : "?" + e);
                return c
            },
            filterXSS: function(b) {
                return a.isString(b) ? b.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/\'/g, "&apos;") : b
            },
            createGUID: function(a) {
                a = a || 32;
                for (var b = "", c = 1; a >= c; c++) {
                    var d = Math.floor(16 * Math.random()).toString(16);
                    b += d
                }
                return b
            },
            newGuid: function() {
                function a() {
                    return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
                }
                return [a(), a(), a(), a(), a(), a(), a(), a()].join("")
            },
            formatSize: function(a) {
                var b = "" + a;
                return b.indexOf("%") > 0 ? b : b.indexOf("px") > 0 ? b : /^\d+$/.test(b) ? b + "px" : b
            },
            compareVersion: function(a, b) {
                a = String(a).split("."),
                b = String(b).split(".");
                try {
                    for (var c = 0, d = Math.max(a.length, b.length); d > c; c++) {
                        var e = isFinite(a[c]) && Number(a[c]) || 0
                          , f = isFinite(b[c]) && Number(b[c]) || 0;
                        if (f > e)
                            return -1;
                        if (e > f)
                            return 1
                    }
                } catch (g) {
                    return -1
                }
                return 0
            },
            isTrue: function(a) {
                return !!tvp.$.filterXSS(a)
            },
            loadPluginCss: function(b) {
                var c = ""
                  , d = tvp.defaultConfig.pluginCssUrl;
                return b in d && (c = tvp.defaultConfig.cssPath + d[b]),
                a.loadCss(c)
            },
            getData: function(a) {
                var b;
                try {
                    window.localStorage && (b = window.localStorage[a])
                } catch (c) {}
                return b
            },
            setData: function(a, b) {
                try {
                    window.localStorage && (window.localStorage[a] = b)
                } catch (c) {}
                return !0
            },
            delData: function(a) {
                try {
                    window.localStorage && window.localStorage.removeItem(a)
                } catch (b) {}
                return !0
            },
            formatTpl: function(b, c) {
                if (b && "object" === a.type(c)) {
                    for (var d in c)
                        for (var e = "${" + d + "}"; b.indexOf(e) > -1; )
                            b = b.replace(e, c[d]);
                    return b
                }
            },
            loadCss: function(b) {
                var c = a.Deferred()
                  , d = !1;
                if (b) {
                    for (; b.indexOf("../") >= 0; )
                        b = b.replace("../", "");
                    b = a.filterXSS(b);
                    var e = document
                      , f = e.getElementsByTagName("head")[0] || e.documentElement
                      , g = f.getElementsByTagName("base")[0]
                      , h = e.createElement("link");
                    h.rel = "stylesheet",
                    h.href = b,
                    h.onload = h.onerror = function() {
                        h.onload = h.onerror = null,
                        d = !0,
                        c.resolve()
                    }
                    ,
                    setTimeout(function() {
                        d || c.resolve()
                    }, 2500),
                    g ? f.insertBefore(h, g) : f.appendChild(h)
                } else
                    c.reject();
                return c
            }
        };
        a.extend(a, b)
    }(tvp.$),
    function(a) {
        a.cookie = {
            set: function(a, b, c, d, e) {
                if (e) {
                    var f = new Date
                      , g = new Date;
                    g.setTime(f.getTime() + 36e5 * e)
                }
                return document.cookie = a + "=" + b + "; " + (e ? "expires=" + g.toGMTString() + "; " : "") + (d ? "path=" + d + "; " : "path=/; ") + (c ? "domain=" + c + ";" : "domain=" + window.location.host + ";"),
                !0
            },
            get: function(a) {
                var b = new RegExp("(?:^|;+|\\s+)" + a + "=([^;]*)")
                  , c = document.cookie.match(b);
                return c ? c[1] : ""
            },
            del: function(a, b, c) {
                var d = new Date;
                d.setTime(d.getTime() - 1),
                document.cookie = a + "=; expires=" + d.toGMTString() + ";" + (c ? "path=" + c + "; " : "path=/; ") + (b ? "domain=" + b + ";" : "domain=" + window.location.host + ";")
            }
        }
    }(tvp.$),
    tvp = tvp || {},
    tvp.common = {
        isUseHtml5: function() {
            var a = navigator.userAgent
              , b = null;
            if (/ipad|ipod|iphone|lepad_hls|IEMobile|WPDesktop/gi.test(a))
                return !0;
            if (tvp.$.os.android) {
                if (tvp.common.isSupportMP4())
                    return !0;
                if (tvp.$.browser.MQQ && tvp.$.browser.getNumVersion() >= 4.2)
                    return !0;
                if (-1 != a.indexOf("MI2"))
                    return !0;
                if (tvp.$.os.version >= "4" && (b = a.match(/MicroMessenger\/((\d+)\.(\d+))\.(\d+)/)) && b[1] >= 4.2)
                    return !0;
                if (tvp.$.os.version >= "4.1")
                    return !0
            }
            return !1
        },
        isInUseH5: function() {
            var a = navigator.userAgent
              , b = null;
            if (tvp.$.os.android) {
                if (tvp.$.browser.MQQ && tvp.$.browser.getNumVersion() >= 4.2)
                    return !0;
                if (-1 != a.indexOf("MI2"))
                    return !0;
                if (tvp.$.os.version >= "4" && (b = a.match(/MicroMessenger\/((\d+)\.(\d+))\.(\d+)/)) && b[1] >= 4.2)
                    return !0;
                if (tvp.$.os.version >= "4.1")
                    return !0
            }
        },
        isUseHLS: function() {
            return tvp.$.os.ios ? !0 : void 0
        },
        isMac: function() {
            var a = /Macintosh/gi.test(navigator.userAgent);
            return a
        },
        isLiveUseHTML5: function() {
            return tvp.$.os.ios ? !0 : tvp.$.os.ipad ? !0 : tvp.$.os.android && tvp.common.isSupportM3u8() ? !0 : !1
        },
        isSupportM3u8: function() {
            var a = document.createElement("video")
              , b = ["application/x-mpegURL", "audio/mpegurl", "vnd.apple.mpegURL", "application/vnd.apple.mpegURL"]
              , c = !1;
            return "function" == typeof a.canPlayType && tvp.$.each(b, function(b, d) {
                return a.canPlayType(d) ? void (c = !0) : void 0
            }),
            a = null,
            tvp.$.os.android && (tvp.$.os.version >= "4" && tvp.$.browser.Chrome && (c = !0),
            tvp.$.browser.M1 && (c = !1),
            /V8 Build/.test(navigator.userAgent) && (c = !1),
            tvp.$.browser.MQQ && tvp.$.browser.getNumVersion() >= 4.2 && (c = !0)),
            c
        },
        isSupportMP4: function() {
            var a = document.createElement("video");
            if ("function" == typeof a.canPlayType) {
                if ("probably" == a.canPlayType('video/mp4; codecs="mp4v.20.8"'))
                    return !0;
                if ("probably" == a.canPlayType('video/mp4; codecs="avc1.42E01E"') || "probably" == a.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"'))
                    return !0
            }
            return !1
        },
        isSupportSVG: function() {
            return document.implementation && tvp.$.isFunction(document.implementation.hasFeature) ? document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") : !1
        },
        isEnforceMP4: function() {
            if (tvp.$.os.android) {
                if (tvp.$.browser.firefox)
                    return !0;
                if (tvp.$.browser.chrome)
                    return !1;
                if (tvp.$.os.version >= "4.0" && tvp.$.browser.MQQ && tvp.$.browser.version < "4.0")
                    return !0
            }
            return !1
        },
        getUin: function(a) {
            var b = tvp.$.cookie.get("skey")
              , c = tvp.$.cookie.get("lskey")
              , d = ""
              , e = 0
              , f = !1;
            return "undefined" == typeof isLeak && "undefined" != typeof a && (isLeak = a),
            isLeak = "undefined" == typeof isLeak ? !1 : !0,
            f = !!isLeak && "" != c,
            f || "" != b ? (d = tvp.$.cookie.get("uin"),
            "" == d && f && (d = tvp.$.cookie.get("luin")),
            e = parseInt(d.replace(/^o0*/g, ""), 10),
            isNaN(e) || 1e4 >= e ? 0 : e) : 0
        },
        getSKey: function(a) {
            var b = tvp.$.cookie.get("skey")
              , c = tvp.$.cookie.get("lskey")
              , d = "";
            return d = a ? "" != b && "" != c ? b : b || c : b
        },
        getToken: function(a) {
            var b = this.getSKey(a)
              , c = this.time33(b);
            return c
        },
        time33: function(a) {
            for (var b = 0, c = a.length, d = 5381; c > b; ++b)
                d += (d << 5) + a.charAt(b).charCodeAt();
            return 2147483647 & d
        },
        openLogin: function() {},
        getVideoSnap: function(a, b) {
            var c, d, e = 1e8;
            if (a.indexOf("_") > 0) {
                var f = a.split("_");
                a = f[0],
                b = parseInt(f[1])
            }
            for (var g = 4294967296, h = 0, i = 0; i < a.length; i++) {
                var j = a.charCodeAt(i);
                h = 32 * h + h + j,
                h >= g && (h %= g)
            }
            return d = h % e,
            void 0 == b && (b = 0),
            c = 0 == b ? ["http://vpic.video.qq.com/", d, "/", a, "_160_90_3.jpg"].join("") : ["http://vpic.video.qq.com/", d, "/", a, "_", "160_90_", b, "_1.jpg"].join("")
        },
        getVideoSnapMobile: function(a, b) {
            b = b || 0;
            var c = ["496_280"]
              , d = "//shp.qpic.cn/qqvideo_ori/0/{vid}_{index}/0";
            return d.replace("{vid}", a).replace("{index}", c[b])
        },
        getVideoPosterOnMobile: function(a) {
            var b = "//puui.qpic.cn/qqvideo/0/{vid}/0";
            return b.replace("{vid}", a)
        },
        picerr: function() {},
        getDeviceId: function() {
            var a = tvp.DEVICE.other;
            return tvp.$.os.iphone ? a = tvp.DEVICE.iphone : tvp.$.os.ipad ? a = tvp.DEVICE.ipad : tvp.$.os.android && tvp.$.os.phone && (a = tvp.DEVICE.aphone),
            a
        },
        getPlatformId: function() {
            var a = tvp.PLATFORM.other;
            return tvp.$.browser.WeChat ? a = tvp.PLATFORM.wechat : tvp.$.browser.MQQClient ? a = tvp.PLATFORM.mqq : tvp.$.browser.MQQ && (a = tvp.PLATFORM.qqbrowser),
            a
        },
        getParams: function(a) {
            for (var b, c, d = a.indexOf("?"), e = a.substring(d + 1), f = /\w+=[^&]+/g, g = {}; null !== (b = f.exec(e)); )
                c = b[0].split("="),
                c.length >= 2 && (g[c.shift()] = c.join("="));
            return g
        },
        recomdTextById: function(a) {
            if (a) {
                if (this.recomdText || (this.recomdText = {}),
                this.recomdText[a] && "string" == typeof this.recomdText[a])
                    return this.recomdText[a];
                var b, c = tvp.$.Deferred(), d = this, e = 50;
                return e = 0,
                e && 100 * Math.random() > e ? (c.resolve(),
                c) : (b = tvp.common.get_request_url("like") + "?callback=?",
                tvp.$.ajax({
                    url: b,
                    dataType: "jsonp",
                    jsonpCallback: "tvp_request_like_callback_" + parseInt(1e6 * Math.random()),
                    data: {
                        id: a,
                        uin: 0,
                        playright: 7,
                        msgtype: 103,
                        otype: "json",
                        tablist: 9
                    }
                }).done(function(b) {
                    b && b.rmdword ? (d.recomdText[a] = b,
                    c.resolve()) : c.resolve()
                }).fail(function() {
                    c.resolve()
                }),
                setTimeout(function() {
                    c.resolve()
                }, 5e3),
                c)
            }
        },
        get_hostname_fromUrl: function(a) {
            if (a) {
                var b = document.createElement("a");
                return b.href = a,
                b.hostname
            }
        },
        get_css_path: function() {
            return "//imgcache.qq.com/tencentvideo_v1/vstyle/mobile/v2/style/"
        },
        get_js_path: function() {
            return "//imgcache.qq.com/tencentvideo_v1/tvp/"
        },
        get_request_url: function(a) {
            var b = {
                getinfo: ["http://h5vv.video.qq.com/getinfo", "https://h5vv.video.qq.com/getinfo"],
                edugetvinfo: ["http://sv.video.qq.com/edugetvinfo", "https://sec.video.qq.com/p/sv.video/edugetvinfo"],
                mvgetinfo: ["http://sv.video.qq.com/mvgetinfo", "https://sec.video.qq.com/p/sv.video/mvgetinfo"],
                getinfoInews: ["http://h5wx.video.qq.com/getinfo?callback=?&", "https://h5wx.video.qq.com/getinfo?callback=?&"],
                getvinfo: ["http://h5vv.video.qq.com/getvinfo", "https://h5vv.video.qq.com/getvinfo"],
                getkey: ["http://h5vv.video.qq.com/getkey", "https://h5vv.video.qq.com/getkey"],
                mvgetkey: ["http://sv.video.qq.com/mvgetkey", "https://sec.video.qq.com/p/sv.video/mvgetkey"],
                getkeyInews: ["http://h5wx.video.qq.com/getkey?callback=?&", "https://sec.video.qq.com/p/h5wx.video/getkey?callback=?&"],
                limit_conf: ["http://v.qq.com/iframe/limit_conf.js", "https://v.qq.com/iframe/limit_conf.js"],
                zb: ["http://info.zb.video.qq.com", "https://sec.video.qq.com/p/info.zb/video/"],
                swf_root: ["http://imgcache.qq.com/tencentvideo_v1/player/", "https://imgcache.qq.com/tencentvideo_v1/player/"],
                rmd_mobile: ["http://like.video.qq.com/fcgi-bin/rmd_mobile", "https://like.video.qq.com/fcgi-bin/rmd_mobile"],
                like: ["http://like.video.qq.com/fcgi-bin/like", "https://like.video.qq.com/fcgi-bin/like"],
                dataout_ex: ["http://sns.video.qq.com/fcgi-bin/dlib/dataout_ex", "https://sec.video.qq.com/p/sns.video/fcgi-bin/dlib/dataout_ex"],
                get_dtype: ["http://h5vv.video.qq.com/getdtype", "https://h5vv.video.qq.com/getdtype"]
            };
            return "http:" === window.location.protocol ? b[a][0] : b[a][1]
        },
        get_chid: function() {
            var a = "";
            return /(.*\.)3g\.qq\.com$/i.test(document.location.hostname) ? a = 13 : tvp.$.browser.qqlive ? a = 0 : /(.*\.)?v\.qq\.com$/i.test(document.location.hostname) ? a = 0 : /(.*\.)?buluo\.qq\.com$/i.test(document.location.hostname) ? a = 40 : tvp.$.browser.WeChat ? a = 3 : tvp.$.browser.MQQClient ? a = 10 : tvp.$.browser.qqnews && (a = 2),
            a
        },
        get_stdfrom: function() {
            var a = "view.inews.qq.com" === location.host
              , b = tvp.$;
            return b.os.iphone || b.os.ipod ? a ? "v3110" : "v3010" : b.os.ipad ? a ? "v4110" : "v4010" : b.os.android ? b.os.tablet ? "v6010" : a ? "v5110" : "v5010" : b.browser.IEMobile ? "v7010" : "v1010"
        },
        get_platform: function() {
            var a = tvp.$;
            return a.os.iphone ? 1 : a.os.ipad ? 2 : a.os.android ? 3 : 4
        },
        is_mqq_buluo: function() {
            return !tvp.$.browser.MQQClient || "xiaoqu.qq.com" !== window.location.hostname && "buluo.qq.com" !== window.location.hostname ? !1 : !0
        },
        getPageType: function() {
            return tvp.app ? tvp.app.pageType : tvp.$.browser.WeChat ? 1 : tvp.$.browser.MQQClient ? 2 : tvp.$.browser.MQQ ? 3 : 0
        },
        getPosition: function(a) {
            for (var b = a.offsetLeft, c = a.offsetTop, d = a.offsetParent; null !== d; )
                b += d.offsetLeft,
                c += d.offsetTop,
                d = d.offsetParent;
            return {
                x: b,
                y: c
            }
        },
        afterWeChatReady: function(a) {
            function b() {
                c.resolve()
            }
            var c = tvp.$.Deferred()
              , d = a.timeout || 5e3;
            return tvp.$.browser.WeChat ? "undefined" != typeof WeixinJSBridge && WeixinJSBridge.on ? b() : (document.addEventListener("WeixinJSBridgeReady", function() {
                b()
            }),
            setTimeout(function() {
                b()
            }, d)) : b(),
            c
        },
        getPtag: function() {
            for (var a = tvp.$.getUrlParam, b = this.getDomainOfURL, c = tvp.$, d = tvp.$.cookie, e = document.location.toString().toLowerCase(), f = "", g = ["ptag", "adtag", "pgv_ref"], h = 0, i = g.length; i > h && !(f = a(g[h], e)); h++)
                ;
            if (!f)
                try {
                    f = sessionStorage.getItem("ptag")
                } catch (j) {}
            if (!f) {
                var k = b(document.referrer);
                k && -1 === c.inArray(k, ["v.qq.com", "film.qq.com", "m.v.qq.com"]) && (f = k.replace(/\./g, "_"))
            }
            return f || (f = d.get("ptag")),
            f
        },
        getDomainOfURL: function(a) {
            var b = "";
            if ("undefined" == typeof a || null == a || "" == a)
                return b;
            var c = /.*\:\/\/([^\/]*).*/
              , d = a.match(c);
            return "undefined" != typeof d && null != d && (b = d[1]),
            b
        },
        getTimeStampStr: function(a) {
            a = a || 10;
            var b = parseInt(+new Date) + "";
            if (b.length === a)
                return b;
            if (b.length > a)
                return b.substring(0, a);
            for (var c = a - b.length; c > 0; )
                b = "0" + b,
                c--;
            return b
        },
        getCompleteUrlByProtocol: function(a) {
            return a && 0 === a.indexOf("//") && (a = "http:" === location.protocol ? "http:" + a : "https:" + a),
            a
        },
        getTopFrameUrl: function() {
            var a = "";
            if (top !== window)
                try {
                    a = top.location.href
                } catch (b) {}
            return a || (a = document.referrer),
            a
        },
        getReportUA: function() {
            var a = navigator.userAgent;
            return a && (a = a.replace(/\$/g, " ").replace(/\,/g, " ")),
            a
        },
        isNewWX: function(a) {
            var b, c, d = navigator.userAgent.match(/MicroMessenger\/([\d\.]+)/i), e = d && 2 == d.length;
            return a = a || "6.5.7",
            e ? (b = d[1]) ? c = tvp.$.compareVersion(b, a) >= 0 : void 0 : !1
        },
        openAppInWx: function(a) {
            a && (a && a.indexOf && -1 === a.indexOf("jsapi=1") && (a += -1 === a.indexOf("?") ? "?jsapi=1" : "&jsapi=1"),
            WeixinJSBridge.invoke("launchApplication", {
                schemeUrl: a
            }, function(a) {}))
        },
        bindNewMethodOnOpenAppInWeixin: function(a) {
            if (a && a.attr && a.on && a.removeAttr && tvp.common.isNewWX("6.5.6")) {
                var b = function(a) {
                    return a && a.indexOf && 0 == a.indexOf("tenvideo2") ? !0 : !1
                }
                  , c = a.attr("href");
                (b(c) || (c = a.attr("data-url"),
                b(c))) && (a && 1 == a.length ? a.attr({
                    "data-schemeUrl": c
                }) : a && a.length > 1 && a.each(function(a, c) {
                    var d = tvp.$(c)
                      , e = d.attr("href");
                    (b(e) || (e = d.attr("data-url"),
                    b(e))) && d.attr("data-schemeUrl", e)
                }),
                a.off("click.newWxScheme").on("click.newWxScheme", function(b) {
                    try {
                        var c;
                        c = "relatelink" == a.attr("data-role") ? "a" === b.target.nodeName.toLowerCase() ? tvp.$(b.target) : tvp.$(b.target).parents("a") : a,
                        c.removeAttr("href"),
                        tvp.common.openAppInWx(c.attr("data-schemeUrl"))
                    } catch (b) {}
                }).removeAttr("href"))
            }
        }
    },
    tvp.version = function() {
        function a(a) {
            if (b(a))
                return a;
            if (/\d+/i.test(a)) {
                var c = parseInt(a / 1e4 / 100, 10)
                  , d = parseInt(a / 1e4, 10) - 100 * c
                  , e = parseInt(a, 10) - (100 * c * 1e4 + 1e4 * d)
                  , f = c + "." + d + "." + e;
                return f
            }
            return a
        }
        function b(a) {
            return /^(\d+\.){2}\d+(\.\d+)?$/.test(a)
        }
        var c, d = "0.0.0.0", e = "0.0.0", f = new Image, g = !1, h = !1;
        return "film.qq.com" == document.location.host && (h = !0),
        {
            getOcx: function(b) {
                if (tvp.$.isUndefined(b) && (b = !0),
                b && "0.0.0.0" != d)
                    return d;
                var e;
                if (tvp.$.browser.ie)
                    try {
                        e = "IE begin",
                        c = new ActiveXObject(QQLive.config.PROGID_QQLIVE_INSTALLER),
                        "undefined" != typeof c.getVersion ? (d = c.GetVersionByClsid(QQLive.config.OCX_CLSID),
                        e = "get actObj.GetVersionByClsid:" + d) : e = "no function:actObj.GetVersionByClsid"
                    } catch (i) {
                        h && !g && (g = !0) && (f.src = "http://btrace.video.qq.com/collect?sIp=&iQQ=" + tvp.common.getUin() + "&sBiz=IE&sOp=" + encodeURIComponent(navigator.userAgent) + "&iSta=0&iTy=2432&iFlow=&sUrl=" + encodeURIComponent(location.toString()) + "&sRef=" + encodeURIComponent(document.referrer) + "&sMsg=" + encodeURIComponent(i.message) + "&sStep=" + encodeURIComponent(e) + "&_=" + Math.random())
                    }
                else if (tvp.$.browser.isNotIESupport()) {
                    e = "no IE begin";
                    var j, k = navigator.plugins;
                    if (tvp.$.isUndefined(k.namedItem) || (e = "plugs.namedItem",
                    j = k.namedItem("\u817e\u8baf\u89c6\u9891")),
                    !j) {
                        e = "no plugs.namedItem:tencentvideo";
                        for (var l = 0, m = k.length; m > l; l++)
                            if (k[l] && "\u817e\u8baf\u89c6\u9891" == k[l].name || "npQQLive.dll" == k[l].filename) {
                                j = k[l];
                                break
                            }
                    }
                    if (j)
                        if (tvp.$.isUndefined(j.version)) {
                            e = "plug.description:" + j.description;
                            var n, o = j.description;
                            n = o.match(/version:((\d+\.){3}(\d+)?)/),
                            n && (d = n[1])
                        } else
                            e = "plug.version:" + j.version,
                            d = j.version;
                    else
                        e = "no plugs[i].filename:npQQLive.dll"
                }
                return parseInt(d, 10) || h && !g && (g = !0) && (f.src = "http://btrace.video.qq.com/collect?sIp=&iQQ=" + tvp.common.getUin() + "&sBiz=" + (tvp.$.browser.ie ? "IE" : "NOIE") + "&sOp=" + encodeURIComponent(navigator.userAgent) + "&iSta=0&iTy=2432&iFlow=&sUrl=" + encodeURIComponent(location.toString()) + "&sRef=" + encodeURIComponent(document.referrer) + "&sMsg=" + d + "&sStep=" + encodeURIComponent(e) + "&_=" + Math.random()),
                d = a(d)
            },
            getFlash: function() {
                if ("0.0.0" != e)
                    return e;
                var a, b = null, c = null, d = [], i = "Shockwave Flash", j = navigator, k = "application/x-shockwave-flash";
                if (tvp.$.browser.ie)
                    try {
                        a = "IE begin",
                        b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
                        a = "new ActiveXObject",
                        b && (c = b.GetVariable("$version"),
                        a = "swf.GetVariable",
                        c && (c = c.split(" ")[1].split(","),
                        d = [parseInt(c[0], 10), parseInt(c[1], 10), parseInt(c[2], 10)]))
                    } catch (l) {
                        h && !g && (g = !0) && (f.src = "http://btrace.video.qq.com/collect?sIp=&iQQ=" + tvp.common.getUin() + "&sBiz=IE&sOp=" + encodeURIComponent(navigator.userAgent) + "&iSta=1&iTy=2432&iFlow=&sUrl=" + encodeURIComponent(location.toString()) + "&sRef=" + encodeURIComponent(document.referrer) + "&sMsg=" + encodeURIComponent(l.message) + "&sStep=" + encodeURIComponent(a) + "&_=" + Math.random())
                    }
                else
                    tvp.$.isUndefined(j.plugins) || "object" != typeof j.plugins[i] || (a = "no IE begin",
                    c = j.plugins[i].description,
                    a = "plugins[S].description",
                    c && (tvp.$.isUndefined(j.mimeTypes) || !j.mimeTypes[k] || j.mimeTypes[k].enabledPlugin) ? (a = "parse description",
                    c = c.replace(/^.*\s+(\S+\s+\S+$)/, "$1"),
                    d[0] = parseInt(c.replace(/^(.*)\..*$/, "$1"), 10),
                    d[1] = parseInt(c.replace(/^.*\.(.*)\s.*$/, "$1"), 10),
                    d[2] = /[a-zA-Z]/.test(c) ? parseInt(c.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0) : a = "no mimeTypes or disable");
                return e = d.join("."),
                parseInt(e, 10) || h && !g && (g = !0) && (f.src = "http://btrace.video.qq.com/collect?sIp=&iQQ=" + tvp.common.getUin() + "&sBiz=" + (tvp.$.browser.ie ? "IE" : "NOIE") + "&sOp=" + encodeURIComponent(navigator.userAgent) + "&iSta=1&iTy=2432&iFlow=&sUrl=" + encodeURIComponent(location.toString()) + "&sRef=" + encodeURIComponent(document.referrer) + "&sMsg=" + e + "&sStep=" + encodeURIComponent(a) + "&_=" + Math.random()),
                e
            },
            getFlashMain: function() {
                return parseInt(tvp.version.getFlash().split(".")[0], 10)
            }
        }
    }(),
    function(a, b) {
        var c = {
            qqlive: {
                text1: "\u817e\u8baf\u89c6\u9891\u5ba2\u6237\u7aef",
                text2: "\u53ef\u89c2\u770b\u66f4\u591a\u89c6\u9891",
                md5Cgi: "http://mcgi.v.qq.com/commdatav2?cmd=39&otype=json&confid=${id}",
                md5Cgi_https: "https://sec.video.qq.com/p/mcgi.v/commdatav2?cmd=39&otype=json&confid=${id}",
                payUrl: "http://film.qq.com/weixin/detail/${index}/${cid}.html",
                scheme: "tenvideo2://",
                logoClass: "",
                openUrl: "tenvideo2://?action=5&video_id=${vid}",
                liveOpenUrl: "tenvideo2://?action=8&channel_id=${lid}",
                ipadDownloadUrl: "https://itunes.apple.com/cn/app/teng-xun-shi-pinhd/id407925512?mt=8",
                iphoneDownloadUrl: "http://itunes.apple.com/cn/app/id458318329?mt=8",
                aphoneDownloadUrl: "http://mcgi.v.qq.com/commdatav2?cmd=4&confid=140&platform=aphone",
                VIA: "ANDROIDQQ.QQLIVE",
                appId: "100730521",
                downloadId: "TencentVideo",
                taskName: "TencentVideo",
                packageName: b.os.iphone ? "com.tencent.live4iphone" : "com.tencent.qqlive",
                packageUrl: "tenvideo2://can_open_me_if_install_and_regeister_this_scheme"
            },
            weishi: {
                text1: "\u5fae\u89c6\u5ba2\u6237\u7aef",
                text2: "\u53d1\u73b0\u66f4\u591a\u7cbe\u5f69",
                logoClass: "tvp_download_app_solo_weishi",
                md5Cgi: "http://www.weishi.com/api/packdata.php?confid=${id}",
                scheme: b.os.iphone ? " weishiiosscheme://" : "weishiandroidscheme://",
                openUrl: b.os.iphone ? " weishiiosscheme://detail?tweetid=${id}" : "weishiandroidscheme://detail?tweetid=${id}",
                iphoneDownloadUrl: "http://www.weishi.com/download/index.php?pgv_ref=weishi.shipin.xinwenfenxiang",
                aphoneDownloadUrl: "http://www.weishi.com/download/index.php?pgv_ref=weishi.shipin.xinwenfenxiang",
                ipadDownloadUrl: "",
                VIA: "ANDROIDQQ.WEISHI",
                appId: "1101083114",
                downloadId: "TencentWeishi",
                taskName: "TencentWeishi",
                packageName: b.os.iphone ? "com.tencent.microvision" : "com.tencent.weishi",
                packageUrl: b.os.iphone ? "weishiiosscheme://can_open_me_if_install_and_regeister_this_scheme" : "weishiandroidscheme://can_open_me_if_install_and_regeister_this_scheme"
            },
            yyb: {
                packageName: "com.tencent.android.qqdownloader"
            }
        };
        a.app = {
            config: {
                defaultName: "qqlive",
                QQApiUrl: "http://pub.idqqimg.com/qqmobile/qqapi.js",
                mqqApiUrl: "//res.imtt.qq.com/browser_lightapp/QQBrowserApi/getCryptext/browser_interface_getCryptext.js"
            },
            loadQQClientDefer: !1,
            loadDownloaderDefer: !1,
            loadMqqDefer: !1,
            getDownloadUrl: function(d, e) {
                return e = e || a.app.config.defaultName,
                d = b.os.iphone ? c[e].iphoneDownloadUrl : d || c[e].aphoneDownloadUrl,
                d = b.os.ipad ? c[e].ipadDownloadUrl : d
            },
            getPayUrl: function(a) {
                var d = b.formatTpl(c.qqlive.payUrl, {
                    index: a.slice(0, 1),
                    cid: a
                });
                return d
            },
            getOpenUrl: function(d) {
                var e = {}
                  , f = !1;
                if (!d)
                    return f;
                if (d.appName && d.appName !== a.app.config.defaultName)
                    return f = d.openId ? c[d.appName].openUrl.replace("${id}", d.openId) : c[d.appName].scheme;
                switch (d.lid ? e.channel_id = d.lid : d.cid ? e.cover_id = d.cid : d.tid ? e.topic_id = d.tid : d.vidArray || !d.vid ? e.video_id = "${vid}" : d.vid && (e.video_id = d.vid),
                d.vid2 && (e.video_id = d.vid2),
                d.openType) {
                case 6:
                    d.cid && (e.action = 1);
                    break;
                case 2:
                    d.lid ? e.action = 8 : e.action = 7;
                    break;
                case 3:
                    d.lid ? e.action = 8 : d.tid ? e.action = 6 : e.action = 5;
                    break;
                case 4:
                    d.cid && (e.action = 1);
                    break;
                default:
                    d.lid ? e.action = 8 : d.cid ? e.action = 1 : e.action = 5
                }
                d.promotionId && (e.from = d.promotionId + "_" + (d.contentId ? d.contentId : "")),
                e.action = e.action || 5,
                f = c.qqlive.scheme + "?" + decodeURIComponent(b.param(e));
                var g;
                return f !== g && d.openUrl && (f = b.filterXSS(d.openUrl),
                f.indexOf("from") < 0 && f.indexOf("?") > -1 && d.promotionId && (f += "&from=" + d.promotionId + "_" + (d.contentId ? d.contentId : ""))),
                f
            },
            getPackageInfo: function() {
                return c
            },
            pageType: function() {
                return b.browser.WeChat ? 1 : b.browser.MQQClient ? 2 : b.browser.MQQ ? 3 : 0
            }(),
            isSupportApp: function() {
                return b.os.iphone || b.os.ipod || b.os.ipad ? !0 : b.os.android ? !0 : !1
            }(),
            unbindTryOpenAppBanner: function(a) {
                a ? a.noTryOpen = !0 : ""
            },
            bindTryOpenAppBanner: function(c) {
                if (c && !([2, 3].indexOf(a.app.pageType) > -1 || 1 === a.app.pageType && (window !== top && top.location.href || window === top))) {
                    var d = a.$.os.hasTouch ? "touchend" : "click"
                      , e = c.$btn
                      , f = e.attr("data-url")
                      , g = !1
                      , h = function() {
                        var b = navigator.userAgent;
                        return a.$.os.android || a.$.os.ios ? -1 != b.indexOf("qqnews/") ? !1 : a.$.os.android && g ? !1 : /^http|https/g.test(f) ? !1 : !0 : !1
                    };
                    if (!h())
                        return !1;
                    e.bind("touchend click", function(a) {
                        c.noTryOpen || a.preventDefault()
                    });
                    var i = !1;
                    e.bind("touchstart", function() {
                        i = !1
                    }).bind("touchmove", function() {
                        i = !0
                    }),
                    e.bind(d, function(d) {
                        if (d.preventDefault(),
                        !i) {
                            var e, f = d.target;
                            e = "a" === f.tagName.toLowerCase() ? b(f) : b(f).parents("a"),
                            c.noTryOpen || a.app.tryOpenAppBanner(e)
                        }
                    })
                }
            },
            tryOpenAppBanner: function(b) {
                if (b.length) {
                    var c = b.attr("href")
                      , d = b.attr("data-url")
                      , e = function() {
                        location.href = c
                    }
                      , f = function() {
                        if (a.$.os.ios && a.$.compareVersion(a.$.os.version, "9.0") > -1)
                            try {
                                window.location.href = d
                            } catch (b) {}
                        else {
                            var b = document.createElement("iframe");
                            b.style.cssText = "width:1px;height:1px;position:fixed;top:0;left:0;opacity:0;",
                            b.src = d,
                            document.body.appendChild(b)
                        }
                    };
                    f();
                    var g = (new Date).valueOf();
                    setTimeout(function() {
                        var a = (new Date).valueOf();
                        1550 > a - g && e()
                    }, 1500)
                }
            },
            loadMqqAPI: function() {
                if (a.app.loadMqqDefer)
                    return a.app.loadMqqDefer;
                var c = b.Deferred();
                if (a.app.loadMqqDefer = c,
                window.x5)
                    c.resolve();
                else {
                    var d = this.config.mqqApiUrl;
                    b.getScript(d, function() {
                        window.x5 ? c.resolve() : c.reject()
                    })
                }
                return setTimeout(function() {
                    c.reject()
                }, 5e3),
                c
            },
            invokeQQBrowserAPI: function(c) {
                function d() {
                    if (window.x5 && x5.ios && x5.ios.getMobileAppSupport) {
                        var a = {
                            scheme: c.packageInfo.packageUrl
                        };
                        x5.ios.getMobileAppSupport(a, function(a) {
                            e.resolve(a && 1 == a.isSupportApp ? 1 : 0)
                        }, function() {
                            e.resolve(0)
                        })
                    } else
                        e.resolve(0);
                    setTimeout(function() {
                        e.resolve(0)
                    }, 300)
                }
                if (!b.os.iphone && window.QQApi && QQApi.checkAppInstalled)
                    return this.invokeQQClientAPI(c);
                var e = b.Deferred();
                if (!b.os.iphone && window.x5mtt && window.x5mtt.isApkInstalled) {
                    var f = window.x5mtt.isApkInstalled('{"packagename": ' + c.packageInfo.packageName + "}");
                    e.resolve(-1 != f ? 1 : 0)
                } else
                    b.os.iphone && parseInt(b.os.version) > 5 ? a.app.loadMqqAPI().done(function() {
                        d()
                    }).fail(function() {
                        e.resolve(0)
                    }) : e.resolve(0);
                return setTimeout(function() {
                    e.resolve(0)
                }, 3e3),
                e
            },
            getQQBrowserSignKey: function(c, d) {
                var e = a.app
                  , f = e.pageType
                  , g = new b.Deferred
                  , h = this.loadMqqAPI();
                return 3 != f ? void g.resolve(0) : (h.done(function() {
                    if (!window.x5 || !a.$.os.ios)
                        return void g.resolve(0);
                    if (!x5.ios || !x5.ios.getBrowserSignature)
                        return void g.resolve(0);
                    var b = {
                        vid: c
                    };
                    d && (b.timestamp = parseInt((new Date).valueOf() / 1e3)),
                    x5.ios.getBrowserSignature(b, function(a) {
                        a && a.key && a.ver && a.platform ? g.resolve({
                            key: a.key,
                            ver: a.ver,
                            platform: a.platform
                        }) : g.resolve(0)
                    }, function() {
                        g.resolve(0)
                    })
                }),
                h.fail(function() {
                    g.resolve(0)
                }),
                g)
            },
            mqqBuoLuoAuth: function(a) {
                var c, d = b.Deferred();
                try {
                    window.getBrowserSignature(a, function(a) {
                        if (a && a.data)
                            try {
                                var b = JSON.parse(a.data);
                                b && b.result && b.result.token && (c = b.result.token)
                            } catch (e) {}
                        d.resolve(c)
                    }),
                    setTimeout(function() {
                        d.reject()
                    }, 5e3)
                } catch (e) {
                    d.reject()
                }
                return d
            },
            kuaiBaoAppAuth: function(a, c) {
                var d = b.Deferred()
                  , e = "undefined" != typeof c ? c + "" : parseInt(+new Date / 1e3) + ""
                  , f = "TVP_KUAIBAO_CB_" + e.substr(-4, 4);
                window[f] = function(a) {
                    var b;
                    try {
                        b = JSON.parse(a)
                    } catch (c) {}
                    d.resolve(b)
                }
                ;
                var g = function() {
                    var b = {
                        method: "getCKey",
                        types: ["string", "string", "string"],
                        args: [a, e, f],
                        instanceName: "TencentNewsScriptControllerJsInterface"
                    }
                      , c = "jsbridge://get_with_json_data?json=" + encodeURIComponent(JSON.stringify(b)) + "&_t=" + e
                      , d = new Image;
                    d.src = c
                }
                  , h = function() {
                    var b = function() {
                        window.getBrowserSignature(a, e, f)
                    };
                    "function" == typeof window.getBrowserSignature ? b() : document.addEventListener("TencentNewsJSInjectionComplete", function() {
                        b()
                    })
                };
                return b.os.ios ? h() : b.os.android && g(),
                setTimeout(function() {
                    d.reject()
                }, 1e4),
                d
            },
            loadQQClientAPI: function() {
                if (a.app.loadQQClientDefer)
                    return a.app.loadQQClientDefer;
                var c = b.Deferred();
                if (a.app.loadQQClientDefer = c,
                window.mqq || window.QQApi)
                    c.resolve();
                else {
                    var d = this.config.QQApiUrl;
                    b.getScript(d, function() {
                        c.resolve()
                    })
                }
                return setTimeout(function() {
                    c.reject()
                }, 3e3),
                c
            },
            invokeQQClientAPI: function(a) {
                function c() {
                    !e && window.QQApi && QQApi.checkAppInstalled ? QQApi.checkAppInstalled(f, function(a) {
                        a && 0 != a ? (a = a.split("."),
                        a = a[a.length - 1],
                        d.resolve(1, a)) : d.resolve(0)
                    }) : window.mqq && mqq.app && mqq.app.isAppInstalled ? mqq.app.isAppInstalled(f, function(a) {
                        d.resolve(a ? 1 : 0)
                    }) : d.resolve(0)
                }
                var d = b.Deferred()
                  , e = b.os.iphone
                  , f = e ? a.packageInfo.packageUrl : a.packageInfo.packageName;
                return this.loadQQClientAPI().done(function() {
                    c()
                }).fail(function() {
                    d.resolve(0)
                }),
                setTimeout(function() {
                    d.resolve(0)
                }, 5e3),
                d
            },
            getAppMd5: function(d, e) {
                d = d || 140,
                e = e || a.app.config.defaultName;
                var f, g = b.Deferred();
                f = "https:" === window.location.protocol ? c[e].md5Cgi_https : c[e].md5Cgi;
                var h = f.replace("${id}", d);
                return b.ajax({
                    url: h,
                    dataType: "jsonp",
                    jsonpCallback: "tvp_request_getmd5_callback_" + parseInt(1e6 * Math.random())
                }).then(function(a) {
                    g.resolve(a && a.data ? a.data : a)
                }),
                g
            },
            report: function(c, d) {
                var e = {};
                d = d && d.curVideo ? d : !1,
                d && (e = {
                    vid: d.curVideo.getVid() || d.curVideo.getChannelId(),
                    appId: d.config.appid || d.config.appId,
                    contentId: d.config.contentId
                }),
                c && (c = b.extend(c, e),
                a.report(c))
            },
            invokeWeChatAPI: function(a) {
                var c = b.Deferred()
                  , d = this;
                return window != top && (WeixinJSBridge = top.WeixinJSBridge),
                WeixinJSBridge.invoke || c.resolve(0),
                d.getNetworkTypeInWechat().done(function(b) {
                    a && a.t && a.t.config && (a.t.config.nettype = b)
                }),
                b.os.iphone ? WeixinJSBridge.invoke("getInstallState", a.packageInfo, function(a) {
                    var b = a.err_msg;
                    b.indexOf("get_install_state:yes") > -1 ? c.resolve(1) : c.resolve(0)
                }) : WeixinJSBridge.invoke("getInstallState", a.packageInfo, function(a) {
                    var b = a.err_msg;
                    if (b.indexOf("get_install_state:yes") > -1) {
                        var d = b.split("yes_")
                          , e = 0;
                        d.length >= 2 && (e = parseInt(d[1], 10)),
                        e = isNaN(e) ? 0 : e,
                        c.resolve(1, e)
                    } else
                        c.resolve(0)
                }),
                setTimeout(function() {
                    c.resolve(0)
                }, 6e3),
                c
            },
            getNetworkTypeInWechat: function() {
                var a = b.Deferred();
                return WeixinJSBridge.invoke("getNetworkType", {}, function(b) {
                    var c = -1;
                    b && b.err_msg && ("network_type:fail" === b.err_msg && (c = 0),
                    "network_type:wifi" === b.err_msg && (c = 1),
                    "network_type:edge" === b.err_msg && (c = 2),
                    "network_type:wwan" === b.err_msg && (c = 3)),
                    a.resolve(c)
                }),
                a
            },
            check: function(d) {
                var e = a.app
                  , f = e.pageType
                  , g = b.Deferred();
                if (d = d || {},
                d.appName = d.appName || a.app.config.defaultName,
                d.packageInfo = c[d.appName],
                1 == f) {
                    var h = window == top ? document : top.document;
                    if (top.WeixinJSBridge)
                        e.invokeWeChatAPI(d).then(function(a, b) {
                            g.resolve(e.buildResult(a, d, b))
                        });
                    else
                        try {
                            h.addEventListener("WeixinJSBridgeReady", function() {
                                e.invokeWeChatAPI(d).then(function(a, b) {
                                    g.resolve(e.buildResult(a, d, b))
                                })
                            })
                        } catch (i) {
                            g.resolve(e.buildResult(0, d))
                        }
                } else if (3 == f)
                    try {
                        e.invokeQQBrowserAPI(d).then(function(a, b) {
                            g.resolve(e.buildResult(a, d, b))
                        })
                    } catch (i) {
                        g.resolve(e.buildResult(0, d))
                    }
                else if (2 == f)
                    try {
                        e.invokeQQClientAPI(d).then(function(a, b) {
                            g.resolve(e.buildResult(a, d, b))
                        })
                    } catch (i) {
                        g.resolve(e.buildResult(0, d))
                    }
                else
                    g.resolve(e.buildResult(0, d));
                return g
            },
            createDownloader: function(b) {
                this.loadDownloaderAPI().done(function() {
                    new a.AppDownloader(b)
                })
            },
            loadDownloaderAPI: function() {
                if (a.app.loadDownloaderDefer)
                    return a.app.loadDownloaderDefer;
                var c = b.Deferred();
                a.app.loadDownloaderDefer = c;
                var d = "";
                return 1 == this.pageType && (d = a.defaultConfig.libpath + a.defaultConfig.pluginUrl.AppDownloadClickWechat),
                2 == this.pageType && (d = a.defaultConfig.libpath + a.defaultConfig.pluginUrl.AppDownloadClickMqq),
                d || c.reject(),
                b.downloadClick_wechat || b.downloadClick_mqq ? c.resolve() : (b.getScript(d, function() {
                    c.resolve()
                }),
                setTimeout(function() {
                    c.reject()
                }, 3e3)),
                c
            },
            checkCanDownloader: function(a, c, d) {
                function e() {
                    b.downloadClick_wechat && d && b.downloadClick_wechat(d),
                    b.downloadClick_mqq && d && b.downloadClick_mqq(d),
                    f.resolve(1)
                }
                var f = b.Deferred();
                if (b.os.iphone || b.os.ipad || !c || 1 == a)
                    return f.resolve(0),
                    f;
                var g = !1
                  , h = !1
                  , i = /android/i.test(navigator.userAgent.toLowerCase());
                return !i || 1 == a || !c.downloader || c.downloadUrl && !c.md5 || !c.downloadUrl && c.md5 ? (f.resolve(0),
                f) : (b.isArray(c.range) && b.each(c.range, function(a, b) {
                    1 == b && (g = !0),
                    2 == b && (h = !0)
                }),
                c.downloaderCallback || (g = !0,
                h = !0),
                b.browser.WeChat && g || b.browser.MQQClient && h ? this.loadDownloaderAPI().done(function() {
                    e()
                }).fail(function() {
                    f.resolve(0)
                }) : f.resolve(0),
                f)
            },
            buildResult: function(c, d, e) {
                var f = ""
                  , g = this.pageType
                  , h = b.os.iphone;
                d.version = e;
                var i = a.app.getOpenUrl(d)
                  , j = this;
                if (h && !d.openUrl && (1 == g && (i += "&callback=weixin%3A%2F%2F&sender=%e5%be%ae%e4%bf%a1"),
                2 == g && (i += "&callback=mqqapi%3A%2F%2F&sender=%E6%89%8B%E6%9C%BAQQ"),
                3 == g && (i += "&callback=mqqbrowser%3A%2F%2F&sender=QQ%E6%B5%8F%E8%A7%88%E5%99%A8")),
                f = 1 == c ? i : j.getDownloadUrl(d.downloadUrl, d.appName),
                b.browser.WeChat && i && -1 === i.indexOf("wxplugopenid")) {
                    var k = b.getUrlParam("openid", window != top ? top.location.href.toString() : "");
                    k && (i += "&wxplugopenid=" + k,
                    0 === f.indexOf("tenvideo2://") && (f += "&wxplugopenid=" + k))
                }
                return {
                    hasApp: c,
                    pageType: g,
                    os: h,
                    version: e,
                    openUrl: i,
                    liveOpenUrl: i,
                    url: f
                }
            }
        }
    }(tvp, tvp.$),
    tvp.PLAYER_DEFINE = {
        LIVE: 1,
        VOD: 2
    },
    tvp.defaultConfig = {
        video: null,
        width: 600,
        height: 450,
        autoplay: !1,
        autoplayAfterLoadingad: !0,
        loadingadAutoplay: !1,
        isSkipLoadingAd: !1,
        skipLoadingAdTime: 5,
        loadingadChid: "",
        skipLoadingAdText: "\u4f60\u53ef\u5728{$sec}\u79d2\u540e\u5173\u95ed\u5e7f\u544a",
        skipLoadingAdCloseText: "\u5173\u95ed\u5e7f\u544a",
        adForbiddenTitle: "\u5e94\u7248\u6743\u65b9\u8981\u6c42\uff0c\u597d\u83b1\u575e\u4f1a\u5458\u65e0\u6cd5\u8df3\u8fc7\u8be5\u5267\u5e7f\u544a",
        adForbiddenText: "\u4e3a\u4e86\u7ed9\u817e\u8baf\u89c6\u9891\u7528\u6237\u63d0\u4f9b\u66f4\u591a\u4f18\u8d28\u7f8e\u5267\uff0c\u5e94\u7248\u6743\u65b9(\u534e\u7eb3)\u8981\u6c42\uff0c\u597d\u83b1\u575e\u4f1a\u5458\u5728\u89c2\u770b\u534e\u7eb3\u7f8e\u5267\u65f6\u65e0\u6cd5\u8df3\u8fc7\u5e7f\u544a\uff08\u300a\u5438\u8840\u9b3c\u65e5\u8bb0\u300b\u300a\u7834\u4ea7\u59d0\u59b9\u300b\u300a\u65e0\u803b\u4e4b\u5f92\u300b\u7b49\uff09\u3002\u6211\u4eec\u4f1a\u4e3a\u4f1a\u5458\u7528\u6237\u7ee7\u7eed\u4e89\u53d6\u514d\u5e7f\u544a\u6743\u76ca\uff0c\u8bf7\u60a8\u7ee7\u7eed\u652f\u6301\uff0c\u8c22\u8c22!",
        mute: !1,
        html5loop: !1,
        disableShortVideoPause: !1,
        volume: 50,
        modId: "mod_player",
        playerid: "",
        coverId: "",
        typeId: 0,
        pic: "",
        type: tvp.PLAYER_DEFINE.VOD,
        playerType: "auto",
        loadingswf: "",
        oid: "",
        share: !0,
        isHtml5UseHLS: "auto",
        isShowDurationLimit: !0,
        isHtml5AutoBuffer: !1,
        isHtml5UseAirPlay: !0,
        isHtml5ControlAlwaysShow: !1,
        html5Preload: "none",
        html5VodUIFeature: ["controlbar", "tips", "title", "meta", "playpause", "progress", "timepanel", "definition", "volume", "fullscreen", "overlay", "bigben", "posterlayer", "shadow", "promotion", "loadingAd", "adonend", "bullet", "preview", "verticalbullet"],
        html5LiveUIFeature: ["controlbar", "tips", "playpause", "fullscreen", "overlay", "posterlayer", "shadow", "bullet", "loadingAd"],
        html5LiveFrontShow: ["liveDownloader"],
        html5FeatureExtJS: {
            adonend: "//imgcache.qq.com/tencentvideo_v1/tvp/js/plugins/adonend.js?max_age=86400"
        },
        html5ForbiddenUIFeature: [],
        isHtml5UseUI: !0,
        HTML5CSSName: "",
        isHtml5ShowPosterOnStart: !0,
        isHtml5ShowPosterOnEnd: !1,
        isHtml5ShowPosterOnChange: !0,
        isiPhoneShowPosterOnPause: !1,
        isiPhoneShowPlaysinline: !0,
        isHtml5ShowPlayBtnOnPause: !0,
        isHtml5UseFakeFullScreen: !tvp.$.os.ios,
        isIOSVideoOffset: !0,
        isHtml5ShowLoadingAdOnStart: !tvp.$.os.phone,
        isHtml5ShowLoadingAdOnChange: !tvp.$.os.phone,
        isHtml5ShowLoadingAdOnReplay: !0,
        specialVideoFileDomain: "",
        flashWmode: "direct",
        vodFlashUrl: "",
        vodFlashType: "TPout",
        vodFlashExtVars: {},
        vodFlashListType: 2,
        vodFlashSkin: "",
        isVodFlashShowCfg: !0,
        isVodFlashShowEnd: !0,
        isVodFlashShowSearchBar: !0,
        isVodFlashShowNextBtn: !0,
        liveFlashUrl: "",
        liveFlashSwfType: "TencentPlayerLive",
        isLiveFlashShowConfigBtn: !0,
        isLiveflashShowFullBtn: !0,
        isLiveFlashShowCfg: !0,
        liveFlashWatermark: "",
        liveFlashAppType: "",
        liveFlashExtVars: {},
        flashVersionTag: "20140714",
        ocxControlBar: "",
        ocxControlHeight: 60,
        ocxSkin: "",
        isOcxShowPauseBtn: !1,
        isOcxHideControl: !1,
        plugins: {
            AppBanner: !1,
            AppRecommend: !1,
            AppDownloadOnPause: !1,
            AppBannerOnPause: !1,
            AppFollow: !1
        },
        pluginUrl: {
            AppBanner: "js/plugins/appbanner.js?v=" + tvp.ts,
            AppFollow: "js/plugins/appfollow.js?v=" + tvp.ts,
            AppRecommend: "js/plugins/apprecommend.js?v=" + tvp.ts,
            AppRecommendBanner: "js/plugins/apprecommendbanner.js?v=" + tvp.ts,
            AppDownloadOnPause: "js/plugins/appdownloadonpause.js?v=" + tvp.ts,
            AppBannerOnPause: "js/plugins/appbanneronpause.js?v=" + tvp.ts,
            AppDownloadClickWechat: "js/plugins/appdownloadclickwechat.js?v=" + tvp.ts,
            AppDownloadClickMqq: "js/plugins/appdownloadclickmqq.js?v=" + tvp.ts
        },
        cssPath: tvp.common.get_css_path(),
        pluginCssUrl: {},
        libpath: tvp.common.get_js_path(),
        noLimitBtn: !1,
        isContinuePlay: !0,
        h5VodBullet: !1,
        h5LiveBullet: !1,
        caseSetting: {},
        limitSetting: {
            downloader: !0
        },
        useLimitCase1UI: !0,
        definition: {
            fhd: "\u84dd\u51491080P",
            shd: "\u8d85\u6e05720P",
            hd: "\u9ad8\u6e05480P",
            sd: "\u6d41\u7545270P"
        },
        isShortVideo: !1,
        longVideoID: "",
        useHtml5VerticalBullet: !1,
        verticalBulletID: "",
        flashFakeFullscreenZindex: 9999,
        livepid: ""
    },
    function(a) {
        tvp = tvp || {},
        tvp.fastclick = function(b) {
            var c = a(b)
              , d = {}
              , e = a.os.hasTouch;
            e && (c.attr("data-fastclick", 1),
            c.on("touchstart", function(a) {
                a = e ? a.touches[0] : a,
                d.start = +new Date,
                d.tar = a.target,
                d.x1 = a.pageX,
                d.y1 = a.pageY
            }).on("touchend", function(b) {
                if (b.preventDefault(),
                b && b.changedTouches && b.changedTouches.length) {
                    b = b.changedTouches[0];
                    var c, e, f;
                    return d.end = +new Date,
                    d.x2 = b.pageX,
                    d.y2 = b.pageY,
                    c = Math.abs(d.x2 - d.x1),
                    e = Math.abs(d.y2 - d.y1),
                    f = d.end - d.start,
                    30 > c && 30 > e && 300 > f ? (a(d.tar).trigger("fastclick"),
                    !1) : void 0
                }
            }))
        }
    }(tvp.$),
    function(a) {
        if (!a.tmpl) {
            var b = function(a, c) {
                return function(d, e) {
                    var f = /\s/.test(d) ? function(a) {
                        var b, d = [c], e = [[]];
                        for (b in a)
                            d.push(b),
                            e.push(a[b]);
                        return new Function(d,f.$).apply(a, e).join("")
                    }
                    : a[d] = a[d] || b(document.getElementById(d).innerHTML);
                    return f.$ = f.$ || c + ".push('" + d.replace(/\\/g, "\\\\").replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join(c + ".push('").split("\r").join("\\'") + "');return " + c,
                    e ? f(e) : f
                }
            }({}, "$" + +new Date);
            a.tmpl = b
        }
    }(tvp.$),
    function(a) {
        "undefined" == typeof a.getScript && (a.getScript = function(a, b) {
            var c = document.createElement("script")
              , d = document.getElementsByTagName("head")[0]
              , e = /^(?:loaded|complete|undefined)$/;
            c.async = "async",
            c.src = a,
            c.charset = "utf-8",
            b && (c.onload = c.onerror = c.onreadystatechange = function() {
                e.test(c.readyState) && (c.onload = c.onerror = c.onreadystatechange = null,
                window.DEBUG || d.removeChild(c),
                c = null,
                b())
            }
            ),
            d.appendChild(c)
        }
        )
    }(tvp.$),
    tvp.report = function() {
        function a() {
            return 0 == h.length ? (f = !0,
            void (g = null)) : (clearTimeout(e),
            c(h.splice(0, 1)),
            void (f = !1))
        }
        function b(a) {
            return tvp.dataset.openLazy ? a && a.toLowerCase && a.toLowerCase().indexOf("bossid=2865") > -1 ? !1 : !0 : (i && i.length && (h = i.concat(h),
            i = []),
            !1)
        }
        function c(c) {
            clearTimeout(e),
            c && "array" === tvp.$.type(c) && c.length && (c = c[0]),
            b(c) ? i.push(c) : (g = document.createElement("img"),
            g.onerror = a,
            g.src = c),
            setTimeout(a, 1e3)
        }
        function d(a) {
            return a && /^(?:ht|f)tp(?:s)?\:\/\/(?:[\w\-\.]+)\.\w+/i.test(a) ? null == g ? (c(a),
            void (f = !1)) : f ? (c(a),
            void (f = !1)) : void h.push(a) : void 0
        }
        var e, f = !0, g = null, h = [], i = [];
        return tvp.$.browser.WeChat ? tvp.$(document).off("tvp:report:continue").on("tvp:report:continue", a) : (tvp.dataset.openLazy = !1,
        a()),
        function(a) {
            if (tvp.$.isString(a))
                return void d(a);
            if ("object" == tvp.$.type(a)) {
                var b, c = {
                    deviceId: "int1",
                    platformId: "int2",
                    appId: "int3",
                    speed: "int4",
                    contentId: "str1",
                    fileName: "str2"
                }, e = {
                    cmd: -1,
                    url: window != top ? document.referrer : document.location.href,
                    ver: tvp.ver.replace(/\$/g, ""),
                    ua: tvp.common.getReportUA && tvp.common.getReportUA(),
                    int1: tvp.common.getDeviceId(),
                    int2: tvp.common.getPlatformId(),
                    int3: 0,
                    int4: 0,
                    str1: "",
                    str2: tvp.filename
                }, f = "http://rcgi.video.qq.com/web_report?";
                for (b in c)
                    b in a && (a[c[b]] = a[b],
                    delete a[b]);
                a = tvp.$.extend(e, a),
                f += tvp.$.param(a),
                d(f)
            }
        }
    }(),
    tvp.ajax = function(a) {
        function b(a, b) {
            a = a || {},
            b = String(b);
            var c, d = /([\d\w_]+)/g;
            for (d.lastIndex = 0; null !== (c = d.exec(b)) && (a = a[c[0]],
            void 0 !== a && null !== a); )
                ;
            return a
        }
        function c(a) {
            return a = a.slice(0, a.indexOf("?")),
            a = a.split("/"),
            {
                host: a[2],
                path: "/" + a.slice(3).join("/")
            }
        }
        function d(a, b, d, e) {
            var f = "http://c.isdspeed.qq.com/code.cgi"
              , g = c(a);
            tvp.report(f, {
                domain: g.host,
                cgi: g.path,
                type: b,
                code: d,
                time: e
            })
        }
        function e(c, e) {
            if ("object" == a.type(c) && c.url && "string" == typeof c.url) {
                "object" == typeof e && (e = a.extend({
                    key: "suc",
                    value: 0
                }, e));
                var f = a.Deferred()
                  , g = a.now()
                  , h = 0
                  , i = a.extend({
                    dataType: "jsonp"
                }, c);
                return a.ajax(i).done(function(i) {
                    var j = i && "object" == typeof e ? b(i, e.key) : 0;
                    h = a.now() - g,
                    i && "undefined" != typeof j && j == e.value ? (d(c.url, 1, j, h),
                    f.resolve(i, h)) : (d(c.url, 3, j, h),
                    f.resolve(i, h))
                }).fail(function(b) {
                    h = a.now() - g,
                    d(c.url, 2, 900, h),
                    f.reject(b, h)
                }),
                f
            }
        }
        return e
    }(tvp.$),
    tvp.reportErr = function(a, b) {
        b = b || "tvperror";
        var c = "http://rcgi.video.qq.com/report/jsbossrep?block=" + b + "&ret=-1&level=4&msg=";
        a = [location.href, navigator.userAgent, tvp.filename, tvp.ver, a].join("|"),
        a = encodeURIComponent(a),
        c += a,
        tvp.report(c)
    }
    ,
    tvp.bossReport = {
        rcmdTextReport: function(a, b, c, d) {
            var e, f, g, h, i, j;
            d = d || 0,
            g = window.navigator.userAgent.toLowerCase(),
            f = g.indexOf("qzone") > -1,
            i = tvp.app.pageType,
            j = tvp.common.getUin(),
            h = 1 === i ? 2 : 2 === i ? 4 : f ? 6 : -1;
            var k = "";
            try {
                k = top.location.href
            } catch (l) {}
            e = {
                oper: a,
                iplat: h,
                tab: b,
                rlist: c,
                host: location.hostname,
                url: k || window.location.href,
                rtype: 0,
                ptype: 21,
                uin: j,
                int1: d,
                int2: tvp.common.getDeviceId()
            };
            var m = tvp.common.getCompleteUrlByProtocol("//btrace.video.qq.com/kvcollect?BossId=2745&Pwd=0&_dc=") + Math.random();
            m += "&" + tvp.$.param(e),
            tvp.report(m)
        },
        window_error: function(a) {
            return
        },
        play_report: function(a) {
            if (a && !tvp.$.isEmptyObject(a)) {
                try {
                    var b = tvp.$.getUrlParam("openid", window != top ? top.location.href.toString() : "");
                    b && a && a.push && a.push("wx_openid=" + b)
                } catch (c) {}
                var d = tvp.common.getCompleteUrlByProtocol("//btrace.video.qq.com/kvcollect?BossId=2865&Pwd=1698957057&_dc=") + Math.random();
                d += "&" + a.join("&"),
                tvp.report(d)
            }
        },
        user_action_report: function(a) {
            var b = "";
            try {
                b = top.location.href
            } catch (c) {}
            var d = {
                sop: a.actions,
                url: a.url || b,
                platform: tvp.common.getDeviceId(),
                vid: a.vid
            }
              , e = tvp.common.getCompleteUrlByProtocol("//btrace.video.qq.com/kvcollect?BossId=2797&Pwd=219856622&_dc=") + Math.random();
            e += "&" + tvp.$.param(d),
            tvp.report(e)
        },
        apprecommend_report: function(a) {
            var b, c = tvp.app.pageType, d = window.navigator.userAgent.toLowerCase(), e = d.indexOf("qzone") > -1;
            b = 1 === c ? 2 : 2 === c ? 4 : e ? 6 : -1;
            var f = "";
            try {
                f = top.location.href
            } catch (g) {}
            var h = {
                oper: a.oper,
                tab: a.tab_id,
                vid: a.vid,
                rlist: a.rlist,
                page: a.page,
                url: f || window.location.href,
                iplat: b,
                ptype: 21,
                rtype: 1
            }
              , i = tvp.common.getCompleteUrlByProtocol("//btrace.video.qq.com/kvcollect?BossId=2745&Pwd=0&_dc=") + Math.random();
            i += "&" + tvp.$.param(h),
            tvp.report(i)
        },
        report_bullet_switch: function(a) {
            a = a || {};
            var b = tvp.$;
            if (a.platform = b.os.android ? 1 : b.os.iphone ? 2 : b.os.ipad ? 3 : 4,
            a.url = window.location.href,
            "undefined" !== b.type(a.user_action)) {
                var c = tvp.common.getCompleteUrlByProtocol("//btrace.video.qq.com/kvcollect?BossId=3084&Pwd=1539562724&_dc=") + Math.random();
                c += "&" + b.param(a),
                tvp.report(c)
            }
        },
        h5_live_quality: function(a) {
            var b = {
                step: a.step,
                sid: a.sid,
                vurl: a.vurl || "",
                guid: a.guid,
                playno: a.playno,
                vdef: a.vdef,
                tpay: a.tpay,
                cpay: a.cpay,
                fplayerver: tvp.ver.replace(/\$/g, ""),
                ftime: +new Date,
                ctime: +new Date,
                rtime: +new Date,
                sdtfrom: tvp.common.get_stdfrom(),
                platform: tvp.common.get_platform(),
                surl: location.href,
                sref: document.referrer,
                vip_type: "",
                adid: "",
                ptag: tvp.common.getPtag(),
                hc_openid: tvp.$.cookie.get("openid")
            }
              , c = tvp.common.getCompleteUrlByProtocol("//btrace.video.qq.com/kvcollect?BossId=3101&Pwd=1037836152&_dc=") + Math.random();
            c += "&" + tvp.$.param(b),
            tvp.report(c)
        },
        appReportShowClick: function(a, b) {
            var c = tvp.common.getCompleteUrlByProtocol("//btrace.video.qq.com/kvcollect?BossId=3267&Pwd=1887953802&")
              , d = {
                cmd: -1,
                url: window != top ? document.referrer : document.location.href,
                ver: tvp.ver.replace(/\$/g, ""),
                ua: tvp.common.getReportUA && tvp.common.getReportUA(),
                int1: tvp.common.getDeviceId(),
                int2: tvp.common.getPlatformId(),
                int3: 0,
                int4: 0,
                str1: "",
                str2: tvp.filename
            };
            a = tvp.$.extend(d, a),
            a.iSta = a.cmd,
            delete a.cmd,
            a = tvp.$.extend(a, {
                iTy: 3267,
                iQQ: tvp.$.cookie && tvp.$.cookie.get && (tvp.$.cookie.get("uin") || tvp.$.cookie.get("luin"))
            }),
            a.iQQ && (a.iQQ = a.iQQ.replace(/\D/gi, "")),
            b && b.config && b.config.isShortVideo ? b.config.useHtml5VerticalBullet ? a.isshortvd = 2 : a.isshortvd = 1 : a.isshortvd = 0,
            b && b.dataset && b.dataset.noShortVideoData && (a.isshortvd = 3),
            c += tvp.$.param(a),
            tvp.report(c)
        },
        appLunchShowClickReport: function(a) {
            var b = "";
            try {
                b = tvp.$.getUrlParam("openid", window != top ? top.location.href.toString() : "")
            } catch (c) {}
            var d = {
                url: window != top ? document.referrer : document.location.href,
                ver: tvp.ver.replace(/\$/g, ""),
                ua: tvp.common.getReportUA && tvp.common.getReportUA(),
                iSta: "3537",
                val: 1,
                int1: tvp.common.getDeviceId(),
                int2: tvp.common.getPlatformId(),
                int3: 0,
                int4: 0,
                str1: "",
                str2: tvp.filename,
                str8: tvp.$.getUrlParam("mmuin")
            };
            d.vid = a.vid,
            d.int6 = a.promotionId,
            d.str4 = a.appCase,
            d.int5 = a.reportStep,
            d.str3 = a.xinwenTpl || "",
            d.str3 = d.str3.replace(/\$/g, ""),
            d.str5 = a.recommendType || "",
            d.str6 = b,
            d.str6 = d.str6 || "",
            d.str7 = tvp.$.getData("tvp-guid") || "",
            a.hasOwnProperty("val") && (d.val = a.val);
            var e = tvp.common.getCompleteUrlByProtocol("//btrace.video.qq.com/kvcollect?BossId=4046&Pwd=176231195&_dc=") + Math.random();
            e += "&" + tvp.$.param(d),
            tvp.app.report(e)
        }
    },
    function() {
        tvp.common && tvp.common.afterWeChatReady && tvp.$.browser.WeChat && tvp.common.afterWeChatReady({
            timeout: 5e3
        }).done(function() {
            tvp.dataset.openLazy = !1,
            tvp.$(document).trigger("tvp:report:continue")
        })
    }(),
    tvp.retCode = {
        snid: 0,
        TYPE: {
            SUC: 1,
            ERR: 2
        },
        config: {
            cgi: "http://isdspeed.qq.com/cgi-bin/v.cgi",
            sampling: 1
        },
        commCode: {
            error: 11,
            MQzone_Err: 12
        },
        report: function(a, b, c, d) {
            if (a && !(isNaN(b) || 1 > b) && "undefined" != typeof c) {
                var e = this.config.cgi;
                e += "?flag1=" + a.toString() + "&flag2=" + b.toString() + "&1=" + tvp.retCode.config.sampling + "&2=" + c,
                d && (e += "&flag3=" + d.toString()),
                tvp.report(e)
            }
        }
    },
    tvp.RetCode = function(a) {
        this.appid = a,
        this.timer = {
            begin: 0,
            end: 0
        },
        this.SNID = tvp.retCode.snid,
        this.isReported = !1,
        tvp.retCode.snid++
    }
    ,
    tvp.RetCode.prototype = {
        begin: function() {
            this.timer.begin = (new Date).valueOf()
        },
        end: function() {
            this.timer.end = this.timer.end || (new Date).valueOf()
        },
        report: function(a, b) {
            if (!this.isReported) {
                this.end();
                var c = this.timer.end - this.timer.begin;
                tvp.retCode.report(this.appid, a, c, b),
                this.isReported = !0
            }
        },
        reportSuc: function() {
            this.report(tvp.retCode.TYPE.SUC)
        },
        reportErr: function(a) {
            a = a || tvp.retCode.commCode.error,
            this.report(tvp.retCode.TYPE.ERR, a)
        }
    },
    function(a, b) {
        var c = {
            poster: "",
            prefix: 0,
            tail: 0,
            tagStart: 0,
            tagEnd: 0,
            duration: "",
            historyStart: 0,
            pay: 0,
            eduext: 0,
            classType: 0,
            yyactid: 0,
            coverId: "",
            title: "",
            isLookBack: 0,
            tstart: 0,
            CDNType: 0,
            vFormat: "",
            LiveReTime: "",
            typeId: 0,
            format: b.os.ipad || b.os.MIPAD ? "mp4" : "auto",
            channelExtParam: {},
            pid: "",
            rid: "",
            guid: "",
            bulletId: "",
            bullet: !1,
            h5BulletId: "",
            authFrom: "",
            authExt: "",
            freeFlowHelper: !1,
            requestAd: -1,
            tpid: ""
        };
        a.VideoInfo = function() {
            function d(a) {
                return a.indexOf("_") < 0 ? a : a.split("_")[0]
            }
            function e(a) {
                return a.indexOf("_") < 0 ? 0 : parseInt(a.split("_")[1])
            }
            function f(a) {
                for (var b = [], c = a.split("|"), e = 0; e < c.length; e++)
                    b.push(d(c[e]));
                return b.join("|")
            }
            function g() {
                p && p instanceof a.Player && p.on(a.ACTION.onVodH5Init, function() {
                    var b;
                    "auto" === p.config.isHtml5UseHLS && a.common.isUseHLS() || p.config.isHtml5UseHLS || (b = n.getMP4Url(),
                    n.callGetMp4UrlDefer.resolve(b))
                })
            }
            var h = ""
              , i = ""
              , j = 0
              , k = 0
              , l = ""
              , m = ""
              , n = this
              , o = {}
              , p = null
              , q = {}
              , r = null;
            b.extend(o, c),
            this.data = {},
            this.url = "",
            this.lastQueryVid = "";
            var s = b.getData("tvp-guid");
            s ? c.guid = s : (s = b.createGUID(),
            b.setData("tvp-guid", s),
            c.guid = s),
            this.callGetMp4UrlDefer = b.Deferred(),
            b.each(o, function(a) {
                var b = a.charAt(0).toUpperCase() + a.substr(1);
                n["set" + b] = function(b) {
                    return o[a] = b,
                    this
                }
                ,
                n["get" + b] = function() {
                    return o[a]
                }
            }),
            this.setCurPlayer = function(a) {
                p = a,
                g()
            }
            ,
            this.setVid = function(c) {
                if (a.$.isString(c)) {
                    if (this.clear(),
                    l = c,
                    c.indexOf("|") < 0) {
                        var g = d(c);
                        h = g,
                        k = e(c),
                        i = g
                    } else {
                        var j = c.split("|");
                        h = d(j[0]),
                        k = e(j[0]),
                        i = f(c)
                    }
                    return h = b.filterXSS(h),
                    i = b.filterXSS(i),
                    this
                }
            }
            ,
            this.getVid = function() {
                return h
            }
            ,
            this.getVidList = function() {
                return i
            }
            ,
            this.getVidArray = function() {
                return i.split("|")
            }
            ,
            this.getIdx = function() {
                return k
            }
            ,
            this.getDuration = function() {
                if (!o.duration)
                    return this.data && this.data.vl && b.isArray(this.data.vl.vi) && this.data.vl.vi.length > 0 && 0 != this.data.vl.vi[0].td ? this.data.vl.vi[0].td : 0;
                for (var a = o.duration.split("|"), c = 0, d = 0, e = a.length; e > d; d++)
                    c += parseInt(a[d]);
                return c
            }
            ,
            this.getFileSize = function() {
                return this.data && this.data.vl && this.data.vl.vi && this.data.vl.vi[0] && this.data.vl.vi[0].fs ? parseInt(this.data.vl.vi[0].fs, 10) : 0
            }
            ,
            this.getTimelong = function() {
                return this.getDuration()
            }
            ,
            this.getEndOffset = function() {
                return this.getDuration() - this.getTail()
            }
            ,
            this.setChannelId = function(b) {
                return a.$.isString(b) ? (m = b,
                this) : void 0
            }
            ,
            this.getChannelId = function() {
                return m
            }
            ,
            this.getFullVid = function() {
                return 0 == this.getIdx() ? d(this.getVid()) : d(this.getVid()) + "_" + this.getIdx()
            }
            ,
            this.getTitle = function() {
                return "" === o.title && this.data && ("mp4" == this.data.playtype && this.data.vl && b.isArray(this.data.vl.vi) && this.data.vl.vi.length > 0 ? o.title = this.data.vl.vi[0].ti || "" : "hls" == this.data.playtype && b.isArray(this.data.vi) && this.data.vi.length > 0 && (o.title = this.data.vi[0].title || "")),
                o.title
            }
            ,
            this.clear = function() {
                h = "",
                i = "",
                j = 0,
                k = 0,
                m = "",
                r = null,
                q = {},
                b.extend(o, c),
                this.data = {},
                this.url = ""
            }
            ,
            this.clone = function(a) {
                a.setVid(l),
                a.setChannelId(m);
                for (var c in o) {
                    var d = c.charAt(0).toUpperCase() + c.substr(1);
                    a["set" + d](this["get" + d]())
                }
                b.extend(a.data, this.data)
            }
            ,
            this.getVideoSnap = function() {
                var b = [];
                return b[0] = a.common.getVideoSnap(h, k),
                b[1] = b[0].replace("_160_90_3", "_1"),
                b[2] = b[1].replace("_1.jpg", ".png"),
                b
            }
            ,
            this.getMP4Url = function(c, d) {
                var e = ""
                  , f = this.getVidArray()
                  , g = "";
                if (b.isString(c)) {
                    if (e = c,
                    b.inArray(c, f) < 0) {
                        var h = b.Deferred();
                        return h.reject(),
                        h
                    }
                } else
                    isNaN(c) ? (e = this.getVid(),
                    g = this.getFullVid()) : g = e = this.getVidArray()[c >= f.length ? 0 : c];
                this.lastQueryVid = g || e,
                this.setRid(b.createGUID());
                var i, j = e + "_mp4_" + this.getFormat();
                if (d && (i = b.Deferred()),
                "object" == b.type(q[j]) && b.isFunction(q[j].done) && "resolved" == q[j].state())
                    return q[j];
                q[j] = b.Deferred();
                var k = this;
                return a.h5Helper.loadVideoUrlByVid({
                    vid: e,
                    isPay: this.getPay(),
                    eduext: o.eduext ? o.eduext : 0,
                    yyactid: o.yyactid ? o.yyactid : 0,
                    classType: o.classType,
                    fmt: this.getFormat(),
                    guid: a.$.getData("tvp-guid"),
                    commonAuthData: {
                        auth_from: this.getAuthFrom(),
                        auth_ext: this.getAuthExt()
                    },
                    appId: p instanceof a.Player ? p.config.appid : 0,
                    contentId: p instanceof a.Player ? p.config.contentId : ""
                }).done(function(a, c, d, e) {
                    window.txvLogin && txvLogin.isLogin && txvLogin.isLogin(function(a) {
                        c && 8 === c.st ? k.tpay = 0 : k.tpay = 2,
                        a || (k.tpay = -2)
                    });
                    var f = k.getFreeFlowHelper()
                      , g = !1
                      , h = function(a) {
                        "array" === b.type(a) ? (k.url = a[0],
                        k.dataHls = a,
                        a = a[0]) : k.url = a,
                        k.data = c,
                        k.data.playtype = "mp4",
                        "undefined" != typeof d && (k.videoSlice = d),
                        "undefined" != typeof e && (k.dataJson = e,
                        k.setDuration(e.preview + "")),
                        i ? i.resolve(a) : q[j] && q[j].resolve(a)
                    };
                    "function" === b.type(f) ? (f(a, function(a) {
                        g = !0,
                        h(a)
                    }),
                    setTimeout(function() {
                        g || h(a)
                    }, 5e3)) : h(a)
                }).fail(function(a, c) {
                    q[j] && q[j].reject(a, b.isUndefined(c) ? 0 : c)
                }),
                i ? i : q[j]
            }
            ,
            this.switchDefinition = function(c) {
                var d = b.Deferred()
                  , e = this;
                return a.h5Helper.loadVideoUrlByVid({
                    vid: this.getVid(),
                    isPay: this.getPay(),
                    guid: a.$.getData("tvp-guid"),
                    eduext: this.getEduext(),
                    yyactid: this.getYyactid(),
                    classType: this.getClassType(),
                    fmt: c || this.getFormat(),
                    appId: p instanceof a.Player ? p.config.appid : 0,
                    contentId: p instanceof a.Player ? p.config.contentId : ""
                }).done(function(a, c, f, g) {
                    var h = e.getFreeFlowHelper()
                      , i = !1
                      , j = function(a) {
                        e.url = a,
                        e.data = c,
                        e.data.playtype = "mp4",
                        "undefined" != typeof f && (e.videoSlice = f),
                        "undefined" != typeof g && (e.dataJson = g,
                        e.setDuration(g.preview + "")),
                        d.resolve(a)
                    };
                    "function" === b.type(h) ? (h(a, function(a) {
                        i = !0,
                        j(a)
                    }),
                    setTimeout(function() {
                        i || j(a)
                    }, 5e3)) : j(a)
                }).fail(function(a, c) {
                    d.reject(a, b.isUndefined(c) ? 0 : c)
                }),
                d
            }
            ,
            this.getHLS = function(c) {
                var d = ""
                  , e = this.getVidArray()
                  , f = "";
                if (b.isString(c)) {
                    if (d = c,
                    b.inArray(c, e) < 0) {
                        var g = b.Deferred();
                        return g.reject(),
                        g
                    }
                } else
                    isNaN(c) ? (d = this.getVid(),
                    f = this.getFullVid()) : f = d = this.getVidArray()[c >= e.length ? 0 : c];
                this.lastQueryVid = f || d,
                this.setRid(b.createGUID());
                var h = d + "_hls_" + this.getFormat();
                if ("object" == b.type(q[h]) && b.isFunction(q[h].done) && "resolved" == q[h].state())
                    return q[h];
                q[h] = b.Deferred();
                var i = this;
                return a.h5Helper.loadHLSUrlByVid({
                    vid: d,
                    isPay: this.getPay(),
                    fmt: this.getFormat(),
                    appId: p instanceof a.Player ? p.config.appid : 0,
                    contentId: p instanceof a.Player ? p.config.contentId : ""
                }).done(function(a, b) {
                    i.url = a,
                    i.data = b,
                    i.data.playtype = "hls",
                    q[h] && q[h].resolve(a)
                }).fail(function(a, c) {
                    q[h] && q[h].reject(a, b.isUndefined(c) ? 0 : c)
                }),
                q[h]
            }
            ,
            this.getPlayFormat = function() {
                if (!b.isPlainObject(this.data))
                    return this.getFormat();
                if ("object" == b.type(this.data.fl) && b.isArray(this.data.fl.fi))
                    for (var a = this.data.fl.fi, c = 0; c < a.length; c++)
                        if (1 == a[c].sl)
                            return a[c].name;
                return this.getFormat()
            }
            ,
            this.getSrtLangList = function() {
                return "object" == b.type(this.data.sfl) && b.isArray(this.data.sfl.fi) ? (b.each(this.data.sfl.fi, function(b, c) {
                    c.desc = a.html5lang.getSrtName(c.id)
                }),
                this.data.sfl.fi) : []
            }
            ,
            this.getSrtUrlList = function(c) {
                if (b.isUndefined(c)) {
                    var d = this.getSrtLangList();
                    if (!(d.length > 0))
                        return b.Deferred().reject(-1);
                    c = d[0]
                }
                if ("object" != b.type(c) && !isNaN(c)) {
                    for (var e = 0, f = this.data.sfl.fi.length; f > e; e++)
                        if (this.data.sfl.fi[e].id == c) {
                            c = this.data.sfl.fi[e];
                            break
                        }
                    if ("object" != b.type(c))
                        return b.Deferred().reject(-2)
                }
                var g = this.getVid()
                  , h = g + "_srt_" + c.id;
                if ("object" == b.type(q[h]) && b.isFunction(q[h].done) && "resolved" == q[h].state())
                    return q[h];
                q[h] = b.Deferred();
                var i = this;
                return a.h5Helper.loadSRT({
                    vid: g,
                    sflid: c.id,
                    pid: i.getPid()
                }).done(function(a) {
                    var d = [];
                    "object" == b.type(a.ul) && b.isArray(a.ul.ui) && b.each(a.ul.ui, function(a, b) {
                        d.push([b.url, "lang=" + c.name].join("?"))
                    }),
                    q[h].resolve(d)
                }).fail(function(a) {
                    q[h].reject(a)
                }),
                q[h]
            }
            ,
            this.getFormatList = function() {
                if ("object" == b.type(r) && b.isFunction(r.done))
                    return r;
                r = b.Deferred();
                var a = this
                  , c = ["sd", "hd", "shd", "fhd"]
                  , d = function() {
                    var d = [];
                    return b.isPlainObject(a.data.fl) && b.isArray(a.data.fl.fi) ? (b.each(a.data.fl.fi, function(a, e) {
                        -1 != b.inArray(e.name, c) && d.push(e.name)
                    }),
                    d) : []
                };
                return this.getMP4Url().done(function() {
                    r.resolve({
                        list: d()
                    })
                }).fail(function() {
                    r.reject({
                        list: []
                    })
                }),
                r
            }
            ,
            this.hasHardSubtitle = function() {
                for (var a = this.getFormat(), b = 0, c = this.data.fl.fi.length; c > b; b++) {
                    var d = this.data.fl.fi[b];
                    if (d.name == a)
                        return !!d.sb
                }
                return !1
            }
            ,
            this.hasSoftSubtitle = function() {
                return "object" == b.type(this.data.sfl) && b.isArray(this.data.sfl.fi) && this.data.sfl.fi.length > 0
            }
        }
        ,
        a.PLAYTYPE = {
            LIVE: "1",
            VOD: "2"
        }
    }(tvp, tvp.$),
    function(a) {
        tvp.speedlimit = {
            buildResult: function(b) {
                var c = !1
                  , d = !1
                  , e = a.Deferred();
                return a.browser.MQQ && a.browser.version > 5.1 && (d = !0),
                d && this.mqqGetResult(b).then(function(a) {
                    a ? e.resolve(a) : e.resolve()
                }),
                d && (c = !0),
                c || e.resolve(),
                setTimeout(function() {
                    e.resolve()
                }, 3e3),
                e
            },
            mqqGetResult: function(b) {
                function c() {
                    if (window.x5 && window.x5.getBrowserSignature)
                        try {
                            var c = parseInt(tvp.$.now() / 1e3, 10);
                            x5.getBrowserSignature("vid:" + b + "[" + c + "]", function(b) {
                                b ? d.resolve({
                                    bver: a.browser.version,
                                    pkckey: b
                                }) : d.resolve()
                            }, function() {
                                d.resolve()
                            })
                        } catch (e) {
                            d.resolve()
                        }
                    else
                        d.resolve();
                    setTimeout(function() {
                        d.resolve()
                    }, 300)
                }
                var d = a.Deferred();
                return window.x5 && window.x5.getBrowserSignature ? c() : tvp.app ? (tvp.app.loadMqqDefer || (tvp.app.loadMqqDefer = tvp.app.loadMqqAPI()),
                tvp.app.loadMqqDefer.done(function() {
                    c()
                }),
                tvp.app.loadMqqDefer.fail(function() {
                    d.resolve()
                })) : d.resolve(),
                d
            }
        }
    }(tvp.$);
    var e = {};
    e.ha = function(a) {
        function b(a, b) {
            return ((a >> 1) + (b >> 1) << 1) + (1 & a) + (1 & b)
        }
        for (var c = [], d = 0; 64 > d; )
            c[d] = 0 | 4294967296 * Math.abs(Math.sin(++d));
        var e = function(d) {
            for (var e, f, g, h, i = [], j = unescape(encodeURI(d)), k = j.length, l = [e = 1732584193, f = -271733879, ~e, ~f], m = 0; k >= m; )
                i[m >> 2] |= (j.charCodeAt(m) || 128) << 8 * (m++ % 4);
            for (i[d = (k + 8 >> 6) * a + 14] = 8 * k,
            m = 0; d > m; m += a) {
                for (k = l,
                h = 0; 64 > h; )
                    k = [g = k[3], b(e = k[1], (g = b(b(k[0], [e & (f = k[2]) | ~e & g, g & e | ~g & f, e ^ f ^ g, f ^ (e | ~g)][k = h >> 4]), b(c[h], i[[h, 5 * h + 1, 3 * h + 5, 7 * h][k] % a + m]))) << (k = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, a, 23, 6, 10, 15, 21][4 * k + h++ % 4]) | g >>> 32 - k), e, f];
                for (h = 4; h; )
                    l[--h] = b(l[h], k[h])
            }
            for (d = ""; 32 > h; )
                d += (l[h >> 3] >> 4 * (1 ^ 7 & h++) & 15).toString(a);
            return d
        };
        return e
    }(16),
    e.stringToHex = function(a) {
        for (var b = "", c = new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"), d = 0; d < a.length; d++)
            b += c[a.charCodeAt(d) >> 4] + c[15 & a.charCodeAt(d)];
        return b
    }
    ,
    e.hexToString = function(a) {
        for (var b = "", c = "0x" == a.substr(0, 2) ? 2 : 0; c < a.length; c += 2)
            b += String.fromCharCode(parseInt(a.substr(c, 2), 16));
        return b
    }
    ,
    e._Seed = "#$#@#*ad",
    e.tempcalc = function(a, b) {
        for (var c = "", d = 0; d < a.length; d++)
            c += String.fromCharCode(a.charCodeAt(d) ^ b.charCodeAt(d % 4));
        return c
    }
    ,
    e.u1 = function(a, b) {
        for (var c = "", d = b; d < a.length; d += 2)
            c += a.charAt(d);
        return c
    }
    ,
    e._urlStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    e.urlenc = function(a, b, c) {
        for (var d, f, g, h, i, j, k, l = "", m = 0; m < a.length; )
            d = a.charCodeAt(m++),
            f = a.charCodeAt(m++),
            g = a.charCodeAt(m++),
            15 == m && (l += "A",
            l += b,
            l += c),
            h = d >> 2,
            i = (3 & d) << 4 | f >> 4,
            j = (15 & f) << 2 | g >> 6,
            k = 63 & g,
            isNaN(f) ? j = k = 64 : isNaN(g) && (k = 64),
            l = l + e._urlStr.charAt(h) + e._urlStr.charAt(i) + e._urlStr.charAt(j) + e._urlStr.charAt(k);
        return l
    }
    ,
    e.$xx = function(a, b, c, d, f) {
        f = f || parseInt(+new Date / 1e3);
        var d = ("" + d).charAt(0)
          , g = ""
          , h = ""
          , i = {
            plt: a || "",
            vid: b || "",
            std: c || "",
            sts: d || "",
            ts: f,
            rf: g,
            ua: h
        };
        i = window.JSON ? JSON.stringify(i) : function() {
            var a = [];
            for (var b in i)
                a.push('"' + b + '":"' + i[b] + '"');
            return "{" + a.join(",") + "}"
        }(i);
        var j = e.hexToString(e.ha(a + b + f + e._Seed + g + h + d.charAt(0) + c))
          , k = e.urlenc(e.tempcalc(j, e._Seed), d.charAt(0), f)
          , l = e.urlenc(e.tempcalc(j, "86FG@hdf"), d.charAt(0), f)
          , m = e.u1(k, 0)
          , n = e.u1(k, 1);
        return {
            p: i,
            u: k,
            c: l,
            u1: m,
            u2: n,
            t: f
        }
    }
    ,
    function(a, b) {
        function c() {
            return this.init()
        }
        var d = [{
            reg: function() {
                return this.cfg.noAuth ? !0 : !1
            },
            request: function(a) {
                var b = this;
                a.resolve({
                    param: {
                        vids: b.cfg.vid,
                        defaultfmt: b.cfg.fmt
                    }
                })
            }
        }, {
            reg: function() {
                return this.cfg.eduext ? !0 : !1
            },
            request: function(a) {
                var b = this;
                a.resolve({
                    cgi: b.cfg2.cgi.edugetvinfo,
                    param: {
                        eduext: b.cfg.eduext,
                        platform: 261001,
                        vid: b.cfg.vid,
                        defn: b.cfg.fmt
                    }
                })
            }
        }, {
            reg: function() {
                return 1 === this.cfg.classType ? !0 : !1
            },
            request: function(a) {
                var b = this;
                a.resolve({
                    cgi: b.cfg2.cgi.edugetvinfo,
                    param: {
                        platform: 221001,
                        vid: b.cfg.vid,
                        defn: b.cfg.fmt
                    }
                })
            }
        }, {
            reg: function() {
                return this.cfg.yyactid ? !0 : !1
            },
            request: function(a) {
                var b = this;
                a.resolve({
                    cgi: b.cfg2.cgi.yygetinfo,
                    cgi2: b.cfg2.cgi.yygetkey,
                    param: {
                        actid: b.cfg.yyactid,
                        platform: 181001,
                        vids: b.cfg.vid,
                        defaultfmt: b.cfg.fmt
                    }
                })
            }
        }, {
            reg: function() {
                if (window !== top && "v.qq.com" === location.hostname && "/iframe/player.html" === location.pathname) {
                    var b = a.common.getParams(location.href);
                    if (b && b.cKey && b.encryptVer && b.platform)
                        return this.params = b,
                        !0
                }
                return !1
            },
            request: function(a) {
                var b, c = this, d = {
                    cgi: c.cfg2.cgi.getinfo,
                    param: {
                        encryptVer: c.params.encryptVer,
                        platform: c.params.platform,
                        cKey: c.params.cKey,
                        vids: c.cfg.vid,
                        defaultfmt: c.cfg.fmt
                    }
                };
                try {
                    b = window.parent.location.href
                } catch (e) {}
                b && (d.param.wxrefer = b),
                a.resolve(d)
            }
        }, {
            reg: function() {
                return a.common.is_mqq_buluo() ? !0 : !1
            },
            request: function(b) {
                if (!window.getBrowserSignature)
                    return void b.reject();
                var c = this;
                window.getBrowserSignature(c.cfg.vid, function(d) {
                    var e;
                    if (d && d.data)
                        try {
                            var f = JSON.parse(d.data);
                            f && f.result && f.result.token && (e = f.result.token)
                        } catch (g) {}
                    e ? b.resolve({
                        param: {
                            cKey: e,
                            encryptVer: "6.4",
                            platform: a.$.os.ios ? "170408" : "170308",
                            vids: c.cfg.vid,
                            defaultfmt: c.cfg.fmt
                        }
                    }) : b.reject()
                })
            }
        }, {
            reg: function() {
                return b.browser.MQQ && !a.$.browser.MQQClient && window === top ? !0 : !1
            },
            request: function(c) {
                var d, e, f = this, g = "undefined" != typeof f.cfg.svr_time ? f.cfg.svr_time + "" : parseInt(+new Date / 1e3) + "", h = function() {
                    var a, d, e = {
                        vid: f.cfg.vid
                    };
                    e.timestamp = g,
                    b.os.ios ? (a = x5.ios.getBrowserSignature,
                    d = b.os.ipad ? e : "vid:" + e.vid + "[" + e.timestamp + "]") : (a = x5.android.getBrowserSignature,
                    d = "vid:" + e.vid + "[" + e.timestamp + "]"),
                    a(d, function(a) {
                        if ("object" == typeof a && a.key && a.ver && a.platform) {
                            var b = {
                                cgi: f.cfg.cgi.getvinfo,
                                param: {
                                    cKey: a.key,
                                    encryptVer: a.ver,
                                    platform: a.platform,
                                    vid: f.cfg.vid,
                                    defn: f.cfg.fmt
                                }
                            };
                            c.resolve(b)
                        } else if ("object" == typeof a && a.data) {
                            var b = {
                                cgi: f.cfg.cgi.getvinfo,
                                param: {
                                    cKey: a.data,
                                    encryptVer: "4.0",
                                    platform: "161001",
                                    vid: f.cfg.vid,
                                    defn: f.cfg.fmt
                                }
                            };
                            c.resolve(b)
                        } else if ("string" == typeof a) {
                            var b = {
                                cgi: f.cfg.cgi.getvinfo,
                                param: {
                                    cKey: a,
                                    encryptVer: "4.0",
                                    platform: "161001",
                                    vid: f.cfg.vid,
                                    defn: f.cfg.fmt
                                }
                            };
                            c.resolve(b)
                        } else
                            c.reject()
                    }, function() {
                        c.reject()
                    })
                };
                d = window.x5 && x5.ios && "function" === b.type(x5.ios.getBrowserSignature),
                e = window.x5 && "function" === b.type(window.x5.getBrowserSignature),
                d || e ? h() : a.app.loadMqqAPI().done(function() {
                    d = window.x5 && x5.ios && "function" === b.type(x5.ios.getBrowserSignature),
                    e = window.x5 && "function" === b.type(window.x5.getBrowserSignature),
                    d || e ? h() : c.reject()
                }).fail(function() {
                    c.reject()
                })
            }
        }, {
            reg: function() {
                return b.browser.qqnews || b.browser.kuaibao ? !0 : !1
            },
            request: function(a) {
                var c, d, e, f = this, g = f.cfg.vid, h = "undefined" != typeof f.cfg.svr_time ? f.cfg.svr_time + "" : parseInt(+new Date / 1e3) + "", i = "TVP_KUAIBAO_CB_" + h.substr(-4, 4);
                if (window.top !== window) {
                    try {
                        var j = window.top.location.href;
                        j && (c = window.top,
                        d = c.document)
                    } catch (k) {
                        e = !0
                    }
                    if (e)
                        return void a.reject()
                } else
                    c = window,
                    d = c.document;
                c[i] = function(b) {
                    var c;
                    try {
                        c = JSON.parse(b)
                    } catch (d) {}
                    if (c && c.key && c.ver && c.platform && c.sdtfrom) {
                        var e = {
                            param: {
                                cKey: c.key,
                                encryptVer: c.ver,
                                platform: c.platform,
                                sdtfrom: c.sdtfrom,
                                vid: f.cfg.vid,
                                defaultfmt: "mp4",
                                clip: 4
                            }
                        };
                        a.resolve(e)
                    } else
                        a.reject()
                }
                ;
                var l = function() {
                    var a = {
                        method: "getCKey",
                        types: ["string", "string", "string"],
                        args: [g, h, i],
                        instanceName: "TencentNewsScriptControllerJsInterface"
                    }
                      , b = "jsbridge://get_with_json_data?json=" + encodeURIComponent(JSON.stringify(a)) + "&_t=" + h
                      , c = new Image;
                    c.src = b
                }
                  , m = function() {
                    var a = function() {
                        c.getBrowserSignature(g, h, i)
                    };
                    "function" == typeof c.getBrowserSignature ? (a(),
                    d.addEventListener("TencentNewsJSInjectionComplete", function() {
                        a()
                    })) : d.addEventListener("TencentNewsJSInjectionComplete", function() {
                        a()
                    })
                };
                b.os.ios ? m() : b.os.android ? l() : a.reject()
            }
        }, {
            reg: function() {
                return b.browser.douban || b.browser.liebao ? !0 : !1
            },
            request: function(a) {
                var b, c = this, d = "undefined" != typeof c.cfg.svr_time ? c.cfg.svr_time + "" : parseInt(+new Date / 1e3) + "", e = function() {
                    if (!window.getBrowserSignature)
                        return void a.reject();
                    try {
                        b = window.getBrowserSignature(c.cfg.vid, d)
                    } catch (e) {}
                    if (b && b.key && b.ver && b.platform) {
                        var f = {
                            param: {
                                cKey: b.key,
                                encryptVer: b.ver,
                                platform: b.platform,
                                vid: c.cfg.vid,
                                defaultfmt: c.cfg.fmt
                            }
                        };
                        a.resolve(f)
                    } else
                        a.reject()
                };
                e()
            }
        }, {
            reg: function() {
                return a.$.browser.MQQClient && "mqqcartoon" === a.$.getUrlParam("openS") ? !0 : !1
            },
            request: function(b) {
                var c = this;
                a.$.getScript("http://imgcache.qq.com/club/client/comic/release/js/util/qqComicVideoAuth.js?t=" + a.ts, function() {
                    "function" === a.$.type(window.getBrowserSignature) ? window.getBrowserSignature(c.cfg.vid, function(a) {
                        if (a && -1 !== a) {
                            var d = {
                                cgi: c.cfg2.cgi.getvinfo,
                                param: {
                                    cKey: a,
                                    encryptVer: "6.4",
                                    platform: "170101",
                                    vid: c.cfg.vid,
                                    defn: c.cfg.fmt
                                }
                            };
                            b.resolve(d)
                        }
                    }) : b.reject()
                })
            }
        }];
        c.prototype = {
            init: function() {
                return this.reg_request
            },
            reg_request: function(c, e) {
                var f = this;
                f.cfg = c,
                f.cfg2 = e;
                var g = b.Deferred()
                  , h = !1;
                return a.config && a.config.authRules && a.config.authRules.length && (d = d.concat(a.config.authRules)),
                b(d).each(function(a, c) {
                    return "function" !== b.type(c.reg) ? !0 : "function" !== b.type(c.request) ? !0 : c.reg.call(f) ? (h = !0,
                    c.request.call(f, g),
                    !1) : !0
                }),
                h || g.reject(),
                setTimeout(function() {
                    g.reject()
                }, 6e3),
                g
            }
        },
        a.auth = new c
    }(tvp, tvp.$),
    function(a, b) {
        function c() {
            var a = "view.inews.qq.com" === k.host;
            return location.hostname.indexOf("caixin.com") > -1 ? "v1093" : b.os.iphone || b.os.ipod ? a ? "v3110" : "v3010" : b.os.ipad ? a ? "v4110" : "v4010" : b.os.android ? b.os.tablet ? "v6010" : a ? "v5110" : "v5010" : b.browser.IEMobile ? "v7010" : "v1010"
        }
        function d(a, b) {
            for (var c = 0, d = b.length; d > c; c++)
                if (1 == b[c].sl)
                    return b[c].id;
            return -1
        }
        function f(c) {
            var d = {
                cmd: 3532,
                speed: 0,
                appId: 0,
                contentId: "",
                vid: "",
                itype: 1,
                val: 0,
                val2: 0,
                str3: ""
            };
            c = b.extend(d, c),
            a.report(c)
        }
        function g(a) {
            a = a || {};
            var d, e = !1;
            return a.alias && "string" == typeof a.fn && a.vid && (a.fn = a.fn.replace(a.vid, a.alias),
            e = !0),
            l && "string" == typeof a.path && (a.path = a.path.replace(/\/\/(.+?)(\/|#|$|\?)/, function() {
                return arguments.length > 1 ? arguments[0].replace(arguments[1], l) : arguments[0]
            })),
            d = a.path.indexOf("?") > -1 ? a.path + "&" + a.fn + "&vkey=" + a.vkey + "&br=" + a.br + "&platform=2&fmt=" + a.fmt + "&level=" + a.level + "&sdtfrom=" + c() : a.path + a.fn + "?vkey=" + a.vkey + "&br=" + a.br + "&platform=2&fmt=" + a.fmt + "&level=" + a.level + "&sdtfrom=" + c(),
            b.isString(a.sha) && a.sha.length > 0 && (d += "&sha=" + a.sha),
            e && (d += "&vidalias=1"),
            d
        }
        function h(a) {
            if ("object" !== b.type(a))
                return 0;
            if (!(a.ul && a.ul.ui && a.ul.ui.length))
                return 0;
            var c = [];
            return b(a.ul.ui).each(function(a, b) {
                b.url && b.hls && b.hls.pt && c.push(b.url + b.hls.pt)
            }),
            0 === c.length ? 0 : c
        }
        function i(a) {
            return function(c) {
                f(b.extend(a, c))
            }
        }
        function j(d, f) {
            f = f || "";
            var g, h, i, j = "", k = 1, l = {};
            if ("object" == typeof e && "function" == typeof e.$xx && "string" == typeof d) {
                g = b.getUrlParam("platform", d),
                h = b.getUrlParam("vids", d),
                h || (h = b.getUrlParam("vid", d)),
                i = c(),
                d.indexOf("mvgetinfo?") > -1 && (b.os.iphone ? i = "V3013" : b.os.ipad ? i = "V4013" : b.os.android && (i = "V5013"));
                try {
                    l = e.$xx(g, h, i, k, f)
                } catch (m) {
                    "function" == typeof a.reportErr && m && m.message && a.reportErr(m.message)
                }
                l && (j = j + "&_qv_rmt=" + l.u1,
                j = j + "&_qv_rmt2=" + l.u2,
                b.getUrlParam("sdtfrom", d) || (j = j + "&sdtfrom=" + i),
                d = d + (-1 == d.indexOf("?") ? "?" : "&") + j,
                b.cookie.set("qv_als", l.c))
            }
            return d
        }
        var k = {
            isHLS: !1,
            isPay: !1,
            vid: "",
            fmt: "auto",
            platform: 11001,
            host: window != top ? document.referrer : document.location.host
        }
          , l = "";
        k.cgi = function() {
            if ("view.inews.qq.com" === k.host) {
                var c = "";
                return b.browser.WeChat && (c = "nocache=1&"),
                {
                    getinfo: a.common.get_request_url("getinfoInews"),
                    getkey: a.common.get_request_url("getkeyInews") + c
                }
            }
            return {
                getinfo: a.common.get_request_url("getinfo") + "?callback=?&",
                getvinfo: a.common.get_request_url("getvinfo") + "?callback=?&",
                edugetvinfo: a.common.get_request_url("edugetvinfo") + "?callback=?&",
                yygetinfo: a.common.get_request_url("mvgetinfo") + "?callback=?&",
                yygetkey: a.common.get_request_url("mvgetkey") + "?callback=?&",
                getkey: a.common.get_request_url("getkey") + "?callback=?&"
            }
        }(),
        k.retryCgi = function() {
            return {
                getinfo: "//bkh5vv.video.qq.com/getinfo?callback=?&",
                getkey: "//bkh5vv.video.qq.com/getkey?callback=?&"
            }
        }(),
        a.h5Helper = {
            loadVideoUrlByVid: function(c) {
                var d = "";
                return a.speedlimit ? (d = b.Deferred(),
                a.speedlimit.buildResult().done(function(b) {
                    var e = a.h5Helper.loadVideoUrlByVid_base(c, b);
                    e.done(function(a, b) {
                        d.resolve(a, b)
                    }),
                    e.fail(function(a, b) {
                        d.reject(a, b)
                    })
                })) : d = a.h5Helper.loadVideoUrlByVid_base(c),
                d
            },
            loadVideoUrlByVid_base: function(e, f) {
                var l, m, n = {}, o = {}, p = 0, q = b.Deferred(), r = location.protocol + "//" + location.hostname, s = top !== window;
                if (s)
                    try {
                        r = top.location.protocol + "//" + top.location.hostname
                    } catch (t) {
                        r = document.referrer || "",
                        r = r.split("?")[0]
                    }
                b.extend(b.extend(n, k), e);
                var u, v = new a.RetCode(100126), w = !1, x = k.cgi.getinfo, y = b.now(), z = 0, A = "", B = b.noop, C = k.cgi.getkey;
                u = {
                    platform: n.platform,
                    charge: n.isPay ? 1 : 0,
                    otype: "json",
                    ehost: r,
                    sphls: a.common.isSupportM3u8() ? 1 : 0,
                    sb: 1,
                    nocache: b.browser.MQQClient || b.browser.WeChat ? 1 : 0,
                    _rnd: (new Date).valueOf(),
                    guid: n.guid,
                    appVer: a.ver && a.ver.replace(/\$/g, "")
                },
                b.browser.WeChat && (b.os.ipad ? u.device = "60101" : b.os.iphone ? u.device = "60401" : b.os.android && !b.os.tablet ? u.device = "60301" : b.os.android && b.os.tablet && (u.device = "60501")),
                n.commonAuthData && (n.commonAuthData.auth_from || n.commonAuthData.auth_ext) && (n.commonAuthData.auth_from && (u.auth_from = n.commonAuthData.auth_from),
                n.commonAuthData.auth_ext && (u.auth_ext = n.commonAuthData.auth_ext)),
                e.retryDefer && b.isFunction(e.retryDefer.reject) && (w = !0,
                q = e.retryDefer,
                x = k.retryCgi.getinfo,
                C = k.retryCgi.getkey),
                e.loadingAdCgi && (x = e.loadingAdCgi,
                e.noAuth = !0),
                e.defer && (q = e.defer),
                B = i({
                    itype: 1,
                    val2: w ? 1 : 0,
                    str3: A,
                    vid: n.vid,
                    appId: n.appId,
                    contentId: n.contentId
                }),
                v.begin(),
                B();
                var D = function(d) {
                    if (z = b.now() - y,
                    d && d.s ? "o" != d.s ? (p = d.em || 50,
                    m = d.exem) : d.vl && d.vl.vi && b.isArray(d.vl.vi) && 0 != d.vl.cnt ? l = d.vl.vi[0] : p = 68 : p = 50,
                    0 != p || 5 == l.fst && b.isPlainObject(l.ul) && b.isArray(l.ul.ui) && 0 != l.ul.ui.length ? 0 == p && 2 != l.st && (8 != l.st ? p = 62 : d.vl && d.vl.vi && d.vl.vi[0] && d.vl.vi[0].td && parseInt(d.vl.vi[0].td) > parseInt(d.preview) && (d.exem = 1)) : p = 62,
                    e.yyactid && 83 === p && (m = -3),
                    a.common.is_mqq_buluo() && (m = 0),
                    0 != p)
                        return B({
                            val: p,
                            speed: z
                        }),
                        v.reportErr(p),
                        void q.reject(p, m);
                    if (v.reportSuc(),
                    B({
                        val: 0,
                        speed: z
                    }),
                    e.loadingAdCgi)
                        return void q.resolve(l.ul.ui[0].url, {
                            vl: d.vl,
                            fl: d.fl,
                            sfl: d.sfl,
                            exem: d.exem,
                            preview: d.preview
                        });
                    if (3 == d.dltype)
                        m = h(l),
                        q.resolve(m, {
                            vl: d.vl,
                            fl: d.fl,
                            sfl: d.sfl,
                            exem: d.exem,
                            preview: d.preview
                        });
                    else {
                        if (l.fvkey)
                            return m = g({
                                path: l.ul.ui[0].url,
                                fn: l.fn,
                                vkey: l.fvkey,
                                br: l.br,
                                platform: 2,
                                fmt: n.fmt,
                                level: l.level,
                                sdtfrom: c(),
                                sha: l.fsha,
                                vid: n.vid,
                                alias: l.alias
                            }),
                            m += m && m.indexOf("?") > -1 ? "&guid=" + n.guid : "?guid=" + n.guid,
                            void q.resolve(m, {
                                vl: d.vl,
                                fl: d.fl,
                                sfl: d.sfl,
                                exem: d.exem,
                                preview: d.preview,
                                st: l.st
                            });
                        E(d)
                    }
                }
                  , E = function(f) {
                    var h, k = l.ul.ui[0];
                    o.br = l.br,
                    o.path = k.url,
                    o.fn = l.fn,
                    o.fiid = d(n, f.fl.fi),
                    o.vt = k.vt,
                    h = new a.RetCode(100127),
                    h.begin(),
                    y = b.now();
                    var m = a.common.getTimeStampStr()
                      , r = location.protocol + "//" + location.hostname
                      , s = top !== window;
                    if (s)
                        try {
                            r = top.location.protocol + "//" + top.location.hostname
                        } catch (t) {
                            r = document.referrer || "",
                            r = r.split("?")[0]
                        }
                    var v = {
                        otype: "json",
                        vid: n.vid,
                        format: o.fiid,
                        filename: o.fn,
                        platform: n.platform,
                        vt: o.vt,
                        charge: n.isPay ? 1 : 0,
                        _rnd: m,
                        ehost: r
                    };
                    n.commonAuthData && (n.commonAuthData.auth_from || n.commonAuthData.auth_ext) && (n.commonAuthData.auth_from && (u.auth_from = n.commonAuthData.auth_from),
                    n.commonAuthData.auth_ext && (u.auth_ext = n.commonAuthData.auth_ext)),
                    A = C + b.param(v),
                    A = j(A, m),
                    B = i({
                        itype: 2,
                        val2: w ? 1 : 0,
                        str3: A,
                        vid: n.vid,
                        appId: n.appId,
                        contentId: n.contentId
                    }),
                    B(),
                    b.ajax({
                        url: A,
                        dataType: "jsonp",
                        jsonpCallback: "tvp_request_getvkey_callback_" + parseInt(1e6 * Math.random())
                    }).done(function(a) {
                        var d = "";
                        return p = 0,
                        z = b.now() - y,
                        a && a.s ? "o" != a.s && (p = a.em || 50) : p = 50,
                        0 != p ? (h.reportErr(p),
                        B({
                            val: p,
                            speed: z
                        }),
                        void q.reject(p)) : (d = g({
                            path: o.path,
                            fn: o.fn,
                            vkey: a.key,
                            br: o.br,
                            platform: 2,
                            fmt: n.fmt,
                            level: a.level,
                            sdtfrom: c(),
                            sha: a.sha,
                            vid: n.vid,
                            alias: l.alias
                        }),
                        h.reportSuc(),
                        B({
                            val: 0,
                            speed: z
                        }),
                        void q.resolve(d, {
                            vl: f.vl,
                            fl: f.fl,
                            sfl: f.sfl,
                            exem: f.exem,
                            preview: f.preview
                        }))
                    }).fail(function() {
                        h.reportErr(),
                        B({
                            val: 500,
                            speed: b.now() - y
                        }),
                        w ? q.reject(500, 2) : (e.retryDefer = q,
                        a.h5Helper.loadVideoUrlByVid(e))
                    })
                }
                  , F = function() {
                    var c = a.common.getTimeStampStr();
                    u._rnd = c,
                    A = x + b.param(u),
                    f && "object" === b.type(f) && (A += "&" + b.param(f)),
                    A = j(A, c),
                    b.ajax({
                        url: A,
                        dataType: "jsonp",
                        jsonpCallback: "tvp_request_getinfo_callback_" + parseInt(1e6 * Math.random())
                    }).done(function(c) {
                        if (!e.noAuth && c && 0 != c.em && "o" != c.s) {
                            if (85 === c.em && -3 === c.type && 1 === e.cgi_auth_index)
                                return e.cgi_auth_index += 1,
                                e.defer = q,
                                e.needTime = !0,
                                e.svr_time = c.curTime,
                                void a.h5Helper.loadVideoUrlByVid(e);
                            if (83 === c.em && u.eduext)
                                ;
                            else if (!(b.inArray(c.em, [100]) > -1))
                                return e.noAuth = !0,
                                e.defer = q,
                                void a.h5Helper.loadVideoUrlByVid(e)
                        }
                        D(c)
                    }).fail(function() {
                        if (v.reportErr(),
                        B({
                            val: 500,
                            speed: b.now() - y
                        }),
                        w)
                            q.reject(500, 1);
                        else {
                            var c = parseInt(700 * Math.random() + 300);
                            setTimeout(function() {
                                e.noAuth = !0,
                                e.retryDefer = q,
                                a.h5Helper.loadVideoUrlByVid(e)
                            }, c)
                        }
                    })
                };
                return e.cgi_auth_index || (e.cgi_auth_index = 1),
                a.auth(n, k).done(function(a) {
                    a = a || {},
                    "undefined" !== b.type(a.cgi) && a.cgi && (x = a.cgi),
                    "undefined" !== b.type(a.cgi2) && a.cgi2 && (C = a.cgi2),
                    a.param && b.extend(u, a.param),
                    F()
                }).fail(function() {
                    b.extend(u, {
                        vids: n.vid,
                        defaultfmt: n.fmt
                    }),
                    F()
                }),
                q
            },
            loadHDVideoUrlByVid: function(b) {
                b.fmt = "mp4",
                a.h5Helper.loadVideoUrlByVid(b)
            },
            loadHLSUrlByVid: function(c) {
                var d = {}
                  , e = b.Deferred();
                b.extend(b.extend(d, k), c);
                var f = new a.RetCode(100128)
                  , g = "http://h5vv.video.qq.com/gethls?callback=?&" + b.param({
                    vid: d.vid,
                    charge: d.isPay ? 1 : 0,
                    otype: "json",
                    platform: d.platform,
                    _rnd: (new Date).valueOf()
                })
                  , h = i({
                    itype: 3,
                    str3: g,
                    vid: d.vid,
                    appId: d.appId,
                    contentId: d.contentId
                })
                  , l = b.now();
                return g = j(g),
                h(),
                f.begin(),
                b.ajax({
                    url: g,
                    dataType: "jsonp"
                }).done(function(c) {
                    if (!c || !c.s)
                        return f.reportErr(50),
                        h({
                            speed: b.now() - l,
                            val: 50
                        }),
                        void e.reject(50);
                    if ("o" != c.s)
                        return f.reportErr(c.em || 50),
                        h({
                            speed: b.now() - l,
                            val: c.em || 50
                        }),
                        void e.reject(c.em || 50);
                    if (!c.vd || !c.vd.vi || !a.$.isArray(c.vd.vi))
                        return f.reportErr(68),
                        h({
                            speed: b.now() - l,
                            val: 68
                        }),
                        void e.reject(68);
                    for (var d = [], g = -2, i = 0; i < c.vd.vi.length; i++)
                        if (g = c.vd.vi[i].ch,
                        2 == c.vd.vi[i].st) {
                            var j = c.vd.vi[i].url.toLowerCase();
                            if (!(j.indexOf(".mp4") < 0 && j.indexOf(".m3u8") < 0) && c.vd.vi[i].url) {
                                var k = c.vd.vi[i];
                                d.push(k.url);
                                break
                            }
                        }
                    return 0 == d.length ? (f.reportErr(68),
                    h({
                        speed: b.now() - l,
                        val: 68
                    }),
                    void e.reject(68, g)) : (h({
                        speed: b.now() - l,
                        val: 0
                    }),
                    f.reportSuc(),
                    void e.resolve(d[0], c.vd))
                }).fail(function() {
                    f.reportErr(),
                    h({
                        speed: b.now() - l,
                        val: 500
                    }),
                    e.reject(500, 3)
                }),
                e
            },
            load3GVideoUrl: function(b) {
                b.fmt = "msd",
                a.h5Helper.loadVideoUrlByVid(b)
            },
            loadIsUseHLS: function(c) {
                var d = {}
                  , e = b.Deferred();
                b.extend(b.extend(d, k), c);
                var f = new a.RetCode(100125);
                return f.begin(),
                b.ajax({
                    url: a.common.get_request_url("get_dtype") + "?callback=?&" + b.param({
                        vids: d.vid,
                        platform: d.platform,
                        otype: "json",
                        _rnd: (new Date).valueOf()
                    }),
                    dataType: "jsonp"
                }).done(function(a) {
                    var d = 1;
                    if ("object" != b.type(a))
                        return f.reportErr(),
                        void e.reject(500, 4);
                    if ("o" != a.s || !b.isArray(a.dl) || 0 == a.dl.length)
                        return f.reportErr(a.em),
                        void e.reject(a.em || 50);
                    for (var g = 0, h = a.dl.length; h > g; g++)
                        a.dl[g].vid === c.vid && (d = a.dl[g].dltype);
                    f.reportSuc(),
                    e.resolve(d, a)
                }).fail(function() {
                    f.reportErr(),
                    e.reject(500, 4)
                }),
                e
            },
            loadSRT: function(a) {
                var c = {}
                  , d = b.Deferred();
                return b.extend(b.extend(c, k), a),
                b.ajax({
                    url: "http://h5vv.video.qq.com/getsurl?" + b.param({
                        vid: c.vid,
                        format: c.sflid,
                        platform: c.platform,
                        pid: c.pid,
                        otype: "json",
                        _rnd: (new Date).valueOf()
                    }),
                    dataType: "jsonp"
                }).done(function(a) {
                    return "object" != b.type(a) ? void d.reject(500) : "o" != a.s ? void d.reject(isNaN(a.em) ? 500 : a.em, a.msg || "") : void d.resolve(a)
                }).fail(function() {
                    d.reject(500)
                }),
                d
            },
            setSpecialVideoFileDomain: function(a) {
                "string" == typeof a && /^(\S+[\.])?qq\.com/.test(location.host) && (l = a)
            }
        }
    }(tvp, tvp.$),
    function() {
        function a() {
            this.cache = {},
            this.wxCallbacks = []
        }
        if (!window.txvLogin) {
            var c = {
                set: function(a, b, c, d, e) {
                    if (e) {
                        var f = new Date
                          , g = new Date;
                        g.setTime(f.getTime() + 36e5 * e)
                    }
                    return document.cookie = a + "=" + b + "; " + (e ? "expires=" + g.toGMTString() + "; " : "") + (d ? "path=" + d + "; " : "path=/; ") + (c ? "domain=" + c + ";" : "domain=" + window.location.host + ";"),
                    !0
                },
                get: function(a) {
                    var b = new RegExp("(?:^|;+|\\s+)" + a + "=([^;]*)")
                      , c = document.cookie.match(b);
                    return c ? c[1] : ""
                },
                del: function(a, b, c) {
                    var d = new Date;
                    d.setTime(d.getTime() - 1),
                    document.cookie = a + "=; expires=" + d.toGMTString() + ";" + (c ? "path=" + c + "; " : "path=/; ") + (b ? "domain=" + b + ";" : "domain=" + window.location.host + ";")
                }
            }
              , d = {
                ajax: function(a, c, d) {
                    if (!a || "function" != typeof c || "function" != typeof d)
                        return {
                            error: "ajax params error"
                        };
                    var e;
                    if (window.jQuery && jQuery.ajax)
                        e = jQuery.ajax;
                    else if (window.Zepto && b.ajax)
                        e = b.ajax;
                    else {
                        if (!(window.tvp && tvp.$ && tvp.$.ajax))
                            return void d({
                                error: "$.ajax not found"
                            });
                        e = tvp.$.ajax
                    }
                    a.success = function(a) {
                        c(a)
                    }
                    ,
                    a.error = function(a) {
                        d({
                            error: a
                        })
                    }
                    ,
                    e(a)
                }
            }
              , e = navigator.userAgent.toLowerCase()
              , f = {
                isqqlive: e.indexOf("qqlive") > -1,
                isipad: e.search(/ipad/i) > -1
            };
            a.prototype = {
                isLogin: function(a) {
                    a = a || function() {}
                    ;
                    var b = this;
                    return f.isqqlive ? void this.tvGetCookie(["qq", "wx"], function(b) {
                        var c;
                        try {
                            "string" == typeof b ? c = JSON.parse(b) : "object" == typeof b && (c = b)
                        } catch (d) {}
                        c && a(c.result && c.result.qq ? 1 : c.result && c.result.wx ? 2 : 0)
                    }) : void this.getWXCookie(function(c) {
                        b.isQQLogin(function(d) {
                            return d && c && "qq" === c.main_login ? void a(1, null) : void b.isWXLogin(function(b) {
                                b && "wx" === b.main_login ? a(2, b) : a(0, null)
                            })
                        })
                    })
                },
                getUserInfo: function() {
                    var a, b, c = this;
                    if (arguments.length > 1 && "string" == typeof arguments[0]) {
                        var d = arguments[0];
                        a = "" === d ? 0 : d,
                        b = arguments[1]
                    } else
                        b = arguments[0];
                    "function" != typeof b && (b = function() {}
                    ),
                    this.isLogin(function(d, e) {
                        if (0 === d)
                            return void b({
                                error: "not login"
                            });
                        if (f.isqqlive) {
                            var g = a && [a];
                            return void c.tvGetUserInfo(g || ["qq", "wx"], function(c) {
                                var e, f;
                                try {
                                    "string" == typeof c ? e = JSON.parse(c) : "object" == typeof c && (e = c)
                                } catch (g) {}
                                if (!e)
                                    return void b({
                                        error: "parse tv cookie fail"
                                    });
                                1 === d ? f = "qq" : 2 === d && (f = "wx");
                                var h = a || f
                                  , i = h && e && e.result && e.result[h];
                                b(i && i.nickname ? {
                                    nick: i.nickname,
                                    face: i.headImgUrl,
                                    type: f
                                } : {
                                    error: "get tv " + f + " user info fail"
                                })
                            })
                        }
                        1 === d ? c.requestQQInfo(function(a) {
                            b(a && a.nick ? {
                                nick: a.nick,
                                face: a.qqface,
                                type: "qq"
                            } : {
                                error: "requestQQInfo fail"
                            })
                        }) : 2 === d && b(e && e.nick ? {
                            nick: decodeURIComponent(e.nick),
                            face: e.head,
                            type: "wx"
                        } : {
                            error: "get weixin info fail"
                        })
                    })
                },
                checkQQLogin: function(a) {
                    a = a || function() {}
                    ;
                    var b = c.get("lskey")
                      , d = c.get("luin")
                      , e = c.get("uin")
                      , f = c.get("skey");
                    a(e && f ? 2 : b && d ? 1 : 0)
                },
                isQQLogin: function(a) {
                    a = a || function() {}
                    ,
                    this.checkQQLogin(function(b) {
                        a(0 !== b)
                    })
                },
                isQQLowLogin: function(a) {
                    a = a || function() {}
                    ,
                    this.checkQQLogin(function(b) {
                        a(1 === b)
                    })
                },
                getUin: function(a) {
                    a = a || function() {}
                    ;
                    var b;
                    this.isQQLowLogin(function(d) {
                        b = d ? c.get("luin") : c.get("uin"),
                        b ? (b = parseInt(b.replace(/^o0*/g, ""), 10),
                        a(b)) : a(0)
                    })
                },
                getSkey: function(a) {
                    a = a || function() {}
                    ;
                    var b = c.get("skey")
                      , d = c.get("lskey");
                    a(b || d)
                },
                time33: function(a) {
                    for (var b = 0, c = a.length, d = 5381; c > b; ++b)
                        d += (d << 5) + a.charAt(b).charCodeAt();
                    return 2147483647 & d
                },
                gTk: function(a) {
                    a = a || function() {}
                    ;
                    var b = this;
                    this.getWXCookie(function(c) {
                        "wx" == c.main_login ? a(b.time33(c.vusession), "wx") : b.getSkey(function(c) {
                            var d = c ? b.time33(c) : "";
                            a(d, "")
                        })
                    })
                },
                requestQQInfo: function(a) {
                    a = a || function() {}
                    ;
                    var b, c = this, e = function() {
                        c.checkQQLogin(function(c) {
                            return 0 === c ? void a({
                                error: "qq not login"
                            }) : (b = 1 === c ? 1 : 0,
                            void f())
                        })
                    }, f = function() {
                        d.ajax({
                            url: "//video.qq.com/fcgi-bin/get_userinfo",
                            data: {
                                otype: "json",
                                type: 2,
                                _: +new Date,
                                low_login: b
                            },
                            dataType: "jsonp",
                            timeout: 5e3
                        }, function(b) {
                            b = {
                                qqface: b.data[0].headurl,
                                nick: b.data[0].nick
                            },
                            a(b)
                        }, function(b) {
                            a(b)
                        })
                    };
                    e()
                },
                openQQLogin: function(a) {
                    a = a || {};
                    var b = location.protocol + "//video.qq.com/fcgi-bin/qq_login?redirect_url=" + encodeURIComponent(a.s_url || location.href);
                    delete a.s_url;
                    var c = "//ui.ptlogin2.qq.com/cgi-bin/login?"
                      , d = {
                        link_target: "blank",
                        low_login: 0,
                        target: "self",
                        style: 9,
                        appid: "532001601",
                        pt_no_onekey: 0,
                        s_url: encodeURIComponent(b)
                    }
                      , e = [];
                    for (var f in d)
                        a.hasOwnProperty(f) ? e.push(f + "=" + a[f]) : e.push(f + "=" + d[f]);
                    c += e.join("&"),
                    setTimeout(function() {
                        window.location.href = c
                    }, 200)
                },
                qqLogout: function() {
                    c.set("nickCookie", "", location.host, "/", -24),
                    c.set("encuinCookie", "", location.host, "/", -24),
                    c.set("skey", "", ".qq.com", "/", -24),
                    c.set("uin", "", ".qq.com", "/", -24),
                    this.isQQLowLogin(function(a) {
                        a && (c.set("lskey", "", ".qq.com", "/", -24),
                        c.set("luin", "", ".qq.com", "/", -24))
                    }),
                    (new Image).src = "//video.qq.com/fcgi-bin/logout?_=" + Math.random()
                },
                openWXLogin: function(a) {
                    a = a || window.location.href;
                    var b = "//video.qq.com/fcgi-bin/wx_login?from=1&redirect_url=" + encodeURIComponent(a);
                    document.location.href = b
                },
                getWXCookie: function(a) {
                    a = a || function() {}
                    ;
                    var b = this
                      , c = location.protocol + "//video.qq.com/getcookie/getcookie.html.html";
                    if (c += "?t=" + +new Date,
                    "qq.com" !== document.domain)
                        return void a({
                            error: "document.domain\u4e0d\u7b49\u4e8eqq.com\uff0c\u8de8\u57df\u5931\u8d25"
                        });
                    if (b.cache.wxAuthCache)
                        return void a(b.cache.wxAuthCache);
                    b.wxCallbacks.push(a),
                    window.txvGetLoginCookiesCallback = function(c) {
                        if (b.cache.wxAuthCache = c,
                        setInterval(function() {
                            b.cache.wxAuthCache = null
                        }, 2e4),
                        !b.wxCallbacks || !b.wxCallbacks.length)
                            return void a(c);
                        for (var d; b.wxCallbacks.length; )
                            d = b.wxCallbacks.shift(),
                            "function" == typeof d && d.call(b, c)
                    }
                    ;
                    var d = "tvp_login_cross_domin_frame"
                      , e = document.getElementById(d);
                    e ? e.src = c : (e = document.createElement("iframe"),
                    e.src = c,
                    e.id = d,
                    e.style.display = "none",
                    document.body.appendChild(e))
                },
                isWXLogin: function(a) {
                    a = a || function() {}
                    ;
                    var b = this
                      , c = {};
                    this.getWXCookie(function(d) {
                        return d && d.access_token && d.appid && d.openid && d.vuserid && d.vusession && d.refresh_token ? void b.checkWXLogin(function(b) {
                            if (!b || b.errcode + "" != "0")
                                return void a(!1);
                            if (b && b.vuserid && b.access_token) {
                                for (var e in d)
                                    c[e] = d[e];
                                for (var e in b)
                                    c[e] = b[e];
                                a(c)
                            } else
                                a(!1)
                        }) : void a(!1)
                    })
                },
                checkWXLogin: function(a) {
                    a = a || function() {}
                    ;
                    var b = "//video.qq.com/fcgi-bin/check_login"
                      , c = d.ajax({
                        url: b,
                        timeout: 5e3,
                        dataType: "jsonp"
                    }, function(b) {
                        a(b)
                    }, function(b) {
                        a(b)
                    });
                    c && c.error && a(c)
                },
                wxLogout: function(a) {
                    a = a || function() {}
                    ;
                    var b = "//video.qq.com/fcgi-bin/logout";
                    this.cache && this.cache.wxAuthCache && (this.cache.wxAuthCache = null);
                    var c = d.ajax({
                        url: b,
                        dataType: "jsonp",
                        timeout: 5e3
                    }, function(b) {
                        a(b)
                    }, function(b) {
                        a(b)
                    });
                    c && c.error && a(c)
                },
                tenvideoJSReady: function(a) {
                    return a = a || function() {}
                    ,
                    "object" == typeof window.TenvideoJSBridge ? void a() : void document.addEventListener("onTenvideoJSBridgeReady", function() {
                        a()
                    }, !1)
                },
                tvLogin: function(a, b) {
                    b = b || function() {}
                    ,
                    this.tenvideoJSReady(function() {
                        TenvideoJSBridge.invoke("actionLogin", {
                            type: a
                        }),
                        TenvideoJSBridge.on("onActionLoginFinish", b),
                        TenvideoJSBridge.on("actionLoginFinish", b)
                    })
                },
                tvLoginQQ: function(a) {
                    a = a || function() {}
                    ,
                    this.tvLogin("qq", a)
                },
                tvLoginWX: function(a) {
                    a = a || function() {}
                    ,
                    this.tvLogin("wx", a)
                },
                tvLoginTV: function(a) {
                    a = a || function() {}
                    ,
                    this.tvLogin("tv", a)
                },
                tvSwitchLogin: function(a, b) {
                    b = b || function() {}
                    ,
                    f.isipad ? b(new Error("iPad not support SwitchLogin")) : this.tenvideoJSReady(function() {
                        TenvideoJSBridge.invoke("switchLoginState", {
                            userType: a
                        }),
                        TenvideoJSBridge.on("onSwitchLoginStateResponse", function(a) {
                            var c;
                            if ("string" == typeof a)
                                try {
                                    c = JSON.parse(a)
                                } catch (d) {}
                            else
                                c = a;
                            if (c && 0 === parseInt(c.errCode))
                                b(null, c);
                            else {
                                var e = c && c.errCode || -100
                                  , f = c && c.errMsg || "app error"
                                  , g = new Error(f);
                                g.code = e,
                                g.result = a,
                                b(g)
                            }
                        })
                    })
                },
                tvGetCookie: function(a, b) {
                    this.tenvideoJSReady(function() {
                        TenvideoJSBridge.invoke("getCookie", {
                            type: a
                        }, b)
                    })
                },
                tvGetMainCookie: function(a) {
                    this.tenvideoJSReady(function() {
                        TenvideoJSBridge.invoke("getMainCookie", null, a)
                    })
                },
                tvGetUserInfo: function(a, b) {
                    this.tenvideoJSReady(function() {
                        TenvideoJSBridge.invoke("getUserInfo", {
                            type: a
                        }, b)
                    })
                }
            };
            var g = new a;
            g.cookie = c,
            window.txvLogin = g
        }
    }(),
    function(a, b) {
        a.BasePlayer = function() {
            var c = {};
            this.modId = "",
            this.sessionId = "",
            this.$mod = null,
            this.videomod = null,
            this.playerid = "",
            this.curVideo = null,
            this.instance = null,
            this.dataset = {},
            this.eventList = ["ready", "inited", "play", "playing", "ended", "allended", "pause", "resume", "timeupdate", "getnext", "error", "stop", "fullscreen", "change", "write", "flashpopup", "getnextenable", "msg", "h5loadingadstart", "h5loadingadend", "volumechange", "adplay", "adend"],
            this.config = {},
            this.hijackFun = ["getPlayer", "getCurVideo", "showPlayer", "hidePlayer", "play", "pause", "getPlaytime", "setPlaytime", "getPlayerType", "resize"],
            this.prototype = {},
            function(b) {
                var c = ["init", "addParam", "write", "setPlayerReady"];
                c = c.concat(b.hijackFun);
                for (var d = 0, e = c.length; e > d; d++)
                    b.prototype[c[d]] = a.$.noop
            }(this),
            this.addParam = function(a, b) {
                this.config[a] = b
            }
            ,
            this.on = function(a, d) {
                a && b.isFunction(d) && (c[a] = b.isArray(c[a]) ? c[a] : [],
                c[a].push(d))
            }
            ,
            this.trigger = function(a) {
                var d, e, f;
                if (a && b.isArray(c[a]))
                    for (e = 0,
                    f = c[a].length; f > e; e++)
                        b.isFunction(c[a][e]) && (d = Array.prototype.slice.call(arguments, 1),
                        c[a][e].apply(null, d))
            }
            ,
            this.off = function(a, d) {
                var e;
                a && b.isArray(c[a]) && (d ? (e = b.inArray(d, c[a]),
                e >= 0 && (c[a][e] = void 0)) : c[a] = void 0)
            }
        }
        ,
        a.BasePlayer.prototype = {
            setCurVideo: function(a) {
                this.curVideo = a
            },
            getPlayer: function() {
                return null
            },
            getCurVideo: function() {
                return this.curVideo
            },
            getCurVid: function() {
                return this.curVideo instanceof a.VideoInfo ? this.curVideo.getVid() : ""
            },
            getCurVidList: function() {
                return this.curVideo instanceof a.VideoInfo ? this.curVideo.getVidList() : ""
            },
            init: function(c) {
                b.extend(this.config, c);
                for (var d = 0, e = this.eventList.length; e > d; d++) {
                    var f = "on" + this.eventList[d];
                    this[f] = b.isFunction(this.config[f]) ? this.config[f] : a.$.noop
                }
                this.setCurVideo(this.config.video),
                this.write(this.config.modId)
            },
            write: function(a) {
                b("#" + a).html("here is player of base")
            },
            log: function(a) {
                window.console && window.console.log(a)
            },
            getCBEvent: function(c) {
                var d;
                return this.instance && b.isFunction(this.instance[c]) && this.instance[c] != a.$.noop ? d = this.instance[c] : b.isFunction(this[c]) && this[c] != a.$.noop && (d = this[c]),
                d
            },
            callCBEvent: function(a) {
                var c = this.getCBEvent(a);
                if (b.isFunction(c)) {
                    var d = Array.prototype.slice.call(arguments, 1);
                    return c.apply(this, d)
                }
                return void 0
            },
            resize: function(a, c) {
                var d = this.getPlayer();
                d && (d.style.width = b.formatSize(a),
                d.style.height = b.formatSize(c))
            },
            showPlayer: function() {},
            hidePlayer: function() {},
            execFlashMethod: function(a) {
                var b, c = this.getPlayer(), d = [];
                if (c && c[a]) {
                    d = [].slice.call(arguments, 1);
                    try {
                        return b = c[a].apply(c, d)
                    } catch (e) {}
                }
            }
        }
    }(tvp, tvp.$),
    function(a, b) {
        a.html5lang = {
            errMsg: {
                "default": "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                0: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25",
                68: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                "-1": "\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                "-2": "\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                "-3": "\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                "-4": "\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                "-6": "\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                "-7": "\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                50: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                52: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u6682\u65e0\u6cd5\u89c2\u770b",
                64: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u6682\u65e0\u6cd5\u89c2\u770b",
                51: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u6682\u65e0\u6cd5\u89c2\u770b",
                61: "\u5f53\u524d\u89c6\u9891\u5df2\u4e0b\u67b6\uff0c\u6682\u65e0\u6cd5\u89c2\u770b",
                62: "\u5f53\u524d\u89c6\u9891\u4e0d\u5b58\u5728\uff0c\u6682\u65e0\u6cd5\u89c2\u770b",
                63: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u6682\u65e0\u6cd5\u89c2\u770b",
                65: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u6682\u65e0\u6cd5\u89c2\u770b",
                67: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u6682\u65e0\u6cd5\u89c2\u770b",
                69: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u6682\u65e0\u6cd5\u89c2\u770b",
                71: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u6682\u65e0\u6cd5\u89c2\u770b",
                73: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u6682\u65e0\u6cd5\u89c2\u770b",
                74: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u6682\u65e0\u6cd5\u89c2\u770b",
                76: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                77: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                80: {
                    0: "\u56e0\u7248\u6743\u9650\u5236,\u8bf7\u5230\u817e\u8baf\u89c6\u9891\u89c2\u770b",
                    1: "\u5f88\u62b1\u6b49\uff0c\u5f53\u524dIP\u5730\u5740\u6240\u5728\u5730\u533a\u6682\u4e0d\u652f\u6301\u64ad\u653e",
                    2: "\u56e0\u7248\u6743\u9650\u5236\uff0c\u6682\u4e0d\u652f\u6301\u64ad\u653e",
                    9: "\u56e0\u7248\u6743\u9650\u5236\uff0c\u8bf7\u5230\u817e\u8baf\u89c6\u9891APP\u89c2\u770b",
                    callback: function(b, c, d) {
                        if (0 == parseInt(c) && a.app && d && d.vid) {
                            var e = a.html5skin.errorDownloader;
                            a.app.check(d).done(function(a) {
                                if (a.url) {
                                    var c = b.find(".tvp_player_error_content");
                                    c = b;
                                    var d = b.find(".text").html();
                                    d = d.substr(0, d.indexOf("(")),
                                    e ? (d = e.replace("${errorMsg}", d),
                                    d = d.replace("${url}", a.url)) : d = '<a href="' + a.url + '">' + d + "</a>",
                                    c.length && c.html(d)
                                }
                            })
                        }
                    }
                },
                81: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u6682\u65e0\u6cd5\u89c2\u770b",
                82: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u6682\u65e0\u6cd5\u89c2\u770b",
                83: {
                    main: "\u8be5\u7247\u4e3a\u4ed8\u8d39\u89c6\u9891\uff0c\u8bf7\u524d\u5f80\u817e\u8baf\u89c6\u9891\u89c2\u770b",
                    "-2": "\u4f1a\u5458\u4e13\u4eab\u5185\u5bb9\uff0c\u8bf7\u6253\u5f00\u817e\u8baf\u89c6\u9891\u89c2\u770b",
                    "-1": "\u4f1a\u5458\u4e13\u4eab\u5185\u5bb9\uff0c\u8bf7\u6253\u5f00\u817e\u8baf\u89c6\u9891\u89c2\u770b",
                    "-3": "\u8be5\u7247\u4e3a\u6570\u5b57\u97f3\u4e50\u4e13\u8f91\u72ec\u5bb6\u89c6\u9891\uff0c\u8bf7\u524d\u5f80QQ\u97f3\u4e50\u652f\u6301\u8d2d\u4e70\u540e\u67e5\u770b"
                },
                84: "\u5f88\u62b1\u6b49\uff0c\u6839\u636e\u60a8\u7684IP\u5730\u5740\uff0c\u6682\u65e0\u6cd5\u64ad\u653e",
                85: {
                    main: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                    "-1": "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                    "-2": "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                    "-3": "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                    "-4": "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                    "-5": "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                    "-6": "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5"
                },
                86: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                100: {
                    main: "\u56e0\u4e3a\u7248\u6743\u9650\u5236\uff0c\u8bf7\u8df3\u8f6c\u5230\u817e\u8baf\u89c6\u9891APP\u89c2\u770b",
                    1: "\u56e0\u4e3a\u7248\u6743\u9650\u5236\uff0c\u8bf7\u8df3\u8f6c\u5230\u817e\u8baf\u89c6\u9891APP\u89c2\u770b",
                    2: "NBA\u89c6\u9891\u9650\u5236\uff0c\u8bf7\u8df3\u8f6c\u5230\u817e\u8baf\u89c6\u9891APP\u89c2\u770b"
                },
                500: {
                    main: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                    1: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                    2: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5"
                },
                403: {
                    0: "\u76f4\u64ad\u5df2\u7ed3\u675f"
                }
            },
            getErrMsg: function(c, d) {
                if (isNaN(c))
                    return "";
                if (c in a.html5lang.errMsg) {
                    var e = a.html5lang.errMsg[c];
                    if (0 === c && "-" + d in a.html5lang.errMsg && (e += "\uff0c" + a.html5lang.errMsg["-" + d]),
                    b.isString(e))
                        return e;
                    if (b.isPlainObject(e)) {
                        var f;
                        return f = d in e ? e[d] : e.main,
                        f || a.html5lang.errMsg["default"]
                    }
                }
                return a.html5lang.errMsg["default"]
            },
            definition: {
                mp4: "\u9ad8\u6e05",
                msd: "\u6d41\u7545"
            },
            srtLang: {
                50001: {
                    srclang: "zh-cn",
                    desc: "\u7b80\u4f53\u4e2d\u6587"
                },
                50002: {
                    srclang: "zh-cn",
                    desc: "\u7b80\u4f53\u4e2d\u6587"
                },
                50003: {
                    srclang: "zh-tw",
                    desc: "\u7e41\u4f53\u4e2d\u6587"
                },
                50004: {
                    srclang: "en",
                    desc: "\u82f1\u6587"
                },
                50005: {
                    srclang: "zh-cn,en",
                    desc: "\u7b80\u4f53\u4e2d\u6587&\u82f1\u6587"
                },
                50006: {
                    srclang: "zh-tw,en",
                    desc: "\u7e41\u4f53\u4e2d\u6587&\u82f1\u6587"
                }
            },
            durationLimit: {
                msg: "5\u5206\u949f\u770b\u7684\u4e0d\u591f\u723d\uff1f\u817e\u8baf\u89c6\u9891\u6709\u9ad8\u6e05\u5b8c\u6574\u7248\uff0c\u7b49\u4f60\u6765\u770b~",
                padMsg: "\u672c\u8282\u76ee\u53ea\u63d0\u4f9b5\u5206\u949f\u9884\u89c8\u3002\u817e\u8baf\u89c6\u9891\u5ba2\u6237\u7aef\u53ef\u4ee5\u89c2\u770b\u9ad8\u6e05\u5b8c\u6574\u7248\uff0c\u7b49\u4f60\u5594~",
                download: "\u4e0b\u8f7dAPP",
                padPlay: "\u7acb\u5373\u64ad\u653e",
                play: "\u7ee7\u7eed\u64ad\u653e",
                replay: "\u91cd\u65b0\u64ad\u653e",
                open: "\u53bb\u770b\u5b8c\u6574\u7248"
            },
            liveDownloader: {
                downloadText: "\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891\uff0c\u89c2\u770b\u89c6\u9891\u76f4\u64ad",
                openText: "\u6253\u5f00\u817e\u8baf\u89c6\u9891\uff0c\u89c2\u770b\u89c6\u9891\u76f4\u64ad"
            },
            getDefiName: function(b) {
                return b in a.defaultConfig.definition ? a.defaultConfig.definition[b] : ""
            },
            getSrtName: function(b) {
                return b in a.html5lang.srtLang ? a.html5lang.srtLang[b].desc : ""
            }
        }
    }(tvp, tvp.$),
    tvp.html5skin = {
        defaultError: function() {
            return [' <div class="tvp_player_error" id="$ERROR-TIPS-INNER$">', '   <div class="tvp_error_inner">', '     <div class="tvp_error_title">$ERROR-MSG$</div>', '     <div class="tvp_error_desc">$ERROR-DETAIL$</div>', '     <a href="javascript:;" data-role="error-refresh" class="tvp_btn_simple tvp_none">\u5237\u65b0</a>', "  </div>", " </div>"].join("")
        }(),
        errorDownloader: function() {
            return ['<div class="tvp_live_download_app">', '	<a class="tvp_download_app_inner" href="${url}">', '		<i class="tpv_icon_download"></i>', '		<span class="tvp_icon_text">${errorMsg}</span>', "	</a>", "</div>"].join("")
        }(),
        durationLimit: function() {
            return ['<div style="display:none" class="tvp_limit_tips" data-role="durationLimit">', '   <div class="tvp_limit_tips_inner">', '		<div class="tvp_tips_content">', '			<p class="tvp_tips_text">${msg}</p>', "		</div>", '		<div class="tvp_btn_line">', '			<span data-role="durationLimit-play" class="tvp_btn tvp_btn_try">${play}</span>', '			<span  data-role="durationLimit-replay" class="tvp_btn tvp_btn_try">${replay}</span>', '			<a data-action="applink" ${iframe} href="${url}" data-url="" data-role="durationLimit-download" class="tvp_btn tvp_btn_download">${download}</a>', '			<a data-action="applink" href="" data-url="" data-role="durationLimit-open" class="tvp_btn tvp_btn_download">${open}</a>', "		</div>", "	</div>", "</div>"].join("")
        }(),
        durationLimit_v2_case1: function() {
            return ['<div data-role="tvp-limit-case1" class="tvp_none">', '<div class="tvp_layer_replay tvp_none" data-role="tvp-limit-replay">', '<div class="tvp_overlay_replay">', '<span class="tvp_button_replay"></span>', '<span class="tvp_text" data-role="tvp-limit-replay-text">${replayText}</span>', "</div>", "</div>", '<div class="tvp_overlay_play_try tvp_none" data-role="tvp-limit-play">', '<span class="tvp_button_play"></span>', '<span class="tvp_text" data-role="tvp-limit-play-text">${playText}</span>', "</div>", '<div class="tvp_app_banner tvp_none" data-role="tvp-limit-download">', '<a data-role="tvp-limit-download-btn" href="javascript:;" class="tvp_app_btn" data-status="down">', '<span class="tvp_progress">', '<span class="tvp_progress_current"></span>', "</span>", '<span data-role="tvp-limit-download-text" class="tvp_text" data-text="${download}"></span>', "</a>", "</div>", '<div class="tvp_app_badge tvp_none" data-role="tvp-limit-timing">', '<a href="javascript:;" data-role="tvp-limit-timing-btn" class="tvp_app_btn" data-status="down">', '<span class="tvp_progress"><span class="tvp_progress_current"></span></span>', '<span class="tvp_text" data-text="\u8fd8\u5269" data-role="tvp-limit-timing-text"></span>', "</a>", "</div>", "</div>"].join("")
        }(),
        durationLimit_v2_case2: function() {
            return ['<div class="tvp_external_layer tvp_none" data-role="tvp-limit-case2">', '<div class="tvp_external_inner">', '<div class="tvp_overlay_play_try" data-role="tvp-limit-play">', '<span class="tvp_button_play"></span>', '<span class="tvp_text" data-role="tvp-limit-play-text">${playText}</span>', "</div>", '<div class="tvp_layer_replay tvp_none" data-role="tvp-limit-replay">', '<div class="tvp_overlay_replay">', '<span class="tvp_button_replay"></span>', '<span class="tvp_text" data-role="tvp-limit-replay-text">${replayText}</span>', "</div>", "</div>", '<div class="tvp_app_banner tvp_none" data-role="tvp-limit-download">', '<a href="javascript:;" class="tvp_app_btn" data-status="down" data-role="tvp-limit-download-btn">', '<span class="tvp_progress"><span class="tvp_progress_current"></span></span>', '<span data-role="tvp-limit-download-text" class="tvp_btn_text" data-text="${download}"></span>', "</a>", "</div>", "</div>", "</div>", '<div class="tvp_app_badge tvp_none" data-role="tvp-limit-timing">', '<a data-role="tvp-limit-timing-btn" href="javascript:;" class="tvp_app_btn" data-status="down">', '<span class="tvp_text" data-text="\u8fd8\u5269" data-role="tvp-limit-timing-text"></span>', "</a>", "</div>"].join("")
        }(),
        durationLimit_v2_case3: function() {
            return ['<div class="tvp_app_badge tvp_none" data-role="tvp-limit-case3">', '<a data-role="tvp-limit-timing-btn" href="javascript:;" class="tvp_app_btn" data-status="down">', '<span class="tvp_progress"><span class="tvp_progress_current"></span></span>', '<span data-role="tvp-limit-timing-text" class="tvp_text" data-text="${timingText}"></span>', "</a>", "</div>"].join("")
        }(),
        liveDownloader: function() {
            return ['<div class="tvp_player_error">', '<div class="tvp_error_inner">', '<div class="tvp_error_title" data-role="tvp_errormsg">${msg}</div>', '<a data-role="tvp_err_refresh" href="javascript:;" class="txvp_error_refresh tvp_none" onclick="location.reload();">\u70b9\u51fb\u5237\u65b0</a>', '<div class="tvp_error_code">\u9519\u8bef\u4ee3\u7801\uff1a<span data-role="tvp_errrocode">${code}</span></div>', '<a data-role="tvp_error_btn" href="javascript:;" class="tvp_btn_normal">${btnText}</a>', "</div>", "</div>"].join("");
        }(),
        follow: function() {
            return ['<a class="tvp_follow" data-role="appfollow_followbtn" data-follow="follow">', '<span class="tvp_icon_follow"></span>', '<span class="tvp_icon_text" data-role="appfollow_followtext">\u5173\u6ce8</span>', "</a>", '<div class="tvp_follow_hint">', '<div class="tvp_hint_title">\u5173\u6ce8\u6210\u529f\uff01</div>', '<div class="tvp_hint_desc" data-role="bannerText">{FOLLOWTEXT}</div>', "</div>"].join("")
        }()
    },
    function(a, b) {
        a.BaseHtml5 || (a.BaseHtml5 = function() {
            this.protectedFn = {},
            this.h5EvtAdapter = {},
            this.eventList = this.eventList.concat(["html5error"]),
            this.html5AttrList = {
                autoplay: "autoplay",
                "x-webkit-airplay": "isHtml5UseAirPlay",
                "webkit-playsinline playsinline": "isiPhoneShowPlaysinline",
                preload: "html5Preload",
                loop: "html5loop"
            },
            this.$videomod = null
        }
        ,
        a.BaseHtml5.fn = a.BaseHtml5.prototype = new a.BasePlayer,
        b.extend(a.BaseHtml5.fn, {
            getPlayer: function() {
                return this.videoTag
            },
            getPlayerType: function() {
                return "html5"
            },
            createVideoHtml: function() {
                this.playerid = this.config.playerid,
                this.playerid || (this.playerid = "tenvideo_video_player_" + a.BaseHtml5.maxId++);
                var c = ['<video id="', this.playerid, '" width="100%" height="100%" '].join("")
                  , d = this;
                this.config.isHtml5UseUI && (b.os.iphone || b.os.ipod) && this.config.isIOSVideoOffset && !this.config.isiPhoneShowPlaysinline && (c += 'style="position:absolute;top:-200%;left:-200%"'),
                this.config.isHtml5UseUI && this.config.isHtml5ShowPosterOnStart && b.os.android && (c += b.browser.UC ? 'style="position:absolute;left:-200%;"' : 'style="position:absolute;top:-200%;"',
                setTimeout(function() {
                    if (d.videoTag && 1 == d.$video.size()) {
                        var a = !1;
                        d.$video.one("playing", function() {
                            a || (a = !0,
                            d.videoTag.style.cssText = "")
                        }).one("tvp:h5ui:playbtn:click", function() {
                            a || (a = !0,
                            d.videoTag.style.cssText = "")
                        })
                    }
                }, 100));
                for (var e in this.html5AttrList) {
                    c += " ";
                    var f = this.html5AttrList[e]
                      , g = "";
                    if ("" == f)
                        g = "";
                    else {
                        if (!(f in this.config))
                            continue;
                        g = this.config[f]
                    }
                    g !== !1 && "disabled" != g && 0 !== g && ("autoplay" == e && this.config.isHtml5ShowLoadingAdOnStart || (c += e,
                    "autoplay" != e || 1 != g ? "" != g && (c += ["=", g].join("")) : c += '="autoplay"'))
                }
                if (!this.isUseControl && b.os.iphone && !this.config.isiPhoneShowPlaysinline) {
                    var h = this.config.html5ForbiddenUIFeature.join("-");
                    h.indexOf("controlbar") > -1 && (this.isUseControl = !0)
                }
                this.isUseControl && (c += " controls ");
                var i = this.curVideo.getPoster();
                return b.isString(i) && i.length > 0 && -1 == b.inArray("posterlayer", this.config.html5VodUIFeature) && (c += " poster='" + i + "'"),
                i || !this.config.pic || this.config.isHtml5UseUI || (c += " poster='" + this.config.pic + "'"),
                c += "></video>"
            },
            write: function(c) {
                var d = null;
                if ("object" == b.type(c) && 1 == c.nodeType ? (d = c,
                this.$mod = b(c),
                this.modId = this.$mod.attr("id") || "") : (d = a.$.getByID(c),
                this.modId = c,
                this.$mod = b("#" + c)),
                d) {
                    var e = this.createVideoHtml()
                      , f = "mod_" + this.playerid;
                    d.innerHTML = '<div id="' + f + '" class="tenvideo_player">' + e + "</div>",
                    this.videomod = b.getByID(f),
                    this.$videomod = b(this.videomod),
                    this.$videomod.width(b.formatSize(this.config.width)).height(b.formatSize(this.config.height)),
                    this.videoTag = b.getByID(this.playerid),
                    this.$video = b(this.videoTag),
                    this.registerMonitor(),
                    this.bindEventAdapt(),
                    this.checkPlayerSize()
                }
            },
            checkPlayerSize: function() {
                function a() {
                    b.isFullScreen || setTimeout(function() {
                        var a = b.config.width
                          , d = b.config.height
                          , e = parseInt(c.width(), 10);
                        parseInt(c.height(), 10);
                        d.toString().indexOf("%") > -1 || (window.innerWidth > window.innerHeight ? b.resize(e, window.screen.availHeight) : b.resize(a, d))
                    }, 100)
                }
                var b = this
                  , c = this.$videomod ? this.$videomod : this.$elements;
                this.config.isCheckPlayerSize && c && window.addEventListener("orientationchange", function(b) {
                    a()
                }, !1)
            },
            resize: function(a, c) {
                var d = this.$videomod ? this.$videomod : this.$elements;
                d && (d.width(b.formatSize(a)).height(b.formatSize(c)),
                d && d.trigger && d.trigger("tvp:resize"))
            },
            showError: function(c, d, e) {
                var f = this;
                setTimeout(function() {
                    if (!f.videoTag || !f.videoTag.src || f.videoTag.paused) {
                        b(f.videoTag).removeAttr("src"),
                        f.videoTag.load();
                        var g = f.getCBEvent("showError");
                        if (b.isFunction(g) && g != f.showError)
                            g.call(f, c, d, e);
                        else if (b.isFunction(f.config.showError))
                            f.config.showError.call(f, c, d, e);
                        else {
                            var h = a.html5skin.defaultError
                              , i = f.playerid + "_errtips_inner"
                              , j = "\u9519\u8bef\u7801:" + c
                              , k = d || 0 == d ? "_" + d : "";
                            a.html5lang.errMsg[c] && a.html5lang.errMsg[c].nocode && (k = ""),
                            e = e || a.html5lang.getErrMsg(c, d),
                            h = h.replace("$ERROR-TIPS-INNER$", i).replace("$ERROR-MSG$", e).replace("$ERROR-DETAIL$", "(" + j + k + ")");
                            var l = b(f.$UILayer)
                              , m = b(b.trim(h)).appendTo(l).show();
                            l && 0 !== l.length || (l = b(f.videomod),
                            l.html('<div class="tvp_container tvp_controls_hide"></div>'),
                            l = l.find(".tvp_container")),
                            m.appendTo(l),
                            e.indexOf("\u5237\u65b0") > -1 && l.find('[data-role="error-refresh"]').removeClass("tvp_none").on("click touchend", function() {
                                window.location.reload()
                            });
                            try {
                                a.html5lang.errMsg[c] && a.html5lang.errMsg[c].callback && a.html5lang.errMsg[c].callback(m, d, {
                                    vid: f.curVideo.getVid()
                                })
                            } catch (n) {}
                        }
                    }
                }, 250),
                this.callCBEvent("onerror", c, d)
            },
            isUseH5UIFeature: function(a) {
                return b.inArray(a, this.config.html5VodUIFeature) >= 0
            },
            isForbiddenH5UIFeature: function(a) {
                return b.inArray(a, this.config.html5ForbiddenUIFeature) >= 0
            },
            callProtectFn: function(a) {
                b.isFunction(this.protectedFn[a]) && this.protectedFn[a].call(this)
            },
            registerMonitor: function() {
                b.isFunction(this.buildmonitor) && this.buildmonitor.call(this)
            },
            bindEventAdapt: function() {
                var a = ["-empty", "-abort", "-loadstart", "-can-play", "-can-play-through", "-loaded-data", "-loaded-metadata", "-abort", "-error", "-pause", "-paused", "-waiting", "-stalled", "-suspend", "-play", "-volume-change", "-playing", "-seeked", "-seeking", "-duration-change", "-progress", "-rate-change", "-timeupdate", "-ended"]
                  , c = this;
                b.each(a, function(a, d) {
                    var e = "on" + b.camelCase(d)
                      , f = c.h5EvtAdapter[e];
                    (window.DEBUG || b.isFunction(f)) && c.$video.on(d.replace(/-/g, ""), function(a) {
                        var d = c.h5EvtAdapter[e];
                        b.isFunction(d) && d.call(c, this, a)
                    })
                })
            }
        }),
        a.BaseHtml5.maxId = 0)
    }(tvp, tvp.$),
    function(a, b) {
        function c() {
            return b.os.android && !h && !b.os.HTC && !b.os.VIVO && b.os.version >= "4.0" && !(b.browser.AndriodBrowser && b.browser.version < "30") && 0 !== navigator.userAgent.indexOf("ZTE U930")
        }
        function d(a, b) {
            return
        }
        function e(c, d) {
            this.videoTag = null,
            this.$video = null,
            this.config.width = a.$.filterXSS(c),
            this.config.height = a.$.filterXSS(d),
            this.protectedFn = {},
            this.isUseControl = !0,
            b.extend(this.h5EvtAdapter, {
                onEnded: function() {
                    if (!this.isPlayingLoadingAd() && !this.isPlayingSplit) {
                        this.$video && this.$video.trigger && this.$video.trigger("tvp:player:ended"),
                        this.callCBEvent("onended", f);
                        var c = ""
                          , d = this.curVideo.getVidList().split("|")
                          , e = b.inArray(f, d);
                        if (e > -1 && e < d.length - 1 && (c = d[e + 1]),
                        "" !== c)
                            return void this.play(c);
                        this.callCBEvent("onallended"),
                        this.$video && this.$video.trigger && this.$video.trigger("tvp:player:allended"),
                        this.config.isHtml5ShowPosterOnEnd && this.setPoster();
                        var g = this.callCBEvent("ongetnext", f, this.curVideo);
                        g && g instanceof a.VideoInfo && this.play(g)
                    }
                },
                onError: function(c, d) {
                    var e = this;
                    if (a.report({
                        cmd: 3525,
                        appId: this.config.appid,
                        contentId: this.config.contentId,
                        vid: this.curVideo.lastQueryVid,
                        str4: navigator.userAgent
                    }),
                    d.target.currentSrc.indexOf(".m3u8") > 0 && (a.debug("play hls error,reload play mp4..."),
                    e.dataset.hlsIndex || (e.dataset.hlsIndex = 1),
                    e.dataset.hlsIndex++,
                    e.curVideo.dataHls && "array" === b.type(e.curVideo.dataHls) && e.curVideo.dataHls.length > 1 && e.curVideo.dataHls[e.dataset.hlsIndex] && 0 === e.curVideo.dataHls[e.dataset.hlsIndex].indexOf("http") && e.$video && (e.$video.attr("src", e.curVideo.dataHls[e.dataset.hlsIndex]),
                    e.$video[0] && e.$video[0].load)))
                        return e.$video[0].load(),
                        void e.$video[0].play();
                    var f = -1;
                    d.target && d.target.error && (f = d.target.error.code),
                    4 == f && this.showError(0, f)
                },
                onPlaying: function() {
                    var a = this;
                    this.callCBEvent("onplaying", f, this.curVideo),
                    this.isShowingDurationLimit() && this.pause(),
                    setTimeout(function() {
                        a.isPlayingLoadingAd() || a.isPlayingSplit || a.goOnPlaying()
                    }, 50)
                },
                onTimeupdate: function() {
                    this.callCBEvent("ontimeupdate", f, this.$video),
                    b.isFunction(this.setGoOnPlayingTime) && this.setGoOnPlayingTime()
                },
                onPause: function() {
                    b.os.android && this.config.isHtml5UseUI && this.$video.addClass("tvp_video_with_skin"),
                    this.callCBEvent("onpause", f, this.$video),
                    a.bossReport.user_action_report({
                        actions: "pause",
                        vid: f
                    })
                }
            })
        }
        if (!a.Html5Tiny) {
            var f = ""
              , g = null
              , h = !1;
            e.fn = e.prototype = new a.BaseHtml5,
            b.extend(e.prototype, {
                registerPlugins: function() {
                    var c = this
                      , d = [];
                    b.each(d, function(d, e) {
                        try {
                            var f = "build" + e;
                            b.isFunction(c[f]) && c[f](c)
                        } catch (g) {
                            a.debug("[registerPlugins]:" + g.message)
                        }
                    })
                },
                write: function(e) {
                    a.BaseHtml5.prototype.write.call(this, e);
                    var f = this
                      , g = a.$("#" + e);
                    g && window === top && g.height() === window.innerHeight && g.width() === window.innerWidth && window.innerHeight >= window.innerWidth && b("#" + e + " .tvp_overlay_poster").addClass("tvp_overlay_poster_auto"),
                    this.config.specialVideoFileDomain && a.h5Helper && b.isFunction(a.h5Helper.setSpecialVideoFileDomain) && a.h5Helper.setSpecialVideoFileDomain(this.config.specialVideoFileDomain),
                    this.registerPlugins(),
                    this.callProtectFn("onwrite"),
                    this.play(this.curVideo, this.config.autoplay),
                    this.$video.one("timeupdate", function() {
                        c() && d(f.videoTag, f)
                    }),
                    b.os.android && b.browser.WeChat && this.$video.one("click", function() {
                        this.load()
                    }),
                    this.init_report_playtime()
                },
                init_report_playtime: function() {
                    if (!this.has_report_playtime && !this.isPlayingSplit) {
                        this.has_report_playtime = !0;
                        var a, c, d, e, f = 0, g = this, h = "tvp_report_h5_playtime", i = b.getData(h), j = this.$video[0], k = this.curVideo.getVid(), l = function() {
                            return b.isFunction(g.isPlayingLoadingAd) && g.isPlayingLoadingAd() ? !0 : !1
                        };
                        this.$video.on("pause", function() {
                            l() || n()
                        }).on("playing", function() {
                            setTimeout(function() {
                                l() || (n(),
                                m())
                            }, 100)
                        }).on("ended", function() {
                            if (!l()) {
                                var a = parseInt(j.currentTime);
                                o(k, f, a),
                                n()
                            }
                        });
                        var m = function() {
                            n(),
                            e = setInterval(function() {
                                f += 5,
                                g.realPlayTime = f;
                                var a = k + "|" + f
                                  , c = parseInt(j.currentTime);
                                c && (a += "|" + c),
                                b.setData(h, a)
                            }, 5e3)
                        }
                          , n = function() {
                            e && clearInterval(e),
                            e = null
                        }
                          , o = function(a, c, d) {
                            g.report_playtime({
                                vid: a,
                                ptime: c,
                                currentTime: d
                            }),
                            b.setData(h, 0)
                        };
                        i && i.indexOf("|") > -1 && (i = i.split("|"),
                        a = i[0],
                        c = i[1],
                        d = i[2],
                        o(a, c, d))
                    }
                },
                report_playtime: function(c) {
                    var d = ""
                      , e = "";
                    try {
                        d = top.location.href,
                        e = top.location.hostname
                    } catch (f) {}
                    var g = {
                        ptime: c.ptime,
                        url: c.url || d,
                        platform: a.common.getDeviceId(),
                        ctime: c.currentTime,
                        vid: c.vid,
                        pagetype: a.app && a.app.pageType ? a.app.pageType : 0,
                        host: e || window.location.hostname
                    }
                      , h = new Image
                      , i = "//btrace.video.qq.com/kvcollect?BossId=2803&Pwd=524422958&_dc=" + Math.random();
                    i += "&" + b.param(g),
                    h.src = i
                }
            }),
            b.extend(e.prototype, {
                pause: function() {
                    this.videoTag.pause()
                },
                getCurVid: function() {
                    return "" === f ? this.curVideo instanceof a.VideoInfo ? this.curVideo.getVid() : "" : f
                },
                play: function(c, d, e) {
                    function g(e) {
                        e = !!e,
                        i.$video && i.$video.trigger && i.$video.trigger("tvp:video:ajaxstart", c instanceof a.VideoInfo ? c.getVid() : c, e);
                        var j, k = e ? i.curVideo.getHLS : i.curVideo.getMP4Url, l = i.curVideo.getVid();
                        i.curVideo && l && (i.curVideo.defer_cache || (i.curVideo.defer_cache = {
                            ad: {},
                            vd: {}
                        }),
                        !e && i.curVideo.callGetMp4UrlDefer && i.curVideo.callGetMp4UrlDefer.done(function(a) {
                            a && b.isFunction(a.done) && (i.curVideo.defer_cache.vd[l] = a,
                            i.curVideo.callGetMp4UrlDefer = null)
                        }),
                        i.curVideo.defer_cache.vd[l] || (i.curVideo.defer_cache.vd[l] = k.call(i.curVideo, c, i.isPlayingSplit)),
                        i.curVideo.defer_cache.ad[l] || (i.curVideo.defer_cache.ad[l] = b.Deferred()),
                        !a.Html5UI || !b.isFunction(a.Html5UI.fn.buildloadingAd) || !i.config.isHtml5UseUI || !i.config.isHtml5ShowLoadingAdOnStart && !i.config.isHtml5ShowLoadingAdOnChange || i.curVideo && b.isFunction(i.curVideo.getRequestAd) && i.curVideo.getRequestAd() === !1 ? i.curVideo.defer_cache.ad[l].resolve() : (i.$video.attr("tvp_loadingad_ended", 1),
                        i.$video.off("tvp:loadingad:ended").on("tvp:loadingad:ended", function(a, c) {
                            c && !c.emptyAd && i.callCBEvent("onadend");
                            var d = c.vid || "";
                            if (d) {
                                if (!i.curVideo.defer_cache.vd[d])
                                    return void (h && i.videoTag.src !== h ? (i.videoTag.src = h,
                                    !i.config.autoplayAfterLoadingad || c.emptyAd && !i.hasVideoChange || (i.videoTag.load(),
                                    i.$video.trigger("overlay_ctrl_showloading"),
                                    i.videoTag.play())) : (i.curVideo.defer_cache.ad[d] = b.Deferred(),
                                    i.curVideo.defer_cache.ad[d].resolve()));
                                h && j(h, i.config.autoplayAfterLoadingad && !c.emptyAd),
                                i.curVideo.defer_cache.ad[d] || (i.curVideo.defer_cache.ad[d] = b.Deferred()),
                                i.curVideo.defer_cache.ad[d].resolve()
                            }
                        }),
                        i.$video.off("tvp:player:adstart").on("tvp:player:adstart", function(a, b) {
                            i.callCBEvent("onadplay")
                        })),
                        i.curVideo.defer_cache.vd[l].done(function(b) {
                            if (h = b,
                            i.$video && i.$video.trigger && i.$video.trigger("tvp:video:ajaxsuc", b),
                            i.config.isShowDurationLimit)
                                try {
                                    a.html5DurationLimit.create(i)
                                } catch (c) {}
                            i._isInited || (i._isInited = !0,
                            i.callCBEvent("oninited"));
                            var d = i.getCurVideo();
                            d.data && d.data.vl && d.data.vl.vi && d.data.vl.vi.length && d.data.vl.vi[0] && d.data.vl.vi[0].fs && i.$video.trigger("tvp:overlay:update:filesize", d.data.vl.vi[0].fs)
                        }),
                        j = function(a, c) {
                            i.$UILayer && "function" === b.type(i.$UILayer.find) && i.$UILayer.find(".tvp_player_error").remove(),
                            i.curVideo.defer_cache.vd[l] = null,
                            i.curVideo.defer_cache.ad[l] = null,
                            c = "undefined" == typeof c ? !1 : c,
                            b.os.android && b.browser.wechat && (a += "&nocache=1&time=" + (new Date).getTime()),
                            i.isGetingInfo = !1,
                            !b.browser.WeChat && "setAttribute"in i.videoTag ? i.videoTag.setAttribute("src", a) : i.videoTag.src = a,
                            i.$video && i.$video.trigger && i.$video.trigger("tvp:video:src"),
                            i._isInited || (i._isInited = !0,
                            i.callCBEvent("oninited")),
                            i.callCBEvent("onplay", i.curVideo.lastQueryVid, i.curVideo),
                            (d || c) && (i.videoTag.load(),
                            i.$video.trigger("overlay_ctrl_showloading"),
                            i.videoTag.play());
                            var e = i.curVideo.getTagStart() || i.curVideo.getHistoryStart() || 0;
                            e > 0 && i.seek(e)
                        }
                        ,
                        b.when(i.curVideo.defer_cache.vd[l], i.curVideo.defer_cache.ad[l]).done(function(a) {
                            a = a || h,
                            i.$UILayer && i.$UILayer.find(".tvp_player_error").remove(),
                            j(a)
                        }).fail(function(b, c) {
                            return e ? (a.debug("get hls url fail,reload mp4..."),
                            void g(!1)) : (i._isInited || (i._isInited = !0,
                            i.callCBEvent("oninited")),
                            i.$video && i.$video.trigger && i.$video.trigger("tvp:video:ajaxerror"),
                            i.$video && i.$video.trigger && i.$video.trigger("tvp:video:error", b, c),
                            i.videoTag.pause(),
                            i.showError(b, c),
                            void (i.isGetingInfo = !1))
                        }).always(function() {
                            f = i.curVideo.lastQueryVid
                        }))
                    }
                    var h, i = this, j = !1;
                    if (a.Html5Player && !(i instanceof a.Html5Player) && i.instance && i.instance instanceof a.Html5Player && (i = i.instance),
                    b.isUndefined(d) && (d = !0),
                    b.isUndefined(e) && (e = this.config.isHtml5UseHLS),
                    !c && i.videoTag.src)
                        return i.videoTag.currentTime || i.videoTag.load(),
                        void i.videoTag.play();
                    if (c instanceof a.VideoInfo) {
                        if (j = i.curVideo._vidBeforeChange ? i.curVideo._vidBeforeChange === c.getVid() ? !1 : !0 : !1,
                        i.isPlayingSplit && i._isInited && i.getCurVid() === c.getVid())
                            return;
                        if (i.dataset && (i.dataset.isVidChange = j),
                        i.setCurVideo(c),
                        i.curVideo._vidBeforeChange = c.getVid(),
                        j && (i.callCBEvent("onchange", i.curVideo.getFullVid()),
                        this.$video && this.$video.trigger && this.$video.trigger("tvp:player:videochange"),
                        i.$UILayer && i.$UILayer.find && i.$UILayer.find(".tvp_player_error").remove(),
                        i.hasVideoChange = !0,
                        h = null,
                        i && i.videoTag && !i.videoTag.paused && i.videoTag.pause(),
                        b.os.iphone))
                            try {
                                i.videoTag.pause(),
                                i.videoTag.play()
                            } catch (k) {}
                        c.setPid(b.createGUID()),
                        f = i.curVideo.getFullVid()
                    }
                    i.config.isHtml5ShowPosterOnChange && i.setPoster(),
                    i.isGetingInfo = !0;
                    try {
                        i.videoTag.pause()
                    } catch (k) {}
                    var l = !1;
                    "auto" === e ? a.common.isUseHLS() ? a.h5Helper.loadIsUseHLS({
                        vid: f
                    }).done(function(a) {
                        l = 3 == a
                    }).fail(function() {
                        l = !1
                    }).always(function() {
                        g.call(i, l)
                    }) : (l = !1,
                    g.call(i, l)) : (l = e,
                    g.call(i, l))
                },
                goOnPlayingHandler: function(a, c, d) {
                    var e, f = "tvp_goonplaying_time", g = 5, h = {}, i = b.getData(f);
                    if (i)
                        try {
                            i = JSON.parse(i)
                        } catch (j) {}
                    return "object" != typeof i && (i = []),
                    i.length > g && i.shift(),
                    b(i).each(function(a, c) {
                        if ("string" === b.type(c)) {
                            var d = c.split("|");
                            d && 2 === d.length && (h[d[0]] = d[1])
                        }
                    }),
                    i = h,
                    h = null,
                    e = function() {
                        h = [];
                        for (var a in i)
                            h.push(a + "|" + i[a]);
                        b.setData(f, JSON.stringify(h))
                    }
                    ,
                    "get" === a ? i[c] : void ("del" === a ? (i[c] = null,
                    delete i[c],
                    e()) : "set" === a && (i[c] = d,
                    e()))
                },
                setGoOnPlayingTime: function() {
                    if (!this.isPlayingSplit && this.config.isContinuePlay) {
                        var a = this.getCurTime()
                          , b = this.getDuration()
                          , c = this.curVideo.getVid();
                        if (a = parseInt(a, 10),
                        b = parseInt(b, 10),
                        !(5 > a || this.isPlayingLoadingAd() || this._currentTime && this._currentTime === a))
                            return this._currentTime = a,
                            5 > b - a ? void this.goOnPlayingHandler("del", c) : void (0 !== a && a % 3 === 0 && this.goOnPlayingHandler("set", c, a))
                    }
                },
                goOnPlaying: function() {
                    if (!this.isPlayingSplit && this.config.isContinuePlay && !(this.getCurTime() > 3 || this.hasShowGoOnPlaying)) {
                        var a = this.getCurVid()
                          , a = this.curVideo.getVid()
                          , b = this
                          , c = this.goOnPlayingHandler("get", a)
                          , d = this.$mod.find('[data-role="xubo-banner"]')
                          , e = this.$mod.find('[data-role="xubo-text"]')
                          , f = e.html()
                          , g = {};
                        if (c) {
                            c = parseInt(c),
                            this.seek(c);
                            var h = function() {
                                f && (b.hasShowGoOnPlaying = !0,
                                g.min = parseInt(c / 60),
                                g.sec = parseInt(c % 60),
                                f = 0 != g.min ? f.replace("{$min}", g.min + "\u5206") : f.replace("{$min}", ""),
                                f = 0 != g.sec ? f.replace("{$sec}", g.sec + "\u79d2") : f.replace("{$sec}", ""),
                                e.html(f),
                                d.removeClass("tvp_none"),
                                setTimeout(function() {
                                    d.addClass("tvp_none")
                                }, 3e3))
                            };
                            h()
                        }
                    }
                },
                seek: function(a) {
                    if (!isNaN(a)) {
                        a = Math.min(a, this.getDuration() - 5),
                        a = Math.max(a, 0);
                        var b = this
                          , c = null;
                        c && (clearTimeout(c),
                        c = null);
                        var d = this.videoTag.seekable;
                        1 == d.length && a < d.end(0) ? this.seekTo(a) : c = setTimeout(function() {
                            b.seek(a)
                        }, 100)
                    }
                },
                seekTo: function(a) {
                    var b = this;
                    try {
                        this.videoTag.currentTime = a,
                        this.videoTag.paused && this.videoTag.play()
                    } catch (c) {
                        this.$video.one("canplay", function() {
                            b.videoTag.currentTime = a,
                            b.videoTag.paused && b.videoTag.play()
                        })
                    }
                },
                getCurTime: function() {
                    return this.videoTag.currentTime
                },
                getPlaytime: function() {
                    return this.getCurTime()
                },
                getRealPlayTime: function() {
                    var b = this;
                    return b instanceof a.Html5Player || (b = b.instance),
                    b.realPlayTime || 0
                },
                setPlaytime: function(a) {
                    this.seek(a)
                },
                checkIsPlayingLoop: function(a) {
                    a = a || 0;
                    var b = this;
                    this.playinglooptimer && clearTimeout(this.playinglooptimer),
                    0 === this.videoTag.currentTime && 30 >= a && (this.videoTag.load(),
                    this.videoTag.play(),
                    this.playinglooptimer = setTimeout(function() {
                        b.checkIsPlayingLoop(++a)
                    }, 1e3))
                },
                setPoster: function() {
                    var a = this.curVideo.getPoster();
                    a || !this.config.pic || this.config.isHtml5UseUI || (a = this.config.pic),
                    b.isString(a) && a.length > 0 ? this.videoTag.poster = a : this.hidePoster()
                },
                hidePoster: function() {
                    this.videoTag.removeAttribute("poster")
                },
                getDuration: function() {
                    var a = this.curVideo.getDuration();
                    return !isNaN(a) && a > 0 ? a : this.videoTag.duration
                },
                getFileSize: function() {
                    var a = "function" == typeof this.curVideo.getFileSize ? this.curVideo.getFileSize() : 0;
                    return !isNaN(a) && a > 0 ? a : 0
                },
                checkPause: function() {
                    var a = []
                      , b = this;
                    g = setInterval(function() {
                        b.videoTag.paused || (a.push(b.videoTag.currentTime),
                        a.length >= 2 && (0 == Math.abs(a[0] - a[1]) ? (g && clearInterval(g),
                        a = [],
                        b.videoTag.load(),
                        b.videoTag.play()) : g && clearInterval(g),
                        a = []))
                    }, 500)
                },
                isPlayingLoadingAd: function() {
                    var a = 1 == this.$video.attr("data-playing-loadingad") || 1 == this.$video.attr("data-playing-adonend");
                    return a
                },
                isPlayingFrontAd: function() {
                    return 1 == this.$video.attr("data-playing-loadingad")
                },
                isPlayingEndAd: function() {
                    return 1 == this.$video.attr("data-playing-adonend")
                },
                isShowingDurationLimit: function() {
                    return this.hasDurationLimit() && this.DurationLimitInstance.isShow
                },
                hasDurationLimit: function() {
                    return this.DurationLimitInstance = this.DurationLimitInstance || this.instance && this.instance.DurationLimitInstance,
                    this.config.isShowDurationLimit && this.DurationLimitInstance && this.DurationLimitInstance.enable
                }
            }),
            a.Html5Tiny = e
        }
    }(tvp, tvp.$),
    function(a, b) {
        function c(b, c) {
            var d = {
                cmd: 3543,
                vid: b.curVideo.getChannelId(),
                contentId: b.config.contentId,
                appId: b.config.appid,
                int5: a.common.isLiveUseHTML5() ? 1 : 0,
                int6: c,
                str8: navigator.userAgent
            };
            a.report(d)
        }
        function d() {
            var c = {
                cmd: 2,
                qq: a.common.getUin(),
                guid: encodeURIComponent(a.$.createGUID()),
                txvjsv: "2.0",
                stream: 2
            }
              , d = {
                debug: "",
                ip: ""
            };
            return b.each(d, function(a) {
                d[a] = b.getUrlParam(a)
            }),
            b.extend(c, d),
            b.os.windows && (c.system = 0),
            (b.os.iphone || b.os.ipod) && (c.system = 1,
            c.sdtfrom = 113),
            b.os.ipad && (c.sdtfrom = 213),
            b.os.android && (c.system = 2,
            c.sdtfrom = 313),
            b.os.mac && (c.system = 3),
            c
        }
        function e(b, c) {
            a.livehub && a.livehub.stepReport && a.livehub.stepReport(b, c)
        }
        function f() {
            var b = this;
            this.$video.off("tvp:loading:livereport").on("tvp:loading:livereport", function(c, d) {
                var e;
                d && (e = d.step),
                e && a.bossReport.h5_live_quality({
                    step: e,
                    playno: i,
                    sid: b.curVideo.getChannelId(),
                    guid: k,
                    vurl: b.$video && b.$video.attr && b.$video.attr("src"),
                    vdef: b.rs_cache && b.rs_cache.defn,
                    tpay: b.rs_cache && b.rs_cache.ispay,
                    cpay: b.rs_cache && b.rs_cache.isuserpay
                })
            })
        }
        function g(d, e) {
            this.config.width = a.$.filterXSS(d),
            this.config.height = a.$.filterXSS(e),
            this.videoTag = null,
            this.$video = null,
            this.protectedFn = {},
            this.isUseControl = !0,
            this.dataset = {},
            b.extend(this.h5EvtAdapter, {
                onPlay: function() {
                    this.report_time = {
                        onplay: (new Date).valueOf()
                    }
                },
                onPlaying: function() {
                    var d = this;
                    this.callCBEvent("onplaying", this.curVideo.getChannelId(), this.curVideo),
                    this.hasReportCanPlayHls || (this.hasReportCanPlayHls = !0,
                    c(d, 1)),
                    setTimeout(function() {
                        var c = !1;
                        d.$video && "function" === b.type(d.$video.attr) && (c = "1" === d.$video.attr("data-playing-loadingad") ? !0 : !1),
                        d.hasReportH5Live || c || (d.hasReportH5Live = !0,
                        d.report_time.onplaying = (new Date).valueOf(),
                        d.report_h5_live({
                            firstload: d.report_time.onplaying - d.report_time.onplay,
                            firstreport: 1,
                            playno: i,
                            blocktime: 0,
                            block: 0,
                            prd: 0
                        }),
                        d.report_event(),
                        a.bossReport.h5_live_quality({
                            step: 6,
                            playno: i,
                            sid: d.curVideo.getChannelId(),
                            guid: k,
                            vurl: this.$video && this.$video.attr && this.$video.attr("src"),
                            vdef: d.rs_cache && d.rs_cache.defn,
                            tpay: d.rs_cache && d.rs_cache.ispay,
                            cpay: d.rs_cache && d.rs_cache.isuserpay
                        }))
                    }, 100)
                },
                onError: function(d, e) {
                    function f(a) {
                        a += "";
                        var c = "1 2 5 6 7 8 10 11 12 13 14 15 16 17 18 19 20 21 25 30 31 32 42 45 46 48 51 60 91".split(" ");
                        return b.inArray(a, c) > -1 ? !1 : !0
                    }
                    d = d || {};
                    var g = this;
                    c(g, 0);
                    var h = -1
                      , j = g.getCurVideo();
                    e && e.target && e.target.error && (h = e.target.error.code);
                    var k;
                    if (m.moduleId = "251",
                    m.businessId = "17",
                    d && d.hasOwnProperty("iretcode") ? (k = d.iretcode,
                    m.businessId = "12",
                    m.moduleId = "104") : -1 !== h ? k = h : (m.businessId = "12",
                    m.moduleId = "104",
                    k = "404"),
                    m.code = k,
                    fullecode = m.platform + m.moduleId + "." + m.businessId + (m.code + "").replace(/\D+/g, ""),
                    this.report_h5_live({
                        errcode: k,
                        playno: i,
                        fullecode: fullecode
                    }),
                    f(k) && (g.onerrorRetryTimes || (g.onerrorRetryTimes = 0),
                    g.onerrorRetryTimes++,
                    g.onerrorRetryTimes < 4))
                        return void g.play(j, !0);
                    b.each(a.html5LiveFrontShow.plugins, function(a, b) {
                        if ("liveDownloader" == b.name) {
                            var c;
                            j && (c = j.getChannelId()),
                            new b.key(g,{
                                code: k,
                                msg: d.errinfo,
                                lid: c
                            })
                        }
                    });
                    var l = d.errinfo;
                    if (!l) {
                        var n = {
                            video_1: "MEDIA_ERR_ABORTED",
                            video_2: "MEDIA_ERR_NETWORK",
                            video_3: "MEDIA_ERR_DECODE",
                            video_4: "MEDIA_ERR_SRC_NOT_SUPPORTED"
                        };
                        l = n[k]
                    }
                    this.callCBEvent("onerror", k, l)
                }
            })
        }
        if (!a.Html5LiveTiny) {
            var h = !1
              , i = a.$.newGuid()
              , j = "tvp_report_h5_live"
              , k = b.getData(j);
            k || (k = a.$.newGuid(),
            b.setData(j, k));
            var l = 0
              , m = {
                platform: 64,
                moduleId: "",
                businessId: ""
            };
            g.fn = g.prototype = new a.BaseHtml5,
            b.extend(g.fn, {
                write: function(b) {
                    a.BaseHtml5.prototype.write.call(this, b),
                    this.callProtectFn("onwrite"),
                    this.callCBEvent("onwrite"),
                    this.callCBEvent("onready"),
                    this.play(this.curVideo, this.config.autoplay),
                    f.call(this)
                },
                play: function(c, f) {
                    function g(a) {
                        j.videoTag.src = a,
                        j.$video && j.$video.trigger && j.$video.trigger("tvp:video:src"),
                        h || (h = !0,
                        j.callCBEvent("oninited")),
                        j.videoTag.pause(),
                        f && (j.videoTag.load(),
                        j.videoTag.play()),
                        j.callCBEvent("onchange", j.curVideo.getChannelId()),
                        j.liveStatusMonitor()
                    }
                    var j = this;
                    if (!this.videoTag)
                        throw new Error("\u672a\u627e\u5230\u89c6\u9891\u64ad\u653e\u5668\u5bf9\u8c61\uff0c\u8bf7\u786e\u8ba4<video>\u6807\u7b7e\u662f\u5426\u5b58\u5728");
                    if (!(c instanceof a.VideoInfo))
                        throw new Error("\u4f20\u5165\u7684\u5bf9\u8c61\u4e0d\u662ftvp.VideoInfo\u7684\u5b9e\u4f8b");
                    b.isUndefined(f) && (f = !0);
                    var l = this.getCurVideo().getChannelId() !== c.getChannelId();
                    if (this.setCurVideo(c),
                    !l && this.videoTag && this.videoTag.src)
                        return this.videoTag.currentTime ? void this.videoTag.play() : (this.videoTag.load(),
                        void this.videoTag.play());
                    var m, n = this.config.playUrl, o = {
                        cnlid: c.getChannelId(),
                        host: a.$.getHost()
                    };
                    o = b.extend(o, d()),
                    j.config && j.config.hasOwnProperty("livepid") && j.config.livepid && (o.livepid = j.config.livepid),
                    c.getAuthExt() && (o.auth_ext = c.getAuthExt());
                    var p, q = b.Deferred(), r = b.Deferred();
                    if (n) {
                        if (!/.*\.?qq\.com$/.test(o.host) && !/.*\.?qq\.com$/.test(n))
                            throw e(10, {
                                config: j.config
                            }),
                            new Error("\u5f53\u524d\u57df\u6216\u8005\u64ad\u653e\u5730\u5740\u4e0d\u5728\u767d\u540d\u5355\u5185!");
                        m = n,
                        e(9, {
                            config: j.config
                        }),
                        q.resolve(m)
                    } else {
                        e(11, {
                            config: j.config
                        });
                        var s = b.now()
                          , t = +new Date
                          , u = b.Ajax || b.ajax;
                        u({
                            url: "//info.zb.video.qq.com/",
                            data: o,
                            scriptCharset: "utf-8",
                            dataType: "jsonp"
                        }).done(function(d, f) {
                            j.dataset.cgiSpendTime = +new Date - t,
                            j.rs_cache = d,
                            f = b.now() - s,
                            d && 0 == d.iretcode || q.reject(d),
                            d.playurl ? (e(12, {
                                delay: f,
                                config: j.config
                            }),
                            a.bossReport.h5_live_quality({
                                playno: i,
                                guid: k,
                                sid: c.getChannelId(),
                                step: 4,
                                vurl: d.playurl,
                                vdef: d.defn,
                                tpay: d.ispay,
                                cpay: d.isuserpay
                            }),
                            p = d.playurl,
                            q.resolve(d.playurl),
                            j.play_limit(d)) : (e(13, {
                                delay: f,
                                config: j.config,
                                code: d.iretcode
                            }),
                            q.reject(d))
                        }).fail(function(a, c) {
                            c = b.now() - s,
                            e(14, {
                                delay: c,
                                config: j.config
                            }),
                            q.reject(a)
                        })
                    }
                    a.Html5UI && b.isFunction(a.Html5UI.fn.buildloadingAd) && j.config.isHtml5UseUI && (j.config.isHtml5ShowLoadingAdOnStart || j.config.isHtml5ShowLoadingAdOnChange) ? (j.$video.attr("tvp_loadingad_ended", 1),
                    j.$video.off("tvp:loadingad:ended").on("tvp:loadingad:ended", function(a, b) {
                        j.config.autoplayAfterLoadingad && b && !b.emptyAd && (f = !0),
                        r.resolve()
                    })) : r.resolve(),
                    b.when(q, r).done(function(a) {
                        g(p)
                    }).fail(function(a) {
                        j.h5EvtAdapter.onError.call(j, a)
                    })
                },
                play_limit: function(a) {
                    function c() {
                        var a, c = '<span class="tvp_text">\u8bd5\u770b{$min}\u5206\u949f</span>';
                        "number" === b.type(d) && (a = 60 > d ? 1 : Math.round(d / 60),
                        c = c.replace("{$min}", a),
                        e.$UILayer.find(".tvp_overlay_play").addClass("tvp_overlay_play_try").append(c))
                    }
                    if (!this.hasPlayInit && a.endplaytime && !(a.endplaytime - a.svrtick <= 0)) {
                        this.hasPlayInit = !0;
                        var d = a.endplaytime - a.svrtick
                          , e = this;
                        c(),
                        this.$video.on("timeupdate", function() {
                            this.currentTime && d - parseInt(this.currentTime) <= 0 && (e.$video && e.$video[0] && (e.$video[0].pause && e.$video[0].pause(),
                            e.$video.remove()),
                            e.callCBEvent("onerror"))
                        })
                    }
                },
                liveStatusMonitor: function() {
                    function c() {
                        var b = a.$.cookie.get("uin") || a.$.cookie.get("luin");
                        return b.replace(/\D+/g, "")
                    }
                    function d() {
                        h = {
                            lid: g.curVideo.getChannelId(),
                            livepid: g.config.livepid,
                            guid: g.curVideo.getGuid(),
                            timeout: 1e4
                        },
                        !h.livepid && g.rs_cache && (h.livepid = g.rs_cache.livepid)
                    }
                    function e() {
                        g.liveStatusTimer && clearTimeout(g.liveStatusTimer),
                        g.liveStatusTimer = null,
                        f()
                    }
                    function f() {
                        var d = "http://live.mobile.video.qq.com/fcgi-bin/live_poll?otype=json&callback=?";
                        "https:" === location.protocol && (d = "https://livemobile.video.qq.com/fcgi-bin/live_poll?otype=json&callback=?"),
                        g.liveStatusTimer || (g.liveStatusTimer = setTimeout(function() {
                            var f = {
                                guid: h.guid || b.newGuid(),
                                qqlog: c()
                            }
                              , i = {
                                pid: h.livepid,
                                type: "concert"
                            };
                            d += "&" + b.param(f),
                            i = encodeURIComponent(b.param(i)),
                            d += "&pollDataKey=" + i;
                            var j = function() {
                                return "tvp_live_pool_jsonp_" + a.$.newGuid().substr(-1)
                            };
                            b.ajax({
                                url: d,
                                jsonpCallback: j(),
                                type: "jsonp"
                            }).done(function(a) {
                                return g.liveStatusTimer = null,
                                a && a.pollTimeOut && (h.timeout = 1e3 * parseInt(a.pollTimeOut)),
                                a && 3 === a.liveStatus ? (g.showError(403, 0),
                                g.videoTag.pause(),
                                void b(g.videoTag).removeAttr("src")) : void e()
                            }).fail(function(a, b) {
                                g.liveStatusTimer = null,
                                h.timeout = 3e4,
                                e()
                            })
                        }, h.timeout))
                    }
                    if (this.videoTag) {
                        var g = this
                          , h = {};
                        b(this.videoTag).off("playing.live_monitor").on("playing.live_monitor", function() {
                            d(),
                            g.liveStatusTimer || f()
                        }),
                        b(this.videoTag).off("error.live_monitor").on("error.live_monitor", function() {
                            g.liveStatusTimer && clearTimeout(g.liveStatusTimer),
                            g.liveStatusTimer = null
                        })
                    }
                },
                report_event: function() {
                    var a, b, c = this.$video, d = "", e = this, f = 0, g = 0, h = 0, j = 0, k = !1;
                    c.on("pause", function() {
                        d = "pause"
                    }).on("playing", function() {
                        d = "play"
                    }).on("play", function() {
                        d = "play"
                    }).on("timeupdate", function() {
                        a = this.currentTime
                    }),
                    setInterval(function() {
                        b || (b = a),
                        "pause" !== d && (a > b ? (d = "playing",
                        k = !1) : (d = "waiting",
                        k || (h += 1),
                        k = !0,
                        j += 1)),
                        b = a > b ? a : b,
                        60 === f && (j = j > 60 ? 60 : j,
                        e.report_h5_live({
                            prd: 1e3 * g,
                            blocktime: 1e3 * j,
                            block: h,
                            firstload: 0,
                            playno: i
                        }),
                        f = 0,
                        h = 0,
                        j = 0,
                        g = 0),
                        "pause" !== d && (f += 1,
                        g += 1)
                    }, 1e3)
                },
                report_h5_live: function(c) {
                    c = c || {};
                    var d = this
                      , e = d.$video.attr("src")
                      , f = function(a) {
                        return "undefined" == typeof a ? "" : a
                    }
                      , g = this.getCurVideo()
                      , h = g.getChannelId()
                      , i = a.$.getUrlParam("cdn", e)
                      , j = a.common.get_stdfrom()
                      , m = a.common.getDeviceId()
                      , n = c.playno || a.$.newGuid()
                      , o = f(c.firstload) || 0
                      , p = f(c.errcode) || 0
                      , q = f(c.blocktime) || 0
                      , r = f(c.block) || 0
                      , s = f(c.firstreport) || 0
                      , t = f(c.prd) || 0
                      , u = "";
                    this.config && this.config.hasOwnProperty("livepid") && this.config.livepid && (u = this.config.livepid);
                    var v = {
                        prog: h,
                        playno: n,
                        guid: k,
                        cdn: i,
                        sdtfrom: j,
                        firstreport: s,
                        firstload: o,
                        blocktime: q,
                        block: r,
                        prd: t,
                        platform: m,
                        errcode: p,
                        durl: e,
                        dsip: a.common.get_hostname_fromUrl(e),
                        sUrl: location.href,
                        sRef: document.referrer,
                        fplayerver: 2,
                        sbiz: "",
                        livepid: u,
                        seq: l,
                        fullecode: c.fullecode || "",
                        live_type: "24",
                        geturltime: this.dataset.cgiSpendTime || ""
                    };
                    this.dataset.cgiSpendTime && o || (v.geturltime = ""),
                    s ? v.cmd = 205 : p || c.fullecode ? v.cmd = 150 : v.cmd = 263;
                    var w = new Image
                      , x = "http://btrace.video.qq.com/kvcollect?BossId=2727&Pwd=1424084450&_dc=" + Math.random();
                    x += "&" + b.param(v),
                    w.src = x,
                    l += 1
                },
                isPlayingLoadingAd: function() {
                    var a = 1 == this.$video.attr("data-playing-loadingad") || 1 == this.$video.attr("data-playing-adonend");
                    return a
                }
            }),
            a.Html5LiveTiny = g,
            a.Html5LiveTiny.maxId = 0
        }
    }(tvp, tvp.$),
    function(a, b) {
        function c(a) {
            this.list = [],
            this.build(a)
        }
        b.extend(c.prototype, {
            build: function(c) {
                if (c && 1 === c.config.type && !b.os.windows) {
                    var d = this
                      , e = c.config.html5LiveFrontShow;
                    b.each(e, function(e, f) {
                        b.each(a.html5LiveFrontShow.plugins, function(a, b) {
                            f == b.name && d.list.push(new b.key(c))
                        })
                    })
                }
            }
        }),
        a.html5LiveFrontShow = {
            plugins: [],
            create: function(a) {
                return a.html5LiveFrontShowInstance = new c(a),
                a.html5LiveFrontShowInstance
            }
        }
    }(tvp, tvp.$),
    function(a, b) {
        function c(a, b) {
            this.build(a, b)
        }
        var d = {
            1: "\u5f53\u524d\u8282\u76ee\u4e0d\u5b58\u5728,\u8bf7\u70b9\u51fb\u89c2\u770b\u5176\u4ed6\u7cbe\u5f69\u8282\u76ee",
            2: "\u5f53\u524d\u89c2\u770b\u4eba\u6570\u8fc7\u591a,\u8bf7\u7a0d\u540e\u91cd\u8bd5",
            3: "\u5f53\u524d\u89c2\u770b\u4eba\u6570\u8fc7\u591a,\u8bf7\u7a0d\u540e\u91cd\u8bd5",
            4: "\u5f53\u524d\u89c2\u770b\u4eba\u6570\u8fc7\u591a,\u8bf7\u7a0d\u540e\u91cd\u8bd5",
            5: "\u5f88\u62b1\u6b49\uff0c\u60a8\u6240\u5728\u7684\u5730\u533a\u56e0\u7248\u6743\u539f\u56e0\u4e0d\u80fd\u64ad\u653e\u8be5\u573a\u76f4\u64ad",
            6: "\u524d\u65b9\u4fe1\u53f7\u6682\u65f6\u4e2d\u65ad,\u8bf7\u7a0d\u540e\u91cd\u8bd5",
            7: "\u8282\u76ee\u672a\u5f00\u59cb,\u8bf7\u70b9\u51fb\u89c2\u770b\u5176\u4ed6\u7cbe\u5f69\u8282\u76ee",
            8: "\u8282\u76ee\u5df2\u7ed3\u675f,\u8bf7\u70b9\u51fb\u89c2\u770b\u5176\u4ed6\u7cbe\u5f69\u8282\u76ee",
            9: "\u6b64\u9891\u9053\u89c2\u770b\u4eba\u6570\u8fbe\u5230\u4e0a\u9650",
            11: "\u5f3a\u5236p2p",
            12: "\u5e94\u7248\u6743\u65b9\u8981\u6c42\uff0c\u6682\u505c\u63d0\u4f9b\u76f4\u64ad\u4fe1\u53f7\uff0c\u8bf7\u70b9\u51fb\u89c2\u770b\u5176\u4ed6\u7cbe\u5f69\u8282\u76ee",
            13: "\u4f7f\u7528p2p",
            14: "\u8bf7\u6c42uri\u683c\u5f0f\u51fa\u9519",
            15: "\u8bf7\u6c42\u7684\u89c6\u9891\u6d41\u683c\u5f0f\u65e0\u6548",
            16: "\u7f3a\u5c11\u8eab\u4efd\u9a8c\u8bc1\u4fe1\u606f",
            17: "referer\u53d7\u9650",
            18: "\u5f53\u524d\u7528\u6237\u4e0d\u5728\u767d\u540d\u5355",
            19: "\u672a\u77e5app\u6765\u6e90",
            20: "\u6765\u6e90\u65e0\u6548",
            21: "\u65e0\u6548\u547d\u4ee4\u5b57",
            22: "\u6559\u80b2\u76f4\u64ad\u65e0\u89c2\u770b\u6743\u9650",
            23: "\u4ed8\u8d39\u9a8c\u8bc1\u8bf7\u6c42\u5931\u8d25",
            24: "\u540e\u53f0\u6743\u9650\u9a8c\u8bc1\u8d85\u65f6",
            25: "\u65e0\u767b\u9646\u4fe1\u606f",
            26: "vip\u9a8c\u8bc1\u8d85\u65f6",
            27: "\u767b\u5f55\u9a8c\u8bc1\u8d85\u65f6",
            28: "\u767b\u5f55\u9a8c\u8bc1\u8bf7\u6c42\u5931\u8d25",
            30: "\u5f53\u524d\u8282\u76ee\u672a\u4ed8\u8d39",
            31: "\u5f53\u524d\u7528\u6237\u672a\u767b\u5f55",
            32: "\u6743\u9650\u9a8c\u8bc1\u5931\u8d25",
            42: "\u6743\u9650\u9a8c\u8bc1\u5931\u8d25",
            44: "\u6743\u9650\u9a8c\u8bc1\u8d85\u65f6",
            45: "\u4eca\u5929\u8bd5\u770b\u6b21\u6570\u5df2\u5230\u8fbe\u4e0a\u9650",
            46: "\u8bd5\u770b\u8ba1\u6570\u9274\u6743\u5931\u8d25",
            47: "\u8bd5\u770b\u8ba1\u6570\u5931\u8d25",
            48: "\u672a\u767b\u5f55\u5fae\u4fe1",
            50: "\u8282\u76ee\u8bd5\u770b\u4fe1\u606f\u83b7\u53d6\u5931\u8d25",
            51: "\u5f53\u524d\u6ca1\u6709\u6b63\u5728\u76f4\u64ad\u7684\u8282\u76ee",
            56: "\u5904\u7406\u7528\u6237\u6d88\u606f\u8d85\u65f6",
            57: "\u8bf7\u6c42\u6392\u961f\u670d\u52a1\u8d85\u65f6",
            60: "\u975e\u6cd5\u56de\u770b\u8bf7\u6c42",
            61: "\u6743\u9650\u9a8c\u8bc1\u5931\u8d25",
            62: "\u6743\u9650\u9a8c\u8bc1\u8d85\u65f6",
            91: "\u9700\u8981\u597d\u83b1\u575e\u6743\u9650\u624d\u80fd\u89c2\u770b",
            "-80004": "\u8bf7\u6c42\u76f4\u901a\u8f66\u672a\u77e5\u9519\u8bef",
            "-80003": "\u8bf7\u6c42\u76f4\u901a\u8f66\u670d\u52a1\u8d85\u65f6",
            104: "\u60a8\u7684\u8d26\u53f7\u540c\u65f6\u5728\u7ebf\u6570\u8d85\u8fc7\u7cfb\u7edf\u4e0a\u9650,\u8bf7\u7a0d\u540e\u518d\u8bd5",
            video_1: "\u76f4\u64ad\u89c6\u9891\u64ad\u653e\u5931\u8d25",
            video_2: "\u76f4\u64ad\u89c6\u9891\u64ad\u653e\u5931\u8d25",
            video_3: "\u76f4\u64ad\u89c6\u9891\u64ad\u653e\u5931\u8d25",
            video_4: "\u76f4\u64ad\u89c6\u9891\u64ad\u653e\u5931\u8d25"
        }
          , e = {
            name: "liveDownloader"
        };
        a.html5LiveFrontShow.plugins.push({
            name: "liveDownloader",
            key: c
        }),
        b.extend(c.prototype, {
            build: function(c, f) {
                function g(a) {
                    return b.inArray(a, [2, 3, 4, 5, 6, 7, 8, 9, 15, 16, 22, 23, 25, 28, 30, 31, 32, 45, 48, 50, 51, 104, "video_1", "video_2", "video_3", "video_4"]) > -1 ? !0 : !1
                }
                if (f = f || {},
                c && 1 === c.config.type) {
                    !f.msg && f.code && (f.msg = d[f.code]),
                    f.msg || (f.msg = "\u672a\u77e5\u9519\u8bef");
                    var h = a.html5skin[e.name]
                      , i = a.html5lang[e.name];
                    i.iframe = window != top ? 'target="_parent"' : "",
                    i.url = a.app.getDownloadUrl(),
                    this.renderData = i,
                    20 === f.code ? this.renderData.btnText = "\u53bb\u817e\u8baf\u89c6\u9891\u770b\u6b63\u7248\u76f4\u64ad" : this.renderData.btnText = "\u770b\u770b\u522b\u7684\u89c6\u9891",
                    b.extend(this.renderData, f),
                    h = b.formatTpl(h, i),
                    this.t = c,
                    this.lid = c.curVideo.getChannelId();
                    var j = c.$UILayer || c.$videomod;
                    this.$mod = j,
                    j.addClass("tvp_container"),
                    this.element = b(h).appendTo(j),
                    this.$errmsg = this.element.find('[data-role="tvp_errormsg"]'),
                    this.$errcode = this.element.find('[data-role="tvp_errrocode"]'),
                    this.$refresh = this.element.find('[data-role="tvp_err_refresh"]'),
                    this.$btn = this.element.find('[data-role="tvp_error_btn"]'),
                    g(f.code) ? this.$refresh.removeClass("tvp_none") : this.$refresh.addClass("tvp_none"),
                    this._checkBtn(),
                    this._bindEvents()
                }
            },
            _checkBtn: function() {
                var b = this
                  , c = this.$btn;
                a.app.check({
                    lid: b.lid,
                    t: b.t
                }).done(function(d) {
                    b.hasApp = d.hasApp,
                    d && d.hasApp ? (c.attr({
                        href: d.liveOpenUrl,
                        "data-url": d.url
                    }),
                    a.common.bindNewMethodOnOpenAppInWeixin(c)) : d && d.url && c.attr({
                        href: d.url,
                        "data-url": d.liveOpenUrl
                    }),
                    b.promotionId = b.t.config.livePromotionId || 140,
                    c.attr("data-promotionid", b.promotionId),
                    b.downloadUrl = d.url,
                    b.bindDownloader(c, c)
                })
            },
            bindDownloader: function(c, d) {
                var e = this
                  , f = "string" === b.type(this.t.config.downloaderCallback) ? this.t.config.downloaderCallback : !1
                  , g = {
                    downloader: !0,
                    downloadUrl: e.downloadUrl,
                    md5: e.md5,
                    range: [1, 2]
                };
                if (!this.hascheckDownloader) {
                    this.hascheckDownloader = !0;
                    var h = {
                        t: e.t,
                        downloadInstance: e,
                        downloadBox: c,
                        downloadBtn: d,
                        range: [1, 2],
                        appName: a.app.config.defaultName,
                        downloadMd5: e.md5,
                        downloaderCallback: f
                    };
                    e.md5 ? a.app.checkCanDownloader(e.hasApp, g, h) : a.app.getAppMd5(e.promotionId).done(function(b) {
                        b && b.md5 && (e.md5 = b.md5,
                        h.downloadMd5 = b.md5,
                        g.md5 = b.md5),
                        a.app.checkCanDownloader(e.hasApp, g, h)
                    }),
                    this.onDownloaderStatusChange()
                }
            },
            onDownloaderStatusChange: function() {
                function a(a) {
                    var c = "";
                    "downloading" === a ? c = "\u6b63\u5728\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891" : "pause" === a ? c = "\u5df2\u6682\u505c\uff0c\u70b9\u51fb\u6062\u590d\u4e0b\u8f7d" : "complete" === a ? (c = "\u4e0b\u8f7d\u5df2\u5b8c\u6210\uff0c\u70b9\u51fb\u5b89\u88c5",
                    a = "install") : "afterInstall" === a ? c = "\u5df2\u6682\u505c\uff0c\u70b9\u51fb\u6062\u590d\u4e0b\u8f7d" : "hasapp" === a && (c = b.renderData.btnText),
                    c || (c = b.renderData.btnText),
                    b.$btn.html(c),
                    b.$btn.attr("data-status", a)
                }
                var b = this;
                this.$btn.on("tvp:appdownload:complete", function() {
                    a("complete")
                }).on("tvp:appdownload:downloading", function() {
                    a("downloading")
                }).on("tvp:appdownload:pause", function() {
                    a("pause")
                }).on("tvp:appdownload:afterInstall", function() {
                    a("afterInstall")
                }).on("tvp:appdownload:hasapp", function() {
                    a("hasapp")
                })
            },
            _bindEvents: function() {
                var a = this;
                this.$btn.on("click", function() {
                    a._report(1)
                }),
                this.t.$video.on("playing", function() {
                    a.element.hide()
                })
            },
            _report: function(b) {
                var c = this.t
                  , d = {
                    cmd: 3542,
                    vid: c.curVideo.getChannelId(),
                    contentId: c.config.contentId,
                    appId: c.config.appid,
                    int5: b
                };
                a.report(d)
            }
        })
    }(tvp, tvp.$),
    function(a, b) {
        b.extend(a.BaseHtml5.fn, {
            enterFullScreen: function() {
                var a = this
                  , b = this.$mod[0]
                  , c = 0;
                if (b.webkitRequestFullScreen)
                    return void b.webkitRequestFullScreen();
                if (this.videoTag.webkitSupportsFullscreen)
                    if (this.videoTag.readyState >= 1)
                        this.videoTag.webkitEnterFullscreen();
                    else {
                        if (++c >= 30)
                            return;
                        setTimeout(function() {
                            a.enterFullScreen()
                        }, 200)
                    }
            }
        })
    }(tvp, tvp.$),
    function(a, b) {
        b.extend(a.Html5Tiny.fn, {
            swtichDefinition: function(a) {
                if (this.curVideo.getFormat() != a) {
                    this.pause();
                    var b = this.getCurTime()
                      , c = this
                      , d = null;
                    this.curVideo.setFormat(a),
                    this.$video.one("canplay canplaythrough", function() {
                        c.isDefinitionSwitching && (setTimeout(function() {
                            c.seek(b)
                        }, 500),
                        d = setInterval(function() {
                            c.videoTag.currentTime >= b && (clearInterval(d),
                            d = null,
                            c.isDefinitionSwitching = !1)
                        }, 50))
                    }),
                    this.isDefinitionSwitching = !0,
                    this.play(this.curVideo)
                }
            }
        })
    }(tvp, tvp.$),
    function(a, b) {
        function c() {
            this.start = a.$.now(),
            this.end = 0
        }
        function d(d, e) {
            this.vid = d || "",
            this.player = e,
            this.rid = e.curVideo.getRid() || b.createGUID(),
            this.pid = e.curVideo.getPid() || b.createGUID(),
            this.reportTimer = {};
            var f = b.isFunction(e.getPlayerType) ? e.getPlayerType().toUpperCase() : ""
              , g = "http://rcgi.video.qq.com/report/play?"
              , h = this.getplatform()
              , i = ["TenPlayer", f, "V2.0"].join("")
              , j = {
                version: i,
                vid: this.vid,
                rid: this.rid,
                pid: this.pid,
                url: window != top ? document.referrer : document.location.href,
                platform: h,
                ptag: a.common.getPtag(),
                pfversion: b.os.version,
                appid: e.config.appid
            };
            this.getStepName = function(a) {
                return "report_" + a
            }
            ,
            this.addStep = function(a) {
                this.reportTimer[this.getStepName(a)] = new c
            }
            ,
            this.delStep = function(a) {
                delete this.reportTimer[this.getStepName(a)]
            }
            ,
            this.report = function(c, d, f) {
                var h = []
                  , i = {}
                  , k = {}
                  , l = g;
                if (c) {
                    b.extend(k, j),
                    "object" == typeof f && b.extend(k, f);
                    try {
                        i.vt = e.curVideo.data.vl.vi[0].ul.ui[0].vt,
                        i.tpay = e.curVideo.tpay,
                        i.tpid = e.curVideo.getTpid && e.curVideo.getTpid(),
                        i.tpid = e.curVideo.data.vl.vi[0].videotype || ""
                    } catch (m) {
                        i.vt = 0
                    }
                    i.vurl = e.curVideo.url,
                    i.bt = parseInt(e.getDuration(), 10),
                    b.extend(k, i),
                    k.step = c,
                    k.ctime = b.getISOTimeFormat(),
                    k.val = d,
                    e && e.config && e.config.isShortVideo ? k.isshortvd = 1 : k.isshortvd = 0,
                    k.opensource = {
                        mqqcartoon: 1,
                        "ugch5.m.v.qq.com": 2,
                        "buluo.qq.com": 3
                    }[a.$.getUrlParam("openS") || e.config.openS],
                    k.opensource || (k.opensource = 0),
                    e.config.openS && /^\d+$/.test(e.config.openS + "") && (k.opensource = e.config.openS),
                    e.curVideo && e.curVideo.getGuid && (k.cmid = e.curVideo.getGuid()),
                    k.ua = a.common.getReportUA && a.common.getReportUA(),
                    k.hh_ref = a.common.getTopFrameUrl && a.common.getTopFrameUrl(),
                    k.hh_ref = k.hh_ref,
                    k.url = k.url;
                    for (var n in k) {
                        var o = k[n];
                        isNaN(o) && (o = encodeURIComponent("" + o)),
                        h.push(n + "=" + o)
                    }
                    l += h.join("&"),
                    a.bossReport.play_report(h)
                }
            }
            ,
            this.reportStep = function(b, d) {
                if (!(this.reportTimer[this.getStepName(b)]instanceof c))
                    return void a.debug("no timer " + b);
                var e = this.reportTimer[this.getStepName(b)].getTimelong();
                isNaN(e) || 0 >= e || e > 9e6 || (this.report(b, e, d),
                this.delStep(b))
            }
        }
        c.prototype = {
            getTimelong: function() {
                if (this.end = a.$.now(),
                this.end <= 0 || this.start <= 0)
                    return 0;
                var b = this.end - this.start;
                return 0 >= b ? 0 : b
            },
            getSeconds: function() {
                return parseInt(this.getTimelong() / 1e3, 10)
            }
        },
        d.fn = d.prototype = {
            getBusinessId: function() {
                if (b.browser.WeChat)
                    return 6;
                if (b.browser.MQQClient)
                    return 17;
                var a = "";
                if (document.location.href.indexOf("http://v.qq.com/iframe/") >= 0 && window != top) {
                    var c = document.referrer;
                    if ("" != c) {
                        var d = document.createElement("a");
                        d.href = c,
                        a = d.hostname,
                        d = null
                    }
                }
                "" == a && (a = document.location.hostname || document.location.host);
                var e = [{
                    r: /(\w+\.)?weixin\.qq\.com$/i,
                    v: 6
                }, {
                    r: /^(v|film)\.qq\.com$/i,
                    v: 1
                }, {
                    r: /^news\.qq\.com$/i,
                    v: 2
                }, {
                    r: /(\w+\.)?qzone\.qq\.com$/i,
                    v: 3
                }, {
                    r: /(\w+\.)?t\.qq\.com$/i,
                    v: 5
                }, {
                    r: /^3g\.v\.qq\.com$/i,
                    v: 8
                }, {
                    r: /^m\.v\.qq\.com$/i,
                    v: 10
                }, {
                    r: /3g\.qq\.com$/i,
                    v: 12
                }];
                a = a.toLowerCase();
                for (var f = 0, g = e.length; g > f; f++) {
                    var h = e[f];
                    if (h.r.test(a))
                        return h.v
                }
                return 7
            },
            getDeviceId: function() {
                var a = b.os
                  , c = navigator.userAgent;
                return a.ipad ? 1 : a.windows ? /Touch/i.test(c) ? 8 : /Phone/i.test(c) ? 7 : 2 : a.android ? a.tablet ? 5 : 3 : a.iphone ? 4 : a.Mac ? 9 : 10
            },
            getplatform: function() {
                var a = this.getBusinessId()
                  , b = this.getDeviceId();
                return 1e4 * a + 100 * b + 1
            }
        },
        a.H5Monitor = d
    }(tvp, tvp.$),
    function(a, b) {
        function c() {}
        var d = {
            case1: {
                promotionId: 755,
                downloadUrl: "http://mcgi.v.qq.com/commdatav2?cmd=4&confid=755&platform=aphone",
                texts: {
                    download: "\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891${limitTips}",
                    downloading: "\u6b63\u5728\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891\uff0c\u9a6c\u4e0a\u5c31\u80fd\u770b\u54df",
                    pause: "\u5df2\u6682\u505c\uff0c\u70b9\u51fb\u6062\u590d\u4e0b\u8f7d",
                    install: "\u4e0b\u8f7d\u5df2\u5b8c\u6210\uff0c\u70b9\u51fb\u5b89\u88c5",
                    afterInstall: "\u5b89\u88c5\u5df2\u5b8c\u6210\uff0c\u8bf7\u6253\u5f00\u817e\u8baf\u89c6\u9891\u770b\u5b8c\u6574\u7248",
                    hasapp: "\u6253\u5f00\u817e\u8baf\u89c6\u9891${limitTips}",
                    _downloading: "\u6b63\u5728\u4e0b\u8f7d",
                    _pause: "\u70b9\u51fb\u6062\u590d",
                    _install: "\u7acb\u5373\u5b89\u88c5",
                    _afterInstall: "\u817e\u8baf\u89c6\u9891\u770b\u66f4\u591a",
                    _afterInstall_1: "\u817e\u8baf\u89c6\u9891\u770b\u66f4\u591a",
                    playText: "\u8bd5\u770b${limitTime}\u5206\u949f",
                    replayText: "\u91cd\u65b0\u64ad\u653e",
                    timingText: "\u817e\u8baf\u89c6\u9891\u770b\u66f4\u591a"
                }
            },
            case2: {
                promotionId: 756,
                downloadUrl: "http://mcgi.v.qq.com/commdatav2?cmd=4&confid=756&platform=aphone",
                texts: {
                    download: "\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891\uff0c\u770b\u7cbe\u5f69\u5b8c\u6574\u7248",
                    playText: "\u8bd5\u770b${limitTime}\u5206\u949f",
                    replayText: "\u91cd\u65b0\u64ad\u653e",
                    timingText: "\u817e\u8baf\u89c6\u9891\u770b\u66f4\u591a"
                }
            },
            case3: {
                promotionId: 754,
                downloadUrl: "http://mcgi.v.qq.com/commdatav2?cmd=4&confid=754&platform=aphone",
                texts: {
                    _download: "\u817e\u8baf\u89c6\u9891\u770b\u66f4\u591a",
                    _downloading: "\u6b63\u5728\u4e0b\u8f7d",
                    _pause: "\u70b9\u51fb\u6062\u590d",
                    _install: "\u7acb\u5373\u5b89\u88c5",
                    _afterInstall: "\u817e\u8baf\u89c6\u9891\u770b\u66f4\u591a",
                    timingText: "\u817e\u8baf\u89c6\u9891\u770b\u66f4\u591a"
                },
                per: 100,
                disable: [2, 3, 4, 5]
            }
        }
          , e = {
            case_regx: [/MicroMessenger/i, /QQ\/(\d+\.(\d+)\.(\d+)\.(\d+))/i, /qqnews\/(\d+\.\d+\.\d+)/],
            name: "durationLimit_v2",
            downloader: !0,
            range: [1, 2]
        }
          , f = {
            HIDE: "tvp_none"
        }
          , g = {
            initEvent1: function() {
                var a = this;
                this.$video.off("play.limit").on("play.limit", function() {
                    a.$limitPlay.addClass(f.HIDE),
                    a.$limitRePlay.addClass(f.HIDE),
                    a.downloaded || a.$banner.addClass(f.HIDE)
                }),
                this.$video.off("playing.limit").on("playing.limit", function() {
                    a.$limitPlay.addClass(f.HIDE),
                    a.$limitRePlay.addClass(f.HIDE),
                    a.showDownload && (a.updateCountDownTime(),
                    a.$smallBtnBox.removeClass(f.HIDE)),
                    a.downloaded || a.$banner.addClass(f.HIDE),
                    setTimeout(function() {
                        a.player && a.player.isPlayingLoadingAd && a.player.isPlayingLoadingAd() && a.$smallBtnBox.addClass(f.HIDE)
                    }, 100),
                    a.player.hasReportLimitShow || (a.player.hasReportLimitShow = !0,
                    a.conf.hasApp && a.stepReport(6, 3))
                }),
                this.$video.off("pause.limit").on("pause.limit", function() {
                    a.player.isTouching || this.ended || a.duration < this.currentTime || (a.player.isTouching || a.$limitPlay.removeClass(f.HIDE),
                    a.showDownload && a.showBanner && a.$banner.removeClass(f.HIDE),
                    a.$smallBtnBox.addClass(f.HIDE),
                    setTimeout(function() {
                        a.hideControl()
                    }, 500))
                }),
                this.$video.off("ended.limit").on("ended.limit", function() {
                    a.player && a.player.isPlayingLoadingAd && a.player.isPlayingLoadingAd() || (a.$limitRePlay.removeClass(f.HIDE),
                    a.$limitPlay.addClass(f.HIDE),
                    a.downloaded || a.$banner.addClass(f.HIDE),
                    a.$smallBtnBox.addClass(f.HIDE))
                }),
                this.$video.off("timeupdate.limit").on("timeupdate.limit", function() {
                    a.showDownload && (a.remain = parseInt(a.duration - this.currentTime),
                    a.updateCountDownTime())
                })
            },
            initEvent2: function() {
                var a = this;
                this.$video.on("play", function() {
                    a.$panel.addClass(f.HIDE)
                }),
                this.$video.on("playing", function() {
                    a.showDownload && (a.updateCountDownTime(),
                    a.$smallBtnBox.removeClass(f.HIDE)),
                    setTimeout(function() {
                        a.player && a.player.isPlayingLoadingAd && a.player.isPlayingLoadingAd() && a.$smallBtnBox.addClass(f.HIDE)
                    }, 100)
                }),
                this.$video.on("pause", function() {
                    a.player.isTouching || this.ended || a.duration < this.currentTime || (a.$panel.removeClass(f.HIDE),
                    a.$limitPlay.removeClass(f.HIDE),
                    a.$limitRePlay.addClass(f.HIDE),
                    a.$smallBtnBox.addClass(f.HIDE))
                }),
                this.$video.on("ended", function() {
                    a.player && a.player.isPlayingLoadingAd && a.player.isPlayingLoadingAd() || (a.$limitRePlay.removeClass(f.HIDE),
                    a.$limitPlay.addClass(f.HIDE),
                    a.$panel.removeClass(f.HIDE),
                    a.$smallBtnBox.addClass(f.HIDE))
                }),
                this.$video.on("timeupdate", function() {
                    a.showDownload && (a.remain = parseInt(a.duration - this.currentTime),
                    a.updateCountDownTime())
                })
            },
            initEvent3: function() {
                var a = this
                  , b = this.$video.get(0);
                b && this.$video.off("timeupdate.limit").on("timeupdate.limit", function() {
                    var b = parseInt(this.currentTime, 10);
                    b && a.showDownload && a.showSmallBtnOnTime(b) && (a.$panel.removeClass(f.HIDE),
                    a.delayHideDOM())
                })
            },
            playBtnEvent: function() {
                var a = this
                  , b = this.$video.get(0);
                b && (a.$video.trigger("tvp_durationlimit_show"),
                a.$limitPlay.on("click", function() {
                    a.player.play(null, !0)
                }),
                a.$limitRePlay.find(".tvp_overlay_replay").on("click", function() {
                    b.currentTime = 0,
                    b.load(),
                    b.play()
                }))
            }
        }
          , h = {
            update: function(a) {
                var b, c, d = this;
                "afterInstall" === a || "hasapp" === a ? (d.downloaded = !1,
                b = d.conf.openUrl,
                c = "open") : (d.downloaded = !0,
                b = d.conf.downloadUrl,
                c = a),
                1 === d.type && (d.$bannerBtn.attr({
                    "data-status": c,
                    "data-downloadurl": b
                }),
                d.$bannerTXT.attr({
                    "data-text": d.renderData[a]
                })),
                "hasapp" !== a && "afterInstall" !== a ? d.$smallBtn.attr({
                    "data-status": c,
                    "data-downloadurl": b
                }) : d.$smallBtn.attr({
                    "data-status": c,
                    href: b
                }),
                d.$smallBtnTXT.attr({
                    "data-text": d.renderData["_" + a]
                })
            },
            onStatusChange: function() {
                if (this.type && 2 !== this.type) {
                    var a = this;
                    this.$box.on("tvp:appdownload:complete", function() {
                        h.update.call(a, "install")
                    }).on("tvp:appdownload:downloading", function() {
                        h.update.call(a, "downloading")
                    }).on("tvp:appdownload:pause", function() {
                        h.update.call(a, "pause")
                    }).on("tvp:appdownload:afterInstall", function() {
                        b(),
                        h.update.call(a, "afterInstall")
                    }).on("tvp:appdownload:hasapp", function() {
                        h.update.call(a, "hasapp")
                    }).on("tvp:appdownload:cancel", function() {
                        h.update.call(a, "download"),
                        a.downloaded = !1
                    });
                    var b = function() {
                        a.$box.off("click.openApp").on("click.openApp", function() {
                            a.stepReport(7, 1)
                        })
                    }
                }
            },
            clickReport: function() {
                var a = this;
                a.conf.hasApp ? a.$btn.off("touchend.stepreport").on("touchend.stepreport", function() {
                    a.stepReport(7, 3)
                }) : b.os.android || (b.os.ios || 2 === a.type) && (a.stepReport(1, 1),
                a.$btn.off("touchend.stepreport").on("touchend.stepreport", function() {
                    a.stepReport(2, 1)
                }))
            },
            setDownload1: function() {
                var c = this;
                this.$box = b([this.$banner.get(0), this.$smallBtnBox.get(0)]),
                this.$btn = b([this.$bannerBtn.get(0), this.$smallBtn.get(0)]),
                this.$btn.attr({
                    href: c.conf.url,
                    "data-downloadurl": c.conf.downloadUrl,
                    "data-downloadmd5": c.conf.md5,
                    "data-promotionid": c.conf.promotionId,
                    "data-url": c.conf.openUrl
                }),
                b.os.android && (a.$.browser.WeChat || a.$.browser.MQQClient) && this.$btn.removeAttr("href"),
                this.bindDownloader(this.$box, this.$btn),
                h.onStatusChange.call(this),
                this.conf && this.conf.hasApp && a.common.bindNewMethodOnOpenAppInWeixin(this.$btn)
            },
            setDownload2: function() {
                var c = this;
                this.$btn = b([this.$bannerBtn.get(0), this.$smallBtn.get(0)]),
                this.$btn.attr({
                    href: c.conf.url,
                    "data-downloadurl": c.conf.downloadUrl,
                    "data-downloadmd5": c.conf.md5,
                    "data-promotionid": c.conf.promotionId,
                    "data-url": c.conf.openUrl
                }),
                a.app.bindTryOpenAppBanner && a.app.bindTryOpenAppBanner({
                    $btn: c.$btn,
                    rewriteText: a.$.noop
                })
            },
            setDownload3: function() {
                var a = this;
                this.$box = this.$panel,
                this.$btn = this.$smallBtn,
                this.$btn.attr({
                    href: a.conf.url,
                    "data-downloadurl": a.conf.downloadUrl,
                    "data-downloadmd5": a.conf.md5,
                    "data-promotionid": a.conf.promotionId,
                    "data-url": a.conf.openUrl
                }),
                this.bindDownloader(this.$box, this.$btn),
                h.onStatusChange.call(this)
            }
        };
        c.prototype = {
            init: function(b) {
                if (b && 1 != b.config.type && b.config.isHtml5UseUI && !b.config.isShortVideo) {
                    this.isqqlive = navigator.userAgent.toLowerCase().indexOf("qqlive") > -1;
                    var c = this;
                    if (this.player = b,
                    this.$video = b.$video,
                    this.vid = b.curVideo.getVid(),
                    this.enable = this.hasLimit(),
                    this.type = this.getLimitCase(),
                    this.conf = d["case" + this.type],
                    a.app && a.app.config && (this.conf.appName = this.conf.appName || a.app.config.defaultName),
                    this.isqqlive)
                        try {
                            b.config.disableLimitBanner = "1,2,3"
                        } catch (e) {}
                    return this.updateUserConfig(),
                    this.isUseCase1UI(),
                    this.showBanner = !this.hasAppBanner(),
                    this.whenToDisableCase3(),
                    a.app && a.app.isSupportApp ? void (0 !== this.type && (this.isqqlive && (this.showBanner = !1,
                    this.showDownload = !1),
                    this.enable && b.trigger && b.trigger("tvp.durationlimit.enable"),
                    this.$video && this.$video.trigger && this.$video.on("tvp:player:videochange", function() {
                        c.enable = !1
                    }),
                    this.start())) : void (this.enable && this.macLimit())
                }
            },
            hide: function() {
                var a = this;
                a.$smallBtnBox && a.$smallBtnBox.addClass(f.HIDE),
                a.$limitPlay && a.$limitPlay.addClass(f.HIDE),
                a.$limitRePlay && a.$limitRePlay.addClass(f.HIDE),
                a.$limitRePlay && a.$limitRePlay.addClass(f.HIDE),
                a.$panel && a.$panel.addClass(f.HIDE)
            },
            updateUserConfig: function() {
                var a = this.player.config.disableLimitBanner
                  , c = this.type + ""
                  , f = this.player.config.caseSetting
                  , g = this.player.config.limitSetting;
                if (this.showDownload = !0,
                a && (a = a.split(","),
                a && a.length && b.inArray(c, a) > -1 && (this.showDownload = !1)),
                this.showDownload && 3 === this.type && (this.showDownload = this.randomShowSmallBtn()),
                f)
                    for (var h in f)
                        for (var i in f[h])
                            "object" === b.type(f[h][i]) ? b.extend(d[h][i], f[h][i]) : d[h][i] = f[h][i];
                g && b.extend(e, g),
                b.extend(this.conf, e)
            },
            isUseCase1UI: function() {
                2 === this.type && this.showDownload === !1 && this.player.config.useLimitCase1UI === !0 && (this.type = 1,
                this.conf = d["case" + this.type],
                this.conf.appName = this.conf.appName || a.app.config.defaultName)
            },
            hasLimit: function() {
                var a = this.player.curVideo.data
                  , b = this
                  , c = function(a) {
                    b.player.curVideo.setDuration(a.toString()),
                    b.preview = a,
                    b.remain = a,
                    b.duration = a
                };
                return this.player && this.player.config && this.player.config.isInewsLayer && a.preview > 60 ? (a.preview > 600 ? c(300) : a.preview > 60 && c(60),
                !0) : a && a.exem && a.preview ? (c(a.preview),
                !0) : !1
            },
            getLimitCase: function() {
                var a = navigator.userAgent.toLowerCase()
                  , c = e.case_regx
                  , d = !1;
                return b(c).each(function(b, c) {
                    return c.test(a) ? (d = !0,
                    !1) : void 0
                }),
                this.enable ? d ? 1 : 2 : d ? 3 : 0
            },
            start: function() {
                var a = this;
                this.getOnlineTipsText();
                try {
                    a.showReport(),
                    a.tipsSetting(),
                    a.render(),
                    a.initDOM(),
                    a.initDisplay()
                } catch (c) {}
                var d = g["initEvent" + a.type];
                "function" === b.type(d) && d.call(a),
                a.showDownload && a.initDownload(),
                (1 === a.type || 2 === a.type) && g.playBtnEvent.call(a),
                this.$video.off("playing.limit-control").on("playing.limit-control", function() {
                    a.duration = a.player.getDuration()
                }),
                this.$video.off("timeupdate.limit-control").on("timeupdate.limit-control", function() {
                    var c = this.currentTime;
                    c > a.duration && (this.pause(),
                    this.ended = !0,
                    b(this).trigger("ended"),
                    a.$video && a.$video.trigger && a.$video.trigger("tvp:player:ended"))
                })
            },
            tipsSetting: function() {
                var a = "\u770b\u7cbe\u5f69\u5b8c\u6574\u7248"
                  , b = d["case" + this.type].texts
                  , c = "case" + this.type;
                a = this.bannerTips ? this.bannerTips : a;
                for (var e in b)
                    d[c].texts[e] = (d[c].texts[e] + "").replace("${limitTips}", ", " + a)
            },
            render: function() {
                var c = a.html5skin[e.name + "_case" + this.type]
                  , f = d["case" + this.type]
                  , g = f.texts
                  , h = this.preview - 29;
                g && (h = 0 > h ? 1 : Math.ceil(h / 60),
                g.limitTime = h,
                c = b.formatTpl(c, g),
                this.renderData = g,
                this.$mod = this.player.$UILayer || this.player.$videomod,
                this.$mod.addClass("tvp_container"),
                this.element = b(c).appendTo(this.$mod))
            },
            initDOM: function() {
                this.$mod && (1 === this.type ? (this.$panel = this.$mod.find('[data-role="tvp-limit-case1"]'),
                this.$limitRePlay = this.$mod.find('[data-role="tvp-limit-replay"]'),
                this.$limitPlay = this.$mod.find('[data-role="tvp-limit-play"]'),
                this.$banner = this.$mod.find('[data-role="tvp-limit-download"]'),
                this.$bannerBtn = this.$banner.find('[data-role="tvp-limit-download-btn"]'),
                this.$bannerTXT = this.$banner.find('[data-role="tvp-limit-download-text"]'),
                this.$smallBtnBox = this.$mod.find('[data-role="tvp-limit-timing"]'),
                this.$smallBtn = this.$smallBtnBox.find('[data-role="tvp-limit-timing-btn"]'),
                this.$smallBtnTXT = this.$smallBtnBox.find('[data-role="tvp-limit-timing-text"]'),
                this.$remain = this.$smallBtn.find('[data-role="tvp-limit-timing-text"]')) : 2 === this.type ? (this.$panel = this.$mod.find('[data-role="tvp-limit-case2"]'),
                this.$limitPlay = this.$mod.find('[data-role="tvp-limit-play"]'),
                this.$limitRePlay = this.$mod.find('[data-role="tvp-limit-replay"]'),
                this.$banner = this.$mod.find('[data-role="tvp-limit-download"]'),
                this.$bannerBtn = this.$banner.find('[data-role="tvp-limit-download-btn"]'),
                this.$smallBtnBox = this.$mod.find('[data-role="tvp-limit-timing"]'),
                this.$smallBtn = this.$smallBtnBox.find('[data-role="tvp-limit-timing-btn"]'),
                this.$replayText = this.$limitRePlay.find('[data-role="tvp-limit-replay-text"]'),
                this.$remain = this.$smallBtn.find('[data-role="tvp-limit-timing-text"]')) : 3 === this.type && (this.$panel = this.$mod.find('[data-role="tvp-limit-case3"]'),
                this.$smallBtn = this.$panel.find('[data-role="tvp-limit-timing-btn"]'),
                this.$smallBtnTXT = this.$panel.find('[data-role="tvp-limit-timing-text"]')),
                this.$play = this.$mod.find(a.html5skin.elements.overlay.play))
            },
            initDisplay: function() {
                1 === this.type ? (this.showDownload && this.showBanner && this.$banner.removeClass(f.HIDE),
                this.$panel.removeClass(f.HIDE),
                this.$limitPlay.removeClass(f.HIDE),
                this.$play.addClass(f.HIDE)) : 2 === this.type ? (this.$panel.removeClass(f.HIDE),
                this.showDownload && this.showBanner && this.$banner.removeClass(f.HIDE),
                this.$play.addClass(f.HIDE)) : 3 === this.type && this.$panel.addClass(f.HIDE)
            },
            randomShowSmallBtn: function() {
                if (!this.conf || "undefined" === b.type(this.conf.per))
                    return !1;
                var a = parseInt(100 * Math.random(), 10) + 1;
                return a > 100 - this.conf.per ? !0 : !1
            },
            getOnlineTipsText: function() {
                var c = b.Deferred()
                  , d = a.common.recomdTextById(this.vid)
                  , e = this;
                return 1 !== this.type ? (c.resolve(),
                c) : (d && "string" === b(d.rmdword) && d.rmdword ? (e.bannerTips = d.rmdword,
                e.reportData = d,
                c.resolve()) : d && "function" === b.type(d.done) ? d.done(function() {
                    var b = a.common.recomdText[e.vid];
                    b && b.rmdword && (e.bannerTips = b.rmdword),
                    e.reportData = b,
                    c.resolve()
                }) : c.resolve(),
                c)
            },
            showSmallBtnOnTime: function(a) {
                return 3 !== this.type ? !1 : this.isPad() ? !0 : 1 === a ? !0 : a % 30 === 0 ? !0 : !1
            },
            isPad: function() {
                return b.os.ipad || b.os.tablet
            },
            updateCountDownTime: function() {
                if (this.remain && !this.downloaded) {
                    var a, b = parseInt(this.remain / 60), c = this.remain % 60;
                    c = 10 > c ? "0" + c : c,
                    b = 10 > b ? "0" + b : b,
                    a = b + ":" + c,
                    this.$remain.attr("data-text", "\u8fd8\u5269 " + a)
                }
            },
            delayHideDOM: function(a, b) {
                a = a || this.$panel,
                b = b || 1e4;
                var c = this;
                this.delayTimer || (this.delayTimer = setTimeout(function() {
                    c.downloaded || a.addClass(f.HIDE),
                    c.delayTimer = null
                }, b))
            },
            showReport: function() {
                this.reportData && this.reportData.tab_id && this.reportData.alginfo && a.bossReport.rcmdTextReport(1, this.reportData.tab_id, this.reportData.alginfo, 1)
            },
            getMD5: function() {
                var c = b.Deferred()
                  , d = this
                  , e = this.conf.appName;
                return this.conf.promotionId ? this.conf.md5 ? (c.resolve(),
                c) : (a.app.getAppMd5(this.conf.promotionId, e).done(function(a) {
                    a && a.md5 && (d.conf.md5 = a.md5),
                    c.resolve()
                }).fail(function() {
                    c.reject()
                }),
                c) : (c.reject(),
                c)
            },
            check: function() {
                var c = b.Deferred()
                  , d = this;
                return this.conf.promotionId && d.conf.downloadUrl ? (this.getMD5().done(function() {
                    return d.conf.md5 ? void a.app.check({
                        vid: d.vid,
                        promotionId: d.conf.promotionId,
                        downloadUrl: d.conf.downloadUrl,
                        md5: d.conf.md5
                    }).done(function(a) {
                        a && a.openUrl && (d.conf.hasApp = a.hasApp,
                        d.conf.openUrl = a.openUrl,
                        d.conf.url = a.url),
                        c.resolve()
                    }) : void c.reject()
                }).fail(function() {
                    c.reject()
                }),
                c) : (c.reject(),
                c)
            },
            initDownload: function() {
                var a = this;
                this.check().done(function() {
                    if (a.conf && a.conf.openUrl && a.conf.url) {
                        var c = h["setDownload" + a.type];
                        "undefined" !== b.type(c) && (c.call(a),
                        h.clickReport.call(a),
                        a.conf.hasApp && a.$box && "function" === b.type(a.$box.trigger) && a.$box.trigger("tvp:appdownload:hasapp"))
                    }
                })
            },
            bindDownloader: function(c, d) {
                var e = this
                  , f = "string" === b.type(this.player.config.downloaderCallback) ? this.player.config.downloaderCallback : !1;
                this.player.config && this.player.config.plugins && this.player.config.plugins.AppBanner && this.player.config.plugins.AppBanner.downloaderCallback && (f = this.player.config.plugins.AppBanner.downloaderCallback),
                this.player.config && this.player.config.plugins && this.player.config.plugins.AppFollow && this.player.config.plugins.AppFollow.downloaderCallback && (f = this.player.config.plugins.AppFollow.downloaderCallback);
                var g = {
                    downloader: e.conf.downloader,
                    downloadUrl: e.conf.downloadUrl,
                    md5: e.conf.md5,
                    range: e.conf.range
                };
                if (!this.hascheckDownloader) {
                    this.hascheckDownloader = !0;
                    var h = {
                        t: e.player,
                        downloadInstance: e,
                        downloadBox: c,
                        downloadBtn: d,
                        downloadProgress: !0,
                        range: e.conf.range,
                        appName: e.conf.appName,
                        downloadMd5: e.conf.md5,
                        downloaderCallback: f
                    };
                    a.app.checkCanDownloader(e.conf.hasApp, g, h)
                }
            },
            stepReport: function(b, c) {
                var d = this
                  , e = this.player
                  , f = {
                    vid: e.curVideo.getVid(),
                    appCase: c,
                    reportStep: b
                };
                f.promotionId = d.conf.promotionId,
                a.dataset.gPromotionId && (f.promotionId = a.dataset.gPromotionId),
                e.config.reportFrom && e.config.reportFrom.page && (f.xinwenTpl = e.config.reportFrom.page + ""),
                a.bossReport.appLunchShowClickReport(f)
            },
            hasAppBanner: function() {
                var a = this;
                return b.createAppFollow || a.player && a.player.config && a.player.config.plugins && (a.player.config.plugins.AppBanner || a.player.config.plugins.AppFollow) ? !0 : !1
            },
            whenToDisableCase3: function() {
                if (3 === this.type) {
                    var c = this;
                    if ("all" === this.conf.disable)
                        return void (this.showDownload = !1);
                    if (b.isArray(c.conf.disable)) {
                        var d = function() {
                            var b, c, d = a.app.pageType;
                            try {
                                c = top.location.host
                            } catch (e) {
                                c = null
                            }
                            return b = 1 === d ? "mp.weixin.qq.com" === c ? 1 : "view.inews.qq.com" === c ? 2 : 3 : 2 === d ? "view.inews.qq.com" === c ? 4 : 5 : 3 === d ? 6 : 7
                        };
                        b.inArray(d(), c.conf.disable) > -1 && (this.showDownload = !1)
                    }
                }
            },
            hideControl: function() {
                this.player && this.player.hideControl && this.player.hideControl()
            },
            macLimit: function() {
                var c = a.common.isMac();
                if (c) {
                    var d, e, f, g, h = this.player.$UILayer, i = this.player.$video, j = i.parent().find("video"), k = this;
                    if (e = h.find('[data-role="tvp_fn_tips_box"]')) {
                        f = e.find('[data-role="tvp_fn_tips_text"]'),
                        g = window.txv && txv.login && "function" === b.type(txv.login.openLogin),
                        d = "v.qq.com" === window.location.hostname ? g ? '<span style="cursor: pointer;" class="tvp_link tvp_fn_openLogin">\u767b\u5f55</span>\u540e\u53ef\u89c2\u770b\u5b8c\u6574\u7248' : '<a class="tvp_link" href="http://v.qq.com/">\u767b\u5f55</a>\u540e\u53ef\u89c2\u770b\u5b8c\u6574\u7248' : '\u5728<a class="tvp_link" href="http://v.qq.com/">v.qq.com</a>\u767b\u5f55\u540e\u53ef\u89c2\u770b\u5b8c\u6574\u7248';
                        var l = function() {
                            f.html(d),
                            "v.qq.com" === window.location.hostname && a.$(".tvp_fn_openLogin").off("click").on("click", function() {
                                window.txv && txv.login && txv.login.openLogin && (k.player && k.player.checkIsFullScreen && k.player.checkIsFullScreen() && k.player.cancelFullScreen(),
                                txv.login.openLogin())
                            }),
                            setTimeout(function() {
                                return "function" === b.type(k.player.isPlayingLoadingAd) && k.player.isPlayingLoadingAd() ? void e.addClass("tvp_none") : void e.removeClass("tvp_none")
                            }, 300)
                        };
                        j.on("playing", function() {
                            l()
                        })
                    }
                }
            },
            clear: function() {
                this.$video.off("play.limit").off("playing.limit").off("pause.limit").off("timeupdate.limit").off("ended.limit"),
                1 === this.type ? this.$panel.remove() : 2 === this.type ? (this.$panel.remove(),
                this.$smallBtnBox.remove()) : 3 === this.type && this.$panel.remove(),
                this.$video.trigger("tvp_durationlimit_hide")
            }
        },
        a.html5DurationLimit = {
            create: function(b) {
                b.DurationLimitInstance && "function" === a.$.type(b.DurationLimitInstance.clear) && b.DurationLimitInstance.clear(),
                b.DurationLimitInstance = new c;
                try {
                    b.DurationLimitInstance.init(b)
                } catch (d) {}
                return b.DurationLimitInstance
            }
        }
    }(tvp, tvp.$),
    function(a, b) {
        b.extend(a.Html5Tiny.fn, {
            buildmonitor: function() {
                var c = this
                  , d = null
                  , e = 0
                  , f = !1;
                this.$video.on("playing", function() {
                    setTimeout(function() {
                        c.isPlayingLoadingAd() && (c.hasAds = !0,
                        d && d.reportStep(7, {
                            val1: 1
                        }))
                    }, 90)
                }),
                this.$video.on("tvp:video:ajaxstart", function(b, e, g) {
                    f = g,
                    d = null,
                    d = new a.H5Monitor(e,c),
                    d.addStep(f ? 1009 : 1011),
                    d.addStep(7)
                }).on("tvp:video:ajaxsuc", function() {
                    d && (d.report(3, 1),
                    d.reportStep(f ? 1009 : 1011, {
                        val1: 1,
                        val2: 0
                    }))
                }).on("tvp:video:src", function() {
                    e = 0,
                    d.report(4, 1, {
                        val2: 1
                    }),
                    d.addStep(6),
                    d.addStep(30),
                    c.$video.one("canplay", function() {
                        d && d.reportStep(30, {
                            val1: 0,
                            val2: 2
                        })
                    }).one("error", function() {
                        d && (d.reportStep(30, {
                            val1: 1,
                            val2: 2
                        }),
                        d.report(5, 0, {
                            val1: 3
                        }))
                    }).one("playing", function() {
                        d && (d.reportStep(6, {
                            val1: c.hasAds ? 4 : 1
                        }),
                        d.addStep(5),
                        h({
                            itype: 1
                        }),
                        c.$video.one("tvp:player:ended", function() {
                            d.reportStep(5, {
                                val1: 1
                            }),
                            h({
                                itype: 2
                            })
                        }).one("tvp:player:videochange", function() {
                            d.reportStep(5, {
                                val1: 2
                            }),
                            h({
                                itype: 3
                            })
                        }))
                    })
                }).on("waiting", function() {
                    d && 1 != ++e && (c.isDefinitionSwitching || c.isTouching || (d.addStep(31),
                    c.$video.one("timeupdate", g)))
                }).one("tvp:h5ui:playbtn:click", function() {
                    h({
                        itype: 4
                    })
                });
                var g = function() {
                    var a = d.reportTimer[d.getStepName(31)]
                      , b = 0;
                    return a ? (b = a.getTimelong(),
                    d.report(31, Math.min(1e4, b), {
                        val1: b > 1e4 ? 1 : 0,
                        val2: 2,
                        "ptime ": c.videoTag.currentTime
                    }),
                    void c.$video.off("timeupdate", g)) : void c.$video.off("timeupdate", g)
                }
                  , h = function(d) {
                    d = d || {};
                    var e = {
                        cmd: 3533,
                        appId: c.config.appid || 0,
                        contentId: c.config.contentId || "",
                        vid: c.curVideo.getFullVid(),
                        init5: c.hasDurationLimit() ? 1 : 0
                    };
                    e = b.extend(e, d),
                    a.report(e)
                }
            }
        })
    }(tvp, tvp.$),
    function(a, b) {
        a.html5lang = {
            errMsg: {
                "default": "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                0: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25",
                68: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                "-1": "\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                "-2": "\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                "-3": "\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                "-4": "\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                "-6": "\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                "-7": "\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                50: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                52: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u6682\u65e0\u6cd5\u89c2\u770b",
                64: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u6682\u65e0\u6cd5\u89c2\u770b",
                51: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u6682\u65e0\u6cd5\u89c2\u770b",
                61: "\u5f53\u524d\u89c6\u9891\u5df2\u4e0b\u67b6\uff0c\u6682\u65e0\u6cd5\u89c2\u770b",
                62: "\u5f53\u524d\u89c6\u9891\u4e0d\u5b58\u5728\uff0c\u6682\u65e0\u6cd5\u89c2\u770b",
                63: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u6682\u65e0\u6cd5\u89c2\u770b",
                65: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u6682\u65e0\u6cd5\u89c2\u770b",
                67: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u6682\u65e0\u6cd5\u89c2\u770b",
                69: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u6682\u65e0\u6cd5\u89c2\u770b",
                71: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u6682\u65e0\u6cd5\u89c2\u770b",
                73: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u6682\u65e0\u6cd5\u89c2\u770b",
                74: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u6682\u65e0\u6cd5\u89c2\u770b",
                76: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                77: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                80: {
                    0: "\u56e0\u7248\u6743\u9650\u5236,\u8bf7\u5230\u817e\u8baf\u89c6\u9891\u89c2\u770b",
                    1: "\u5f88\u62b1\u6b49\uff0c\u5f53\u524dIP\u5730\u5740\u6240\u5728\u5730\u533a\u6682\u4e0d\u652f\u6301\u64ad\u653e",
                    2: "\u56e0\u7248\u6743\u9650\u5236\uff0c\u6682\u4e0d\u652f\u6301\u64ad\u653e",
                    9: "\u56e0\u7248\u6743\u9650\u5236\uff0c\u8bf7\u5230\u817e\u8baf\u89c6\u9891APP\u89c2\u770b",
                    callback: function(b, c, d) {
                        if (0 == parseInt(c) && a.app && d && d.vid) {
                            var e = a.html5skin.errorDownloader;
                            a.app.check(d).done(function(a) {
                                if (a.url) {
                                    var c = b.find(".tvp_player_error_content");
                                    c = b;
                                    var d = b.find(".text").html();
                                    d = d.substr(0, d.indexOf("(")),
                                    e ? (d = e.replace("${errorMsg}", d),
                                    d = d.replace("${url}", a.url)) : d = '<a href="' + a.url + '">' + d + "</a>",
                                    c.length && c.html(d)
                                }
                            })
                        }
                    }
                },
                81: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u6682\u65e0\u6cd5\u89c2\u770b",
                82: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u6682\u65e0\u6cd5\u89c2\u770b",
                83: {
                    main: "\u8be5\u7247\u4e3a\u4ed8\u8d39\u89c6\u9891\uff0c\u8bf7\u524d\u5f80\u817e\u8baf\u89c6\u9891\u89c2\u770b",
                    "-2": "\u4f1a\u5458\u4e13\u4eab\u5185\u5bb9\uff0c\u8bf7\u6253\u5f00\u817e\u8baf\u89c6\u9891\u89c2\u770b",
                    "-1": "\u4f1a\u5458\u4e13\u4eab\u5185\u5bb9\uff0c\u8bf7\u6253\u5f00\u817e\u8baf\u89c6\u9891\u89c2\u770b",
                    "-3": "\u8be5\u7247\u4e3a\u6570\u5b57\u97f3\u4e50\u4e13\u8f91\u72ec\u5bb6\u89c6\u9891\uff0c\u8bf7\u524d\u5f80QQ\u97f3\u4e50\u652f\u6301\u8d2d\u4e70\u540e\u67e5\u770b"
                },
                84: "\u5f88\u62b1\u6b49\uff0c\u6839\u636e\u60a8\u7684IP\u5730\u5740\uff0c\u6682\u65e0\u6cd5\u64ad\u653e",
                85: {
                    main: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                    "-1": "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                    "-2": "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                    "-3": "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                    "-4": "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                    "-5": "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                    "-6": "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5"
                },
                86: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                100: {
                    main: "\u56e0\u4e3a\u7248\u6743\u9650\u5236\uff0c\u8bf7\u8df3\u8f6c\u5230\u817e\u8baf\u89c6\u9891APP\u89c2\u770b",
                    1: "\u56e0\u4e3a\u7248\u6743\u9650\u5236\uff0c\u8bf7\u8df3\u8f6c\u5230\u817e\u8baf\u89c6\u9891APP\u89c2\u770b",
                    2: "NBA\u89c6\u9891\u9650\u5236\uff0c\u8bf7\u8df3\u8f6c\u5230\u817e\u8baf\u89c6\u9891APP\u89c2\u770b"
                },
                500: {
                    main: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                    1: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5",
                    2: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5"
                },
                403: {
                    0: "\u76f4\u64ad\u5df2\u7ed3\u675f"
                }
            },
            getErrMsg: function(c, d) {
                if (isNaN(c))
                    return "";
                if (c in a.html5lang.errMsg) {
                    var e = a.html5lang.errMsg[c];
                    if (0 === c && "-" + d in a.html5lang.errMsg && (e += "\uff0c" + a.html5lang.errMsg["-" + d]),
                    b.isString(e))
                        return e;
                    if (b.isPlainObject(e)) {
                        var f;
                        return f = d in e ? e[d] : e.main,
                        f || a.html5lang.errMsg["default"]
                    }
                }
                return a.html5lang.errMsg["default"]
            },
            definition: {
                mp4: "\u9ad8\u6e05",
                msd: "\u6d41\u7545"
            },
            srtLang: {
                50001: {
                    srclang: "zh-cn",
                    desc: "\u7b80\u4f53\u4e2d\u6587"
                },
                50002: {
                    srclang: "zh-cn",
                    desc: "\u7b80\u4f53\u4e2d\u6587"
                },
                50003: {
                    srclang: "zh-tw",
                    desc: "\u7e41\u4f53\u4e2d\u6587"
                },
                50004: {
                    srclang: "en",
                    desc: "\u82f1\u6587"
                },
                50005: {
                    srclang: "zh-cn,en",
                    desc: "\u7b80\u4f53\u4e2d\u6587&\u82f1\u6587"
                },
                50006: {
                    srclang: "zh-tw,en",
                    desc: "\u7e41\u4f53\u4e2d\u6587&\u82f1\u6587"
                }
            },
            durationLimit: {
                msg: "5\u5206\u949f\u770b\u7684\u4e0d\u591f\u723d\uff1f\u817e\u8baf\u89c6\u9891\u6709\u9ad8\u6e05\u5b8c\u6574\u7248\uff0c\u7b49\u4f60\u6765\u770b~",
                padMsg: "\u672c\u8282\u76ee\u53ea\u63d0\u4f9b5\u5206\u949f\u9884\u89c8\u3002\u817e\u8baf\u89c6\u9891\u5ba2\u6237\u7aef\u53ef\u4ee5\u89c2\u770b\u9ad8\u6e05\u5b8c\u6574\u7248\uff0c\u7b49\u4f60\u5594~",
                download: "\u4e0b\u8f7dAPP",
                padPlay: "\u7acb\u5373\u64ad\u653e",
                play: "\u7ee7\u7eed\u64ad\u653e",
                replay: "\u91cd\u65b0\u64ad\u653e",
                open: "\u53bb\u770b\u5b8c\u6574\u7248"
            },
            liveDownloader: {
                downloadText: "\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891\uff0c\u89c2\u770b\u89c6\u9891\u76f4\u64ad",
                openText: "\u6253\u5f00\u817e\u8baf\u89c6\u9891\uff0c\u89c2\u770b\u89c6\u9891\u76f4\u64ad"
            },
            getDefiName: function(b) {
                return b in a.defaultConfig.definition ? a.defaultConfig.definition[b] : ""
            },
            getSrtName: function(b) {
                return b in a.html5lang.srtLang ? a.html5lang.srtLang[b].desc : ""
            }
        }
    }(tvp, tvp.$),
    tvp.html5skin = {
        defaultError: function() {
            return [' <div class="tvp_player_error" id="$ERROR-TIPS-INNER$">', '   <div class="tvp_error_inner">', '     <div class="tvp_error_title">$ERROR-MSG$</div>', '     <div class="tvp_error_desc">$ERROR-DETAIL$</div>', '     <a href="javascript:;" data-role="error-refresh" class="tvp_btn_simple tvp_none">\u5237\u65b0</a>', "  </div>", " </div>"].join("")
        }(),
        errorDownloader: function() {
            return ['<div class="tvp_live_download_app">', '	<a class="tvp_download_app_inner" href="${url}">', '		<i class="tpv_icon_download"></i>', '		<span class="tvp_icon_text">${errorMsg}</span>', "	</a>", "</div>"].join("")
        }(),
        durationLimit: function() {
            return ['<div style="display:none" class="tvp_limit_tips" data-role="durationLimit">', '   <div class="tvp_limit_tips_inner">', '		<div class="tvp_tips_content">', '			<p class="tvp_tips_text">${msg}</p>', "		</div>", '		<div class="tvp_btn_line">', '			<span data-role="durationLimit-play" class="tvp_btn tvp_btn_try">${play}</span>', '			<span  data-role="durationLimit-replay" class="tvp_btn tvp_btn_try">${replay}</span>', '			<a data-action="applink" ${iframe} href="${url}" data-url="" data-role="durationLimit-download" class="tvp_btn tvp_btn_download">${download}</a>', '			<a data-action="applink" href="" data-url="" data-role="durationLimit-open" class="tvp_btn tvp_btn_download">${open}</a>', "		</div>", "	</div>", "</div>"].join("")
        }(),
        durationLimit_v2_case1: function() {
            return ['<div data-role="tvp-limit-case1" class="tvp_none">', '<div class="tvp_layer_replay tvp_none" data-role="tvp-limit-replay">', '<div class="tvp_overlay_replay">', '<span class="tvp_button_replay"></span>', '<span class="tvp_text" data-role="tvp-limit-replay-text">${replayText}</span>', "</div>", "</div>", '<div class="tvp_overlay_play_try tvp_none" data-role="tvp-limit-play">', '<span class="tvp_button_play"></span>', '<span class="tvp_text" data-role="tvp-limit-play-text">${playText}</span>', "</div>", '<div class="tvp_app_banner tvp_none" data-role="tvp-limit-download">', '<a data-role="tvp-limit-download-btn" href="javascript:;" class="tvp_app_btn" data-status="down">', '<span class="tvp_progress">', '<span class="tvp_progress_current"></span>', "</span>", '<span data-role="tvp-limit-download-text" class="tvp_text" data-text="${download}"></span>', "</a>", "</div>", '<div class="tvp_app_badge tvp_none" data-role="tvp-limit-timing">', '<a href="javascript:;" data-role="tvp-limit-timing-btn" class="tvp_app_btn" data-status="down">', '<span class="tvp_progress"><span class="tvp_progress_current"></span></span>', '<span class="tvp_text" data-text="\u8fd8\u5269" data-role="tvp-limit-timing-text"></span>', "</a>", "</div>", "</div>"].join("")
        }(),
        durationLimit_v2_case2: function() {
            return ['<div class="tvp_external_layer tvp_none" data-role="tvp-limit-case2">', '<div class="tvp_external_inner">', '<div class="tvp_overlay_play_try" data-role="tvp-limit-play">', '<span class="tvp_button_play"></span>', '<span class="tvp_text" data-role="tvp-limit-play-text">${playText}</span>', "</div>", '<div class="tvp_layer_replay tvp_none" data-role="tvp-limit-replay">', '<div class="tvp_overlay_replay">', '<span class="tvp_button_replay"></span>', '<span class="tvp_text" data-role="tvp-limit-replay-text">${replayText}</span>', "</div>", "</div>", '<div class="tvp_app_banner tvp_none" data-role="tvp-limit-download">', '<a href="javascript:;" class="tvp_app_btn" data-status="down" data-role="tvp-limit-download-btn">', '<span class="tvp_progress"><span class="tvp_progress_current"></span></span>', '<span data-role="tvp-limit-download-text" class="tvp_btn_text" data-text="${download}"></span>', "</a>", "</div>", "</div>", "</div>", '<div class="tvp_app_badge tvp_none" data-role="tvp-limit-timing">', '<a data-role="tvp-limit-timing-btn" href="javascript:;" class="tvp_app_btn" data-status="down">', '<span class="tvp_text" data-text="\u8fd8\u5269" data-role="tvp-limit-timing-text"></span>', "</a>", "</div>"].join("")
        }(),
        durationLimit_v2_case3: function() {
            return ['<div class="tvp_app_badge tvp_none" data-role="tvp-limit-case3">', '<a data-role="tvp-limit-timing-btn" href="javascript:;" class="tvp_app_btn" data-status="down">', '<span class="tvp_progress"><span class="tvp_progress_current"></span></span>', '<span data-role="tvp-limit-timing-text" class="tvp_text" data-text="${timingText}"></span>', "</a>", "</div>"].join("")
        }(),
        liveDownloader: function() {
            return ['<div class="tvp_player_error">', '<div class="tvp_error_inner">', '<div class="tvp_error_title" data-role="tvp_errormsg">${msg}</div>', '<a data-role="tvp_err_refresh" href="javascript:;" class="txvp_error_refresh tvp_none" onclick="location.reload();">\u70b9\u51fb\u5237\u65b0</a>', '<div class="tvp_error_code">\u9519\u8bef\u4ee3\u7801\uff1a<span data-role="tvp_errrocode">${code}</span></div>', '<a data-role="tvp_error_btn" href="javascript:;" class="tvp_btn_normal">${btnText}</a>', "</div>", "</div>"].join("")
        }(),
        follow: function() {
            return ['<a class="tvp_follow" data-role="appfollow_followbtn" data-follow="follow">', '<span class="tvp_icon_follow"></span>', '<span class="tvp_icon_text" data-role="appfollow_followtext">\u5173\u6ce8</span>', "</a>", '<div class="tvp_follow_hint">', '<div class="tvp_hint_title">\u5173\u6ce8\u6210\u529f\uff01</div>', '<div class="tvp_hint_desc" data-role="bannerText">{FOLLOWTEXT}</div>', "</div>"].join("")
        }()
    },
    function(a, b) {
        function c(c, d) {
            this.isUseControl = !1,
            this.config = b.extend({}, this.config),
            this.config.width = a.$.filterXSS(c),
            this.config.height = a.$.filterXSS(d),
            this.control = null,
            this.$UILayer = null;
            var e = this;
            b.extend(this.protectedFn, {
                onwrite: function() {
                    var c = [];
                    c[0] = (new Date).getTime();
                    var d = a.html5skin.noSVGClassName;
                    b.isString(d) && d.length > 0 && !a.common.isSupportSVG() && this.videomod.classList.add(d),
                    this.control = new a.Html5UI(e),
                    this.control.init(),
                    this.$UILayer = this.control.$UILayer,
                    c[1] = (new Date).getTime(),
                    a.report({
                        cmd: 3536,
                        vid: this.getCurVid(),
                        appId: this.config.appid,
                        contentId: this.config.contentId,
                        speed: c[1] - c[0]
                    });
                    var f, g = navigator.userAgent.toLowerCase().indexOf("weibo") > -1, h = this;
                    g && this.videoTag && this.videoTag.style && (f = setInterval(function() {
                        h.videoTag.style.cssText = h.videoTag.style.cssText
                    }, 100),
                    setTimeout(function() {
                        clearInterval(f)
                    }, 6e3)),
                    this.callCBEvent("onready")
                }
            })
        }
        a.Html5Player || (c.fn = c.prototype = new a.Html5Tiny,
        b.extend(c.prototype, {
            createVideoHtml: function() {
                var b = a.Html5Tiny.prototype.createVideoHtml.call(this)
                  , c = a.html5skin.getHtml(this.config);
                return c.replace("$VIDEO$", b)
            },
            hideControl: function() {
                this.control.hide()
            },
            showControl: function() {
                this.control.show()
            }
        }),
        a.Html5Player = c)
    }(tvp, tvp.$),
    function(a, b) {
        function c(c, d) {
            this.isUseControl = !1,
            this.config.width = a.$.filterXSS(c),
            this.config.height = a.$.filterXSS(d),
            this.control = null,
            this.$UILayer = null;
            var e = this;
            b.extend(this.protectedFn, {
                onwrite: function() {
                    this.control = new a.Html5UI(e),
                    this.control.feature = this.config.html5LiveUIFeature,
                    this.control.init(),
                    this.$UILayer = this.control.$UILayer,
                    this.$UILayer && this.$UILayer.addClass && this.$UILayer.addClass("tvp_container_live")
                }
            })
        }
        a.Html5Live || (c.fn = c.prototype = new a.Html5LiveTiny,
        b.extend(c.prototype, {
            createVideoHtml: function() {
                var b = a.Html5LiveTiny.prototype.createVideoHtml.call(this)
                  , c = a.html5skin.getHtml(this.config);
                return c.replace("$VIDEO$", b)
            },
            getPlayerType: function() {
                return "html5live"
            }
        }),
        a.Html5Live = c)
    }(tvp, tvp.$),
    function(a) {
        function b(a) {
            return "tagName"in a ? a : a.parentNode
        }
        function c(a, b, c, d) {
            var e = Math.abs(a - b)
              , f = Math.abs(c - d);
            return e >= f ? a - b > 0 ? "Left" : "Right" : c - d > 0 ? "Up" : "Down"
        }
        function d() {
            j = null,
            k.last && (k.el.trigger("longTap"),
            k = {})
        }
        function e() {
            j && clearTimeout(j),
            j = null
        }
        function f() {
            g && clearTimeout(g),
            h && clearTimeout(h),
            i && clearTimeout(i),
            j && clearTimeout(j),
            g = h = i = j = null,
            k = {}
        }
        if (!(a.browser.WeChat && a.browser.getNumVersion() < 5 || a.os.windows && a.browser.ie || a.isFunction(a.fn.tap))) {
            var g, h, i, j, k = {}, l = 750;
            a(document).ready(function() {
                var m, n;
                a(document.body).bind("touchstart", function(c) {
                    c.originalEvent && (c = c.originalEvent),
                    m = Date.now(),
                    n = m - (k.last || m),
                    k.el = a(b(c.touches[0].target)),
                    g && clearTimeout(g),
                    k.x1 = c.touches[0].pageX,
                    k.y1 = c.touches[0].pageY,
                    n > 0 && 250 >= n && (k.isDoubleTap = !0),
                    k.last = m,
                    j = setTimeout(d, l)
                }).bind("touchmove", function(a) {
                    a.originalEvent && (a = a.originalEvent),
                    e(),
                    k.x2 = a.touches[0].pageX,
                    k.y2 = a.touches[0].pageY
                }).bind("touchend", function(b) {
                    b.originalEvent && (b = b.originalEvent),
                    e(),
                    k.x2 && Math.abs(k.x1 - k.x2) > 30 || k.y2 && Math.abs(k.y1 - k.y2) > 30 ? i = setTimeout(function() {
                        k.el && "function" == typeof k.el.trigger && (k.el.trigger("swipe"),
                        k.el.trigger("swipe" + c(k.x1, k.x2, k.y1, k.y2)),
                        k = {})
                    }, 0) : "last"in k && (h = setTimeout(function() {
                        if (k.el && "function" == typeof k.el.trigger) {
                            var b = a.Event("tap");
                            b.cancelTouch = f,
                            k.el.trigger(b),
                            k.isDoubleTap ? (k.el.trigger("doubleTap"),
                            k = {}) : g = setTimeout(function() {
                                g = null,
                                k.el && k.el.trigger("singleTap"),
                                k = {}
                            }, 250)
                        }
                    }, 0))
                }).bind("touchcancel", function() {
                    if (k.x2 && Math.abs(k.x1 - k.x2) > 30 || k.y2 && Math.abs(k.y1 - k.y2) > 30)
                        try {
                            i = setTimeout(function() {
                                k.el && "function" == typeof k.el.trigger && (k.el.trigger("swipe"),
                                k.el.trigger("swipe" + c(k.x1, k.x2, k.y1, k.y2)),
                                k = {})
                            }, 0)
                        } catch (a) {
                            f()
                        }
                    else
                        f()
                }),
                a(window).bind("scroll", f)
            }),
            ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(b) {
                a.fn[b] = function(a) {
                    return this.bind(b, a)
                }
            })
        }
    }(tvp.$),
    function(a) {
        a.extend(tvp.html5skin, {
            html: function() {
                return ['<div class="tvp_container tvp_controls_hide">', "	<% if(!!feature.title) {%>", '		<div class="tvp_titles">', '			<strong class="tvp_title"><span></span></strong>', "		</div>", "	<% } %>", '	<div class="tvp_video">', "$VIDEO$", "</div>", "	<% if(!!feature.controlbar) {%>", '	<div class="tvp_controls">', "		<% if(!!feature.playpause) {%>", '		<div class="tvp_button tvp_playpause_button tvp_play">', '			<button type="button" title="\u64ad\u653e/\u6682\u505c"><span class="tvp_btn_value">\u64ad\u653e</span></button>', "		</div>", "		<% } %>", "		<% if(!!feature.progress) {%>", '		<div class="tvp_time_rail">', '			<span class="tvp_time_total" >', '				<span class="tvp_time_loaded" ></span>', '				<span class="tvp_time_current"><span class="tvp_time_handle"></span></span>', "			</span>", '     <span class="tvp_time_panel">', "			  <% if(!!feature.timepanel) {%>", '			  <span class="tvp_time_panel_current">00:00</span>', "			  <% } %>", '       <span class="tvp_time_panel_split">/</span>', "			  <% if(!!feature.timepanel) {%>", '			  <span class="tvp_time_panel_total">00:00</span>', "			  <% } %>", "      </span>", "		</div>", "		<% } %>", "    <% if(!!feature.bullet) {%>", '    <div class="tvp_barrage_switch tvp_none">', '<div class="tvp_btn_barrage" data-role="tvp-bullet-switch"><div class="tvp_btn_value">\u5f39</div></div>', "    </div>", "    <% } %>", "	<% if(!!feature.volume) {%>", '<div class="tvp_button tvp_volume tvp_none">', '<div class="tvp_btn_volume">', '<div class="tvp_icon_volume"></div>', "</div>", '<div class="tvp_volume_slider">', '<div class="tvp_volume_range">', '<div class="tvp_volume_range_current" style="height:50%">', '<div class="tvp_volume_handle"></div>', "</div>", "</div>", "</div>", "</div>", "	<% } %>", "		<% if(!!feature.definition) {%>", '		<div class="tvp_button tvp_definition _tvp_definition_ tvp_none">', '			<div class="tvp_definition_button"><span>\u6e05\u6670\u5ea6</span></div>', '			<div class="tvp_definition_list"></div>', "		</div>", "		<% } %>", "		<% if(!!feature.fullscreen) {%>", '		<div class="tvp_button tvp_fullscreen_button tvp_fullscreen">', '			<button type="button" title="\u5207\u6362\u5168\u5c4f"><span class="tvp_btn_value">\u5168\u5c4f</span></button>', "		</div>", "		<% } %>", '		<span class="tvp_time_handel_hint" style="display:none"></span>', "	</div>", "	<% } %>", "	<% if(!!feature.overlay) {%>", '	<div class="tvp_overlay_loading tvp_none" style="z-index:5">', '		<span class="tvp_icon_loading"></span>', "	</div>", '	<div class="tvp_overlay_play">', '		<span class="tvp_button_play"></span>', '		<div class="tvp_fileszie"></div>', "	</div>", '	<div class="tvp_layer_replay tvp_none">', '		<div class="tvp_overlay_replay" data-role="tvp_replay_btn">', '			<span class="tvp_button_replay"></span><span class="tvp_text">\u91cd\u65b0\u64ad\u653e</span>', "		</div>", "	</div>", "	<% } %>", "	<% if(!!feature.meta) {%>", '	<div class="tvp_meta_info">', '		<span class="tvp_meta_duration"></span>', '		<span class="tvp_meta_length"></span>', "	</div>", "	<% } %>", "	<% if(!!feature.bigben) {%>", '	<div class="tvp_overlay_bigben tvp_none">', '		<div class="tvp_overlay_content">', '			<i class="tvp_ico_ff_rw tvp_ico_ff"></i><span class="tvp_text tvp_overlay_bigben_text">0:00:00</span>', '			<span class="tvp_time_total_small"><span class="tvp_time_current_small"></span></span>', "		</div>", "	</div>", "	<% } %>", "	<% if(!!feature.posterlayer) {%>", '	<div class="tvp_overlay_poster" style="display:none;">', '		<div class="tvp_poster_img"></div>', "	</div>", "	<% } %>", ' <div class="tvp_overlay_tips tvp_none" data-role="xubo-banner">', '   <div class="tvp_overlay_content">', '    <span class="tvp_text" data-role="xubo-text">\u4e0a\u6b21\u89c2\u770b\u81f3{$min}{$sec}\uff0c\u6b63\u5728\u4e3a\u60a8\u7eed\u64ad</span>', "   </div>", " </div>", "	<% if(!!feature.tips) {%>", '	<div class="tvp_overlay_tips tvp_none" data-role="tvp_fn_tips_box">', '		<div class="tvp_overlay_content">', '			<span class="tvp_text" data-role="tvp_fn_tips_text"></span> ', "		</div>", "	</div>", "	<% } %>", "	<% if(!!feature.loadingAd) {%>", '	<div class="tvp_ads tvp_none">', '		<div class="tvp_ads_inner" style="width:100%;height:100%;">', '			<div class="tvp_ads_content"><a href="javascript:;" class="tvp_ads_link"></a></div>', '			<div class="tvp_ads_control tvp_none">', '				<a href="javascript:;" class="tvp_ads_skip tvp_none">', '					<span class="tvp_ads_countdown"></span>', '					<span class="tvp_ads_skip_text">\u8df3\u8fc7\u5e7f\u544a</span>', '					<span class="tvp_btn_close tvp_none"></span>', "				</a>", '				<span data-role="tvp_mute_btn" class="tvp_voice_mute tvp_none"><span class="tvp_icon_voice"></span></span>', '			<div class="tvp_ads_skip_forbidden tvp_none">', '				<span class="tvp_ads_text tvp-ads-role-forbidden-title">\u5e94\u7248\u6743\u65b9\u7684\u8981\u6c42\uff0c\u597d\u83b1\u575e\u4f1a\u5458\u65e0\u6cd5\u8df3\u8fc7\u8be5\u5267\u5e7f\u544a</span>', '				<span class="tvp_ads_hint tvp-ads-role-forbidden-icon"></span>', '				<span class="tvp_ads_skip_text">\u5e7f\u544a\u5269\u4f59:</span>', '				<span class="tvp_ads_countdown">10</span> \u79d2', "			</div>", '				<div class="tvp_ads_qqvip_skip tvp_none">', '					<span class="tvp_ads_remain">\u3010\u5269\u4f59 <span class="_remain"></span> \u5219\u5e7f\u544a\u3011</span>', '					<span class="tvp_ads_desc">', '						\u60a8\u662f\u5c0a\u8d35\u7684<span class="_vipname">QQ\u4f1a\u5458</span> <span class="_remaintime"><em class="tvp_ads_num"></em>\u79d2\u540e</span>\u53ef', '						<a href="javascript:;" class="tvp_ads_skip_text">\u8df3\u8fc7\u6b64\u5e7f\u544a</a>', "					</span>", "				</div>", "			</div>", '			<a href="javascript:;" class="tvp_btn_ads_more tvp_none">', '				\u8be6\u60c5\u70b9\u51fb <i class="tvp_icon_arrow"></i>', "			</a>", '			<div class="tvp_ads_copyright tvp_none">', '				<div class="tvp_ads_text tvp-ads-role-forbidden-text">\u5e94\u7248\u6743\u65b9\u7684\u8981\u6c42\uff0c\u597d\u83b1\u575e\u4f1a\u5458\u65e0\u6cd5\u514d\u9664\u8be5\u90e8\u7535\u89c6\u5267\u7684\u5e7f\u544a\uff0c\u8bf7\u60a8\u8c05\u89e3\uff01</div>', '				<div class="tvp_ads_btn tvp-ads-role-forbidden-close">\u6211\u77e5\u9053\u4e86\uff01</div>', '				<span class="tvp_btn_close tvp-ads-role-forbidden-close">\u2715</span>', "			</div>", "		</div>", "	</div>", "	<% } %>", "	<% if(!!feature.preview) {%>", '<div class="tvp_thumbs tvp_none">', '<div class="tvp_thumbs_pic">', "</div>", '<div class="tvp_thumbs_time"></div>', '<div class="tvp_thumbs_share tvp_none">\u5206\u4eab</div>', '<div class="tvp_thumbs_arrow"></div>', "</div>", "	<% } %>", "	<% if(!!feature.adonend) {%>", '		<a href="#" data-role="adonend-box" class="tvp_ads_go tvp_none">', '			<span class="tvp_ads_countdown" data-role="adonend-time">10</span><span class="tvp_ads_text">\u5e7f\u544a\u8be6\u60c5</span>', "		</a>", "	<% } %>", "	<% if(!!feature.verticalbullet) {%>", '		<div class="tvp_barrage_grace tvp_none" data-role="tvp_vertical_bullet"></div>', "	<% } %>", '<div class="tvp_pop_modal tvp_none" data-role="tvp-conform-box">', '<div class="tvp_pop_alert">', '<div class="tvp_pop_bd">', '<div class="tvp_pop_desc" data-role="tvp-conform-box-tips">--</div>', "</div>", '<div class="tvp_pop_fd">', '<div class="tvp_pop_btns">', '<a data-role="tvp-conform-box-cancle" href="javascript:void(0);" class="tvp_pop_btn"><span class="btn_inner">--</span></a>', '<a data-role="tvp-conform-box-ok" href="javascript:void(0);" class="tvp_pop_btn tvp_pop_btn_em"><span class="tvp_btn_inner">--</span></a>', "</div>", "</div>", "</div>", "</div>", "</div>"].join("")
            }(),
            definitionList: function() {
                return ["<% for(var i=0, len=data.list.length;i<len;i++) { %>", ' <div class="tvp_definition_item" data-fmt="<%=data.list[i].key%>">', "  <%=data.list[i].value%>", '  <% if (data.list[i].key=="fhd") { %><div class="tvp_icon_vip">\u4f1a\u5458</div><% } %>', " </div>", "<% }%>"].join("")
            }(),
            noSVGClassName: "tvp_no_svg",
            elements: {
                title: {
                    main: ".tvp_titles",
                    text: ".tvp_title span"
                },
                meta: {
                    main: ".tvp_meta_info",
                    duration: ".tvp_meta_duration",
                    filesize: ".tvp_meta_length"
                },
                layer: ".tvp_container",
                control: ".tvp_controls",
                play: ".tvp_playpause_button",
                overlay: {
                    play: ".tvp_overlay_play",
                    loading: ".tvp_overlay_loading",
                    replay: ".tvp_layer_replay",
                    filesize: ".tvp_fileszie"
                },
                progress: {
                    main: ".tvp_time_rail",
                    cur: ".tvp_time_current",
                    loaded: ".tvp_time_loaded",
                    total: ".tvp_time_total",
                    handle: ".tvp_time_handle",
                    tips: ".tvp_time_float",
                    button: ".tvp_playpause_button"
                },
                fullscreen: ".tvp_fullscreen_button",
                timePanel: {
                    cur: ".tvp_time_panel_current",
                    total: ".tvp_time_panel_total"
                },
                bigben: {
                    main: ".tvp_overlay_bigben",
                    desc: ".tvp_overlay_bigben_text",
                    ffrw: ".tvp_ico_ff_rw",
                    bar: ".tvp_time_current_small"
                },
                definition: {
                    main: "._tvp_definition_",
                    button: "._tvp_definition_ .tvp_definition_button > span",
                    list: "._tvp_definition_ .tvp_definition_list"
                },
                volume: {
                    main: ".tvp_volume",
                    btn: ".tvp_btn_volume",
                    slider: ".tvp_volume_slider",
                    total: ".tvp_volume_range",
                    cur: ".tvp_volume_range_current"
                },
                track: {
                    main: "._tvp_track_",
                    button: "._tvp_track_ .tvp_definition_button > span",
                    list: "._tvp_track_ .tvp_definition_list"
                },
                posterlayer: {
                    main: ".tvp_overlay_poster",
                    img: ".tvp_poster_img"
                },
                tips: {
                    main: ".tvp_overlay_tips",
                    desc: " .tvp_overlay_tips .tvp_text"
                },
                promotion: {
                    main: ".tvp_promotion",
                    link: ".tvp_promotion >a"
                },
                loadingAd: {
                    main: ".tvp_ads",
                    control: ".tvp_ads_control",
                    countdown: ".tvp_ads_countdown",
                    skip: ".tvp_ads_skip",
                    qqVipSkip: ".tvp_ads_qqvip_skip",
                    forbiddenSkip: ".tvp_ads_skip_forbidden",
                    forbiddenTitle: ".tvp-ads-role-forbidden-title",
                    forbiddenText: ".tvp-ads-role-forbidden-text",
                    forbiddenClose: ".tvp-ads-role-forbidden-close",
                    forbiddenIcon: ".tvp-ads-role-forbidden-icon",
                    more: ".tvp_btn_ads_more",
                    adLink: ".tvp_ads_link",
                    copyrightTips: ".tvp_ads_copyright",
                    mutebtn: '[data-role="tvp_mute_btn"]'
                },
                preview: {
                    main: ".tvp_thumbs",
                    pic: ".tvp_thumbs_pic",
                    time: ".tvp_thumbs_time",
                    share: ".tvp_thumbs_share",
                    arrow: ".tvp_thumbs_arrow"
                }
            },
            getHtml: function(a) {
                var b = tvp.$.tmpl(tvp.html5skin.html)
                  , c = {};
                return tvp.$.each(a.type == tvp.PLAYER_DEFINE.LIVE ? a.html5LiveUIFeature : a.html5VodUIFeature, function(a, b) {
                    c[b] = !0
                }),
                tvp.$.each(a.html5ForbiddenUIFeature, function(a, b) {
                    c[b] = !1
                }),
                b({
                    feature: c
                })
            }
        })
    }(tvp.$),
    function(a, b) {
        var c;
        a.Html5UI = function(a) {
            this.player = a,
            this.videoTag = a.getPlayer(),
            this.$video = a.$video,
            this.$mod = a.$mod,
            this.$UILayer = null,
            this.$control = null,
            this.feature = a.config.html5VodUIFeature,
            c = this,
            this.elements = {},
            this.constvars = {
                progressWidth: 0
            }
        }
        ,
        a.Html5UI.fn = a.Html5UI.prototype = {
            getCurVideo: function() {
                return this.player.getCurVideo()
            },
            init: function() {
                this.initDom(),
                this.controlReady()
            },
            initDom: function() {
                this.$UILayer = this.$mod.find(a.html5skin.elements.layer),
                this.$control = this.$UILayer.find(a.html5skin.elements.control)
            },
            controlReady: function() {
                function c(a) {
                    try {
                        var c = "build" + a;
                        b.isFunction(d[c]) && d[c](d.player, d.$video, d.$control, d.$UILayer)
                    } catch (e) {}
                }
                var d = this;
                b.each(this.feature, function(e, f) {
                    if (!d.player.isForbiddenH5UIFeature(f))
                        if (f in d.player.config.html5FeatureExtJS) {
                            if ("adonend" === f && (d.player.config && !d.player.config.plugins || d.player.config && d.player.config.plugins && !d.player.config.plugins.adonend))
                                return;
                            var g = d.player.config.html5FeatureExtJS[f] + "?v=" + a.ts;
                            b.getScript(g, function() {
                                c(f)
                            })
                        } else
                            c(f)
                }),
                this.player.isUseH5UIFeature("controlbar") && (this.player.config.isHtml5ControlAlwaysShow ? this.$UILayer.removeClass("tvp_controls_hide") : (this.$video.on(d.getClickName(), function(a) {
                    d.isHidden() && (d.videoTag.currentTime || d.overlayPlayClicked) ? (d.show(),
                    d.beginHide(3e3)) : d.hide(),
                    a.preventDefault(),
                    a.stopPropagation()
                }),
                this.hideControlTimer = 0,
                this.$video.on("play", function() {
                    d.beginHide(3e3)
                }).on("pause paused", function() {
                    d.beginHide(3e3)
                })))
            },
            beginHide: function(a) {
                var b = this;
                a = a || 3e3,
                this.stopHide(),
                this.hideControlTimer = setTimeout(function() {
                    b.isTouching || b.hide()
                }, a)
            },
            stopHide: function() {
                this.hideControlTimer && (clearTimeout(this.hideControlTimer),
                this.hideControlTimer = 0)
            },
            hide: function() {
                this.$UILayer.addClass("tvp_controls_hide"),
                this.$control && this.$control.trigger && this.$control.trigger("tvp:control:hide"),
                this.$video && (this.$video.trigger("tvp:preview:hide"),
                this.$video.trigger("tvp:volume:hide"))
            },
            show: function() {
                return 1 == this.$video.data("data-playing-loadingad") ? void this.hide() : (this.hideControlTimer && (clearTimeout(this.hideControlTimer),
                this.hideControlTimer = 0),
                this.$UILayer.removeClass("tvp_controls_hide"),
                void (this.$control && this.$control.trigger && this.$control.trigger("tvp:control:show")))
            },
            isHidden: function() {
                return this.$UILayer.hasClass("tvp_controls_hide")
            },
            getDuration: function() {
                return this.player.getDuration()
            },
            getClickName: function() {
                return b.os.hasTouch ? "touchend" : "click"
            }
        }
    }(tvp, tvp.$),
    function(a, b) {
        b.extend(a.Html5UI.fn, {
            buildbullet: function(b, c, d, e) {
                new a.Html5Bullet(b,c,d,e)
            }
        })
    }(tvp, tvp.$),
    function(a, b) {
        var c = {
            speed: [5, 8],
            one_second_per_px: 65,
            start_postion: [50, 200],
            margin: 22,
            bullet_interval: 2,
            queue_wait: .5,
            filter: 1 / 3,
            full_nums: 50,
            ctrl_height: 120,
            null_tips: "\u522b\u7740\u6025\uff0c\u5f39\u5e55\u8981\u6765\u5566~_(:\u0437\u300d\u2220)_",
            hasInsertNullTips: !1
        };
        a.Html5Bullet = function(a, b, c) {
            this.player = a,
            this.$video = b,
            this.$UILayer = c,
            this.$videomod = this.player.$videomod,
            this.init()
        }
        ,
        a.Html5Bullet.prototype = {
            init: function() {
                var a = this.player.config.html5LiveUIFeature
                  , c = this.player.config.h5LiveBullet
                  , d = this;
                -1 !== a.indexOf("bullet") && c && this.player.config.isHtml5UseUI && (b(this.get_html()).appendTo(this.$videomod),
                this.setDomRole(),
                this.bulletId = this.player.curVideo.getH5BulletId(),
                this.bulletId && (this.check_bullet_db_switch().done(function() {
                    d.init_events(),
                    d.init_style(),
                    d.set_top_values(),
                    d.init_switch_status()
                }).fail(function() {}),
                this.player.sendMyBullet || (this.player.sendMyBullet = function(a) {
                    d.sendMyBullet.call(d, a)
                }
                )))
            },
            topValues: {},
            bulletId: null,
            text_list: [],
            cgi_timer: null,
            cgi_interval: 5,
            cgi_timestamp: 0,
            bullet_timer: null,
            switch_open_cls: "tvp_open",
            switch_db_key: "tvp_switch_status",
            start: function() {
                var a = this;
                this.reset_animate_speed(),
                this.show();
                var b = setTimeout(function() {
                    c.hasInsertNullTips = !1,
                    clearTimeout(b),
                    b = null
                }, 5e3);
                a.text_list[0] === c.null_tips || c.hasInsertNullTips || (a.text_list.unshift(c.null_tips),
                c.hasInsertNullTips = !0),
                a.add_bullet(),
                this.text_list.length > 20 || a.request_live_cgi(),
                this.cgi_timer && clearInterval(this.cgi_timer),
                this.cgi_timer = setInterval(function() {
                    a.request_live_cgi()
                }, 1e3 * this.cgi_interval),
                this.bullet_timer && clearInterval(this.bullet_timer),
                this.bullet_timer = setInterval(function() {
                    a.add_bullet()
                }, 1e3 * c.bullet_interval)
            },
            stop: function() {
                clearInterval(this.cgi_timer),
                clearInterval(this.bullet_timer),
                this.hide(),
                this.$bullet.empty()
            },
            reset_animate_speed: function() {
                var a = this;
                setTimeout(function() {
                    c.speed[0] = parseInt(a.$bullet.parent().width() / c.one_second_per_px),
                    c.speed[1] = c.speed[0] + 3
                }, 500)
            },
            show: function() {
                this.$bullet.removeClass("tvp_none")
            },
            hide: function() {
                this.$bullet.addClass("tvp_none")
            },
            check_switch: function() {
                var a = this.$switch.hasClass(this.switch_open_cls);
                return a
            },
            check_video: function() {
                var a, b = this.$video.get(0);
                return b ? a = b.paused ? !1 : b.ended ? !1 : !0 : !1
            },
            check_switch_pre_status: function() {
                var a = b.getData(this.switch_db_key);
                return "1" == a ? !0 : !1
            },
            update_switch_db_status: function(a) {
                a = "undefined" == typeof a ? 0 : 1,
                b.setData(this.switch_db_key, a)
            },
            init_events: function() {
                var d = this
                  , e = "click";
                this.$switch.off(e).on(e, function() {
                    var b = d.check_switch()
                      , c = b ? 0 : 1;
                    b ? (d.set_switch_close(),
                    d.stop(),
                    d.update_switch_db_status()) : (d.set_switch_open(),
                    d.check_video() && d.start(),
                    d.update_switch_db_status(1)),
                    a.bossReport.report_bullet_switch({
                        user_action: c,
                        lid: d.player.curVideo.getChannelId(),
                        bulletid: d.bulletId
                    })
                });
                var f = function() {
                    setTimeout(function() {
                        d.reset_top_values()
                    }, 200),
                    d.reset_animate_speed()
                };
                b(window).off("orientationchange", f).on("orientationchange", f),
                this.player.$mod.off("tvp:bullet:enterfullscreen").on("tvp:bullet:enterfullscreen", f),
                this.player.$mod.off("tvp:bullet:cancelfullscreen").on("tvp:bullet:cancelfullscreen", f);
                var g = function() {
                    d.check_switch() && d.start()
                }
                  , h = function() {
                    c.hasInsertNullTips = !1,
                    d.stop()
                }
                  , i = function() {
                    d.stop()
                };
                this.$video.off("playing.tvp_bullet").on("playing.tvp_bullet", g).off("pause.tvp_bullet").on("pause.tvp_bullet", h).off("ended.tvp_bullet").on("ended.tvp_bullet", i)
            },
            init_style: function() {
                this.$videomod.css({
                    position: "relative"
                })
            },
            show_switch: function() {
                this.$switch.parent().removeClass("tvp_none")
            },
            hide_switch: function() {
                this.$switch.parent().addClass("tvp_none")
            },
            set_switch_open: function() {
                this.$switch.addClass(this.switch_open_cls)
            },
            set_switch_close: function() {
                this.$switch.removeClass(this.switch_open_cls)
            },
            init_switch_status: function() {
                this.check_switch_pre_status() ? this.set_switch_open() : this.set_switch_close()
            },
            add_bullet: function() {
                var a = this;
                a.insert_bullet(a.text_list.shift()),
                a.insert_bullet(a.text_list.shift()),
                a.insert_bullet(a.text_list.shift())
            },
            sendMyBullet: function(b) {
                return (b = a.$.filterXSS(b)) ? (b = ['<span style="color:#fec800;">', b, "</span>"].join(""),
                this.text_list.unshift(b),
                !0) : !1
            },
            check_bullet_db_switch: function(a) {
                var c = a || b.Deferred()
                  , d = this;
                return this.request_live_cgi().done(function(a) {
                    return a && "45" == a.err_msg && !d.hasRetry ? (d.hasRetry = !0,
                    void d.check_bullet_db_switch(c)) : (a && 1 == a.opened ? (d.show_switch(),
                    c.resolve()) : (d.hide_switch(),
                    c.reject()),
                    void (a && a.comments && a.comments.length && b(a.comments).each(function(a, c) {
                        var e = b.filterXSS(c.content);
                        e && d.text_list.push(e)
                    })))
                }),
                c
            },
            request_live_cgi: function() {
                if (!(this.text_list.length >= c.full_nums)) {
                    var a, d = "http://mfm.video.qq.com/live_danmu?callback=?", e = b.Deferred(), f = this;
                    "https:" === location.protocol && (d = "https://sec.video.qq.com/p/mfm.video/live_danmu?callback=?");
                    var g = {
                        session_key: f.session_key || "",
                        last_stamp: f.cgi_timestamp,
                        pid: f.bulletId
                    };
                    return a = b.cookie.get("rtx_uin"),
                    a || (a = b.cookie.get("uin")),
                    a || (a = b.cookie.get("luin")),
                    a && (g.uin = a),
                    b.ajax({
                        url: d,
                        cache: !1,
                        data: g,
                        dataType: "json",
                        cache: !1,
                        jsonpCallback: "tvp_request_bullet_callback_" + parseInt(1e6 * Math.random())
                    }).done(function(a) {
                        a && a.loop_interval && (f.cgi_interval = parseInt(a.loop_interval)),
                        a && a.last_stamp && (f.cgi_timestamp = a.last_stamp),
                        a && a.session_key && (f.session_key = a.session_key),
                        a && a.comments && a.comments.length && b(a.comments).each(function(a, c) {
                            var d = b.filterXSS(c.content);
                            d && f.text_list.push(d)
                        }),
                        e.resolve(a)
                    }),
                    e
                }
            },
            get_html: function() {
                var a = ['<div class="tvp_barrage_layer tvp_none" data-role="tvp-mod-bullet">', "</div>"];
                return a.join("")
            },
            setDomRole: function() {
                this.$bullet = this.$videomod.find('[data-role="tvp-mod-bullet"]'),
                this.$switch = this.$videomod.find('[data-role="tvp-bullet-switch"]')
            },
            reset_top_values: function() {
                this.topValues = {},
                this.set_top_values()
            },
            set_top_values: function() {
                for (var a = c.margin || 20, d = this.$bullet.parent().height(), d = d ? d : this.player.config.height, d = "string" == typeof d && d.indexOf("%") > -1 ? b("#" + this.player.config.modId).height() : d, e = d - c.ctrl_height, f = 3, g = f; e > g; g++)
                    this.topValues[g] = 0,
                    g += a
            },
            get_one_top_value: function() {
                var a, b, c, d = [];
                for (var e in this.topValues)
                    0 === this.topValues[e] && d.push(e);
                return a = d.length,
                0 === a ? !1 : this.filter_ctrl() ? !1 : (c = this.get_random(0, a - 1),
                b = d[c],
                this.topValues[b] = 1,
                b)
            },
            get_topValue_count: function() {
                var a = []
                  , b = [];
                for (var c in this.topValues)
                    a.push(c),
                    1 === this.topValues[c] && b.push(c);
                return {
                    a: a,
                    b: b
                }
            },
            filter_ctrl: function() {
                var a = this.get_topValue_count()
                  , b = a.b.length
                  , d = a.a.length;
                return b >= d * c.filter ? 1 : 0
            },
            insert_bullet: function(a) {
                if (a) {
                    var d, e, f = this, g = this.get_random(c.speed[0], c.speed[1]), h = this.$bullet.width();
                    if (h || "number" !== b.type(this.player.config.width) || (h = this.player.config.width),
                    e = this.get_one_top_value(),
                    e === !1)
                        return void f.text_list.unshift(a);
                    var i = document.createElement("div");
                    i.className = "tvp_bullet",
                    i.style.position = "absolute",
                    i.style.top = e + "px",
                    i.style.right = "-" + h + "px",
                    i.style.webkitTransform = "translate3d(0,0,0)",
                    i.style.webkitTransition = "transform 0s linear",
                    i.style.transition = "transform 0s linear",
                    i.innerHTML = a,
                    f.$bullet.get(0).appendChild(i),
                    d = b(i).width(),
                    i.style.right = "-" + d + "px",
                    setTimeout(function() {
                        f.move_bullet(i, {
                            speed: g,
                            width: d + h
                        })
                    }, 10),
                    setTimeout(function() {
                        i.parentNode && i.parentNode.removeChild(i)
                    }, 1e3 * g + 200),
                    setTimeout(function() {
                        "undefined" != typeof f.topValues[e] && (f.topValues[e] = 0)
                    }, 1e3 * g * c.queue_wait)
                }
            },
            move_bullet: function(a, b) {
                if (a) {
                    var c = a.style;
                    b = b || {},
                    b.speed = b.speed || 8,
                    b.width = b.width || 800,
                    c.webkitTransitionDuration = c.MozTransitionDuration = c.msTransitionDuration = c.OTransitionDuration = c.transitionDuration = b.speed + "s",
                    c.transitionProperty = c.webkitTransitionProperty = c.MozTransitionProperty = c.msTransitionProperty = c.OTransitionProperty = "transform",
                    c.transitionTimingFunction = c.MozTransitionTimingFunction = c.msTransitionTimingFunction = c.OTransitionTimingFunction = c.webkitTransitionTimingFunction = "linear",
                    c.msTransform = c.MozTransform = c.OTransform = c.webkitTransform = "translate3d(-" + b.width + "px,0,0)"
                }
            },
            get_random: function(a, b) {
                var c = parseInt(Math.random() * (b - a + 1) + a, 10);
                return c
            }
        }
    }(tvp, tvp.$),
    function(a, b) {
        b.extend(a.Html5UI.fn, {
            buildoverlay: function(c, d, e, f) {
                var g = d[0]
                  , h = {}
                  , i = d.parent().find("video")
                  , j = 2 === i.length ? !0 : !1
                  , k = this
                  , l = "tvp_none"
                  , m = !1
                  , n = !1;
                b.each(a.html5skin.elements.overlay, function(a, b) {
                    h[a] = f.find(b)
                }),
                c && c.config && c.config.isShortVideo && h.play.addClass("tvp_overlay_play_v2");
                var o = {
                    showPlay: function() {
                        m || h.play.removeClass(l)
                    },
                    showReplay: function() {
                        h.replay.removeClass(l)
                    },
                    showLoading: function() {
                        h.loading.removeClass(l)
                    },
                    hidePlay: function() {
                        h.play.addClass(l)
                    },
                    hideReplay: function() {
                        h.replay.addClass(l)
                    },
                    hideLoading: function() {
                        h.loading.addClass(l)
                    }
                }
                  , p = function() {
                    j && "0" === b(this).attr("data-focus") || (o.hideLoading(),
                    o.hidePlay(),
                    o.hideReplay())
                }
                  , q = function() {
                    if (!(j && "0" === b(this).attr("data-focus") || !c.config.isHtml5ShowPlayBtnOnPause || k.isTouching || c.isDefinitionSwitching || m || "function" === b.type(c.isPlayingLoadingAd) && c.isPlayingLoadingAd() || c.isPlayingSplit)) {
                        var a = this.ended;
                        o.hideLoading(),
                        a ? (o.hidePlay(),
                        o.showReplay()) : (o.showPlay(),
                        o.hideReplay())
                    }
                }
                  , r = function() {
                    j && "0" === b(this).attr("data-focus") || c.isDefinitionSwitching || (o.showLoading(),
                    o.hidePlay(),
                    o.hideReplay())
                }
                  , s = function() {
                    j && "0" === b(this).attr("data-focus") || o.hideLoading()
                }
                  , t = function() {
                    j && "0" === b(this).attr("data-focus") || c.isDefinitionSwitching || (o.hideReplay(),
                    o.hidePlay(),
                    o.showLoading())
                }
                  , u = function() {
                    o.hideLoading(),
                    o.hidePlay(),
                    o.showReplay()
                }
                  , v = function() {
                    m = !0
                }
                  , w = function() {
                    m = !1
                };
                i.on("overlay_ctrl_showplay", o.showPlay).on("overlay_ctrl_hideplay", o.hidePlay).on("overlay_ctrl_showreplay", o.showReplay).on("overlay_ctrl_hidereplay", o.hideReplay).on("overlay_ctrl_showloading", o.showLoading).on("overlay_ctrl_hideloading", o.hideLoading),
                i.on("tvp_durationlimit_show", v).on("tvp_durationlimit_hide", w),
                i.on("play", function() {}).on("canplay", function() {}).on("playing", p).on("pause", q).on("seeking", r).on("seeked", s).on("tvp_adonend_ended", u),
                d.on("tvp:overlay:update:filesize", function(a, b) {
                    b && h.filesize && (b = parseInt(b / 1024),
                    b > 1024 ? b = parseInt(b / 102.4) / 10 + "M" : b += "K",
                    h.filesize.html(b))
                }),
                b.os.ios ? setTimeout(function() {
                    d.on("waiting", t)
                }, 50) : b.os.android && d.on("waiting", t);
                var x = function() {
                    if (c.isPlayingSplit) {
                        var b = i.filter('[data-focus="1"]');
                        return void (b && b[0] && b[0].play())
                    }
                    g.src && (d.trigger && d.trigger("tvp:h5ui:playbtn:click"),
                    n || (n = !0,
                    k.overlayPlayClicked = !0,
                    g.currentTime || g.load()),
                    g.paused && (0 === g.buffered.length && g.load(),
                    g.play(),
                    h.filesize && h.filesize.addClass("tvp_none"),
                    o.hidePlay(),
                    o.showLoading()),
                    a.dataset.openLazy = !1,
                    a.$(document).trigger("tvp:report:continue").trigger("tvp:loadingad:continue"))
                };
                h.play.on("click", x);
                var y = function() {
                    o.hideReplay(),
                    o.hidePlay(),
                    o.showLoading(),
                    c.seekVideoIndex(1, 0)
                }
                  , z = function() {
                    if (c.isPlayingSplit)
                        return void y();
                    if (d.trigger("tvp:player:videoreplay"),
                    c.config.isHtml5ShowLoadingAdOnStart && c.config.isHtml5ShowLoadingAdOnReplay) {
                        if (!c.curVideo || "function" !== b.type(c.curVideo.getRequestAd))
                            return;
                        if (c.curVideo.getRequestAd() === !1)
                            ;
                        else if (c.curVideo.getRequestAd() === !0)
                            return
                    }
                    g.load(),
                    g.play(),
                    o.hideReplay(),
                    o.hidePlay(),
                    o.showLoading()
                };
                h.replay.find("[data-role=tvp_replay_btn]").on("click", z)
            }
        })
    }(tvp, tvp.$),
    function(a, b) {
        b.extend(a.Html5UI.fn, {
            buildtips: function(c, d, e, f) {
                function g(a, c) {
                    b.isUndefined(c) && (c = 5),
                    h.main.addClass("tvp_show"),
                    h.desc.text(a),
                    0 != c && setTimeout(function() {
                        h.main.removeClass("tvp_show"),
                        h.desc.text("")
                    }, 1e3 * c)
                }
                var h = {};
                b.each(a.html5skin.elements.tips, function(a, b) {
                    h[a] = f.find(b)
                }),
                b.extend(a.Html5Player.fn, {
                    showTips: g
                })
            }
        })
    }(tvp, tvp.$),
    function(a, b) {
        b.extend(a.Html5UI.fn, {
            buildtitle: function(c, d, e, f) {
                var g = {};
                b.each(a.html5skin.elements.title, function(a, b) {
                    g[a] = f.find(b)
                }),
                d.on("tvp:video:ajaxsuc", function() {
                    g.text.text(c.curVideo.getTitle())
                })
            }
        })
    }(tvp, tvp.$),
    function(a, b) {
        b.extend(a.Html5UI.fn, {
            buildmeta: function(c, d, e, f) {
                var g = {};
                b.each(a.html5skin.elements.meta, function(a, b) {
                    g[a] = f.find(b)
                }),
                g.main.hide(),
                b.isUndefined(g.main) || 0 == g.main.length || (d.on("durationchange tvp:video:src", function() {
                    g.duration.text(b.formatSecondsWithText(c.getDuration())),
                    g.filesize.text(b.formatFileSize(c.getFileSize()))
                }),
                d.on("play playing", function() {
                    g.main.hide()
                }))
            }
        })
    }(tvp, tvp.$),
    function(a, b) {
        b.extend(a.Html5UI.fn, {
            buildplaypause: function(c, d, e, f) {
                var g = f.find(a.html5skin.elements.play)
                  , h = d[0]
                  , i = d.parent().find("video")
                  , j = 2 === i.length ? !0 : !1
                  , k = this
                  , l = !1;
                g.on(b.os.hasTouch && !b.os.Mac ? "touchend" : "click", function() {
                    if (j) {
                        var a = i.filter('[data-focus="1"]');
                        a && a.length && (h = a[0])
                    }
                    h.paused ? (l || (l = !0,
                    h.currentTime || h.load()),
                    h.play()) : h.pause()
                }),
                i.on("paused pause", function() {
                    k.isTouching || g.addClass("tvp_play").removeClass("tvp_pause")
                }).on("play playing", function() {
                    g.addClass("tvp_pause").removeClass("tvp_play")
                })
            }
        })
    }(tvp, tvp.$),
    function(a, b) {
        b.extend(a.Html5UI.fn, {
            buildtimepanel: function(c, d, e) {
                var f = {};
                b.each(a.html5skin.elements.timePanel, function(a, b) {
                    f[a] = e.find(b)
                }),
                b.isUndefined(f.total) || 0 == f.total.length || d.on("durationchange tvp:video:src", function() {
                    f.total.text(b.formatSeconds(c.getDuration()))
                }),
                b.isUndefined(f.cur) || 0 == f.cur.length || d.on("timeupdate", function() {
                    f.cur.text(b.formatSeconds(this.currentTime))
                }).on("tvp:player:videochange", function() {
                    f.cur.text(b.formatSeconds(0))
                }),
                e.bind("tvp:progress:touchstart", function(a, c) {
                    f.cur.text(b.formatSeconds(c.time))
                })
            }
        })
    }(tvp, tvp.$),
    function(a, b) {
        b.extend(a.Html5UI.fn, {
            buildprogress: function(c, d, e) {
                function f() {
                    var a, d, f, j, k, l, m = b.os.hasTouch, n = {
                        start: m ? "touchstart" : "mousedown",
                        move: m ? "touchmove" : "mousemove",
                        end: m ? "touchend" : "mouseup"
                    };
                    e.find(".tvp_time_rail").on(n.start, function(b) {
                        if (b = b.originalEvent ? b.originalEvent : b,
                        !m || b && b.touches && b.touches.length) {
                            var d;
                            d = m ? b.touches[0] : b,
                            g.isRotate ? (a = d.pageY,
                            j = i.cur.height()) : (a = d.pageX,
                            j = i.cur.width()),
                            c.isDefinitionSwitching = !1,
                            g.isTouching = !0,
                            g.player.isTouching = !0,
                            h.pause(),
                            k = 0,
                            b.preventDefault()
                        }
                    }).on(n.move, function(b) {
                        if (g.isTouching && (b = b.originalEvent ? b.originalEvent : b,
                        !m || b && b.touches && b.touches.length)) {
                            var h, n, o;
                            h = m ? b.touches[0] : b,
                            d = g.isRotate ? h.pageY : h.pageX,
                            f = d - a,
                            k = j + f,
                            l = g.isRotate ? i.total.height() : i.total.width(),
                            k = k > l ? l : 0 > k ? 0 : k,
                            n = k / l,
                            o = c.getDuration() * n,
                            o = isNaN(o) ? 0 : o,
                            g.setProgress(k, i),
                            e.trigger && e.trigger("tvp:progress:touchstart", {
                                pos: k,
                                precent: n,
                                time: o
                            }),
                            b.preventDefault()
                        }
                    }).on(n.end, function(b) {
                        if (h.play(),
                        g.isTouching) {
                            l = g.isRotate ? i.total.height() : i.total.width(),
                            !k && b.changedTouches && b.changedTouches.length && (k = j + (b.changedTouches[0].pageX - a));
                            var d = k / l
                              , f = c.getDuration() * d;
                            c.seek(f),
                            e.trigger && e.trigger("tvp:progress:touchend"),
                            g.isTouching = !1,
                            g.player.isTouching = !1,
                            b.preventDefault(),
                            b.stopPropagation()
                        }
                    })
                }
                var g = this
                  , h = d[0]
                  , i = {};
                this.isTouching = !1,
                b.each(a.html5skin.elements.progress, function(a, b) {
                    i[a] = e.find(b)
                }),
                (a.$.browser.qqnews || a.$.browser.kuaibao) && top.location.hostname && (top._jsBridgePageScroll_ = function() {
                    return g.isTouching ? 0 : 1
                }
                ),
                f(),
                d.bind("timeupdate", function(a) {
                    if (a = a.originalEvent ? a.originalEvent : a,
                    !g.isHidden() && !c.isDefinitionSwitching && 4 == a.target.readyState) {
                        var b;
                        b = g.isRotate ? h.currentTime / c.getDuration() * i.total.height() : h.currentTime / c.getDuration() * i.total.width(),
                        g.setProgress(b, i)
                    }
                }),
                d.bind("progress", function() {
                    if (!c.isDefinitionSwitching) {
                        var a = 0;
                        h.buffered && h.buffered.length > 0 && h.buffered.end && c.getDuration() && (a = h.buffered.end(0) / c.getDuration(),
                        a = parseInt(100 * a) + "%",
                        i.loaded.css("width", a))
                    }
                }).bind("tvp:video:src", function() {
                    c.isDefinitionSwitching || g.resetProgress()
                }),
                e.bind("tvp:control:show", function() {
                    var a = h.currentTime / c.getDuration() * i.total.width();
                    g.setProgress(a, i)
                }),
                b.extend(this, {
                    resetProgress: function() {
                        i.cur.css("width", "0px"),
                        i.loaded.css("width", "0px")
                    }
                })
            },
            setProgress: function(a, b) {
                var c, d = b.handle.width(), e = a - d / 2;
                c = b.total.height(),
                c = this.isRotate ? b.total.height() : b.total.width(),
                e = Math.min(e, c - d),
                e = Math.max(e, 0),
                b.cur.css("width", a + "px")
            }
        })
    }(tvp, tvp.$),
    function(a, b) {
        var c = null
          , d = ""
          , e = ""
          , f = {
            calcTimer: null,
            times: 0,
            changeTimes: 0
        };
        b.extend(a.Html5Player || {}, {
            isFullScreen: !1
        }),
        b.extend(a.Html5UI.fn, {
            buildfullscreen: function(d, e, f, g) {
                var h = this;
                c = f.find(a.html5skin.elements.fullscreen),
                c.on("click", function() {
                    b.os.android && h.player.config.isHtml5UseFakeFullScreen && e.removeClass("tvp_video_with_skin"),
                    h.checkIsFullScreen() ? h.cancelFullScreen() : h.enterFullScreen()
                }),
                "onwebkitfullscreenchange"in g[0] ? document.addEventListener("webkitfullscreenchange", function() {
                    document.webkitIsFullScreen ? h.enterFullScreen() : h.cancelFullScreen()
                }, !1) : e.bind("webkitendfullscreen ", function() {
                    h.cancelFullScreen()
                }),
                b(document).on("keydown", function(a) {
                    document.webkitIsFullScreen && 27 == a.keyCode && h.cancelFullScreen()
                });
                var i = {
                    enterFullScreen: function() {
                        h.enterFullScreen()
                    },
                    cancelFullScreen: function() {
                        h.cancelFullScreen()
                    },
                    isFakeFullscreen: function() {
                        return h.checkIsFullScreen()
                    }
                };
                a.Html5Player && a.Html5Player.fn && b.extend(a.Html5Player.fn, i),
                a.Html5Live && a.Html5Live.fn && b.extend(a.Html5Live.fn, i),
                e.on && e.on("ended", function() {
                    setTimeout(function() {
                        e && e[0] && e[0].ended && h.cancelFullScreen()
                    }, 100)
                })
            },
            fixClassName: function(a) {
                a ? c.removeClass("tvp_fullscreen").addClass("tvp_unfullscreen") : c.removeClass("tvp_unfullscreen").addClass("tvp_fullscreen")
            },
            checkIsFullScreen: function() {
                return this.player && this.player.$UILayer && b.type(this.player.$UILayer.hasClass) && this.player.$UILayer.hasClass("tvp_fullscreen_mode") ? !0 : !1
            },
            enterFullScreen: function() {
                if (!this.player.videoTag || 0 != this.player.videoTag.currentTime || !b.os.ipad) {
                    var c;
                    try {
                        c = top.location.href
                    } catch (d) {}
                    (top === window || c || b.os.ios || !this.player.config.isHtml5UseFakeFullScreen) && (this.player.config.isHtml5UseFakeFullScreen ? this.allEnterFullScreen() : this.enterRealFullScreen(),
                    this.player.isFullScreen = !0,
                    this.player.callCBEvent("onfullscreen", !0),
                    a.bossReport.user_action_report({
                        actions: "fullscreen",
                        vid: this.player.curVideo.getVid()
                    }))
                }
            },
            cancelFullScreen: function() {
                this.player.config.isHtml5UseFakeFullScreen ? this.allCancelFullScreen() : this.cancelRealFullScreen(),
                this.player.isFullScreen = !1,
                this.player.callCBEvent("onfullscreen", !1),
                a.bossReport.user_action_report({
                    actions: "exitfullscreen",
                    vid: this.player.curVideo.getVid()
                })
            },
            enterRealFullScreen: function() {
                var a = this
                  , c = a.$video
                  , d = c[0];
                d.webkitSupportsFullscreen ? d.webkitEnterFullscreen() : d.webkitRequestFullScreen && d.webkitRequestFullScreen(),
                (b.browser.WeChat || b.browser.MQQClient) && b.os.android || this.fixClassName(1)
            },
            cancelRealFullScreen: function() {
                var a = this
                  , b = a.$video
                  , c = b[0];
                this.fixClassName(0),
                c.webkitExitFullscreen && c.webkitExitFullscreen()
            },
            allCancelFullScreen: function() {
                var a = this.player.config.isHtml5UseFakeFullScreen
                  , c = b.os.android || b.os.ios && this.player.config.isiPhoneShowPlaysinline;
                if (a && c)
                    try {
                        frameElement && (frameElement.style.cssText = d),
                        this.cancelFakeFullScreen()
                    } catch (e) {
                        this.player.config.isHtml5UseFakeFullScreen = !1,
                        this.cancelRealFullScreen()
                    }
                else
                    this.cancelRealFullScreen()
            },
            allEnterFullScreen: function() {
                var a = this.player.config.isHtml5UseFakeFullScreen
                  , c = b.os.android || b.os.ios && this.player.config.isiPhoneShowPlaysinline
                  , e = top.innerWidth;
                if (a && c)
                    try {
                        frameElement && (d = frameElement.style.cssText,
                        b(frameElement).css({
                            position: "fixed !important",
                            left: "0",
                            top: "0",
                            width: e + "px !important",
                            height: "100%",
                            "z-index": 1e3
                        })),
                        this.enterFakeFullScreen()
                    } catch (f) {
                        this.player.config.isHtml5UseFakeFullScreen = !1,
                        this.enterRealFullScreen()
                    }
                else
                    this.enterRealFullScreen()
            },
            enterFakeFullScreen: function() {
                if (!this.checkIsFullScreen()) {
                    this.fixClassName(1),
                    this.$mod.trigger("tvp:bullet:enterfullscreen");
                    var a = top.innerWidth
                      , d = top.innerHeight
                      , f = (Math.ceil((d - a) / 2),
                    this);
                    e = this.player.$videomod[0].style.cssText,
                    this.player.$videomod.find("video").off("ended.recommendshow").on("ended.recommendshow", function() {
                        f.$mod.trigger("tvp:recommend:showtip")
                    }),
                    this.player.$videomod.css({
                        position: "fixed !important",
                        left: 0,
                        top: 0,
                        width: "100%",
                        height: "100%",
                        "z-index": 1e3
                    }),
                    frameElement && b(frameElement).css({
                        position: "fixed !important",
                        width: a + "px !important",
                        height: d + 1 + "px !important",
                        top: "-1px",
                        "background-color": "#000",
                        left: 0
                    }),
                    this.listenOrientationChange(),
                    c.removeClass("tvp_fullscreen"),
                    c.addClass("tvp_unfullscreen"),
                    this.$UILayer.addClass("tvp_fullscreen_mode")
                }
            },
            cancelFakeFullScreen: function() {
                this.fixClassName(0),
                this.$mod.trigger("tvp:bullet:cancelfullscreen"),
                e && (this.player.$videomod[0].style.cssText = e),
                c.removeClass("tvp_unfullscreen"),
                c.addClass("tvp_fullscreen"),
                this.$UILayer.removeClass("tvp_fullscreen_mode"),
                this.isRotate = !1,
                this.unbindOritationChange()
            },
            listenOrientationChange: function() {
                var a = this.player
                  , c = this
                  , d = function() {
                    var d = top.innerWidth
                      , e = top.innerHeight;
                    f.s0 && f.s1 && (90 === Math.abs(top.orientation) ? (d = f.s1.width,
                    e = f.s1.height) : (d = f.s0.width,
                    e = f.s0.height)),
                    window !== top && frameElement && b(frameElement).css({
                        position: "fixed !important",
                        width: d + "px !important",
                        height: e + "px !important",
                        top: 0,
                        "background-color": "#000",
                        left: 0
                    }),
                    a.$videomod.css({
                        position: "fixed !important",
                        width: d + "px !important",
                        height: e + "px !important",
                        top: 0,
                        left: 0
                    }),
                    c.isRotate = !1,
                    c.$mod && c.$mod.trigger && c.$mod.trigger("tvp:recommend:orientationchange"),
                    c.$video && c.$video.trigger && setTimeout(function() {
                        c.$video.trigger("timeupdate"),
                        c.$video.trigger("progress")
                    }, 100)
                };
                try {
                    c.setCalcValue(),
                    b(top).off("orientationchange.fullscreen").on("orientationchange.fullscreen", function() {
                        return b.os.ipod ? void d() : void (f.s0 && f.s1 ? d() : c.androidScreenCalc(d))
                    }),
                    b(top.document.body).on("touchmove", function(a) {
                        a.preventDefault()
                    }),
                    b(document.body).on("touchmove", function(a) {
                        a.preventDefault()
                    })
                } catch (e) {}
            },
            androidScreenCalc: function(a) {
                var c = this;
                a = a || function() {}
                ,
                f.times >= 2 || (f.times += 1,
                f.calcTimer = setInterval(function() {
                    c.setCalcValue(),
                    f.changeTimes >= 1 && (clearInterval(f.calcTimer),
                    f.calcTimer = null,
                    setTimeout(function() {
                        c.setCalcValue(),
                        a()
                    }, 100))
                }, 50),
                b.os.iphone && setTimeout(function() {
                    c.setCalcValue(),
                    a()
                }, 100),
                setTimeout(function() {
                    f.calcTimer && clearInterval(f.calcTimer),
                    c.setCalcValue(),
                    a()
                }, 2e3))
            },
            setCalcValue: function() {
                var a = {
                    width: top.innerWidth,
                    height: top.innerHeight
                };
                90 === Math.abs(top.orientation) ? (f.s1 && f.s1.width !== a.width && f.changeTimes++,
                f.s1 = a) : (f.s0 && f.s0.width !== a.width && f.changeTimes++,
                f.s0 = a)
            },
            unbindOritationChange: function() {
                try {
                    b(top).off("orientationchange"),
                    b(top.document.body).off("touchmove"),
                    b(document.body).off("touchmove")
                } catch (a) {}
            }
        })
    }(tvp, tvp.$),
    function(a, b) {
        b.extend(a.Html5UI.fn, {
            buildbigben: function(c, d, e, f) {
                var g = {}
                  , h = 0;
                b.each(a.html5skin.elements.bigben, function(a, b) {
                    g[a] = f.find(b)
                }),
                e.on("tvp:progress:touchstart", function(a, d) {
                    g.main.show(),
                    g.desc.text(b.formatSeconds(d.time)),
                    g.bar.width(d.time / c.getDuration() * 100 + "%"),
                    d.time < h ? g.ffrw.addClass("tvp_ico_rw") : g.ffrw.removeClass("tvp_ico_rw"),
                    h = d.time
                }).on("tvp:progress:touchend", function() {
                    g.main.hide(),
                    g.desc.text("")
                })
            }
        })
    }(tvp, tvp.$),
    function(a, b) {
        b.extend(a.Html5UI.fn, {
            buildposterlayer: function(c, d, e, f) {
                var g = f.find(a.html5skin.elements.posterlayer.main)
                  , h = g.find(a.html5skin.elements.posterlayer.img)
                  , i = this
                  , j = function(a) {
                    if (a = a || c.curVideo.getPoster() || c.config.pic,
                    0 == a.length) {
                        var e = h.attr("data-pic");
                        "" != e && (a = e)
                    }
                    b.isString(a) && a.length > 0 ? (a = b.filterXSS(a),
                    h.attr("data-pic", a).css("background-image", "url(" + a + ")"),
                    (!b.os.ios || b.os.ios && b.compareVersion(b.os.version, "8.0") > -1) && d.attr("poster", "//i.gtimg.cn/qqlive/images/20150608/black.png"),
                    k()) : l(),
                    a && (d.trigger("tvp:video:setposter"),
                    h.off("load.tvp_video_showposter").one("load.tvp_video_showposter", function() {
                        d.trigger("tvp:video:setposter:suc")
                    }),
                    h.off("error.tvp_video_showposter").one("error.tvp_video_showposter", function(a, b, c) {
                        d.trigger("tvp:video:setposter:error")
                    }))
                }
                  , k = function() {
                    c && c.control && c.control.checkIsFullScreen && !c.control.checkIsFullScreen() && g.show(),
                    d.one("play playing", l)
                }
                  , l = function() {
                    g.hide()
                };
                c.config.isHtml5ShowPosterOnStart && j(),
                b.extend(this, {
                    setPoster: j,
                    showPoster: k,
                    hidePoster: l
                }),
                b.extend(c, {
                    setPoster: j
                }),
                (b.os.iphone || b.os.ipod) && c.config.isiPhoneShowPosterOnPause && d.on("pause paused", function() {
                    i.isTouching || i.setPoster()
                })
            }
        })
    }(tvp, tvp.$),
    function(a, b) {
        b.extend(a.Html5UI.fn, {
            buildshadow: function(a, c, d, e) {
                var f = b('<div class="tvp_shadow"></div>').appendTo(e.find(".tvp_video"))
                  , g = this;
                a.config.isHtml5ControlAlwaysShow || f.on("click", function(c) {
                    if (a.config && a.config.isShortVideo && a.config.html5ForbiddenUIFeature.indexOf("controlbar") > -1) {
                        var d = a.$video && a.$video[0];
                        return d && d.pause && d.play && (d.paused ? d.play() : a.config.disableShortVideoPause === !1 && d.pause()),
                        !1
                    }
                    if (g.isHidden() && (g.videoTag.currentTime || g.overlayPlayClicked)) {
                        var e = b(g.videoTag);
                        "1" != e.attr("data-playing-adonend") && (g.show(),
                        g.beginHide(3e3))
                    } else
                        g.hide();
                    c.preventDefault(),
                    c.stopPropagation()
                })
            }
        })
    }(tvp, tvp.$),
    function(a, b) {
        b.extend(a.Html5UI.fn, {
            buildpromotion: function(c, d, e, f) {
                function g(c) {
                    var d = {
                        cmd: 3526,
                        val: c,
                        itype: function() {
                            return b.os.iPad ? 2 : b.os.iPhone || b.os.ipod ? 1 : b.os.android ? 3 : 4
                        }(),
                        url: window != top ? document.referrer : document.location.href
                    };
                    a.report(d)
                }
                if (b.os.ipad) {
                    var h = {};
                    b.each(a.html5skin.elements.promotion, function(a, b) {
                        h[a] = f.find(b)
                    }),
                    h.link.bind("click", function() {
                        g(2)
                    }),
                    b.isString(c.config.iPadPromotionText) && c.config.iPadPromotionText.length > 0 && h.link.text(c.config.iPadPromotionText),
                    h.main.show(),
                    g(1)
                }
            }
        })
    }(tvp, tvp.$),
    function(a, b) {
        function c(c, d, e, f) {
            var g = new a.Html5LoaingAd
              , h = f.find(a.html5skin.elements.loadingAd.main)
              , e = h.find(a.html5skin.elements.loadingAd.control)
              , i = h.find(a.html5skin.elements.loadingAd.countdown)
              , j = h.find(a.html5skin.elements.loadingAd.skip)
              , k = h.find(a.html5skin.elements.loadingAd.more)
              , l = h.find(a.html5skin.elements.loadingAd.adLink);
            d.on("tvp:player:videochange", function() {
                c.config.isHtml5ShowLoadingAdOnChange && (d.attr("data-playing-loadingad", "1"),
                g.getAdData())
            }),
            d.on("tvp:player:videoreplay", function() {
                c.config.isHtml5ShowLoadingAdOnStart && c.config.isHtml5ShowLoadingAdOnReplay && (c.curVideo && "function" === b.type(c.curVideo.getRequestAd) ? c.curVideo.getRequestAd() !== !1 && g.getAdData(!0) : g.getAdData(!0))
            }),
            g.onEnd = function(a) {
                a = a || {},
                "undefined" === b.type(a.noOrder) && (a.noOrder = !0),
                h.addClass("tvp_none"),
                d.attr("data-playing-loadingad", "0");
                var e, f = function() {
                    var b = "1" === d.attr("tvp_loadingad_ended");
                    b ? (clearTimeout(e),
                    d.trigger && d.trigger("tvp:loadingad:ended", {
                        vid: c.curVideo.getVid(),
                        emptyAd: !(!a || !a.noOrder),
                        isReplay: a.isReplay
                    })) : e = setTimeout(function() {
                        f()
                    }, 100)
                };
                setTimeout(function() {
                    clearTimeout(e)
                }, 6e3),
                f(),
                c.callCBEvent("onh5loadingadend"),
                d.on("tvp:player:videochange", function() {
                    clearTimeout(e)
                })
            }
            ,
            g.onStart = function() {
                d.attr("data-playing-loadingad", "1"),
                h.removeClass("tvp_none"),
                c.callCBEvent("onh5loadingadstart")
            }
            ,
            g.create(c, {
                $container: h,
                $control: e,
                $countdownContainer: i,
                $skipLink: j,
                $moreLink: k,
                $adLink: l,
                $copyrightTips: h.find(a.html5skin.elements.loadingAd.copyrightTips),
                $qqvipSkip: h.find(a.html5skin.elements.loadingAd.qqVipSkip)
            })
        }
        b.extend(a.Html5UI.fn, {
            buildloadingAd: function(d, e, f, g) {
                function h() {
                    if (!d.loadingadInited && d.config.isHtml5ShowLoadingAdOnStart) {
                        if (d.loadingadInited = !0,
                        "function" != typeof a.Html5LoaingAd) {
                            var h = FILEPATH + "plugins/loadingad.js?max_age=86400";
                            return h += "&t=" + a.ts,
                            void b.getScript(h, function() {
                                "function" != typeof a.Html5LoaingAd ? (e.attr("data-playing-loadingad", "0"),
                                e.trigger && e.trigger("tvp:loadingad:ended", d.curVideo.getVid())) : c(d, e, f, g)
                            })
                        }
                        c(d, e, f, g)
                    }
                }
                b.browser.WeChat ? (a.common.afterWeChatReady({
                    timeout: 5e3
                }).done(function() {
                    h()
                }),
                b(document).off("tvp:loadingad:continue").on("tvp:loadingad:continue", h)) : h()
            }
        })
    }(tvp, tvp.$),
    function(a, b) {
        b.extend(a.Html5UI.fn, {
            buildverticalbullet: function(b, c, d, e) {
                b && b.config && b.config.useHtml5VerticalBullet && b.config.isHtml5UseUI && (!b.config.isShortVideo || b.config.longVideoID) && (b._verticalbullet = new a.VerticalBullet(b,c,d,e))
            }
        })
    }(tvp, tvp.$),
    function(a, b) {
        function c(a, c, e, f) {
            this.player = a,
            this.$video = c,
            this.$control = e,
            this.$UILayer = f,
            this.config = {},
            b.extend(this.config, d),
            a.config.verticalBulletID ? this.vid = a.config.verticalBulletID : a.config.isShortVideo && a.config.longVideoID ? this.vid = a.config.longVideoID : this.vid = a.curVideo.getVid(),
            this.isShortVideo = a.config.isShortVideo,
            this.init()
        }
        var d = {
            max: 1,
            index: 0,
            speed: 1e3,
            maxCount: 50
        };
        c.prototype = {
            init: function() {
                this.initRole(),
                this.initEvents()
            },
            initRole: function() {
                this.$bullet = this.$UILayer.find('[data-role="tvp_vertical_bullet"]')
            },
            initEvents: function() {
                var a = this;
                this.$video.on("playing.v_bullet", function() {
                    a.hasInit ? a.isPlayingAd() || (a.needReInit && (a.initHTML(),
                    a.needReInit = !1),
                    a.show(),
                    a.startMove()) : a.initData()
                }),
                this.$video.on("pause.v_bullet", function() {
                    a.isPlayingAd() || (a.hide(),
                    a.stopMove())
                }),
                this.$video.on("ended.v_bullet", function() {
                    a.index = 0,
                    a.needReInit = !0
                })
            },
            initData: function() {
                var a = this;
                this.hasInit || (this.hasInit = !0,
                this.requestData().done(function() {
                    a.initHTML(),
                    a.isPlayingAd() || (a.show(),
                    a.startMove())
                }).fail(function() {
                    a.player.dataset && (a.player.dataset.noShortVideoData = !0)
                }))
            },
            initHTML: function() {
                if (this.data && this.data.length) {
                    var a = this.blankData.concat(this.data.slice(0, this.config.max))
                      , b = this.renderHTML(a);
                    this.index = this.config.max - 1,
                    this.$bullet.html(b)
                }
            },
            startMove: function() {
                var a = this;
                this.stopMove(),
                !this.data || this.data.length < 1 || (this.timer = setInterval(function() {
                    a.addNext()
                }, this.config.speed))
            },
            stopMove: function() {
                this.timer && clearInterval(this.timer),
                this.timer = null
            },
            show: function() {
                this.$bullet.removeClass("tvp_none")
            },
            hide: function() {
                this.$bullet.addClass("tvp_none")
            },
            addNext: function() {
                var a = this;
                !this.data || this.data.length < 1 || (this.$bullet.find(".tvp_out").remove(),
                setTimeout(function() {
                    a.$bullet.find(".tvp_barrage_item:nth-child(1)").addClass("tvp_out"),
                    a.$bullet.find(".tvp_barrage_item:nth-child(2)").addClass("tvp_fadeout"),
                    a.index++;
                    var b = a.$bullet.find(".tvp_barrage_item");
                    if (a.index > a.data.length)
                        return void (b && b.length || (a.stopMove(),
                        a.hide()));
                    var c = a.renderHTML(a.data.slice(a.index, a.index + 1));
                    a.$bullet.append(c)
                }, 50))
            },
            renderHTML: function(a) {
                return a && a.length ? b.tmpl(this.htmlStr, {
                    data: a
                }) : ""
            },
            isPlayingAd: function() {
                var a = !1;
                return "1" === this.$video.attr("data-playing-loadingad") && (a = !0),
                "1" === this.$video.attr("data-playing-adonend") && (a = !0),
                a
            },
            blankData: [{
                content: ""
            }, {
                content: ""
            }],
            htmlStr: ["<% for(var i=0,len = data.length;i<len; i++) { %>", ' <div class="tvp_barrage_item">', "   <% if(data[i].content) {%>", '     <span class="tvp_text"><%=tvp.$.filterXSS(data[i].content)%></span>', "   <% }%>", " </div>", "<% } %>"].join(""),
            requestData: function() {
                var a = b.Deferred()
                  , c = this;
                if (this.data && this.data.length > 0)
                    return a.resolve(),
                    a;
                var d = "http://bullet.video.qq.com/fcgi-bin/comment/news_hotlist?vid=" + c.vid;
                "https:" === location.protocol && (d = "https://sec.video.qq.com/p/bullet.video/fcgi-bin/comment/news_hotlist?vid=" + c.vid);
                var e = b.Ajax || b.ajax;
                return e({
                    url: d,
                    beforeSend: function(a) {
                        a.withCredentials = !0
                    },
                    xhrFields: {
                        withCredentials: !0
                    },
                    dataType: "html",
                    data: {
                        otype: "json",
                        num: c.isShortVideo ? 20 : 50
                    },
                    cache: !1,
                    timeout: 8e3
                }).done(function(b) {
                    try {
                        b = b && 0 === b.indexOf("QZOutputJson=") ? b.replace(/^QZOutputJson=/, "").replace(/\;$/, "") : b.replace(/^[\w_]+\(/, "").replace(/\)$/, ""),
                        b = JSON.parse(b)
                    } catch (d) {
                        b = ""
                    }
                    return "string" == typeof b ? void a.reject() : void (b && b.hotcomments && b.hotcomments.length ? (c.data = b.hotcomments.slice(0, c.config.maxCount),
                    a.resolve()) : a.reject())
                }).fail(function() {
                    a.reject()
                }),
                a
            }
        },
        a.VerticalBullet = c
    }(tvp, tvp.$),
    function(a, b) {
        var c = "";
        a.MP4Skin = {
            html: function() {
                return ['<div style="background:#000000 url(http://i.gtimg.cn/qqlive/images/20121119/i1353305744_1.jpg) center center no-repeat;">', '	<a style="width:100%;height:100%;display:block" class="tvp_mp4_link"></a>', "</div>"].join("")
            }()
        },
        a.MP4Link = function(b, c) {
            this.config.width = a.$.filterXSS(b),
            this.config.height = a.$.filterXSS(c),
            this.$elements = null,
            this.$mp4linker = null
        }
        ,
        a.MP4Link.fn = a.MP4Link.prototype = new a.BaseHtml5,
        b.extend(a.MP4Link.fn, {
            write: function(c) {
                var d = null
                  , e = this;
                if (d = "object" == b.type(c) && 1 == c.nodeType ? c : a.$.getByID(c)) {
                    this.playerid = this.config.playerid,
                    this.playerid || (this.playerid = "tenvideo_video_player_" + a.MP4Link.maxId++),
                    this.modId = c,
                    this.$mod = b("#" + c),
                    this.oninited();
                    var f = a.MP4Skin.html;
                    videoModId = "mod_" + this.playerid;
                    var g = b('<div id="' + videoModId + '"></div>').appendTo(e.$mod);
                    g.width(b.formatSize(this.config.width)).height(b.formatSize(this.config.height)),
                    this.$elements = b(f).appendTo(g).css("width", e.config.width).css("height", e.config.height),
                    this.videomod = b.getByID(videoModId),
                    this.$mp4linker = this.$elements.find(".tvp_mp4_link"),
                    this.callCBEvent("onwrite"),
                    this.registerMonitor(),
                    this.play(this.curVideo),
                    this.checkPlayerSize && this.checkPlayerSize()
                }
            },
            play: function(d) {
                var e = this;
                d instanceof a.VideoInfo && (isVidChange = d.getVid() != c && "" != c,
                e.setCurVideo(d),
                isVidChange && e.callCBEvent("onchange", e.curVideo.getFullVid()),
                c = e.curVideo.getFullVid()),
                e.$mp4linker.trigger("tvp:mp4:ajaxstart", d instanceof a.VideoInfo ? d.getVid() : d),
                e.curVideo.getMP4Url().done(function(a) {
                    e.$mp4linker.trigger("tvp:mp4:ajaxsuc", a),
                    e.$mp4linker.attr("href", a),
                    e.$mp4linker.trigger("tvp:mp4:src", a),
                    e.callCBEvent("onplay", e.curVideo.lastQueryVid, e.curVideo),
                    window != top && e.$mp4linker.bind(b.os.hasTouch ? "touchend" : "click", function(b) {
                        b.preventDefault(),
                        top.location.href = a
                    })
                }).fail(function(a, b) {
                    e.showError(a, b),
                    e.$mp4linker.trigger("tvp:mp4:ajaxerror"),
                    e.$mp4linker.trigger("tvp:mp4:error", a, b),
                    e.callCBEvent("onerror", a, b)
                }).always(function() {
                    c = e.curVideo.lastQueryVid
                })
            },
            getPlayerType: function() {
                return "mp4"
            },
            getDuration: function() {
                var a = this.curVideo.getDuration();
                return !isNaN(a) && a > 0 ? a : 0
            }
        }),
        a.MP4Link.maxId = 0
    }(tvp, tvp.$),
    function(a, b) {
        b.extend(a.MP4Link.fn, {
            buildmonitor: function() {
                if (!b.isUndefined(a.H5Monitor)) {
                    var c = this
                      , d = null;
                    this.$mp4linker.on("tvp:mp4:ajaxstart", function(b, e) {
                        d = null,
                        d = new a.H5Monitor(e,c),
                        d.addStep(1011)
                    }).on("tvp:mp4:ajaxsuc", function() {
                        d.reportStep(1011, {
                            val1: 1,
                            val2: 0
                        })
                    }).on("tvp:mp4:src", function() {
                        d.report(4, 1)
                    }).on("click", function() {
                        d && b.isFunction(d.report) && d.report(6, 1)
                    })
                }
            }
        })
    }(tvp, tvp.$),
    function(a, b) {
        a.BaseFlash = function() {
            this.swfPathRoot = "",
            this.flashobj = null,
            this.flashVarsKeyMapToCfg = {}
        }
        ,
        "number" != typeof a.BaseFlash.maxId && (a.BaseFlash.maxId = 0),
        a.BaseFlash.prototype = new a.BasePlayer,
        b.extend(a.BaseFlash.prototype, {
            getFlashVar: function() {
                return ""
            },
            getFlashVarVal: function() {
                var a = {}
                  , c = this.config;
                return b.each(this.flashVarsKeyMapToCfg, function(d, e) {
                    var f = e;
                    if (f in c) {
                        var g = b.type(c[f]);
                        "boolean" == g ? a[d] = c[f] ? 1 : 0 : ("number" == g || "string" === g) && (a[d] = c[f])
                    } else
                        a[d] = ""
                }),
                a
            },
            getFlashSwfUrl: function() {
                var c = "";
                if (this.config.type == a.PLAYER_DEFINE.LIVE)
                    b.isString(this.config.liveFlashUrl) && this.config.liveFlashUrl.length > 0 ? c = this.config.liveFlashUrl : (c = this.swfPathRoot + this.config.liveFlashSwfType.replace(/[^\w+]/gi, "") + ".swf",
                    c += "?max_age=86400&v=" + this.config.flashVersionTag || "20140615");
                else {
                    b.isString(this.config.vodFlashUrl) && this.config.vodFlashUrl.length > 0 ? c = this.config.vodFlashUrl : (c = this.swfPathRoot + this.config.vodFlashType.replace(/[^\w+]/gi, "") + ".swf",
                    c += "?max_age=86400&v=" + this.config.flashVersionTag || "20140615");
                    var d = navigator.userAgent;
                    d.indexOf("Maxthon") > 0 && d.indexOf("Chrome") > 0 && (c += (c.indexOf("?") > 0 ? "&" : "?") + "_=" + a.$.now())
                }
                if (c = b.filterXSS(c),
                "undefined" != typeof window.console && b.isFunction(window.console.warn) && c.indexOf("TencentPlayer.swf") > 0 && -1 == b.inArray(document.location.hostname, ["v.qq.com", "film.qq.com"])) {
                    var e = "\u60a8\u5f53\u524d\u4f7f\u7528\u7684flash\u64ad\u653e\u5668\u662f\u817e\u8baf\u89c6\u9891\u5b98\u7f51\u4e13\u7528\u7248\uff0c\u5982\u65e0\u5fc5\u8981\u8bf7\u4f7f\u7528\u5916\u8d34\u7248\u672c";
                    b.browser.chrome ? window.console.warn("%c" + e, "background: rgba(252,234,187,1)") : window.console.warn(e)
                }
                return c
            },
            getFlashHTML: function() {
                var a = this.getFlashVar()
                  , c = this.getFlashSwfUrl()
                  , d = b.formatSize(this.config.width)
                  , e = b.formatSize(this.config.height);
                this.playerid || (this.config.playerid ? this.playerid = this.config.playerid : this.playerid = "tenvideo_flash_player_" + (new Date).getTime());
                var f = ['<param name="allowScriptAccess" value="always" />', '<param name="movie" value="' + c + '" />', '<param name="quality" value="high" />', '<param name="allowFullScreen" value="true"/>', '<param name="play" value="true" />', '<param name="wmode" value="' + b.filterXSS(this.config.flashWmode) + '" />', '<param name="flashvars" value="' + a + '"/>', '<param name="type" value="application/x-shockwave-flash" />', '<param name="pluginspage" value="http://get.adobe.com/cn/flashplayer/" />'].join("\n")
                  , g = "";
                return b.browser.ie ? (g += 11 == b.browser.version ? '<object data="' + c + '" type="application/x-shockwave-flash" width="' + d + '" height="' + e + '" id="' + this.playerid + '" codebase="http://fpdownload.adobe.com/pub/shockwave/cabs/flash/swflash.cab#version=10,2,0,0">\n' : '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="' + d + '" height="' + e + '" id="' + this.playerid + '" codebase="http://fpdownload.adobe.com/pub/shockwave/cabs/flash/swflash.cab#version=10,2,0,0">\n',
                g += f,
                g += '	<div id="tvp_flash_install" style="line-height:' + e + ';background:#000000;text-align:center"><a href="http://www.adobe.com/go/getflashplayer" target="_blank" style="color:#ffffff;font-size:14px;padding:10px;">\u70b9\u51fb\u6b64\u5904\u5b89\u88c5\u64ad\u653e\u89c6\u9891\u9700\u8981\u7684flash\u63d2\u4ef6</a></div>\n',
                g += "</object>") : g += '<embed wmode="' + b.filterXSS(this.config.flashWmode) + '" flashvars="' + a + '" src="' + c + '" quality="high" name="' + this.playerid + '" id="' + this.playerid + '" bgcolor="#000000" width="' + d + '" height="' + e + '" align="middle" allowScriptAccess="always" allowFullScreen="true"  type="application/x-shockwave-flash" pluginspage="http://get.adobe.com/cn/flashplayer/"></embed>',
                g
            },
            write: function(c) {
                var d = null;
                if ("object" == b.type(c) && 1 == c.nodeType ? (d = c,
                this.$mod = b("#" + c.id),
                this.modId = this.$mod.attr("id") || "") : (d = a.$.getByID(c),
                this.modId = c,
                this.$mod = b(d)),
                d) {
                    var e = this.getFlashHTML()
                      , f = b.now()
                      , g = this.getFlashSwfUrl()
                      , h = 3544
                      , i = this
                      , j = "mod_" + this.playerid;
                    this.on(a.ACTION.onFlashPlayerInited, function() {
                        a.report({
                            cmd: h,
                            speed: b.now() - f,
                            appId: i.config.appid,
                            contentId: i.config.contentId,
                            vid: i.curVideo.getFullVid() || i.curVideo.getChannelId(),
                            str3: i.getPlayerType(),
                            str4: g
                        })
                    }),
                    a.report({
                        cmd: h,
                        appId: i.config.appid,
                        contentId: i.config.contentId,
                        vid: i.curVideo.getFullVid() || i.curVideo.getChannelId(),
                        str3: i.getPlayerType(),
                        str4: g
                    }),
                    window.jQuery ? jQuery(d).html('<div id="' + j + '" class="tenvideo_player">' + e + "</div>") : d.innerHTML = '<div id="' + j + '" class="tenvideo_player">' + e + "</div>",
                    this.flashobj = b.browser.ie ? document.getElementById(this.playerid) : document.embeds[this.playerid],
                    this.videomod = b.getByID(j);
                    var k = this.config.height + ""
                      , l = b.getByID("tvp_flash_install");
                    k.indexOf("%") > 0 && l && (l.style.lineHeight = d.offsetHeight)
                }
            },
            getPlayer: function() {
                return this.flashobj
            },
            listenerFlashCrash: function() {
                function c() {
                    if (e) {
                        var b = {
                            ftime: (+new Date + "").slice(0, 11),
                            uin: a.$.cookie.get("uin") || a.$.cookie.get("luin"),
                            playerverion: e.player,
                            streamtype: e.steam,
                            p2pvertion: e.p2p,
                            os: e.os,
                            flashersion: e.flash,
                            browser: d(),
                            browserverstion: a.$.browser.version,
                            ua: navigator.userAgent.toLowerCase(),
                            playtype: 1 === f.config.type ? "live" : "vod",
                            vurl: document.URL
                        }
                          , c = new Image(1,1)
                          , g = "//btrace.video.qq.com/kvcollect?BossId=3353&Pwd=1856399576&_dc=";
                        g = "http:" === location.protocol ? "http:" + g : "https:" + g,
                        c.src = g + Math.random() + "&" + a.$.param(b)
                    }
                }
                function d() {
                    return a.$.browser.ie ? "ie" : a.$.browser.chrome ? "chrome" : a.$.browser.firefox ? "firefox" : a.$.browser.safari ? "safari" : "other"
                }
                if (!this.timer_flash_crash && this.flashobj && "function" === b.type(this.flashobj.getFPInfo)) {
                    var e = this.flashobj.getFPInfo()
                      , f = this;
                    this.timer_flash_crash = setInterval(function() {
                        var a;
                        f && f.flashobj && "function" === b.type(f.flashobj.getFPInfo) ? (a = f.flashobj.getFPInfo()) && (e = a) : (clearInterval(f.timer_flash_crash),
                        c())
                    }, 15e3)
                }
            }
        })
    }(tvp, tvp.$),
    function(a, b) {
        a.FlashLivePlayer = function(c, d) {
            this.config = b.extend({}, this.config);
            a.BaseFlash.maxId++,
            this.flashVarsKeyMapToCfg = {
                showcfg: "isLiveFlashShowCfg",
                loadingswf: "loadingswf",
                share: "share",
                oid: "oid",
                apptype: "liveFlashAppType",
                full: "isLiveflashShowFullBtn",
                wmark: "liveFlashWatermark",
                autoplay: "autoplay"
            },
            this.swfPathRoot = location.protocol + "//imgcache.qq.com/minivideo_v1/vd/res/",
            this.config.width = b.filterXSS(c),
            this.config.height = b.filterXSS(d),
            this.loginResponse = function() {
                this.flashobj && "function" != typeof this.flashobj.loginCallback || (this.flashobj.loginCallback(a.FlashLivePlayer.flashloginParam),
                a.FlashLivePlayer.flashloginParam = {})
            }
            ,
            window.playerInit = function(b) {
                var c, d, e;
                if (b && a.Player && a.Player.instance) {
                    if (c = a.Player.instance[b],
                    !c)
                        return;
                    e = 2 === c.config.type ? c.curVideo.getFullVid() : c.curVideo.getChannelId(),
                    d = c.callCBEvent("ongetnextenable", e) ? 1 : 0,
                    c.execFlashMethod("setNextEnable", d),
                    c.trigger(a.ACTION.onFlashPlayerInited),
                    c.callCBEvent("oninited"),
                    c.callCBEvent("onplay", e)
                }
            }
            ,
            window._flash_play_error = function(b, c) {
                var d;
                b && a.Player && a.Player.instance && (d = a.Player.instance[b],
                d.callCBEvent("onerror", c))
            }
        }
        ,
        a.FlashLivePlayer.prototype = new a.BaseFlash,
        b.extend(a.FlashLivePlayer.prototype, {
            getChannelURl: function(a) {
                return "http://zb.v.qq.com:1863/?progid=" + a
            },
            getPlayerType: function() {
                return "liveflash"
            },
            getFlashVar: function() {
                var c = ""
                  , d = "TenVideo_FlashLive_"
                  , e = this.getFlashVarVal()
                  , f = window != top ? document.referrer : document.location.href
                  , g = "";
                c += "vid=" + this.curVideo.getChannelId(),
                c += "&vurl=" + this.getChannelURl(this.curVideo.getChannelId()),
                c += "&sktype=" + (this.curVideo.getIsLookBack() ? "vod" : "live"),
                g = "&",
                c += g,
                c += "funCnlInfo=" + d + "GetChannelInfo",
                c += "&funTopUrl=" + d + "GetTopUrl",
                c += "&funLogin=" + d + "IsLogin",
                c += "&funOpenLogin=" + d + "OpenLogin",
                c += "&funSwitchPlayer=" + d + "SwitchPlayer",
                c += "&host=" + encodeURIComponent(f),
                c += "&txvjsv=2.0",
                b.each(e, function(a, d) {
                    (b.isString(d) && d.length > 0 || "number" == b.type(d)) && (c += "&" + a + "=" + b.filterXSS(d))
                });
                for (var h in this.config.liveFlashExtVars)
                    c += ["&", encodeURIComponent(h), "=", encodeURIComponent(this.config.liveFlashExtVars[h])].join("");
                return c += "&p=" + a.livehub.g_flashp2p || 0
            },
            play: function(b) {
                if (this.flashobj) {
                    if (b = b || this.curVideo,
                    !b instanceof a.VideoInfo)
                        throw new Error("\u4f20\u5165\u7684\u5bf9\u8c61\u4e0d\u662ftvp.VideoInfo\u7684\u5b9e\u4f8b");
                    var c = !!b.getIsLookBack()
                      , d = b.getChannelId()
                      , e = this.getChannelURl(d)
                      , f = a.livehub.g_flashp2p || 0;
                    "" != d && ("undefined" != typeof this.flashobj.setSkinType && this.flashobj.setSkinType(c ? "vod" : "live"),
                    "undefined" != typeof this.flashobj.loadAndPlayVideoFromVID && this.flashobj.loadAndPlayVideoFromVID(e, d, b.getLiveReTime() || "", "", f),
                    this.callCBEvent("onplay", b.getChannelId()),
                    this.setCurVideo(b),
                    this.callCBEvent("onchange", b.getChannelId()))
                }
            },
            stop: function() {
                this.flashobj && (b.isUndefined(this.flashobj.stopVideo) || this.flashobj.stopVideo())
            }
        }),
        a.FlashLivePlayer.ADTYPE = {
            WEI_DIAN_TAI: "weidiantai",
            WEI_DIAN_SHI: "weidianshi",
            LIVE: "live",
            IN_LIVE: "inlive"
        },
        window.thisplay = function(c, d) {
            var e;
            d && d.id && a.Player && a.Player.instance && (e = a.Player.instance[d.id] || {},
            e.isStartPlay = !0,
            e.instance && (e.instance.isStartPlay = !0),
            "function" == typeof e.callCBEvent && e.callCBEvent("onplaying", e.getCurVideo().getChannelId(), d),
            "function" === b.type(e.listenerFlashCrash) && e.listenerFlashCrash.call(e))
        }
        ,
        window.toggleFakeFullScreen = function(b) {
            var c, d, e;
            return b && b.id && a.Player && a.Player.instance ? (c = a.Player.instance[b.id] || {},
            c.playerid ? (d = a.$("#" + c.playerid),
            d && d.length ? (e = d.parent()[0],
            b.enter ? (c._cache_flash_style = d[0].style.cssText,
            c._cache_flash_parent_style = d.parent()[0].style.cssText,
            d.css({
                width: "100%",
                height: "100%"
            }).parent().css({
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                "z-index": c.config.flashFakeFullscreenZindex || 9999
            }),
            $j("html,body").css({
                overflow: "hidden"
            }),
            c._cache_flash_isfullscreen = !0,
            "function" === a.$.type(c.onFlashFakeFullScreenChange) && c.onFlashFakeFullScreenChange.call(c, {
                isFull: 1,
                flash: d
            }),
            !0) : (d[0].style.cssText = c._cache_flash_style,
            d.parent()[0].style.cssText = c._cache_flash_parent_style,
            $j("html,body").css({
                overflow: "auto"
            }),
            c._cache_flash_isfullscreen = !1,
            "function" === a.$.type(c.onFlashFakeFullScreenChange) && c.onFlashFakeFullScreenChange.call(c, {
                isFull: 0,
                flash: d
            }),
            !0)) : !1) : !1) : !1
        }
        ,
        window.toggleFakeFullScreen = function(b) {
            var c, d, e;
            return b && b.id && a.Player && a.Player.instance ? (c = a.Player.instance[b.id] || {},
            c.playerid ? (d = a.$("#" + c.playerid),
            d && d.length ? (e = d.parent()[0],
            b.enter ? (c._cache_flash_style = d[0].style.cssText,
            c._cache_flash_parent_style = d.parent()[0].style.cssText,
            d.css({
                width: "100%",
                height: "100%"
            }).parent().css({
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                "z-index": c.config.flashFakeFullscreenZindex || 9999
            }),
            $j("html,body").css({
                overflow: "hidden"
            }),
            c._cache_flash_isfullscreen = !0,
            "function" === a.$.type(c.onFlashFakeFullScreenChange) && c.onFlashFakeFullScreenChange.call(c, {
                isFull: 1,
                flash: d
            }),
            !0) : (d[0].style.cssText = c._cache_flash_style,
            d.parent()[0].style.cssText = c._cache_flash_parent_style,
            $j("html,body").css({
                overflow: "auto"
            }),
            c._cache_flash_isfullscreen = !1,
            "function" === a.$.type(c.onFlashFakeFullScreenChange) && c.onFlashFakeFullScreenChange.call(c, {
                isFull: 0,
                flash: d
            }),
            !0)) : !1) : !1) : !1
        }
        ,
        window.TenVideo_FlashLive_GetChannelInfo = function() {
            return a.livehub.g_curCnlInfo
        }
        ,
        window.TenVideo_FlashLive_GetTopUrl = function() {
            var a = "";
            try {
                a = top.location.href
            } catch (b) {
                a = document.location.href
            }
            return a
        }
        ,
        window.TenVideo_FlashLive_IsLogin = function() {
            return a.common.getUin() > 1e4
        }
        ,
        window.TenVideo_FlashLive_OpenLogin = function(b) {
            a.FlashLivePlayer.flashloginParam = b || {},
            a.common.openLogin()
        }
        ,
        window.TenVideo_FlashLive_SwitchPlayer = b.noop,
        window.__flashplayer_getIframeReferrer = function() {
            return a.common.getTopFrameUrl ? a.common.getTopFrameUrl() : ""
        }
    }(tvp, tvp.$);
    tvp.$.noop,
    tvp.$.noop,
    tvp.$.noop,
    tvp.$.noop,
    tvp.$.noop;
    !function(a, b) {
        var c = ""
          , d = -1
          , e = null;
        a.FlashPlayer = function(c, d) {
            this.config = b.extend({}, this.config),
            e = this,
            this.flashVarsKeyMapToCfg = {
                cid: "coverId",
                tpid: "typeId",
                showend: "isVodFlashShowEnd",
                showcfg: "isVodFlashShowCfg",
                searchbar: "isVodFlashShowSearchBar",
                loadingswf: "loadingswf",
                share: "isVodFlashShowShare",
                pic: "pic",
                oid: "oid",
                skin: "vodFlashSkin",
                shownext: "isVodFlashShowNextBtn",
                list: "vodFlashListType",
                autoplay: "autoplay"
            },
            this.swfPathRoot = "http://imgcache.qq.com/tencentvideo_v1/player/",
            this.swfPathRoot = a.common.get_request_url("swf_root"),
            a.BaseFlash.maxId++,
            this.isStartPlay = !1,
            this.getPlayerType = function() {
                return "flash"
            }
            ,
            this.config.width = a.$.filterXSS(c),
            this.config.height = a.$.filterXSS(d),
            window.__flashplayer_ismax = function(a) {
                e.callCBEvent("onfullscreen", a)
            }
            ,
            window.__tenplay_popwin = function() {
                a.$.isFunction(e.onflashpopup) && e.callCBEvent("onflashpopup")
            }
            ,
            window._showPlayer = function() {
                e.showPlayer()
            }
            ,
            window._hidePlayer = function() {
                e.hidePlayer()
            }
        }
        ,
        a.FlashPlayer.fn = a.FlashPlayer.prototype = new a.BaseFlash,
        b.extend(a.FlashPlayer.fn, {
            play: function(e) {
                function f(a) {
                    var c = {
                        vid: a.getVidList() || a.getIdx(),
                        duration: a.getDuration() || "",
                        start: j,
                        end: k,
                        history: a.getHistoryStart() || 0,
                        vstart: h,
                        vend: i,
                        title: a.getTitle() || "",
                        exid: l,
                        pay: a.getPay(),
                        cdntype: a.getCDNType(),
                        bulletid: b.isFunction(a.getBulletId) ? a.getBulletId() : ""
                    };
                    return c
                }
                if (!this.flashobj)
                    throw new Error("\u672a\u627e\u5230\u89c6\u9891\u64ad\u653e\u5668\u5bf9\u8c61\uff0c\u8bf7\u786e\u8ba4flash\u64ad\u653e\u5668\u662f\u5426\u5b58\u5728");
                if (b.isUndefined(e) && "function" == typeof this.flashobj.setPlaytime)
                    return void (-1 == d ? "function" == typeof this.flashobj.loadAndPlayVideoV2 && this.flashobj.loadAndPlayVideoV2(f(this.getCurVideo())) : (this.flashobj.setPlaytime(d),
                    d = -1,
                    this.isStartPlay = !0));
                if (!e instanceof a.VideoInfo)
                    throw new Error("\u4f20\u5165\u7684\u5bf9\u8c61\u4e0d\u662ftvp.VideoInfo\u7684\u5b9e\u4f8b");
                var g = c != e.getFullVid();
                this.setCurVideo(e),
                g && this.callCBEvent("onchange", this.curVideo.getFullVid()),
                c = this.curVideo.getFullVid(),
                this.isStartPlay = !1;
                var h = 0
                  , i = 0
                  , j = 0
                  , k = 0;
                0 == e.getIdx() ? (h = e.getPrefix() || 0,
                i = e.getEndOffset() || 0) : (j = e.getTagStart(),
                k = e.getTagEnd());
                var l = 0 == e.getIdx() ? 0 : "k" + e.getIdx();
                if (this.curVideo.getVidList() != e.getVidList() || 0 == e.getIdx()) {
                    var m = f(e);
                    0 == this.config.starttips && (m.t = e.getHistoryStart() || 0),
                    "function" == typeof this.flashobj.loadAndPlayVideoV2 && (e && e.getConnectionPlayType && (m.tpnext = e.getConnectionPlayType()),
                    this.flashobj.loadAndPlayVideoV2(m))
                } else
                    e.getTagEnd() - e.getTagStart() > 0 && this.flashobj.attractionUpdate(e.getTagStart(), e.getTagEnd(), l);
                this.isStartPlay = !0,
                this.callCBEvent("onplay", e.getFullVid()),
                "function" == typeof this.flashobj.setNextEnable && this.flashobj.setNextEnable(this.callCBEvent("ongetnextenable", this.curVideo.getFullVid()) ? 1 : 0)
            },
            pause: function() {
                e.isStartPlay && this.flashobj && "function" == typeof this.flashobj.getPlaytime && "function" == typeof this.flashobj.pauseVideo && (d = this.flashobj.getPlaytime(),
                this.flashobj.pauseVideo(),
                this.isStartPlay = !1)
            },
            getFlashVar: function() {
                var c = ""
                  , d = this.getFlashVarVal();
                if (c += "vid=" + this.curVideo.getVidList(),
                this.curVideo.getTagEnd() - this.curVideo.getTagStart() > 0 && (c += "&attstart=" + a.$.filterXSS(this.curVideo.getTagStart()),
                c += "&attend=" + a.$.filterXSS(this.curVideo.getTagEnd())),
                this.curVideo.getDuration() > 0 && (c += "&duration=" + (this.curVideo.getDuration() || "")),
                this.curVideo.getHistoryStart() > 0 && (c += "&history=" + a.$.filterXSS(this.curVideo.getHistoryStart())),
                this.curVideo.getTstart() > 0 && (c += "&t=" + a.$.filterXSS(this.curVideo.getTstart())),
                0 == this.curVideo.getIdx() && (this.curVideo.getPrefix() > 0 || this.curVideo.getTail() > 0)) {
                    var e = this.curVideo.getPrefix()
                      , f = this.curVideo.getEndOffset();
                    (e > 0 || f) && (c += "&vstart=" + a.$.filterXSS(e),
                    c += "&vend=" + a.$.filterXSS(f))
                }
                a.$.each(d, function(d, e) {
                    (b.isString(e) && e.length > 0 || "number" == b.type(e)) && (c += "&" + d + "=" + a.$.filterXSS(e))
                }),
                this.curVideo.getPay() && (c += "&pay=" + (b.isTrue(this.curVideo.getPay()) ? 1 : 0)),
                this.curVideo.getIdx() && (c += "&exid=k" + a.$.filterXSS(this.curVideo.getIdx())),
                this.curVideo.getCDNType() > 0 && (c += "&cdntype=" + this.curVideo.getCDNType());
                for (var g in this.config.vodFlashExtVars)
                    c += ["&", encodeURIComponent(g), "=", encodeURIComponent(this.config.vodFlashExtVars[g])].join("");
                return b.isFunction(this.curVideo.getBullet) && this.curVideo.getBullet() === !0 && (c += "&bullet=1",
                b.isFunction(this.curVideo.getBulletId) && (c += "&bulletid=" + this.curVideo.getBulletId())),
                this.curVideo.getTitle().length > 0 && (c += "&title=" + encodeURIComponent(this.curVideo.getTitle())),
                c
            },
            getPlaytime: function() {
                return this.flashobj && "function" == typeof this.flashobj.getPlaytime ? this.flashobj.getPlaytime() : -1
            },
            setPlaytime: function(a, b) {
                return this.flashobj && "function" == typeof this.flashobj.setPlaytime ? this.flashobj.setPlaytime(a, b) : void 0
            },
            showPlayer: function() {
                if (this.flashobj) {
                    var a = "" + this.config.width
                      , b = "" + this.config.height;
                    a.indexOf("px") < 0 && (a = parseInt(a) + "px"),
                    b.indexOf("px") < 0 && (b = parseInt(b) + "px"),
                    this.flashobj.style.width = a,
                    this.flashobj.style.height = b
                }
            },
            hidePlayer: function() {
                this.flashobj && (this.flashobj.style.width = "1px",
                this.flashobj.style.height = "1px")
            }
        }),
        window.__tenplay_onMessage = function(b, c) {
            if (a.Player && a.Player.instance && b) {
                var d = a.Player.instance[b] || {}
                  , e = "";
                switch (parseInt(c, 10)) {
                case 1:
                    e = "onpause";
                    break;
                case 3:
                    e = "onresume";
                    break;
                case 4:
                    e = "onvolumechange"
                }
                e && "function" == typeof d.callCBEvent && d.callCBEvent(e)
            }
        }
        ,
        window.thisplay = function(c, d) {
            var e;
            d && d.id && a.Player && a.Player.instance && (e = a.Player.instance[d.id] || {},
            e.isStartPlay = !0,
            e.instance && (e.instance.isStartPlay = !0),
            "function" == typeof e.callCBEvent && e.callCBEvent("onplaying", e.getCurVid(), d),
            "function" === b.type(e.listenerFlashCrash) && e.listenerFlashCrash.call(e))
        }
        ,
        window.toggleFakeFullScreen = function(b) {
            var c, d, e;
            return b && b.id && a.Player && a.Player.instance ? (c = a.Player.instance[b.id] || {},
            c.playerid ? (d = a.$("#" + c.playerid),
            d && d.length ? (e = d.parent()[0],
            b.enter ? (c._cache_flash_style = d[0].style.cssText,
            c._cache_flash_parent_style = d.parent()[0].style.cssText,
            d.css({
                width: "100%",
                height: "100%"
            }).parent().css({
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                "z-index": c.config.flashFakeFullscreenZindex || 9999
            }),
            $j("html,body").css({
                overflow: "hidden"
            }),
            c._cache_flash_isfullscreen = !0,
            "function" === a.$.type(c.onFlashFakeFullScreenChange) && c.onFlashFakeFullScreenChange.call(c, {
                isFull: 1,
                flash: d
            }),
            !0) : (d[0].style.cssText = c._cache_flash_style,
            d.parent()[0].style.cssText = c._cache_flash_parent_style,
            $j("html,body").css({
                overflow: "auto"
            }),
            c._cache_flash_isfullscreen = !1,
            "function" === a.$.type(c.onFlashFakeFullScreenChange) && c.onFlashFakeFullScreenChange.call(c, {
                isFull: 0,
                flash: d
            }),
            !0)) : !1) : !1) : !1
        }
        ,
        window.playerInit = function(b) {
            var c, d, e;
            if (b && a.Player && a.Player.instance) {
                if (c = a.Player.instance[b],
                !c)
                    return;
                e = 2 === c.config.type ? c.curVideo.getFullVid() : c.curVideo.getChannelId(),
                d = c.callCBEvent("ongetnextenable", e) ? 1 : 0,
                c.execFlashMethod("setNextEnable", d),
                c.trigger(a.ACTION.onFlashPlayerInited),
                c.callCBEvent("oninited"),
                c.callCBEvent("onready"),
                c.callCBEvent("onplay", e)
            }
        }
        ,
        window._flash_play_error || (window._flash_play_error = function(b, c) {
            var d;
            b && a.Player && a.Player.instance && (d = a.Player.instance[b],
            d.callCBEvent("onerror", c))
        }
        ),
        window.attrationstop = window.nextplay = function(b, c) {
            var d, e;
            if (c && c.id && a.Player && a.Player.instance)
                d = a.Player.instance[c.id] || {};
            else if (a.Player && a.Player.instance)
                for (e in a.Player.instance)
                    if (a.Player.instance.hasOwnProperty(e)) {
                        d = a.Player.instance[e];
                        break
                    }
            if (d instanceof a.Player) {
                d.callCBEvent("onended", b);
                var f = d.callCBEvent("ongetnext", b);
                return f ? void d.play(f) : void d.callCBEvent("onallended")
            }
        }
        ,
        window.__adldstart = function(b) {
            var c;
            if (b && a.Player && a.Player.instance) {
                if (c = a.Player.instance[b],
                !c)
                    return;
                c.callCBEvent("onadplay")
            }
        }
        ,
        window.__flashplayer_getIframeReferrer = function() {
            return a.common.getTopFrameUrl ? a.common.getTopFrameUrl() : ""
        }
    }(tvp, tvp.$),
    function(a, b) {
        a.livehub = {
            g_flashp2p: !1,
            iretcode: 0,
            g_curCnlInfo: {},
            stepReport: function(c, d) {
                var e = {
                    cmd: 3545,
                    val: c
                };
                "object" == b.type(d) && (e = b.extend(e, {
                    speed: d.delay,
                    int5: d.code,
                    vid: d.lid
                }),
                d.config && (e = b.extend(e, {
                    contentId: d.config.contentId,
                    appId: d.config.appid
                }))),
                a.report(e)
            },
            FlashChecker: function(c) {
                var d = this;
                this.cnlId = "",
                this.extParam = {},
                this.onError = b.noop,
                this.onCanFlash = b.noop,
                this.onCanHTML5 = b.noop,
                this.onCanOCX = b.noop,
                this.onComplete = b.noop,
                this.onGetCnlId = b.noop;
                var e = function(b, d) {
                    d = d || {},
                    d.config = c,
                    a.livehub.stepReport(b, d)
                };
                this.onSuccess = function(c) {
                    c && 0 == c.iretcode ? (a.livehub.iretcode = c.iretcode,
                    a.livehub.g_flashp2p = c.flashp2p ? !0 : !1,
                    a.debug("get channel info:flashid=" + c.flashid + ",p2pid=" + c.p2pid + ",flashp2p=" + c.flashp2p),
                    d.cnlId = "" + c.flashid || c.p2pid || "",
                    d.onGetCnlId("" + d.cnlId, !1),
                    a.livehub.getCurChannelInfo(d.cnlId, d.extParam),
                    c.flashid ? (e(5),
                    d.onCanFlash(d.cnlId)) : b.os.windows && c.p2pid ? (e(6),
                    d.onCanOCX(d.cnlId)) : (e(7, {
                        code: c.iretcode
                    }),
                    d.onError(c.iretcode))) : (e(8, {
                        code: c.iretcode
                    }),
                    d.onError(500))
                }
                ,
                this.send = function() {
                    return e(1),
                    a.common.isUseHtml5() ? (e(2),
                    d.onCanHTML5(d.cnlId),
                    void d.onComplete()) : (d.onCanFlash(),
                    void d.onComplete())
                }
            },
            getCurChannelInfo: function(c, d) {
                var e = a.livehub.g_curCnlInfo;
                d && "object" == b.type(d) ? (e.cnlId = d.cnlId,
                d.channelname && (e.cnlName = d.channelname),
                d.currentname && d.currenttime && (e.prmInfo = d.currenttime + "|" + d.currentname)) : e = {}
            }
        }
    }(tvp, tvp.$),
    function(a, b) {
        function c(c, d, e) {
            var f = b.now()
              , h = f - g
              , i = {
                cmd: 3529,
                val: c,
                str4: d,
                speed: 0 > h ? b.now() - f : h
            };
            g = f,
            "object" == b.type(e) && b.extend(i, e),
            a.report(i)
        }
        function e(c, d) {
            var e = c + "Defer";
            if (a[e])
                return a[e];
            var f = b.Deferred();
            a[e] = f;
            var g = window.FILEPATH
              , i = c.toLowerCase();
            "OcxPlayer" == c && "undefined" != typeof QQLive && "undefined" != typeof QQLive.DEFINE && (i = "ocxplayerlite");
            var j = g + "module/" + i + ".js?max_age=86400&v=" + a.ts;
            if ("function" == typeof a[c])
                f.resolve();
            else {
                var k = new a.RetCode(100123)
                  , l = b.now();
                k.begin(),
                d(1),
                b.getScript(j, function() {
                    var e = b.now() - l;
                    if ("function" != typeof a[c])
                        throw k.reportErr(11),
                        d(2, 11, e),
                        new Error(h[1]);
                    d(2, 0, e),
                    k.reportSuc(),
                    f.resolve()
                })
            }
            return f
        }
        function f(a) {
            return "string" == b.type(a) && /html5|mp4/i.test(a)
        }
        var g = b.now()
          , h = ["\u672a\u6307\u660e\u64ad\u653e\u5668\u5185\u6838", "\u60a8\u5f53\u524d\u4f7f\u7528\u7684\u7edf\u4e00\u64ad\u653e\u5668JS\u6587\u4ef6\u4e0d\u5305\u542b\u6307\u5b9a\u7684\u64ad\u653e\u5668\u5185\u6838", "video\u672a\u521d\u59cb\u5316"]
          , i = function(c, d) {
            function g() {
                var a = b.Deferred();
                switch (r.playerType) {
                case "flash":
                    t = "FlashPlayer";
                    break;
                case "html5":
                    m();
                    break;
                case "ocx":
                    t = "OcxPlayer";
                    break;
                case "mp4":
                    t = "MP4Link";
                    break;
                default:
                    h()
                }
                return a.resolve(),
                a
            }
            function h() {
                var b = navigator.platform.toLowerCase()
                  , c = navigator.userAgent.toLowerCase()
                  , d = a.version.getFlashMain()
                  , e = /ipad|ipod|iphone|lepad_hls|IEMobile|WPDesktop/gi.test(c)
                  , f = (/MacIntel/gi.test(b),
                /ipad|ipod|iphone|playstation/gi.test(b));
                return a.common.isEnforceMP4() ? void (t = "MP4Link") : e || f || a.$.os.android ? void (a.common.isSupportMP4() || a.common.isInUseH5() ? m() : t = "MP4Link") : a.$.os.Mac && "film.qq.com" === location.hostname ? void (t = "FlashPlayer") : a.$.os.Mac && (10 > d || !d) && a.common.isSupportMP4() ? void m() : void (t = "FlashPlayer")
            }
            function j(c) {
                if (c.getChannelId()) {
                    var d = c.getChannelId();
                    if ("object" == b.type(s[d]) && b.isFunction(s[d].done))
                        return s[d];
                    s[d] = b.Deferred();
                    var e = new a.livehub.FlashChecker(r)
                      , f = !0;
                    return e.cnlId = c.getChannelId(),
                    e.extParam = c.getChannelExtParam(),
                    e.onGetCnlId = function(a, b) {
                        c.setChannelId(a),
                        c.setIsLookBack(!!b)
                    }
                    ,
                    e.onCanFlash = function(a) {
                        t = "FlashLivePlayer"
                    }
                    ,
                    e.onCanHTML5 = function() {
                        n()
                    }
                    ,
                    e.onCanOCX = function() {
                        t = "OcxPlayer"
                    }
                    ,
                    e.onError = function(a) {
                        k(),
                        f = !1
                    }
                    ,
                    e.onComplete = function() {
                        l(),
                        f ? s[d].resolve() : s[d].reject()
                    }
                    ,
                    e.send(),
                    s[d]
                }
            }
            function k() {
                a.common.isLiveUseHTML5() ? n() : t = b.os.android ? "FlashLivePlayer" : "OcxPlayer"
            }
            function l() {
                switch (r.playerType) {
                case "flash":
                    t = "FlashLive";
                    break;
                case "html5":
                    n();
                    break;
                case "flashLive":
                    t = "FlashLivePlayer";
                    break;
                case "ocx":
                    t = "OcxPlayer"
                }
            }
            function m() {
                x = !0,
                t = r.isHtml5UseUI ? "Html5Player" : "Html5Tiny"
            }
            function n() {
                t = r.isHtml5UseUI ? "Html5Live" : "Html5LiveTiny"
            }
            function o(a) {
                for (var b = !1, c = document.getElementsByTagName("link") || [], d = 0, e = c.length; e > d && !(b = c[d] && c[d].href && (c[d].href.indexOf(a) > 0 || -1 != c[d].href.indexOf("player_inews.css"))); )
                    d++;
                return b
            }
            function p() {
                function d() {
                    if (!g) {
                        g = !0;
                        var b = new a[t];
                        b.init(c),
                        q.resolve(b, t)
                    }
                }
                var e = null
                  , g = !1
                  , h = b.inArray(t, w)
                  , i = r.cssPath + (c.HTML5CSSName || "player.css");
                (h > -1 && b.isString(c.HTML5CSSName) && c.HTML5CSSName.length > 0 || f(t)) && !o(i) ? (e = setTimeout(function() {
                    c.isHtml5UseUI = !1,
                    t = y[h],
                    d()
                }, 5e3),
                i += -1 === i.indexOf("?") ? "?t=" + a.ts : "&t=" + a.ts,
                /^http/.test(i) || (i = "http:" === location.protocol ? "http:" + i : "https:" + i),
                b.loadCss(i).done(function() {
                    clearTimeout(e),
                    e = null,
                    d()
                })) : d()
            }
            var q = b.Deferred()
              , r = {}
              , s = {}
              , t = "FlashPlayer"
              , u = ["\u672a\u6307\u660e\u64ad\u653e\u5668\u5185\u6838", "\u60a8\u5f53\u524d\u4f7f\u7528\u7684\u7edf\u4e00\u64ad\u653e\u5668JS\u6587\u4ef6\u4e0d\u5305\u542b\u6307\u5b9a\u7684\u64ad\u653e\u5668\u5185\u6838", "video\u672a\u521d\u59cb\u5316"]
              , v = ["FlashPlayer", "FlashLivePlayer", "MP4Link", "OcxPlayer"]
              , w = ["Html5Player", "Html5Live"]
              , x = !1
              , y = ["Html5Tiny", "Html5LiveTiny"];
            if (v = v.concat(w),
            v = v.concat(y),
            b.extend(r, c),
            b.isUndefined(c.isHTML5UseUI) || (r.isHtml5UseUI = c.isHTML5UseUI),
            !c.video instanceof a.VideoInfo)
                throw new Error(u[2]);
            return c.video.setCurPlayer(d),
            i.checkLivePlayer = j,
            b.when(c.type == a.PLAYER_DEFINE.VOD ? g() : j(c.video)).then(function() {
                var f = ""
                  , g = function(b, d, e) {
                    a.report({
                        cmd: 3531,
                        val: b,
                        val2: d || 0,
                        str3: f,
                        speed: e || 0,
                        contentId: c.contentId || "",
                        appId: c.appid || 0
                    })
                };
                if (!t)
                    throw new Error(u[0]);
                if (b.inArray(t, v) < 0)
                    throw new Error(u[1]);
                c.type == a.PLAYER_DEFINE.VOD && x && d && d.trigger && d.trigger(a.ACTION.onVodH5Init),
                "function" != typeof a[t] ? e(t, g).done(function() {
                    p.call(d)
                }) : p.call(d)
            }),
            q
        }
          , j = {
            player: "playerType",
            showcfg: ["isVodFlashShowCfg", "isLiveFlashShowCfg"],
            searchbar: ["isVodFlashShowSearchBar"],
            showend: ["isVodFlashShowEnd"],
            tpid: ["typeId"],
            cid: ["coverId"],
            flashshownext: ["isVodFlashShowNextBtn"],
            loadingswf: "loadingswf",
            wmode: "flashWmode",
            flashskin: ["vodFlashSkin"],
            extvars: ["vodFlashExtVars"],
            swftype: ["vodFlashType"],
            swfurl: ["vodFlashUrl", "liveFlashUrl"]
        };
        a.Player = function(d, e) {
            this.sessionId = b.createGUID(),
            c(1, this.sessionId),
            this.instance = null,
            this.config = {},
            this._oldcfg = {},
            b.extend(this.config, a.defaultConfig),
            this.setting("width", d),
            this.setting("height", e)
        }
        ,
        a.Player.fn = a.Player.prototype = new a.BasePlayer,
        b.extend(a.Player.fn, {
            setting: function(a, b) {
                this.config[a] = b
            },
            output: function(a) {
                this.setting("modId", a),
                this.create(this.config)
            },
            create: function(e) {
                var f = this;
                f.config = b.extend({}, f.config, e),
                c(2, this.sessionId, {
                    contentId: f.config.contentId || "",
                    appId: f.config.appid || 0
                });
                var g = function() {
                    i(f.config, f).done(function(d, g) {
                        try {
                            c(3, f.sessionId, {
                                vid: d.curVideo.getFullVid() || d.curVideo.getChannelId(),
                                str3: d.getPlayerType(),
                                contentId: f.config.contentId || "",
                                appId: f.config.appid || 0
                            })
                        } catch (h) {}
                        f.instance = d,
                        f.instance.instance = f;
                        for (var j in f.instance)
                            "instance" != j && ("on" == j.substr(0, 2) && b.isFunction(f[j]) && f[j] != a.$.noop || (f[j] = f.instance[j]));
                        d.callCBEvent("onwrite"),
                        f.config.type == a.PLAYER_DEFINE.LIVE && (f.play = function(c) {
                            "undefined" == typeof c && (c = f.getCurVideo()),
                            b.isString(c) ? (f.config.video.setChannelId(c),
                            c = f.config.video) : c instanceof a.VideoInfo && b.when(i.checkLivePlayer(c)).then(function() {
                                f.instance instanceof a[g] ? f.instance.play(c) : (e.video = c,
                                i(e))
                            })
                        }
                        ),
                        a.Player.instance[f.playerid] = f
                    }).always(function() {
                        function c(a, c) {
                            try {
                                var d = "build" + a;
                                return b.isFunction(f[d]) ? (f[d].call(f, c),
                                !0) : !1
                            } catch (e) {}
                        }
                        if (b.each(f.config.plugins, function(a, d) {
                            if (d && a in f.config.pluginUrl) {
                                var e, g = b.isPlainObject(d) ? d : {};
                                if ("AppRecommend" === a && f.config.plugins.adonend)
                                    return;
                                if (!c(a, g)) {
                                    e = a;
                                    var h = f.config.libpath + f.config.pluginUrl[e];
                                    b.isString(h) && "" != b.trim(h) && (/^http/.test(h) || (h = "http:" === location.protocol ? "http:" + h : "https:" + h),
                                    b.getScript(h, function() {
                                        c(a, g)
                                    }))
                                }
                            }
                        }),
                        window.console && d) {
                            var e = {
                                jQuery: "jq",
                                Zepto: "zepto",
                                jq: "jqmobi"
                            };
                            for (var g in e)
                                if ("function" == typeof window[g]) {
                                    if ("jQuery" === g && "function" != typeof jQuery.Deferred)
                                        break;
                                    console.warn("\n" + a.name + "\u63d0\u793a\uff1a\n\u60a8\u5f53\u524d\u9875\u9762\u4f7f\u7528\u4e86" + g + "\n\u5efa\u8bae\u60a8\u5f15\u7528" + a.name + " for " + g + "\u4e13\u7528\u7248\uff0c\u66f4\u8f7b\u66f4\u5feb\u66f4\u7cbe\u7b80\nJS\u5730\u5740:" + FILEPATH + "tvp.player_v2_" + e[g] + ".js\n\n")
                                }
                        }
                    })
                }
                  , h = function() {
                    var c, d = b.Deferred(), e = "//v.qq.com/iframe/tvp.config.js";
                    if (e = "http:" === location.protocol ? "http:" + e : "https:" + e,
                    a.config)
                        return d.resolve(),
                        d;
                    var f = parseInt(100 * Math.random(), 10) + 1
                      , g = 100;
                    return 100 - g > f ? (d.reject(),
                    d) : (c = b.getScript(e, function() {
                        return a.config ? void d.resolve() : void d.reject()
                    }),
                    c && "function" === b.type(c.fail) && c.fail(function() {
                        d.reject()
                    }),
                    setTimeout(function() {
                        d.reject()
                    }, 4e3),
                    d)
                };
                h().done(function() {
                    try {
                        a.config && a.config.defaultConfig && b.extend(f.config, a.config.defaultConfig)
                    } catch (c) {}
                    g()
                }).fail(function() {
                    g()
                })
            },
            addParam: function(c, d) {
                a.report({
                    cmd: 3546,
                    val: 1
                }),
                "config" == c && "object" == b.type(d) ? b.extend(this.config, d) : this._oldcfg[c] = d
            },
            setCurVideo: function(b) {
                a.report({
                    cmd: 3546,
                    val: 2
                }),
                this.config.video = b,
                b && b instanceof a.VideoInfo && b.setCurPlayer(this)
            },
            write: function(c) {
                a.report({
                    cmd: 3546,
                    val: 3
                }),
                this.config.modId = c;
                var d = 1 == this._oldcfg.type ? 1 : 2
                  , e = this;
                b.each(this._oldcfg, function(c, f) {
                    c in j ? b.isArray(j[c]) ? 2 == d ? e.config[j[c][0]] = f : 1 == d && j[c].length >= 2 && (e.config[j[c][1]] = f) : b.isString(j[c]) && (e.config[j[c]] = f) : c in a.defaultConfig && (e.config[c] = f)
                }),
                delete this._oldcfg,
                this.create(this.config)
            }
        }),
        a.create = i
    }(tvp, tvp.$),
    tvp.Player.instance = {},
    function(a, b) {
        function c(a) {
            var c = a.t ? a.t.curVideo : !1
              , e = b.extend({
                lid: c ? c.getChannelId() : "",
                pageText2: a.text2
            }, d, a);
            return this.op = e,
            this.init(e),
            this
        }
        var d = {
            pluginName: "AppBanner",
            isAutoReport: !0,
            isAndroid: /android/i.test(navigator.userAgent.toLowerCase()),
            btnTexts: ["\u4e0b\u8f7d", "\u6253\u5f00", "\u5347\u7ea7"],
            btnText: "\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891\uff0c\u89c2\u770b\u66f4\u591a",
            btnText2: "\u4e0b\u8f7d\u5fae\u89c6\u5ba2\u6237\u7aef\uff0c\u53d1\u73b0\u66f4\u591a\u7cbe\u5f69",
            appTextName: {
                weishi: "\u5fae\u89c6\u5ba2\u6237\u7aef",
                qqlive: "\u817e\u8baf\u89c6\u9891"
            },
            style: "none",
            isResetWords: !1,
            downloader: !0,
            range: [1, 2],
            tpl: ['<div class="tvp_app_banner">', '<a data-wifi="0" data-action="applink" data-role="appbannerlink" data-status="down" data-downloadurl="${url}" data-url="${openUrl}" ${iframe} class="tvp_app_btn">', '<div class="tvp_progress">', '<div class="tvp_progress_current" data-role="appbannerbtnprogress"></div>', "</div>", '<div class="tvp_btn_text" data-role="appbannerbtntext" data-text="${btnText}">', '<div data-role="appbanner_logo" class="tvp_app_logo" style="background-image:url(http://i.gtimg.cn/qqlive/images/20150722/tvp_app_logo.png)"></div>', "</div>", "</a>", "</div>"].join("")
        };
        b.extend(c.prototype, {
            init: function(a) {
                var c = this;
                this.initDefer = b.Deferred(),
                this.initStyle(a),
                this.getAppInfo(a).done(function() {
                    c.initRoles(a),
                    c.fixTextAndUrl(a)
                }),
                this.op.t.$video.on("tvp:player:videochange", function() {
                    a.vid = a.t.curVideo.getVid(),
                    c.fixResult().done(function() {
                        c.info.hasApp ? c.stepReport(6, a) : (b.os.ios || !b.browser.WeChat && !b.browser.MQQClient) && c.stepReport(1, a)
                    })
                })
            },
            initStyle: function(a) {
                "none" != a.style && b("head").append(a.style)
            },
            initRoles: function(a) {
                var c = a.modId ? b("#" + a.modId) : a.mod;
                this.$mod = c,
                this.fixTpl(),
                this.$box = c,
                this.$text1 = c.find("[data-role=appbannertext1]"),
                this.$text2 = c.find("[data-role=appbannertext2]"),
                this.$btn = c.find("[data-role=appbannerlink]"),
                this.$btnText = c.find("[data-role=appbannerbtntext]"),
                this.$progress = c.find("[data-role=appbannerbtnprogress]"),
                this.$logo = c.find('[data-role="appbanner_logo"]'),
                this.$btn.attr("data-promotionId", a.promotionId || 140),
                this.fixStyle(),
                this.$box.show(),
                this.op.logo && this.$logo.css({
                    "background-image": "url(" + this.op.logo + ")"
                })
            },
            getAppInfo: function(c) {
                function d(d) {
                    d = d || a.app.config.defaultName;
                    var e = a.app.getPackageInfo();
                    c = b.extend(c, {
                        appName: d,
                        logoClass: e[d].logoClass,
                        text1: e[d].text1,
                        text2: e[d].text2
                    })
                }
                if (c.loadAppInfoDefer)
                    return c.loadAppInfoDefer;
                var e = b.Deferred();
                return c.loadAppInfoDefer = e,
                c.pay && c.cid ? (d(c.appName),
                e.resolve()) : c.appName && c.extraApp ? (d(c.appName),
                e.resolve()) : c.lid ? (d(c.appName),
                e.resolve()) : c.vid && (c.appName = "",
                d(c.appName),
                e.resolve()),
                e
            },
            fixResult: function() {
                var c = this.op
                  , d = this
                  , e = []
                  , f = b.Deferred();
                return this.getAppInfo(c).done(function() {
                    e[0] = (new Date).getTime(),
                    c.openUrl = null,
                    a.app.check(c).done(function(b) {
                        e[1] = (new Date).getTime(),
                        d.info = b,
                        d.info.speed = e.length > 1 ? e[1] - e[0] : 0,
                        d.initDefer && d.initDefer.done(function(b) {
                            var e = {}
                              , g = function() {
                                d.showtips(),
                                d.bindTap(),
                                f.resolve(),
                                e.rmdword && e.alginfo && e.tab_id && (d.rcmd_show_report = function(b) {
                                    d.rcmd_show_report_done || (d.rcmd_show_report_done = !0,
                                    a.bossReport.rcmdTextReport(1, e.tab_id, e.alginfo, b))
                                }
                                ),
                                d.$text2 && 0 !== d.$text2.length || d.rcmd_show_report && d.rcmd_show_report(2)
                            };
                            if (c.lid)
                                return c.recmdText = d.op.text,
                                void g();
                            if (b || d.op.noRecmd)
                                return void g();
                            var h = a.common.recomdTextById(c.vid);
                            return "object" == typeof h && h.rmdword && "string" == typeof h.rmdword ? (d.op.recmdText = h.rmdword,
                            e = h,
                            void g()) : void (h && h.done && h.done(function() {
                                var b = a.common.recomdText[c.vid];
                                b && b.rmdword && (d.op.recmdText = b.rmdword,
                                e = b),
                                g()
                            }))
                        })
                    })
                }),
                f
            },
            fixTpl: function() {
                var a = this.op;
                a.btnText === d.btnText && "weishi" === a.appName && (a.btnText = a.btnText2);
                var c = b.formatTpl(a.tpl, {
                    text1: b.filterXSS(a.btnText + a.text1),
                    text2: b.filterXSS(a.pageText2 || a.text2),
                    btnText: b.filterXSS(a.btnText),
                    url: "javascript:;",
                    iframe: window != top ? 'target="_parent"' : ""
                });
                this.$mod.find(".tvp_app_banner").remove(),
                this.$mod.append(c)
            },
            fixStyle: function() {
                (b.os.android && window.screen.width > 480 || b.os.iphone && window.screen.width <= 320) && this.$box.addClass("tvp_fixRight"),
                this.op.appName && this.op.logoClass && this.$box.addClass(this.op.logoClass),
                0 === this.$text1.length && this.$mod.width() === window.innerWidth && this.$mod.css({
                    width: this.$btn.width() - 30 + "px"
                })
            },
            report: function(c) {
                var d = this
                  , e = this.op
                  , f = e.reportParams ? e.reportParams.int5 : 0
                  , g = {
                    cmd: 0 == c ? 3534 : 3535,
                    vid: e.vid,
                    appId: e.appId,
                    contentId: e.contentId,
                    val: e.contentType,
                    speed: d.info.speed,
                    int5: f || 0,
                    ctype: d.info.hasApp,
                    int6: e.promotionId || 140,
                    str7: b.getUrlParam("mmuin"),
                    str8: e.t ? e.t.config.nettype : 0,
                    _: (new Date).getTime()
                };
                a.report(g)
            },
            stepReport: function(b, c) {
                var d = this
                  , e = c.t
                  , f = {
                    vid: e.curVideo.getVid(),
                    appCase: d.info.hasApp ? 3 : 1,
                    reportStep: b
                };
                f.promotionId = this.getCurPromotionId(c),
                e.config.reportFrom && e.config.reportFrom.page && (f.xinwenTpl = e.config.reportFrom.page + ""),
                a.bossReport.appLunchShowClickReport(f)
            },
            getCurPromotionId: function(b) {
                var c, d = b.t;
                return !c && b.downloadBtn && (c = b.downloadBtn.attr("data-promotionId")),
                !c && b.downloadUrl && (c = a.$.getUrlParam("confid", b.downloadUrl)),
                !c && b.promotionId && (c = b.promotionId),
                !c && d && d.AppBanner && d.AppBanner.op && (c = d.AppBanner.op.promotionId),
                c || 140
            },
            canCheckApp: function() {
                var b = a.app.pageType;
                return 1 !== b && 2 !== b ? !1 : top === window || top.location.href ? !0 : !1
            },
            showtips: function() {
                var c, d, e = this.op, f = this.info;
                f.hasApp > 0 ? e.btnText = e.btnTexts[f.hasApp] : "",
                e.recmdText && e.btnText.indexOf("\uff0c") > -1 ? e.btnText = e.btnText.split("\uff0c")[0] + "\uff0c" + e.recmdText : e.recmdText && this.$text2 && this.$text2.text(e.recmdText),
                this.canCheckApp() ? (c = e.btnText,
                d = e.btnText) : (c = "\u5230",
                d = this.$text2 && this.$text2.length ? "\u53bbApp\u770b" : e.btnText.replace(/^\u4e0b\u8f7d/, "\u5230")),
                e.text1 = c + e.text1,
                this.$text1.text(e.text1),
                this.$text2 && this.$text2.length ? this.$btnText.text(d) : this.$btnText.attr("data-text", d),
                b.os.ios || !a.$.browser.WeChat && !a.$.browser.MQQClient ? this.$btn.attr("href", e.downloadPage || f.url) : this.$btn.attr("data-downloadurl", f.url),
                e.downloadPage && this.$btn.attr("href", e.downloadPage),
                this.$btn.attr("data-url", f.openUrl),
                e.isAutoReport && this.report(0),
                1 == f.hasApp && this.fixDownloadStatus(5)
            },
            rewriteText: function(a) {
                var b = this.op
                  , c = a ? b.btnTexts[1] : b.btnTexts[0]
                  , d = this.$text1
                  , e = this.$btnText;
                d.html(c + b.text1),
                e.html(c)
            },
            fixDownloadStatus: function(c) {
                var e, f = "\u4e0b\u8f7d", g = this.op, h = d.appTextName[g.appName];
                switch (h || (h = d.appTextName[a.app.config.defaultName]),
                e = "weishi" === g.appName ? "\u53d1\u73b0\u66f4\u591a\u7cbe\u5f69" : g.recmdText ? g.recmdText : "\u89c2\u770b\u66f4\u591a",
                c) {
                case 1:
                    f = "\u4e0b\u8f7d",
                    this.$btn.attr("data-status", "down");
                    break;
                case 2:
                    f = "\u6b63\u5728\u4e0b\u8f7d",
                    this.$btn.attr("data-status", "downloading"),
                    b.browser.MQQClient && this.$box.addClass("tvp_promote_banner_noauto");
                    break;
                case 3:
                    f = "\u7ee7\u7eed\u4e0b\u8f7d",
                    this.$btn.attr("data-status", "pause");
                    break;
                case 4:
                    f = "\u5b89\u88c5",
                    this.$btn.attr("data-status", "install");
                    break;
                case 5:
                    f = "\u6253\u5f00",
                    this.$btn.attr("data-status", "open"),
                    this.$btn.attr("href", this.$btn.attr("data-url")),
                    this.$progress.css("width", "100%")
                }
                f += h + "\uff0c" + e,
                c > 1 && this.op.isResetWords ? this.$btnText.attr("data-text", f) : 1 === c && this.$btnText.attr("data-text", this.op.btnText)
            },
            bindTap: function() {
                function c() {
                    a.app.checkCanDownloader(d.info.hasApp, e, {
                        t: e.t,
                        downloadInstance: d,
                        downloadBox: d.$box,
                        downloadBtn: d.$btn,
                        downloadProgress: d.$progress,
                        downloaderCallback: e.downloaderCallback,
                        range: e.range,
                        appName: e.appName,
                        downloadMd5: e.md5
                    }),
                    b.each(["tvp:appdownload:downloading", "tvp:appdownload:complete", "tvp:appdownload:fail", "tvp:appdownload:pause", "tvp:appdownload:afterInstall"], function(a, c) {
                        d.$btn && b.isFunction(d.$btn.on) && d.$btn.on(c, function() {
                            e.t.$video && b.isFunction(e.t.$video.trigger) && e.t.$video.trigger(c)
                        })
                    })
                }
                var d = this
                  , e = this.op;
                return this.$btn.on(b.os.hasTouch ? "touchend" : "click", function() {
                    d.report(1),
                    d.info.hasApp ? d.stepReport(7, e) : b.os.ios && d.stepReport(2, e);
                    var c, f = a.common.recomdText[d.op.vid];
                    c = d.$text2 && 0 !== d.$text2.length ? 4 : 2,
                    "object" == typeof f && f.rmdword && f.alginfo && f.tab_id && a.bossReport.rcmdTextReport(2, f.tab_id, f.alginfo, c)
                }),
                1 == d.info.hasApp ? void a.common.bindNewMethodOnOpenAppInWeixin(d.$btn) : (a.app.bindTryOpenAppBanner && d.op && !d.op.noTryOpenApp && a.app.bindTryOpenAppBanner(d),
                b.os.android && !e.downloadUrl && (e.downloadUrl = a.app.getDownloadUrl(!1, e.appName)),
                void (b.os.android && !e.downloadPage && a.app.getAppMd5(e.promotionId, e.appName).done(function(a) {
                    a && a.md5 && (e.md5 = a.md5,
                    a.url ? e.downloadUrl = a.url : "",
                    a.url && d.$btn.attr("data-downloadurl", a.url),
                    c())
                })))
            },
            checkDoQQliveConfig: function(b) {
                var c = [a.APPID.wechatPublic];
                return c.indexOf(b) > -1 ? !0 : !1
            },
            fixTextAndUrl: function(c) {
                var e = this
                  , f = this.checkDoQQliveConfig(c.appId);
                if (!f)
                    return void e.initDefer.resolve();
                if (c.appName !== a.app.config.defaultName)
                    return void e.initDefer.resolve();
                if (c.lid || !c.vid)
                    return void e.initDefer.resolve();
                var g = "//v.qq.com/json/tvp/appbanner/index/" + c.vid.substr(0, 1) + ".js";
                g += "?time=" + (new Date).valueOf();
                var h = "//v.qq.com/json/tvp/appbanner/" + c.vid + ".js";
                h += "?time=" + (new Date).valueOf();
                var i = b.Deferred();
                b.ajax({
                    url: g,
                    dataType: "jsonp",
                    jsonpCallback: "appbannerCallback"
                }).done(function(a) {
                    var d = !1;
                    b.isArray(a) && a.indexOf && a.indexOf(c.vid) > -1 && (d = !0),
                    i.resolve(d)
                }).fail(function() {
                    i.resolve(!1)
                }),
                setTimeout(function() {
                    i.resolve(!1)
                }, 5e3),
                i.done(function(f) {
                    return f ? void b.ajax({
                        url: h,
                        dataType: "jsonp",
                        jsonpCallback: "appbannerDetailCallback"
                    }).done(function(f) {
                        if (!f)
                            return void e.initDefer.resolve();
                        if (e.initDefer.resolve(f.text2),
                        !c.pageText2 && f.text2 && (e.op.text2 = f.text2,
                        e.$text2.html(f.text2)),
                        f.text1 && f.text1.substr(0, 2) !== d.btnTexts[0] && f.text1.substr(0, 2) !== d.btnTexts[1] && (e.op.text1 = f.text1,
                        e.$text1.html(f.text1)),
                        f.type && (!c.pay || !c.cid)) {
                            var g = {
                                appName: c.appName,
                                openType: parseInt(f.type)
                            };
                            switch (g.openType) {
                            case 6:
                                g.cid = f.jumpid,
                                g.vid2 = f.vid2;
                                break;
                            case 5:
                                g.openUrl = f.url;
                                break;
                            case 4:
                                g.cid = f.jumpid,
                                g.pay = !0;
                                break;
                            case 3:
                                g.tid = f.tid;
                                break;
                            case 2:
                                g.vid = f.vid2 || c.vid;
                                break;
                            case 1:
                                g.vid = f.vid2 || c.vid
                            }
                            a.app.check(c).done(function(c) {
                                g.version = c.version;
                                var d = a.app.getOpenUrl(g);
                                d && (e.$btn.attr("data-url", d),
                                1 == c.hasApp ? e.$btn.attr("href", d) : b.os.iphone && g.pay && g.cid && e.$btn.attr("href", d))
                            })
                        }
                    }) : void e.initDefer.resolve()
                })
            }
        }),
        b.extend(b, {
            createAppBanner: function(a) {
                a.appId = a.appId || a.appid,
                !a.appId && a.t && a.t.config && (a.appId = a.t.config.appid || a.t.config.appId),
                a.promotionId = a.promotionId || 140,
                a.promotionId && (a.openUrl && (a.openUrl = a.openUrl.replace(/from=\d+/, "from=" + a.promotionId)),
                a.downloadUrl && (a.downloadUrl = a.downloadUrl.replace(/confid=\d+/, "confid=" + a.promotionId)));
                var d = b.Deferred()
                  , e = new c(a);
                return a.t && 1 == a.appBannerType && (a.t.AppBanner = e),
                e.fixResult().done(function() {
                    e.info.hasApp ? e.stepReport(6, a) : ((b.os.ios || !b.browser.WeChat && !b.browser.MQQClient || a.downloadPage) && e.stepReport(1, a),
                    b.os.android && b.browser.MQQClient && e.stepReport(1, a)),
                    d.resolve(e)
                }),
                d
            }
        })
    }(tvp, tvp.$),
    function(a, b) {
        b.extend(a.Player.fn, {
            buildAppBanner: function(c) {
                if (!a.$.browser.IEMobile && a.app && a.app.isSupportApp && !(navigator.userAgent.toLowerCase().indexOf("qqlive") > -1 || this.config.plugins && this.config.plugins.AppFollow)) {
                    var d = this
                      , e = d.$mod
                      , f = b(d.videomod)
                      , g = "mod_down_" + d.playerid;
                    d.AppBanner || (e.append('<div id="' + g + '" class="tenvideo_button" data-role="appbannerbox"></div>'),
                    f.bind("tvp:resize", function() {
                        e.find("#" + g).width(b.formatSize(c.width || d.config.width))
                    }),
                    f.trigger && f.trigger("tvp:resize"),
                    c.btnText && (c.noRecmd = !0),
                    c = b.extend(c, {
                        t: d,
                        appBannerType: 1,
                        modId: g,
                        vid: d.curVideo.getVid(),
                        appName: c.appName,
                        openId: c.openId,
                        extraApp: c.extraApp,
                        text2: c.text || c.downloadText,
                        appId: d.config.appid || d.config.appId,
                        contentId: d.config.contentId,
                        contentType: d.config.contentType || window.newsType || 0,
                        isResetWords: !0,
                        isAutoReport: !0
                    }),
                    b.createAppBanner(c))
                }
            }
        })
    }(tvp, tvp.$),
    function(a, b) {
        function c(a) {
            this.userop = a;
            var c = b.extend({}, d, a);
            return this.op = c,
            this.init(c),
            this
        }
        var d = {
            pluginName: "AppBannerOnPause",
            pauseClass: "tvp_onpause",
            downloader: !0,
            range: [1, 2],
            bannerTpl: ['<div style="z-index:10" data-role="appbannerbox" class="tvp_app_download_onpause" style="display:none">', '   <a data-status="down" data-action="applink" data-role="appbannerlink" class="tvp_download_app" href="${url}" ${iframe}>', '		<i class="tvp_icon_logo"></i>', '		<span class="tvp_download_app_wording">', '			<span data-role="appbannertext1" class="tvp_download_app_title">${text1}</span>', '			<span data-role="appbannertext2" class="tvp_download_app_desc">${text2}</span>', "		</span>", '		<span class="tvp_btn_download_btn" data-role="appbannerbox">', '			<i class="tvp_btn_progress" data-role="appbannerbtnprogress" style="width:0px"></i>', '			<span data-role="appbannerbtntext" class="tvp_btn_download_btn_text">${btnText}</span>', "		</span>", "	</a>", "</div>"].join("")
        };
        b.extend(c.prototype, {
            init: function(a) {
                var c = a.t
                  , d = this;
                this.op = b.extend(a, {
                    $mod: c.$UILayer,
                    eventType: "pause",
                    currentTime: 0,
                    pausetime: a.pausetime ? parseInt(a.pausetime) : 5
                }),
                b.when(d.getAppBanner()).done(function() {
                    d.fillBanner()
                })
            },
            fixUI: function() {},
            checkShow: function() {
                var b = this.op
                  , c = b.t
                  , d = c.$video
                  , e = d[0]
                  , f = parseInt(c.getDuration(), 10)
                  , g = parseInt(Math.max(b.currentTime, e.currentTime), 10);
                return a.debug("curTime:" + g),
                a.debug("duration:" + f),
                a.debug("op.pausetime:" + b.pausetime),
                g > b.pausetime && f - g > 5 ? !0 : !1
            },
            initEvent: function() {
                function c() {
                    var c = b.os.ios ? 400 : 30;
                    setTimeout(function() {
                        h.paused && d.checkShow() && (d.fixShow(1),
                        a.$.isFunction(d.AppBanner.rcmd_show_report) && d.AppBanner.rcmd_show_report(4))
                    }, c)
                }
                var d = this
                  , e = this.op
                  , f = e.t
                  , g = f.$video
                  , h = g[0]
                  , i = null;
                this.AppBanner.$btn.on("click", function() {
                    clearTimeout(i)
                }),
                g.on("pause paused", function() {
                    var a = f.instance && f.instance.control && f.instance.control.isTouching;
                    a || c()
                }),
                g.on("timeupdate", function() {
                    h.currentTime && (e.currentTime = h.currentTime)
                }),
                g.on("play playing", function() {
                    clearTimeout(i),
                    d.fixShow(0)
                })
            },
            fixShow: function(c) {
                a.debug("call fixShow:" + c);
                var d = this
                  , e = this.op
                  , f = e.$mod;
                if ("function" != typeof e.t.hasDurationLimit || !e.t.hasDurationLimit())
                    if (c) {
                        if (f.addClass(e.pauseClass),
                        d.AppBanner && d.AppBanner.report(0),
                        b.os.android && this.AppBanner && this.AppBanner.$btn) {
                            var g = this.AppBanner.$btn
                              , h = g.attr("href");
                            g.attr("href", "javascript:;"),
                            setTimeout(function() {
                                return a.common.isNewWX("6.5.6") ? (h && 0 == h.indexOf("tenvideo2") && g.attr("data-url", h),
                                void a.common.bindNewMethodOnOpenAppInWeixin(g)) : void g.attr("href", h)
                            }, 500)
                        }
                    } else
                        f.removeClass(e.pauseClass)
            },
            getCss: function() {
                var a = b.Deferred();
                return b.loadPluginCss(d.pluginName).done(function() {
                    a.resolve()
                }),
                a
            },
            getAppBanner: function() {
                var a = this.op.t
                  , c = a.config.libpath + a.config.pluginUrl.AppBanner
                  , d = b.Deferred();
                return b.createAppBanner ? d.resolve() : b.getScript(c, function() {
                    d.resolve()
                }),
                d
            },
            fillBanner: function() {
                var a = this
                  , c = this.op
                  , d = b.extend({}, a.userop, {
                    style: "none",
                    isAutoReport: !1,
                    reportParams: {
                        int5: 2
                    },
                    t: c.t,
                    vid: c.vid,
                    tpl: c.bannerTpl,
                    btnText: "\u4e0b\u8f7d",
                    mod: c.$mod
                });
                b.createAppBanner(d).done(function(b) {
                    a.AppBanner = b,
                    a.fixUI(),
                    a.initEvent()
                })
            }
        }),
        b.extend(b, {
            createAppBannerOnPause: function(a) {
                var d = b.Deferred()
                  , e = new c(a);
                return d.resolve(e),
                d
            }
        })
    }(tvp, tvp.$),
    function(a, b) {
        b.extend(a.Player.fn, {
            buildAppBannerOnPause: function(c) {
                if (!a.$.browser.IEMobile && !this.flashobj && (!a.app || a.app.isSupportApp) && this.$videomod && !(navigator.userAgent.toLowerCase().indexOf("qqlive") > -1) && this.config.isHtml5UseUI) {
                    var d = this
                      , e = b.extend({}, c || {}, {
                        t: d,
                        vid: d.curVideo.getVid(),
                        lid: d.curVideo.getChannelId()
                    });
                    b.createAppBannerOnPause(e)
                }
            }
        })
    }(tvp, tvp.$),
    function(a) {
        tvp.modeHide = function(b, c) {
            function d() {
                o.off("click.tvp_mode_hide").on("click.tvp_mode_hide", function() {
                    var b;
                    if (i = n.getPlayer(),
                    b = i ? a(i).attr("src") : n.$mod.find("a").attr("href")) {
                        if (!tvp.common.isSupportMP4() && !tvp.common.isUseHtml5())
                            return void (window.location.href = b);
                        l.show(),
                        setTimeout(function() {
                            m.isend ? (m.isend = !1,
                            n.play()) : i.play(),
                            f(),
                            setTimeout(function() {
                                i.play()
                            }, 100),
                            e()
                        }, 5)
                    }
                })
            }
            function e() {
                m.isInit || (m.isInit = !0,
                a(i).on("ended", function() {
                    n.cancelFullScreen()
                }).on("playing", function() {
                    document.webkitIsFullScreen || i.webkitDisplayingFullscreen || k
                }).on("webkitendfullscreen", function() {
                    g()
                }),
                a(document).on("webkitfullscreenchange fullscreenchange", function() {
                    g()
                }))
            }
            function f() {
                h() ? n.enterFullScreen() : i.webkitEnterFullscreen()
            }
            function g() {
                i && (document.webkitIsFullScreen || i.webkitDisplayingFullscreen || k || n.isFakeFullscreen && n.isFakeFullscreen() || (i.pause(),
                l.hide()))
            }
            function h() {
                return tvp.$.os.android ? tvp.$.browser.MQQ ? !1 : tvp.$.compareVersion(tvp.$.os.version, "4.4") > -1 ? !1 : !0 : !1
            }
            var i, j, k, l = a("#" + c.modId), m = new tvp.VideoInfo, n = new tvp.Player, o = a(b.btn);
            j = {
                width: "100%",
                height: window.innerHeight,
                video: m,
                modId: c.modId,
                isHtml5UseUI: !0,
                isHtml5UseFakeFullScreen: h(),
                isiPhoneShowPlaysinline: !1,
                onwrite: function() {
                    d()
                },
                onfullscreen: function(a) {
                    a = k,
                    k || g()
                }
            },
            a.extend(j, c),
            c.type = c.type || 2,
            1 === c.type ? (j.type = 1,
            m.setChannelId(c.lid)) : (j.type = 2,
            m.setVid(c.vid)),
            n.create(j)
        }
    }(tvp.$),
    tvp.filename = "tvp.player_v2_mobile.js",
    "function" == typeof define && define("tvp", [], function() {
        return tvp
    }),
    a.tvp = tvp,
    "undefined" != typeof QQLive && (a.QQLive = QQLive)
}(this);
