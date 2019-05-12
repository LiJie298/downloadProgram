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
        i = function() {
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
 function getVideoUrl(d, f) {
        f = f || "";
        var g, h, i, j = "", k = 1, l = {};
        if ("object" == typeof e && "function" == typeof e.$xx && "string" == typeof d) {
            g = getUrlParam("platform", d),
            h = getUrlParam("vids", d),
            h || (h = getUrlParam("vid", d)),
//            i = c(),
            i ="v1010",
            l = e.$xx(g, h, i, k, f);
            l &&
            (j = j + "&_qv_rmt=" + l.u1,
             j = j + "&_qv_rmt2=" + l.u2,("sdtfrom", d) || (j = j + "&sdtfrom=" + i),
             d = d + (-1 == d.indexOf("?") ? "?" : "&") + j
            );
        }
        return d
}

function getUrlParam (a, b) {
    b = b || document.location.toString();
    var c = new RegExp("(^|&|\\\\?)" + a + "=([^&]*)(&|$|#)")
      , d = null;
    return d = b.match(c), d ? d[2] : ""
}

//function c() {
//    var a = "view.inews.qq.com" === k.host;
//    return location.hostname.indexOf("caixin.com") > -1 ? "v1093" : b.os.iphone || b.os.ipod ? a ? "v3110" : "v3010" : b.os.ipad ? a ? "v4110" : "v4010" : b.os.android ? b.os.tablet ? "v6010" : a ? "v5110" : "v5010" : b.browser.IEMobile ? "v7010" : "v1010"
//}