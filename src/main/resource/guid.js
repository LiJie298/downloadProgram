/*! Txplayer - v3.0.0 - 2019-05-10 14:25:19
 * Copyright (c) 2019
 * Powered by Tencent-Video Web Front End Team 
*/
!function(a) {
    function b(d) {
        if (c[d])
            return c[d].exports;
        var e = c[d] = {
            exports: {},
            id: d,
            loaded: !1
        };
        return a[d].call(e.exports, e, e.exports, b),
        e.loaded = !0,
        e.exports
    }
    var c = {};
    return b.m = a,
    b.c = c,
    b.p = "",
    b(0)
}({
    0: function(a, b, c) {
        a.exports = c(177)
    },
    177: function(a, b, c) {
        function d(a) {
            e = Txplayer.$,
            this.dataset = {},
            this.context = a,
            this.init()
        }
        var e = Txplayer.$
          , f = Txplayer.util
          , g = c(178)
          , h = c(179);
        d.prototype = {
            init: function() {
                this.dataset.timeInterval = 1,
                this.dataset.reportTimesLimit = 3,
                this.dataset.dlSpeed = [],
                this.resetConsole(),
                this.write(),
                this.addEventListerner(),
                this.moduleExportApis()
            },
            resetConsole: function() {
                this.dataset.consoleData = {
                    flow: []
                },
                this.dataset.reportTimes = null,
                this.dataset.dlSpeed = [],
                this.dataset.hasCallStopP2P = !1
            },
            write: function() {
                var a = {
                    console: "txp-ui-console",
                    vid: "txp-ui-console-vid",
                    volume: "txp-ui-console-volume",
                    bufferPercent: "txp-ui-console-buf-per",
                    bufferSeconds: "txp-ui-console-buf-seconds",
                    droppedFrames: "txp-ui-console-dropped-frames",
                    errorCode: "txp-ui-console-errorcode",
                    close: "txp-ui-console-close",
                    videoSize: "txp-ui-console-videoSize",
                    downloadSpeed: "txp-ui-console-downloadspeed",
                    downloadSpeedChart: "txp-ui-console-downloadspeed-chart",
                    cdn: "txp-ui-console-cdn",
                    protocol: "txp-ui-console-protocol",
                    report: "txp-ui-console-report",
                    errorCodeWrap: "txp-ui-console-errorcode-wrap",
                    flowIdRole: "txp-ui-console-flowid",
                    playerTypeMode: "txp-ui-console-playertype-mode",
                    localLog: "txp-ui-console-local-log",
                    drmFlag: "txp-ui-drm-flag",
                    vidStr: this.context.dataset.vid,
                    playerType: this.context.config.playerType,
                    errcodeVal: this.dataset.errorcode,
                    resolution: screen.width + " x " + screen.height,
                    videoSizeStr: this.context.dataset.videoWidth ? [this.context.dataset.videoWidth, " x ", this.context.dataset.videoHeight].join("") : "",
                    volumeStr: this.context.dataset.volume + "%",
                    version: Txplayer.dataset.ver + "-" + Txplayer.appVersion + " (" + Txplayer.dataset.lastModify + ")",
                    flowId: this.context.dataset.flowid
                };
                this.dataset.renderData = a;
                var b = e.tmpl(g, a)
                  , c = this.context.dataset.$playermod;
                c.append(b),
                this.dataset.$console = c.find('[data-role="' + a.console + '"]'),
                this.dataset.$vid = c.find('[data-role="' + a.vid + '"]'),
                this.dataset.$volume = c.find('[data-role="' + a.volume + '"]'),
                this.dataset.$close = c.find('[data-role="' + a.close + '"]'),
                this.dataset.$bufferPercent = c.find('[data-role="' + a.bufferPercent + '"]'),
                this.dataset.$bufferSeconds = c.find('[data-role="' + a.bufferSeconds + '"]'),
                this.dataset.$errorCode = c.find('[data-role="' + a.errorCode + '"]'),
                this.dataset.$videoSize = c.find('[data-role="' + a.videoSize + '"]'),
                this.dataset.$downloadSpeed = c.find('[data-role="' + a.downloadSpeed + '"]'),
                this.dataset.$downloadSpeedChart = c.find('[data-role="' + a.downloadSpeedChart + '"]'),
                this.dataset.$cdn = c.find('[data-role="' + a.cdn + '"]'),
                this.dataset.$protocol = c.find('[data-role="' + a.protocol + '"]'),
                this.dataset.$report = c.find('[data-role="' + a.report + '"]'),
                this.dataset.$errorCodeWrap = c.find('[data-role="' + a.errorCodeWrap + '"]'),
                this.dataset.$flowIdRole = c.find('[data-role="' + a.flowIdRole + '"]'),
                this.dataset.$playerTypeMode = c.find('[data-role="' + a.playerTypeMode + '"]'),
                this.dataset.$droppedFrames = c.find('[data-role="' + a.droppedFrames + '"]'),
                this.dataset.$localLog = c.find('[data-role="' + a.localLog + '"]'),
                this.dataset.$drmFlag = c.find('[data-role="' + a.drmFlag + '"]'),
                window._txplayerlocalLogs && window.downloadTxplayerLog && this.dataset.$localLog.removeClass("txp_none"),
                this.dataset.$video = c.find("video")
            },
            remove: function() {
                this.dataset.$console.remove()
            },
            hide: function() {
                this.context.dataset.disableCalcDownloadSpeed = !0,
                this.dataset.$console.addClass(Txplayer.dataset.hideClass),
                this.stop()
            },
            show: function() {
                this.context.dataset.disableCalcDownloadSpeed = !1,
                this.isShowing() || (this.dataset.$console.removeClass(Txplayer.dataset.hideClass),
                this.start(),
                this.updateShowErrorCode())
            },
            updateShowErrorCode: function() {
                this.dataset.errorcode ? (this.dataset.$errorCodeWrap.removeClass(Txplayer.dataset.hideClass),
                this.dataset.$errorCode.html(this.dataset.errorcode)) : (this.dataset.$errorCodeWrap.addClass(Txplayer.dataset.hideClass),
                this.dataset.$errorCode.html(""))
            },
            isShowing: function() {
                return !this.dataset.$console.hasClass(Txplayer.dataset.hideClass)
            },
            getSpeedStart: function() {
                if (!this.dataset.timer) {
                    var a = this;
                    this.dataset.timer = setInterval(function() {
                        a.updateDownloadSpeedValue(a.context.dataset.videoDownloadSpeed),
                        a.updateDownloadSpeendChart(a.context.dataset.videoDownloadSpeed)
                    }, 1e3)
                }
            },
            getSpeedStop: function() {
                this.dataset.timer && (clearInterval(this.dataset.timer),
                this.dataset.timer = null)
            },
            start: function() {
                this.dataset.isConsoleShow = !0,
                this.getSpeedStart()
            },
            stop: function() {
                this.dataset.isConsoleShow = !1,
                this.getSpeedStop()
            },
            updateDownloadSpeedValue: function(a) {
                this.dataset.$downloadSpeed.html(f.formatDownloadSpeed(a))
            },
            animate: function(a, b) {
                a && ("function" === e.type(a.animate) ? a.animate(b) : a.css(b))
            },
            collectConsoleData: function() {
                this.dataset.consoleData.vid = this.context.dataset.vid,
                this.dataset.consoleData.cid = this.context.dataset.cid,
                this.dataset.consoleData.now = f.dateFormat(),
                this.dataset.consoleData.defn = this.context.dataset.definition,
                this.dataset.consoleData.uid = this.context.config.guid,
                this.dataset.consoleData.pid = this.context.config.playerId,
                this.dataset.errorcode && (this.dataset.consoleData.errorcode = this.dataset.errorcode),
                this.getPlayerData(),
                this.report()
            },
            updateBuffer: function() {
                if (this.dataset.isConsoleShow) {
                    this.context.dataset.disableCalcDownloadSpeed = !1;
                    var a, b, c = 180;
                    b = this.context.dataset.bufferHealth ? this.context.dataset.bufferHealth : 0,
                    b < 0 || (this.dataset.$bufferSeconds.html(b + "s"),
                    a = b >= c ? "100%" : parseInt(b / c * 100) + "%",
                    this.animate(this.dataset.$bufferPercent, {
                        width: a
                    }))
                }
            },
            updateDroppedFrames: function() {
                try {
                    var a = this.getFocusVideoTag();
                    if (a) {
                        var b = 0
                          , c = 0
                          , d = 0
                          , e = 0;
                        if ("function" == typeof a.getVideoPlaybackQuality) {
                            var f = a.getVideoPlaybackQuality();
                            d = b = f.totalVideoFrames,
                            c = f.droppedVideoFrames
                        } else
                            "undefined" != typeof a.webkitDroppedFrameCount && "undefined" != typeof a.webkitDecodedFrameCount && (b = a.webkitDecodedFrameCount,
                            c = a.webkitDroppedFrameCount,
                            d = b + c);
                        b > 0 && (e = (c / d * 100).toFixed(2),
                        this.dataset.isConsoleShow && this.dataset.$droppedFrames.html(c + "/" + b + "; " + e + "%"),
                        "chromehls" === this.context.config.playerType && (e > 3 && !this.dataset.hasCallStopP2P && (this.dataset.hasCallStopP2P = !0,
                        this.context.msg.broadcast("stopP2P")),
                        this.context.dataset.currentTime % 5 === 0 && this.context.msg.broadcast("setChromeHlsData", {
                            k: "videoDropFrameRateChange",
                            v: {
                                dropFrameCount: c,
                                totalFrameCount: d
                            }
                        })),
                        e > 1 && Txplayer.util.localLog("DROP_FRAME_ERROR", {
                            percent: c / d * 100,
                            dropped: c,
                            decodedCount: b
                        }))
                    }
                } catch (g) {}
            },
            getFocusVideoTag: function() {
                var a;
                return this.dataset.$video && this.dataset.$video.length > 0 && this.dataset.$video.each(function(b, c) {
                    if (c.isFocus)
                        return a = c,
                        !1
                }),
                a
            },
            getPlayerData: function(a) {
                a = a || {};
                var b = this
                  , c = {
                    pid: b.context.dataset.playerId,
                    url: encodeURIComponent(f.getPlayerPageUrl()),
                    vid: b.context.dataset.vid,
                    version: Txplayer.dataset.ver,
                    platform: b.context.dataset.platform,
                    playtype: "",
                    emsg2: "",
                    id: a.id || "",
                    action: "//btrace.qq.com/kvcollect?BossId=4372&Pwd=967411786",
                    getinfo: encodeURIComponent(b.dataset.getinfoURL),
                    getkey: encodeURIComponent(b.dataset.getkeyURL || "") || "",
                    uin: f.getQQFromCookie(),
                    ua: f.getReportUA(),
                    refer: f.getTopFrameUrl(),
                    pvid: f.cookie.get("pgv_pvid"),
                    sessionid: f.cookie.get("psessionid"),
                    main_login: f.cookie.get("main_login"),
                    vuserid: f.cookie.get("vuserid"),
                    openid: f.cookie.get("openid"),
                    appid: f.cookie.get("appid")
                };
                return b.context.dataset.useHls ? c.playtype = 1 : c.playtype = 3,
                c.vurl = encodeURIComponent(b.context.dataset.currentVideoUrl),
                window.JSON && JSON.stringify && (c.emsg2 = JSON.stringify(b.dataset.consoleData),
                c.emsg2 = encodeURIComponent(c.emsg2)),
                this.dataset.reportData = c,
                c
            },
            getConsoleData: function() {
                var a = this.getPlayerData();
                return a.vid = this.context.dataset.vid,
                a.cid = this.context.dataset.cid,
                a.now = f.dateFormat(),
                a.defn = this.context.dataset.definition,
                a.uid = this.context.config.guid,
                a.pid = this.context.config.playerId,
                this.dataset.errorcode && (a.errorcode = this.dataset.errorcode),
                a
            },
            report: function() {
                function a() {
                    var a = "txp-console-report-form";
                    e("#" + a).remove();
                    var b = c.getPlayerData({
                        id: a
                    })
                      , d = e.tmpl(h, b);
                    e(document.body).append(d);
                    var f = e("#" + a);
                    f.ajaxForm({
                        type: "post",
                        iframe: !0,
                        resetForm: !0,
                        clearForm: !0
                    }),
                    f.submit(),
                    c.context.msg.broadcast("showConsoleReportTips")
                }
                if (!(this.dataset.reportTimes >= this.dataset.reportTimesLimit)) {
                    var b = "//vm.gtimg.cn/tencentvideo/txp/js/jquery.form.min.js?t=" + Txplayer.dataset.ts
                      , c = this;
                    this.dataset.reportTimes || (this.dataset.reportTimes = 0),
                    this.dataset.reportTimes++,
                    e().ajaxForm ? a() : f.loadScript({
                        url: b,
                        onsuccess: function() {
                            a()
                        }
                    })
                }
            },
            updateDownloadSpeendChartWithDiv: function(a) {
                var b;
                b = a > 1024 ? "100%" : (a / 10.24).toFixed(0) + "%";
                var c = '<txpdiv class="txp_box_value" style="width:0.5%;height:{per}"></txpdiv>';
                c = c.replace("{per}", b),
                this.dataset.$downloadSpeedChart.append(c);
                var d, f, g = 175;
                f = this.dataset.$downloadSpeedChart.find(".txp_box_value"),
                d = f.length,
                d > g && f.each(function(a, b) {
                    a < d - g && e(b).remove()
                })
            },
            updateDownloadSpeendChart: function(a) {
                if ("boolean" == typeof this.dataset.supportCanvas && !this.dataset.supportCanvas)
                    return this.updateDownloadSpeendChartWithDiv(a);
                var b = this;
                if (this.dataset.speedQueue || (this.dataset.speedQueue = []),
                !this.dataset.speedCharContext) {
                    this.dataset.$downloadSpeedChart.append('<canvas width="180" height="14"></canvas>');
                    var c = this.dataset.$downloadSpeedChart.find("canvas")[0];
                    if (!c || "function" != typeof c.getContext)
                        return this.dataset.supportCanvas = !1,
                        this.updateDownloadSpeendChartWithDiv(a);
                    var d = c.getContext("2d");
                    this.dataset.speedCharContext = d
                }
                this.dataset.speedQueue.push(a),
                this.dataset.speedQueue.length > 90 && this.dataset.speedQueue.shift(),
                this.dataset.speedCharContext.clearRect(0, 0, 180, 14),
                this.dataset.speedQueue.forEach(function(a, c) {
                    var d = Math.floor(a / 200);
                    d = Math.min(14, d),
                    d = Math.max(2, d),
                    d > 5 && d < 10 ? b.dataset.speedCharContext.fillStyle = "#03a9f4" : d >= 10 && d <= 14 ? b.dataset.speedCharContext.fillStyle = "#ff6428" : b.dataset.speedCharContext.fillStyle = "#009688",
                    b.dataset.speedCharContext.fillRect(2 * c, 14, 2, -14)
                })
            },
            updatePlayerType: function() {
                var a = "";
                a = this.context.dataset.useChromeHls ? "chromehls" : this.context.config.playerType,
                this.dataset.$playerTypeMode.html(a)
            },
            updateDrmFlag: function() {
                this.context.dataset.emeEnabled ? this.dataset.$drmFlag.find("._drm_flag_value").text("true") : this.dataset.$drmFlag.find("._drm_flag_value").text("false")
            },
            addEventListerner: function() {
                var a = this;
                this.dataset.eventsList = {},
                this.dataset.eventsList[f.getUniqueMsgKey("vidChange")] = function() {
                    a.dataset.hasCallStopP2P = !1,
                    a.dataset.$vid.html(a.context.dataset.vid),
                    a.dataset.$flowIdRole.html(a.context.dataset.flowid),
                    a.resetConsole(),
                    a.updateDrmFlag()
                }
                ,
                this.dataset.eventsList[f.getUniqueMsgKey("volumeChange")] = function(b) {
                    a.dataset.$volume.html(a.context.dataset.volume + "%")
                }
                ,
                this.dataset.eventsList[f.getUniqueMsgKey("getVideoUrlSuccess")] = function(b) {
                    var c = a.context.dataset.videoWidth ? [a.context.dataset.videoWidth, " x ", a.context.dataset.videoHeight].join("") : "";
                    c && a.dataset.$videoSize.html(c),
                    b && (a.dataset.$cdn.html(f.getDomainOfURL(b)),
                    a.dataset.$protocol.html(f.getProtocolOfURL(b)))
                }
                ,
                this.dataset.eventsList[f.getUniqueMsgKey("setFocusVideoUrl")] = function(b) {
                    b && b.url && a.dataset.$cdn.html(f.getDomainOfURL(b.url))
                }
                ,
                this.dataset.eventsList[f.getUniqueMsgKey("getinfoFinish")] = function(b) {
                    a.dataset.getinfoURL = b.getinfoURL,
                    b.err ? a.dataset.consoleData.flow.push(+new Date + " getinfo err " + b.costTime + " " + ["code=" + (b.code || 0), "exem=" + (b.exem || 0)].join(" ")) : a.dataset.consoleData.flow.push(+new Date + " getinfo ok " + b.costTime)
                }
                ,
                this.dataset.eventsList[f.getUniqueMsgKey("getkeyFinish")] = function(b) {
                    a.dataset.getkeyURL = b.getkeyURL,
                    b.err ? a.dataset.consoleData.flow.push(+new Date + " getkey err " + b.costTime + " " + ["code=" + (b.code || 0), "exem=" + (b.exem || 0), "msg=" + b.err].join(" ")) : a.dataset.consoleData.flow.push(+new Date + " getkey ok " + b.costTime)
                }
                ,
                this.dataset.eventsList[f.getUniqueMsgKey("error")] = function(b) {
                    b && b.type && e.inArray(b.type, ["loadingad", "insertad", "endingad"]) > -1 && a.dataset.consoleData.flow.push([+new Date, b.type, b.index, "err"].join(" ")),
                    b && (b.code || b.errCode) && (a.dataset.errorcode = b.errCode || b.code,
                    a.updateShowErrorCode())
                }
                ,
                this.dataset.eventsList[f.getUniqueMsgKey("reportVideoError")] = function(b) {
                    a.dataset.consoleData.flow.push([+new Date, b.type, b.index, "err", b.code, "ctime", a.context.dataset.currentTime || 0, a.context.dataset.videoCurrentTime || 0].join(" ")),
                    b && b.code && (a.dataset.errorcode = b.code,
                    a.updateShowErrorCode())
                }
                ,
                this.dataset.eventsList[f.getUniqueMsgKey("videoEnd")] = function(b) {
                    b && b.playListType && "videoEvent" === b.from && a.dataset.consoleData.flow.push([+new Date, b.playListType, b.index, "played"].join(" "))
                }
                ,
                this.dataset.eventsList[f.getUniqueMsgKey("loadingAdDataReady")] = function(b) {
                    a.dataset.consoleData.flow.push([+new Date, "loadingad data", b && b.length || 0].join(" "))
                }
                ,
                this.dataset.eventsList[f.getUniqueMsgKey("insertAdDataReady")] = function(b) {
                    a.dataset.consoleData.flow.push([+new Date, "insertad data", b && b.data && b.data.length || 0].join(" "))
                }
                ,
                this.dataset.eventsList[f.getUniqueMsgKey("endingAdDataReady")] = function(b) {
                    a.dataset.consoleData.flow.push([+new Date, "endingad data", b && b.length || 0].join(" "))
                }
                ,
                this.dataset.eventsList[f.getUniqueMsgKey("loadingadIsEmpty")] = function() {
                    a.dataset.consoleData.flow.push([+new Date, "loadingad data 0"].join(" "))
                }
                ,
                this.dataset.eventsList[f.getUniqueMsgKey("loadingAdRequestError")] = function(b) {
                    a.dataset.consoleData.flow.push([+new Date, "loadingad cgi err", b && b.code || 0].join(" "))
                }
                ,
                this.dataset.eventsList[f.getUniqueMsgKey("videoTimeUpdate")] = function(b) {
                    a.updateBuffer(),
                    a.updateDroppedFrames()
                }
                ,
                this.dataset.eventsList[f.getUniqueMsgKey("videoPlay")] = function(b) {
                    a.updateBuffer(),
                    a.updatePlayerType(),
                    a.updateDroppedFrames(),
                    a.updateDrmFlag()
                }
                ,
                this.dataset.eventsList[f.getUniqueMsgKey("videoPlaying")] = function(b) {
                    a.dataset.errorcode = null,
                    a.updateShowErrorCode(),
                    a.updateDrmFlag()
                }
                ,
                this.dataset.eventsList[f.getUniqueMsgKey("chromehlsErrorSwitchToHtml5hd")] = function(b) {
                    setTimeout(function() {
                        a.updatePlayerType(),
                        a.updateDrmFlag()
                    }, 100)
                }
                ,
                e.each(this.dataset.eventsList, function(b, c) {
                    a.context.msg.on(b, c)
                }),
                this.dataset.$close.on("click", function() {
                    a.hide()
                }),
                this.dataset.$localLog.on("click", "._download_txp_local_log", function() {
                    window._txplayerlocalLogs && window.downloadTxplayerLog && window.downloadTxplayerLog()
                }),
                this.dataset.$localLog.on("click", "._delete_txp_local_log", function() {
                    window._txplayerlocalLogs && window.clearTxplayerLog && window.clearTxplayerLog()
                }),
                this.dataset.$report.on("dblclick", function() {
                    a.context.msg.broadcast("reportChromeHlsLog"),
                    "function" === e.type(document.execCommand) && (a.collectConsoleData(),
                    document.execCommand("copy"))
                }).on("copy", function(b) {
                    b.preventDefault();
                    var c = "";
                    a.dataset.reportData && (window.JSON && JSON.stringify && (c = JSON.stringify(a.dataset.reportData)),
                    b.clipboardData ? b.clipboardData.setData("text/plain", c) : b.originalEvent && b.originalEvent.clipboardData ? b.originalEvent.clipboardData.setData("text/plain", c) : window.clipboardData && window.clipboardData.setData("Text", c))
                })
            },
            moduleExportApis: function() {
                var a = this;
                this.dataset.privateApis = {},
                this.dataset.privateApis.showUiConsole = this.show.bind(this),
                e.each(this.dataset.privateApis, function(b, c) {
                    a.context.msg.on(b, c)
                }),
                this.dataset.dataApis = {},
                this.dataset.dataApis.getConsoleData = function(b, c) {
                    c.data = a.getConsoleData()
                }
                ,
                e.each(this.dataset.dataApis, function(b, c) {
                    a.context.msg.setData(b, c)
                })
            }
        },
        Txplayer.register("UiConsole", d)
    },
    178: function(a, b) {
        a.exports = '<txpdiv data-role="<%=console%>" class="txp_console <%=Txplayer.dataset.hideClass%>">\r\n  <txpdiv class="txp_console_inner">\r\n    <button data-role="<%=close%>" class="txp_btn_close" title="\u5173\u95ed"></button>\r\n    <txpdiv data-role="<%=report%>" class="txp_line" title="\u53cc\u51fb\u53d1\u9001\u9519\u8bef\u4fe1\u606f" style="cursor: pointer;">\r\n      <txpdiv class="txp_label">VID</txpdiv><txpdiv data-role="<%=vid%>" class="txp_value"><%=vidStr%></txpdiv>\r\n    </txpdiv>\r\n    <txpdiv class="txp_line">\r\n      <txpdiv class="txp_label">\u64ad\u653e\u6a21\u5f0f</txpdiv><txpdiv data-role="<%=playerTypeMode%>" class="txp_value"><%=playerType%></txpdiv>\r\n    </txpdiv>\r\n    <txpdiv class="txp_line">\r\n      <txpdiv class="txp_label">\u5206\u8fa8\u7387</txpdiv><txpdiv class="txp_value"><%=resolution%></txpdiv>\r\n    </txpdiv>\r\n    <txpdiv class="txp_line">\r\n      <txpdiv class="txp_label">\u89c6\u9891\u5bbd\u9ad8</txpdiv><txpdiv data-role="<%=videoSize%>" class="txp_value"><%=videoSizeStr%></txpdiv>\r\n    </txpdiv>\r\n    <txpdiv class="txp_line">\r\n      <txpdiv class="txp_label">\u97f3\u91cf</txpdiv><txpdiv data-role="<%=volume%>" class="txp_value"><%=volumeStr%></txpdiv>\r\n    </txpdiv>\r\n    <txpdiv class="txp_line">\r\n      <txpdiv class="txp_label">\u89c6\u9891\u534f\u8bae</txpdiv><txpdiv data-role="<%=protocol%>" class="txp_value"></txpdiv>\r\n    </txpdiv>\r\n    <txpdiv class="txp_line">\r\n      <txpdiv class="txp_label">CDN</txpdiv><txpdiv data-role="<%=cdn%>" class="txp_value" style="font-size: 10px;"></txpdiv>\r\n    </txpdiv>\r\n    <txpdiv class="txp_line">\r\n      <txpdiv class="txp_label">\u4e0b\u8f7d\u901f\u5ea6</txpdiv><txpdiv class="txp_value">\r\n        <txpdiv data-role="<%=downloadSpeedChart%>" class="txp_box_progress"></txpdiv>\r\n        <span data-role="<%=downloadSpeed%>"></span>\r\n      </txpdiv>\r\n    </txpdiv>\r\n    <txpdiv class="txp_line">\r\n      <txpdiv class="txp_label">\u7f13\u51b2\u8d28\u91cf</txpdiv><txpdiv class="txp_value">\r\n        <txpdiv class="txp_box_progress">\r\n          <txpdiv data-role="<%=bufferPercent%>" class="txp_box_value" style="width:0%"></txpdiv>\r\n        </txpdiv>\r\n        <span data-role="<%=bufferSeconds%>"></span>\r\n      </txpdiv>\r\n    </txpdiv>\r\n    <txpdiv class="txp_line">\r\n      <txpdiv class="txp_label">\u5e27\u6570</txpdiv><txpdiv data-role="<%=droppedFrames%>" class="txp_value"></txpdiv>\r\n    </txpdiv>\r\n    <txpdiv data-role="<%=errorCodeWrap%>" class="txp_line">\r\n      <txpdiv class="txp_label">\u9519\u8bef\u7801</txpdiv>\r\n      <txpdiv data-role="<%=errorCode%>" class="txp_value"><%=errcodeVal%></txpdiv>\r\n    </txpdiv>\r\n    <txpdiv class="txp_line">\r\n      <txpdiv class="txp_label">\u7248\u672c\u53f7</txpdiv>\r\n      <txpdiv class="txp_value"><%=version%></txpdiv>\r\n    </txpdiv>\r\n    <txpdiv class="txp_line">\r\n      <txpdiv class="txp_label">\u64ad\u653e\u6d41\u6c34</txpdiv>\r\n      <txpdiv data-role="<%=flowIdRole%>" class="txp_value"><%=flowId%></txpdiv>\r\n    </txpdiv>\r\n    <txpdiv class="txp_line" data-role="<%=drmFlag%>">\r\n      <txpdiv class="txp_label">drm</txpdiv>\r\n      <txpdiv class="txp_value _drm_flag_value">false</txpdiv>\r\n    </txpdiv>\r\n    <txpdiv class="txp_line txp_none" data-role="<%=localLog%>">\r\n      <txpdiv class="txp_label">\u672c\u5730\u65e5\u5fd7</txpdiv>\r\n      <txpdiv class="txp_value">\r\n        <span style="cursor: pointer;" class="_download_txp_local_log">\u70b9\u51fb\u4e0b\u8f7d</span> / \r\n        <span style="cursor: pointer;" class="_delete_txp_local_log">\u70b9\u51fb\u6e05\u9664</span>\r\n      </txpdiv>\r\n    </txpdiv>\r\n  </txpdiv>\r\n</txpdiv>'
    },
    179: function(a, b) {
        a.exports = '<form id="<%=id%>" action="<%=action%>" method="post" class2="<%=Txplayer.dataset.hideClass%>" enctype="application/x-www-form-urlencoded">\r\n  <input type="hidden" name="pid" value="<%=pid%>" />\r\n  <input type="hidden" name="url" value="<%=url%>" />\r\n  <input type="hidden" name="vid" value="<%=vid%>" />\r\n  <input type="hidden" name="version" value="<%=version%>" />\r\n  <input type="hidden" name="platform" value="<%=platform%>" />\r\n  <input type="hidden" name="playtype" value="<%=playtype%>" />\r\n  <input type="hidden" name="emsg2" value="<%=emsg2%>" />\r\n  <input type="hidden" name="vurl" value="<%=vurl%>" />\r\n  <input type="hidden" name="getinfo" value="<%=getinfo%>" />\r\n  <input type="hidden" name="getkey" value="<%=getkey%>" />\r\n  <input type="hidden" name="encv" value="0" />\r\n  <input type="hidden" name="hc_uin" value="<%=uin%>" />\r\n  <input type="hidden" name="hc_ua" value="<%=ua%>" />\r\n  <input type="hidden" name="hh_ref" value="<%=refer%>" />\r\n  <input type="hidden" name="hc_pvid" value="<%=pvid%>" />\r\n  <input type="hidden" name="hc_ssid" value="<%=sessionid%>" />\r\n  <input type="hidden" name="hc_main_login" value="<%=main_login%>" />\r\n  <input type="hidden" name="hc_vuserid" value="<%=vuserid%>" />\r\n  <input type="hidden" name="hc_openid" value="<%=openid%>" />\r\n  <input type="hidden" name="hc_appid" value="<%=appid%>" />\r\n</form>'
    }
});
/*! Txplayer - v3.0.0 - 2019-05-10 14:25:19
 * Copyright (c) 2019
 * Powered by Tencent-Video Web Front End Team 
*/
!function(a) {
    function b(d) {
        if (c[d])
            return c[d].exports;
        var e = c[d] = {
            exports: {},
            id: d,
            loaded: !1
        };
        return a[d].call(e.exports, e, e.exports, b),
        e.loaded = !0,
        e.exports
    }
    var c = {};
    return b.m = a,
    b.c = c,
    b.p = "",
    b(0)
}({
    0: function(a, b, c) {
        a.exports = c(270)
    },
    270: function(a, b, c) {
        function d(a) {
            e = Txplayer.$,
            this.dataset = {},
            this.context = a,
            this.init()
        }
        var e = Txplayer.$
          , f = Txplayer.util
          , g = c(271);
        d.prototype = {
            init: function() {
                this.write(),
                this.addEventListerner(),
                this.exportsModuleApis(),
                this.dataset.errorCount = 0,
                this.dataset.defaultImg = "//i.gtimg.cn/qqlive/images/20170222/qing_224_70.png",
                this.dataset.$video = this.context.dataset.$videomod.find("video")
            },
            write: function() {
                var a = {
                    hideClass: Txplayer.dataset.hideClass,
                    watermarkMod: "txp-ui-watermark-mod"
                }
                  , b = e.tmpl(g, a);
                this.context.dataset.$playermod.append(b),
                this.dataset.$watermarkMod = this.context.dataset.$playermod.find('[data-role="' + a.watermarkMod + '"]')
            },
            remove: function() {
                this.dataset.$watermarkMod.remove()
            },
            showWaterMarks: function() {
                this.context.dataset.isPlayingAd || 0 != this.context.dataset.buildWaterMarkActionFail && this.dataset.$watermarkMod.removeClass(Txplayer.dataset.hideClass)
            },
            hideWaterMarks: function() {
                this.dataset.$watermarkMod.addClass(Txplayer.dataset.hideClass)
            },
            changeCss: function(a, b, c) {
                var d = this
                  , e = 0
                  , f = 0;
                c = c ? c / 100 : d.context.dataset.currentPercent / 100 || 1;
                var g, h;
                1 == c && (d.dataset.sca = this.dataset.$video.width() / d.dataset.vw > this.dataset.$video.height() / d.dataset.vh ? this.dataset.$video.height() / d.dataset.vh : this.dataset.$video.width() / d.dataset.vw),
                g = d.dataset.vw * d.dataset.sca * c,
                h = d.dataset.vh * d.dataset.sca * c,
                e = (this.context.dataset.$playermod.width() - g) / 2,
                f = (this.context.dataset.$playermod.height() - h) / 2,
                e < 0 && (e = 0),
                f < 0 && (f = 0);
                var i = parseInt(b.w * d.dataset.sca * c)
                  , j = parseInt(b.h * d.dataset.sca * c)
                  , k = parseInt(e + g - i - b.x / d.dataset.vw * g)
                  , l = parseInt(f + b.y / d.dataset.vh * h);
                (k < e || k > e + g - i || l < f || l > f + h - j) && a.hide(),
                a.css({
                    width: i,
                    height: j,
                    left: k,
                    top: l
                })
            },
            getWaterMarkInfos: function() {
                if (f.browser.pcqqlive && f.browser.chrome && f.compareVersion(f.browser.chrome.version, "30.0") < 1)
                    return [];
                var a = this.context.dataset.getinfoJSON;
                return a && a.vl && a.vl.vi && "object" === e.type(a.vl.vi[0]) && (this.dataset.vw = a.vl.vi[0].vw,
                this.dataset.vh = a.vl.vi[0].vh,
                a.vl.vi[0].wl && a.vl.vi[0].wl.wi && "array" === e.type(a.vl.vi[0].wl.wi)) ? a.vl.vi[0].wl.wi : []
            },
            buildWaterMarks: function(a) {
                var b = this;
                b.dataset.$watermarkMod.children().remove(),
                b.dataset.watermarkInfos = b.getWaterMarkInfos(),
                b.dataset.watermarkInfos.length < 1 || (b.dataset.errorCount = 0,
                e.each(b.dataset.watermarkInfos, function(a, c) {
                    var d = "https:" === location.protocol ? c.surl : c.url;
                    if (d && c.w && c.h) {
                        var f = document.createElement("img")
                          , g = e(f);
                        g.addClass("txp_waterMark_pic"),
                        g.attr("id", a),
                        g.attr("src", d),
                        g.css({
                            position: "absolute"
                        }),
                        b.changeCss(g, c),
                        b.dataset.$watermarkMod.append(g),
                        b.dealWaterMarkEvent(g)
                    }
                }))
            },
            dealWaterMarkEvent: function(a) {
                var b = this;
                a.on("error", function() {
                    return this.src == b.dataset.defaultImg ? void a.remove() : (b.dataset.errorCount++,
                    void (b.dataset.errorCount >= b.dataset.watermarkInfos.length ? a.attr("src", b.dataset.defaultImg) : a.remove()))
                }),
                a.on("load", function() {
                    var c, d = a.siblings(), f = d.length;
                    if (0 != f)
                        for (c = 0; c < f; c++)
                            if (b.hitTest(a, e(d[c]))) {
                                a.remove();
                                break
                            }
                })
            },
            hitTest: function(a, b) {
                var c = parseInt(a.css("top").slice(0, -2))
                  , d = parseInt(b.css("top").slice(0, -2))
                  , e = parseInt(a.css("left").slice(0, -2))
                  , f = parseInt(b.css("left").slice(0, -2));
                return !(e > f + b.width() || c > d + b.height() || f > e + a.width() || d > c + a.height())
            },
            resize: function(a) {
                for (var b, c, d = this, f = this.dataset.$watermarkMod.find(".txp_waterMark_pic"), g = 0; g < f.length; g++)
                    b = parseInt(e(f[g]).attr("id")),
                    isNaN(b) || (c = d.dataset.watermarkInfos[b],
                    d.changeCss(e(f[g]), c, a))
            },
            addEventListerner: function() {
                var a = this;
                this.dataset.eventsList = {},
                window.PageMessage && window.PageMessage.on("vlist-expand", function(b) {
                    setTimeout(function() {
                        a.resize()
                    }, 200)
                }),
                e(window).resize(function() {
                    a.resize()
                }),
                this.dataset.eventsList[f.getUniqueMsgKey("windowFullscreenChange")] = function() {
                    a.resize()
                }
                ,
                this.dataset.eventsList[f.getUniqueMsgKey("browserFullscreenChange")] = function() {
                    setTimeout(function() {
                        a.resize()
                    }, 200)
                }
                ,
                this.dataset.eventsList[f.getUniqueMsgKey("videoScreenPercentChange")] = function(b) {
                    a.resize(b)
                }
                ,
                this.dataset.eventsList[f.getUniqueMsgKey("getVideoUrlSuccess")] = function() {
                    return a.dataset.hasBuild = !0,
                    a.context.dataset.isDefinitionSwitching ? (a.context.msg.off("setDefinitionDone.buildWaterMarks"),
                    void a.context.msg.once("setDefinitionDone.buildWaterMarks", function() {
                        a.buildWaterMarks()
                    })) : (a.buildWaterMarks(),
                    void a.hideWaterMarks())
                }
                ,
                this.dataset.eventsList[f.getUniqueMsgKey("videoTimeUpdate")] = function(b) {
                    a.dataset.hasBuild || (a.dataset.hasBuild = !0,
                    a.buildWaterMarks())
                }
                ,
                this.dataset.eventsList[f.getUniqueMsgKey("resize")] = function() {
                    a.resize()
                }
                ,
                a.dataset.eventsList[f.getUniqueMsgKey("smallWindowModeChange")] = function(b, c) {
                    setTimeout(function() {
                        a.resize()
                    }, 100)
                }
                ,
                this.dataset.eventsList[f.getUniqueMsgKey("videoPlaying")] = function(b) {
                    if (b && "film" != b.playListType)
                        a.hideWaterMarks();
                    else {
                        if (a.resize(),
                        a.context.dataset.isDefinitionSwitching)
                            return;
                        a.showWaterMarks()
                    }
                }
                ,
                this.dataset.eventsList[f.getUniqueMsgKey("videoEnd")] = function(b) {
                    b.isAllEnd && !a.context.dataset.canPlayTime && a.hideWaterMarks()
                }
                ,
                this.dataset.eventsList[f.getUniqueMsgKey("isPlayingAdStatusChange")] = function(b) {
                    b && a.hideWaterMarks()
                }
                ,
                this.dataset.eventsList[f.getUniqueMsgKey("vidChange")] = function() {
                    a.dataset.errorCount = 0,
                    a.dataset.$watermarkMod.children().remove()
                }
                ,
                this.dataset.eventsList[f.getUniqueMsgKey("buildWaterMarkActionFail")] = function() {
                    a.showWaterMarks()
                }
                ,
                e.each(this.dataset.eventsList, function(b, c) {
                    a.context.msg.on(b, c)
                })
            },
            exportsModuleApis: function() {}
        },
        Txplayer.register("UiWaterMark", d)
    },
    271: function(a, b) {
        a.exports = '<txpdiv data-role="<%=watermarkMod%>" class="txp-watermark <%=hideClass%>">\r\n</txpdiv>'
    }
});
/*! Txplayer - v3.0.0 - 2019-05-10 14:25:19
 * Copyright (c) 2019
 * Powered by Tencent-Video Web Front End Team 
*/
!function(a) {
    function b(d) {
        if (c[d])
            return c[d].exports;
        var e = c[d] = {
            exports: {},
            id: d,
            loaded: !1
        };
        return a[d].call(e.exports, e, e.exports, b),
        e.loaded = !0,
        e.exports
    }
    var c = {};
    return b.m = a,
    b.c = c,
    b.p = "",
    b(0)
}({
    0: function(a, b, c) {
        a.exports = c(272)
    },
    272: function(a, b, c) {
        function d(a) {
            e = Txplayer.$,
            this.dataset = {},
            this.context = a,
            this.init()
        }
        var e = Txplayer.$
          , f = Txplayer.util
          , g = c(273)
          , h = c(274);
        d.prototype = {
            init: function() {
                this.write(),
                this.addEventListerner(),
                this.exportsModuleApis(),
                this.dataset.errorCount = {},
                this.context.dataset.buildWaterMarkActionFail = !1,
                this.dataset.defaultImg = "//i.gtimg.cn/qqlive/images/20170222/qing_224_70.png",
                this.dataset.$video = this.context.dataset.$videomod.find("video")
            },
            write: function() {
                var a = {
                    hideClass: Txplayer.dataset.hideClass,
                    watermarkActionMod: "txp-ui-watermark-action-mod"
                }
                  , b = e.tmpl(g, a);
                this.context.dataset.$playermod.append(b),
                this.dataset.$watermarkActionMod = this.context.dataset.$playermod.find('[data-role="' + a.watermarkActionMod + '"]')
            },
            remove: function() {
                this.dataset.$watermarkActionMod.remove()
            },
            showWaterMarks: function(a) {
                this.context.dataset.isPlayingAd || (this.dataset.$watermarkActionMod.removeClass(Txplayer.dataset.hideClass),
                e(this.dataset.$watermarkActionMod.find(".txp-watermark-action-item")[a]).removeClass(Txplayer.dataset.hideClass))
            },
            hideSenseWaterMarks: function(a) {
                e(this.dataset.$watermarkActionMod.find(".txp-watermark-action-item")[a]).addClass(Txplayer.dataset.hideClass)
            },
            hideWaterMarks: function() {
                this.dataset.$watermarkActionMod.addClass(Txplayer.dataset.hideClass)
            },
            changeCss: function(a, b, c) {
                var d = this
                  , e = (d.dataset.vw > d.dataset.vh ? d.dataset.vh : d.dataset.vw) / d.dataset.ActionData.rw
                  , f = b.x * e
                  , g = b.y * e
                  , h = b.w * e
                  , i = b.h * e
                  , j = 0
                  , k = 0;
                c = c ? c / 100 : 1;
                var l, m;
                1 == c && (d.dataset.sca = this.dataset.$video.width() / d.dataset.vw > this.dataset.$video.height() / d.dataset.vh ? this.dataset.$video.height() / d.dataset.vh : this.dataset.$video.width() / d.dataset.vw),
                l = d.dataset.vw * d.dataset.sca * c,
                m = d.dataset.vh * d.dataset.sca * c,
                j = (this.context.dataset.$playermod.width() - l) / 2,
                k = (this.context.dataset.$playermod.height() - m) / 2,
                j < 0 && (j = 0),
                k < 0 && (k = 0);
                var n = parseInt(h * d.dataset.sca * c)
                  , o = parseInt(i * d.dataset.sca * c)
                  , p = parseInt(j + l - n - f / d.dataset.vw * l)
                  , q = parseInt(k + g / d.dataset.vh * m);
                (p < j || p > j + l - n || q < k || q > k + m - o) && a.hide(),
                a.css({
                    width: n,
                    height: o,
                    left: p,
                    top: q
                })
            },
            getWaterMarkAction: function() {
                var a, b = e.Deferred(), c = this.context.dataset.getinfoJSON;
                return c && c.vl && c.vl.vi && "object" === e.type(c.vl.vi[0]) && (this.dataset.vw = c.vl.vi[0].vw,
                this.dataset.vh = c.vl.vi[0].vh,
                c.vl.vi[0].wl && c.vl.vi[0].wl.action && (a = c.vl.vi[0].wl.action)),
                a ? (a = a.replace(/https?:/g, ""),
                e.ajax({
                    url: a,
                    dataType: "jsonp",
                    timeout: 5e3,
                    jsonpCallback: "txplayerJsonpCallBack_getwatermark"
                }).done(function(a) {
                    a ? b.resolve(a) : b.reject()
                }).fail(function() {
                    b.reject()
                })) : b.reject(),
                b
            },
            buildWaterMarkAction: function(a) {
                var b = this;
                b.dataset.$watermarkActionMod.children().remove();
                var c = function(a) {
                    if (b.dataset.ActionData = a,
                    b.dataset.ActionData && b.dataset.ActionData.scenes && "array" == e.type(b.dataset.ActionData.scenes) && b.dataset.ActionData.scenes.length > 0) {
                        var c = {
                            scenes: b.dataset.ActionData.scenes,
                            hideClass: Txplayer.dataset.hideClass
                        }
                          , d = e.tmpl(h, c);
                        b.dataset.$watermarkActionMod.html(d),
                        b.dataset.watermarkInfos = [];
                        for (var f = 0; f < b.dataset.ActionData.scenes.length; f++) {
                            b.dataset.watermarkInfos[f] = b.dataset.ActionData.scenes[f].wi;
                            for (var g = 0; g < b.dataset.ActionData.scenes[f].wi.length; g++) {
                                var i = b.dataset.ActionData.scenes[f].wi[g].url;
                                if (!i || !b.dataset.ActionData.scenes[f].wi[g].w || !b.dataset.ActionData.scenes[f].wi[g].h)
                                    return;
                                var j = document.createElement("img")
                                  , k = e(j);
                                k.addClass("txp_waterMark_pic"),
                                k.attr("id", g),
                                k.attr("src", i),
                                k.css({
                                    position: "absolute"
                                }),
                                b.changeCss(k, b.dataset.ActionData.scenes[f].wi[g]),
                                e(e(".txp-watermark-action-item")[f]).append(j),
                                b.dealWaterMarkEvent(k, f)
                            }
                        }
                    }
                };
                b.dataset.errorCount = {},
                b.getWaterMarkAction().done(function(a) {
                    a || (b.context.dataset.buildWaterMarkActionFail = !0,
                    b.context.msg.broadcast("buildWaterMarkActionFail")),
                    c(a)
                }).fail(function() {
                    b.context.dataset.buildWaterMarkActionFail = !0,
                    b.context.msg.broadcast("buildWaterMarkActionFail")
                })
            },
            dealWaterMarkEvent: function(a, b) {
                var c = this;
                a.on("error", function() {
                    return this.src == c.dataset.defaultImg ? void a.remove() : (c.dataset.errorCount[b] || (c.dataset.errorCount[b] = 0),
                    c.dataset.errorCount[b]++,
                    void (c.dataset.errorCount[b] >= c.dataset.ActionData.scenes[b].wi.length ? a.attr("src", c.dataset.defaultImg) : a.remove()))
                }),
                a.on("load", function() {
                    var b, d = a.siblings(), f = d.length;
                    if (0 != f)
                        for (b = 0; b < f; b++)
                            if (c.hitTest(a, e(d[b]))) {
                                a.remove();
                                break
                            }
                })
            },
            hitTest: function(a, b) {
                var c = parseInt(a.css("top").slice(0, -2))
                  , d = parseInt(b.css("top").slice(0, -2))
                  , e = parseInt(a.css("left").slice(0, -2))
                  , f = parseInt(b.css("left").slice(0, -2));
                return !(e > f + b.width() || c > d + b.height() || f > e + a.width() || d > c + a.height())
            },
            resize: function(a) {
                for (var b, c, d = this, f = this.dataset.$watermarkActionMod.find(".txp-watermark-action-item"), g = 0; g < f.length; g++) {
                    b = parseInt(e(f[g]).data("scenesid")),
                    c = d.dataset.watermarkInfos[b];
                    for (var h = e(f[g]).find(".txp_waterMark_pic"), i = 0; i < c.length; i++) {
                        var j = parseInt(e(h[i]).attr("id"));
                        isNaN(j) || d.changeCss(e(h[i]), c[j], a)
                    }
                }
            },
            addEventListerner: function() {
                var a = this;
                this.dataset.eventsList = {},
                window.PageMessage && window.PageMessage.on("vlist-expand", function(b) {
                    setTimeout(function() {
                        a.resize()
                    }, 200)
                }),
                e(window).resize(function() {
                    a.resize()
                }),
                this.dataset.eventsList[f.getUniqueMsgKey("windowFullscreenChange")] = function() {
                    a.resize()
                }
                ,
                this.dataset.eventsList[f.getUniqueMsgKey("browserFullscreenChange")] = function() {
                    setTimeout(function() {
                        a.resize()
                    }, 200)
                }
                ,
                this.dataset.eventsList[f.getUniqueMsgKey("videoScreenPercentChange")] = function(b) {
                    a.resize(b)
                }
                ,
                a.dataset.eventsList[f.getUniqueMsgKey("smallWindowModeChange")] = function(b, c) {
                    setTimeout(function() {
                        a.resize()
                    }, 100)
                }
                ,
                this.dataset.eventsList[f.getUniqueMsgKey("getVideoUrlSuccess")] = function() {
                    return a.context.dataset.buildWaterMarkActionFail = !1,
                    a.dataset.hasBuild = !0,
                    a.context.dataset.isDefinitionSwitching ? (a.context.msg.off("setDefinitionDone.buildWaterMarksAction"),
                    void a.context.msg.once("setDefinitionDone.buildWaterMarksAction", function() {
                        a.buildWaterMarkAction()
                    })) : void a.buildWaterMarkAction()
                }
                ,
                this.dataset.eventsList[f.getUniqueMsgKey("videoTimeUpdate")] = function(b) {
                    a.dataset.hasBuild || (a.dataset.hasBuild = !0,
                    a.buildWaterMarkAction())
                }
                ,
                this.dataset.eventsList[f.getUniqueMsgKey("resize")] = function() {
                    a.resize()
                }
                ,
                this.dataset.eventsList[f.getUniqueMsgKey("videoPlaying")] = function(b) {
                    b && "film" != b.playListType && a.hideWaterMarks()
                }
                ,
                this.dataset.eventsList[f.getUniqueMsgKey("isPlayingAdStatusChange")] = function(b) {
                    b && a.hideWaterMarks()
                }
                ,
                this.dataset.eventsList[f.getUniqueMsgKey("videoTimeUpdate")] = function(b) {
                    if (!a.context.dataset.isPlayingAd && !a.context.dataset.isDefinitionSwitching && a.dataset.ActionData && a.dataset.ActionData.duration) {
                        var c = a.dataset.ActionData.start / 1e3 + a.dataset.ActionData.duration / 1e3 * a.dataset.ActionData.repeat
                          , d = !1;
                        if (0 == a.dataset.ActionData.repeat || a.context.dataset.currentTime < c) {
                            for (var e = (a.context.dataset.currentTime - a.dataset.ActionData.start / 1e3) % (a.dataset.ActionData.duration / 1e3), f = 0; f < a.dataset.ActionData.scenes.length; f++)
                                e >= a.dataset.ActionData.scenes[f]["in"] / 1e3 && e < a.dataset.ActionData.scenes[f].out / 1e3 ? (d = !0,
                                a.showWaterMarks(f)) : a.hideSenseWaterMarks(f);
                            d || a.hideWaterMarks()
                        } else
                            a.hideWaterMarks()
                    }
                }
                ,
                this.dataset.eventsList[f.getUniqueMsgKey("videoEnd")] = function(b) {
                    b.isAllEnd && !a.context.dataset.canPlayTime && a.hideWaterMarks()
                }
                ,
                this.dataset.eventsList[f.getUniqueMsgKey("vidChange")] = function() {
                    a.dataset.errorCount = {},
                    a.dataset.$watermarkActionMod.children().remove()
                }
                ,
                e.each(this.dataset.eventsList, function(b, c) {
                    a.context.msg.on(b, c)
                })
            },
            exportsModuleApis: function() {}
        },
        Txplayer.register("UiWaterMarkAction", d)
    },
    273: function(a, b) {
        a.exports = '<txpdiv data-role="<%=watermarkActionMod%>" class="txp-watermark-action <%=hideClass%>">\r\n</txpdiv>'
    },
    274: function(a, b) {
        a.exports = '<% for(var len = scenes.length,i=0; i < len; i++){%>\r\n  <txpdiv class="txp-watermark-action-item <%=hideClass%>" data-scenesid="<%= i %>">\r\n\r\n  </txpdiv>\r\n<% } %>'
    }
});
/*! Txplayer - v3.0.0 - 2019-05-10 14:25:19
 * Copyright (c) 2019
 * Powered by Tencent-Video Web Front End Team 
*/
!function(a) {
    function b(d) {
        if (c[d])
            return c[d].exports;
        var e = c[d] = {
            exports: {},
            id: d,
            loaded: !1
        };
        return a[d].call(e.exports, e, e.exports, b),
        e.loaded = !0,
        e.exports
    }
    var c = {};
    return b.m = a,
    b.c = c,
    b.p = "",
    b(0)
}({
    0: function(a, b, c) {
        a.exports = c(241)
    },
    241: function(a, b, c) {
        function d(a) {
            f = Txplayer.$,
            this.dataset = {},
            this.context = a,
            this.dataset.hideClass = "txp_none",
            this.dataset.showClass = "txp_show",
            this.init()
        }
        function e(a) {
            j && (i || (i = document.getElementsByClassName("txp_clipboard")[0]),
            i.value = a,
            i.select(),
            i.setSelectionRange(0, a.length),
            document.execCommand("copy"))
        }
        var f, g = c(242), h = c(243), i = null, j = document.queryCommandSupported && document.queryCommandSupported("copy"), k = Txplayer.util;
        d.prototype = {
            init: function() {
                j && (this.write(),
                this.addEventListener())
            },
            write: function() {
                var a = this
                  , b = {
                    rightClickMenuWrapper: "txp-right-click-menu-wrapper",
                    videoInfo: "txp-right-click-menu-video-info",
                    copyCurrentPageUrl: "txp-right-click-menu-copy-current-page-url",
                    copyCurrentTimePageUrl: "txp-right-click-menu-copy-current-time-page-url",
                    copyConsole: "txp-right-click-menu-copy-console",
                    copyPlayerVersion: "txp-right-click-menu-copy-player-version"
                }
                  , c = {
                    rightClickMenuCopySuccess: "txp-right-click-menu-copy-success"
                };
                b.playerVersion = Txplayer.dataset.ver + " (" + Txplayer.dataset.lastModify + ")",
                this.dataset.renderData = b;
                var d = f.tmpl(g, b);
                f("body").append(d),
                this.dataset.$playermod = this.context.dataset.$playermod,
                this.dataset.$playermod.append(f.tmpl(h, c)),
                a.dataset.$rightClickMenuWrapper = f("body").find('[data-role="' + b.rightClickMenuWrapper + '"]'),
                ["videoInfo", "copyCurrentPageUrl", "copyCurrentTimePageUrl", "copyConsole", "copyPlayerVersion"].forEach(function(c) {
                    a.dataset["$" + c] = a.dataset.$rightClickMenuWrapper.find('[data-role="' + b[c] + '"]')
                }),
                a.dataset.$rightClickMenuCopySuccess = this.dataset.$playermod.find('[data-role="' + c.rightClickMenuCopySuccess + '"]')
            },
            remove: function() {
                this.dataset.$rightClickMenuWrapper && this.dataset.$rightClickMenuWrapper.off("click").remove(),
                i && document.body.removeChild(i)
            },
            addEventListener: function() {
                function a(a) {
                    return 0 === o.length || (!!n.context.dataset.isPlayingAd || (!j || (!(!k.browser.ie || "edge" === k.browser.ie.version) || (!(f(a.target).is(":visible") && f(a.target).hasClass("txp_player") || f(a.target).parents().hasClass("txp_player")) || (b = a.clientX,
                    c = a.clientY,
                    h = n.context.dataset.$playermod.width(),
                    i = n.context.dataset.$playermod.height(),
                    l = n.context.dataset.$playermod.offset().left,
                    m = n.context.dataset.$playermod.offset().top,
                    d = n.dataset.$rightClickMenuWrapper.width(),
                    g = n.dataset.$rightClickMenuWrapper.outerHeight(),
                    b - l > h - d && (n.context.dataset.isWindowFullscreen || n.context.dataset.isBrowserFullscreen || !k.isVqqOrFilmqq()) && (b = h - d + l),
                    c - m > i - g && (n.context.dataset.isWindowFullscreen || n.context.dataset.isBrowserFullscreen || !k.isVqqOrFilmqq()) && (c = i - g + m),
                    n.dataset.$rightClickMenuWrapper.css({
                        left: b,
                        top: c
                    }),
                    n.show(),
                    !1)))))
                }
                var b, c, d, g, h, i, l, m, n = this, o = f("#txplayer_" + n.context.dataset.playerId);
                n.context.dataset.$playermod.contextmenu ? n.context.dataset.$playermod.contextmenu(a) : f(window).on("contextmenu", a),
                f(window).on("click", function(a) {
                    1 == a.which && n.hide()
                }),
                this.dataset.$rightClickMenuWrapper.on("click", function(a) {
                    var b = a.target
                      , c = b.getAttribute("data-role")
                      , d = ""
                      , f = n.dataset.renderData;
                    switch (c) {
                    case f.copyCurrentPageUrl:
                        d = location.protocol + "//v.qq.com/x/page/" + n.context.dataset.vid + ".html";
                        break;
                    case f.copyCurrentTimePageUrl:
                        d = k.appendParamsToUrl(location.protocol + "//v.qq.com/x/page/" + n.context.dataset.vid + ".html", {
                            start: n.context.dataset.currentTime
                        });
                        break;
                    case f.copyConsole:
                        d = n.context.msg.getData("getConsoleData") || "\u8fd8\u6ca1\u6709\u8c03\u8bd5\u4fe1\u606f\u5594",
                        window.JSON && JSON.stringify && (d = JSON.stringify(d));
                        break;
                    case f.copyPlayerVersion:
                        d = Txplayer.dataset.ver
                    }
                    c == f.videoInfo ? n.context.msg.broadcast("showUiConsole") : e(d),
                    n.hide(),
                    n.dataset.$rightClickMenuCopySuccess.removeClass("txp_none").addClass(n.dataset.showClass),
                    setTimeout(function() {
                        n.dataset.$rightClickMenuCopySuccess.addClass("txp_none").removeClass(n.dataset.showClass)
                    }, 1e3)
                }),
                this.dataset.eventsList = {},
                this.dataset.eventsList[k.getUniqueMsgKey("windowFullscreenChange")] = function(a) {
                    a ? n.dataset.$playermod.append(n.dataset.$rightClickMenuWrapper) : f("body").append(n.dataset.$rightClickMenuWrapper)
                }
                ,
                this.dataset.eventsList[k.getUniqueMsgKey("browserFullscreenChange")] = function(a) {
                    a ? n.dataset.$playermod.append(n.dataset.$rightClickMenuWrapper) : f("body").append(n.dataset.$rightClickMenuWrapper)
                }
                ,
                f.each(this.dataset.eventsList, function(a, b) {
                    n.context.msg.on(a, b)
                })
            },
            hide: function() {
                this.context.dataset.isRightClickMenu = !1,
                this.dataset.$rightClickMenuWrapper.addClass(this.dataset.hideClass)
            },
            show: function() {
                this.context.dataset.isRightClickMenu = !0,
                this.dataset.$rightClickMenuWrapper.removeClass(this.dataset.hideClass)
            }
        },
        Txplayer.register("UiRightClickMenu", d)
    },
    242: function(a, b) {
        a.exports = '<txpdiv class="txp_contextmenu txp_none" data-role="<%=rightClickMenuWrapper%>" style="overflow:hidden">\r\n    <txpdiv class="txp_menuitem" data-role="<%=videoInfo%>">\u89c6\u9891\u4fe1\u606f</txpdiv>\r\n    <txpdiv class="txp_menuitem" data-role="<%=copyCurrentPageUrl%>">\u590d\u5236\u89c6\u9891\u9875\u9762\u5730\u5740</txpdiv>\r\n    <txpdiv class="txp_menuitem" data-role="<%=copyCurrentTimePageUrl%>">\u590d\u5236\u5f53\u524d\u65f6\u95f4\u7684\u9875\u9762\u5730\u5740</txpdiv>\r\n    <txpdiv class="txp_menuitem" data-role="<%=copyConsole%>">\u590d\u5236\u8c03\u8bd5\u4fe1\u606f</txpdiv>\r\n    <txpdiv class="txp_menuitem" data-role="<%=copyPlayerVersion%>"><%=playerVersion%></txpdiv>\r\n    <textarea class="txp_clipboard" style="position: absolute; left: 100%; top: 0px;"></textarea>\r\n    <!--<textarea class="ytp-html5-clipboard" style="position: absolute; left: -9999px; top: 0px;"></textarea>-->\r\n</txpdiv>\r\n'
    },
    243: function(a, b) {
        a.exports = '<txpdiv class="txp_overlay_link txp_none" data-role="<%=rightClickMenuCopySuccess%>">\r\n    <txpdiv class="txp_icon_link">\r\n        <svg class="txp_icon" version="1.1" viewBox="0 0 36 36" >\r\n            <use class="txp_svg_symbol" xlink:href="<%=svgPrefix%>#txp_svg_link" />\r\n        </svg>\r\n    </txpdiv>\r\n</txpdiv>\r\n'
    }
});
/*! Txplayer - v3.0.0 - 2019-05-10 14:25:19
 * Copyright (c) 2019
 * Powered by Tencent-Video Web Front End Team 
*/
!function(a) {
    function b(d) {
        if (c[d])
            return c[d].exports;
        var e = c[d] = {
            exports: {},
            id: d,
            loaded: !1
        };
        return a[d].call(e.exports, e, e.exports, b),
        e.loaded = !0,
        e.exports
    }
    var c = {};
    return b.m = a,
    b.c = c,
    b.p = "",
    b(0)
}({
    0: function(a, b, c) {
        a.exports = c(266)
    },
    266: function(a, b, c) {
        function d(a) {
            f = Txplayer.$,
            this.dataset = {},
            this.context = a,
            this.init()
        }
        var e = c(267)
          , f = Txplayer.$
          , g = Txplayer.util;
        d.prototype = {
            init: function() {
                if (!this.context.config.official) {
                    this.write()
                }
            },
            write: function() {
                var a = {
                    goTencentVideo: "txp-ui-endtip-button",
                    tipMod: "txp-ui-endtip-mod",
                    background: "txp-ui-endtip-background",
                    title: "txp-ui-endtip-title",
                    label: "txp-ui-endtip-label"
                }
                  , b = f.tmpl(e, a);
                this.context.dataset.$playermod.append(b),
                this.dataset.$mod = this.context.dataset.$playermod.find("[data-role=${role}]".replace("${role}", a.tipMod)),
                this.dataset.$title = this.dataset.$mod.find("[data-role=${role}]".replace("${role}", a.title)),
                this.dataset.$button = this.dataset.$mod.find("[data-role=${role}]".replace("${role}", a.goTencentVideo)),
                this.dataset.$background = this.dataset.$mod.find("[data-role=${role}]".replace("${role}", a.background)),
                this.dataset.$label = this.dataset.$mod.find("[data-role=${role}]".replace("${role}", a.label)),
                this.addEventListener()
            },
            update: function(a) {
                this.dataset.$title.html(g.xss(this.getTitle()));
                var b = g.getPcVideoPosterByVid(this.context.dataset.vid);
                this.dataset.$background.css({
                    background: "url(${url}) no-repeat".replace("${url}", b),
                    "background-size": "100% 100%"
                }),
                a && this.dataset.$label.html("\u5f00\u901avip\u514d\u8d39\u770b")
            },
            show: function(a) {
                var b = this.context.dataset.getinfoJSON.exem;
                4 != b && (a ? this.dataset.$title.html(a) : this.dataset.$title.html(this.getTitle()),
                this.dataset.$mod.removeClass(Txplayer.dataset.hideClass))
            },
            hide: function() {
                this.dataset.$mod.addClass(Txplayer.dataset.hideClass)
            },
            getTitle: function() {
                var a, b = this.context.dataset.title;
                return b || (a = this.context.dataset.getinfoJSON,
                a && a.vl && a.vl.vi && a.vl.vi[0] && a.vl.vi[0].ti && (b = a.vl.vi[0].ti)),
                b
            },
            openTencentVideo: function() {
                var a = 0;
                this.context.dataset.currentTime && (a = parseInt(this.context.dataset.currentTime));
                var b = g.getTxVideoPageURLByVid(this.context.dataset.vid, 0, a);
                window.open(b)
            },
            addEventListener: function() {
                var a = this;
                if (this.context.msg.on("videoPause", function(b) {
                    a.context.dataset.canPlayTime && a.context.dataset.currentTime >= a.context.dataset.canPlayTime && a.show()
                }),
                this.context.msg.on("videoEnd", function() {
                    a.context.dataset.canPlayTime && a.context.dataset.currentTime >= a.context.dataset.canPlayTime && a.show()
                }),
                this.context.config.showOpenVIPGuide || this.context.msg.on("pause", function() {
                    var b = a.context.dataset.getinfoJSON;
                    !b || b.preview || 1 != b.exem && 2 != b.exem && 83 != b.iRetCode || a.context.config.showOpenVIPGuide || (a.update(!0),
                    a.show())
                }),
                this.context.msg.on("videoPlay", function(b) {
                    a.hide()
                }),
                this.context.msg.on("getVideoUrlSuccess", function(b) {
                    a.update()
                }),
                !this.context.config.showOpenVIPGuide && this.context.dataset.getinfoJSON) {
                    a.update();
                    var b = this.context.dataset.getinfoJSON;
                    b.preview || 1 != b.exem && 2 != b.exem && 83 != b.iRetCode || a.context.config.showOpenVIPGuide || (a.update(!0),
                    a.show())
                }
                this.dataset.$button.off("click").on("click", function() {
                    a.openTencentVideo()
                }),
                this.dataset.$title.off("click").on("click", function() {
                    a.openTencentVideo()
                })
            }
        },
        Txplayer.register("UiUnofficialEndTip", d)
    },
    267: function(a, b) {
        a.exports = '<txpdiv class="txp_overlay_next txp_overlay_next_complete <%=Txplayer.dataset.hideClass%>" data-role="<%=tipMod%>">\r\n\t<div class="txp_next_poster" data-role="<%=background%>" style="background-image:url()"></div>\r\n\t<txpdiv class="txp_next_content">\r\n\t\t<txpdiv class="txp_label" data-role="<%=label%>">\u817e\u8baf\u89c6\u9891\u89c2\u770b\u5b8c\u6574\u7248</txpdiv>\r\n\t\t<txpdiv class="txp_next_title" style="cursor:pointer;" data-role="<%=title%>"></txpdiv>\r\n\t\t<button class="txp_btn txp_btn_play_lg" data-status="play" data-role="<%=goTencentVideo%>">\r\n\t\t\t<svg class="txp_icon txp_icon_play" viewBox="0 0 36 36" >\r\n\t\t\t\t<use class="txp_svg_symbol txp_svg_play" xlink:href="<%=svgPrefix%>#txp_svg_play" />\r\n\t\t\t</svg>\r\n\t\t\t<svg class="txp_icon_cirlce" viewBox="0 0 72 72" >\r\n\t\t\t\t<circle r="34" cy="36" cx="36"></circle>\r\n\t\t\t</svg>\r\n\t\t</button>\r\n\t</txpdiv>\r\n</txpdiv>'
    }
});
/*! Txplayer - v3.0.0 - 2019-05-10 14:25:19
 * Copyright (c) 2019
 * Powered by Tencent-Video Web Front End Team 
*/
!function(a) {
    function b(d) {
        if (c[d])
            return c[d].exports;
        var e = c[d] = {
            exports: {},
            id: d,
            loaded: !1
        };
        return a[d].call(e.exports, e, e.exports, b),
        e.loaded = !0,
        e.exports
    }
    var c = {};
    return b.m = a,
    b.c = c,
    b.p = "",
    b(0)
}({
    0: function(a, b, c) {
        a.exports = c(217)
    },
    115: function(a, b) {
        a.exports = {
            RFID: "TxpCreativePlayer-rfid",
            AD_EVENT: {
                AD_ORDER_DATA_READY: "onAdOrderDataReady",
                AD_ORDER_PPB_DATA_READY: "ppbAdDataReady",
                AD_ORDER_PDF_DATA_READY: "pdfAdDataReady",
                VIDEO_AD_LAYER_SHOW: "adVideoShow",
                VIDEO_AD_LAYER_HIDE: "adVideoHide"
            },
            PLAYER_STATE: {
                NOT_START: -1,
                END: 0,
                PLAYING: 1,
                PAUSE: 2,
                LOADING: 3
            },
            AD_TYPE: {
                LD: "LD",
                HT: "HT",
                ZC: "ZC",
                ZT: "ZT",
                KB: "KB",
                PSJ: "PSJ",
                PPB: "PPB",
                PVL: "PVL",
                ZI: "ZI",
                BS: "BS",
                PDF: "PDF",
                VIDEO_MARK: "PSJ|BS|ZI|ZC|CZC|VIN",
                CZC: "CZC"
            },
            LD_AD_REG: /LD|KB/,
            VIDEO_AD_REG: /LD|KB|ZC|HT/
        }
    },
    217: function(a, b, c) {
        function d(a) {
            f = Txplayer.$,
            this.context = a,
            this.dataset = {},
            this.init()
        }
        function e() {
            var a = new Date;
            return a.getFullYear() + "" + (a.getMonth() + 1) + a.getDate()
        }
        var f, g = Txplayer.util, h = c(218), i = c(220), j = c(115), k = d.prototype, l = {
            threeTimes: {
                name: "threeTimes",
                icon: "iconLightning",
                title: "\u611f\u53d73\u500d\u6d41\u7545\u5ea6"
            },
            playRate: {
                name: "playRate",
                icon: "iconLightning",
                title: "\u500d\u901f\u64ad\u653e\u89c6\u9891"
            },
            freeDefinition: {
                name: "freeDefinition",
                icon: "iconHd",
                title: "\u514d\u8d39\u4eab\u53d7\u84dd\u5149\u64ad\u653e"
            },
            sign: {
                name: "sign",
                icon: "iconVipStar",
                title: "\u8fde\u7eed\u7b7e\u52305\u5929\u9001VIP"
            },
            update: {
                name: "update",
                icon: "iconUpdate",
                title: "\u5267\u96c6\u81ea\u52a8\u66f4\u65b0\u4e0b\u8f7d"
            },
            preWatch: {
                name: "preWatch",
                icon: "iconClock",
                title: "\u63d0\u524d\u4e00\u5c0f\u65f6\u8ffd\u5267"
            },
            from_iqiyi: {
                name: "from_iqiyi",
                icon: "iconLightning",
                title: "\u4e13\u4eab\u4f1a\u5458\u52a0\u901f"
            }
        }, m = {
            threeTimes: {
                cur: 0,
                max: 2,
                flag: 0
            },
            playRate: {
                cur: 0,
                max: 2,
                flag: 0
            },
            freeDefinition: {
                cur: 0,
                max: 1,
                flag: 0
            },
            sign: {
                cur: 0,
                max: 1,
                flag: 0
            },
            update: {
                cur: 0,
                max: 1,
                flag: 0
            },
            preWatch: {
                cur: 0,
                max: 1,
                flag: 0
            },
            from_iqiyi: {
                cur: 0,
                max: 1e4,
                flag: 0
            },
            _time: +new Date,
            queue: []
        }, n = 10, o = 300, p = 1800;
        k.enable = function() {
            return "v.qq.com" == location.hostname || "v.qq.com" == location.hostname && (/v.qq.com\/x\/cover|page\//.test(location.href) || /v.qq.com(\/*\w*)\/p\/topic\//.test(location.href))
        }
        ,
        k.init = function() {
            var a = this;
            if (this.enable()) {
                var b = e()
                  , c = this.getData();
                if (c) {
                    this.dataset.settings = c;
                    for (var d in m)
                        this.dataset.settings[d] || (this.dataset.settings[d] = m[d])
                } else
                    this.dataset.settings = m;
                var f = this.dataset.settings
                  , g = parseInt(b, 10) - parseInt(f._time, 10);
                ["freeDefinition", "sign", "playRate", "threeTimes", "update", "preWatch"].forEach(function(a) {
                    var c = f[a]
                      , d = c.time || parseInt(b, 10)
                      , e = parseInt(b, 10) - parseInt(d, 10);
                    c.flag && e >= 3 && (c.flag = 0,
                    delete c.time),
                    g >= 1 && (c.cur = 0)
                }),
                g >= 1 && a.setData({
                    name: "queue",
                    value: []
                }),
                f._time = b,
                this.setData({
                    name: "_time",
                    value: b
                }),
                this.dataset.playedTime = 0,
                this.dataset.queueTime = 0,
                this.dataset.seekCount = 0,
                this.dataset.queue = [],
                this.write(),
                this.addEventListeners()
            }
        }
        ,
        k.write = function() {
            var a = this.dataset.renderData = {
                popup: "open-client-popup",
                popupContent: "open-client-popup-content",
                iconHd: "open-client-icon-hd",
                iconUpdate: "open-client-icon-update",
                iconClock: "open-client-icon-clock",
                iconLightning: "open-client-icon-lightning",
                iconVipStar: "open-client-icon-vip-start",
                title: "open-client-title",
                close: "open-client-close",
                btn: "open-client-btn"
            }
              , b = f.tmpl(i, a);
            this.context.dataset.$playermod.append(b);
            for (var c in this.dataset.renderData)
                this.dataset.renderData.hasOwnProperty(c) && (this.dataset["$" + c] = this.context.dataset.$playermod.find('[data-role="' + this.dataset.renderData[c] + '"]'));
            this.dataset.$icons = this.dataset.$popup.find(".txp_popup_download_icon")
        }
        ,
        k.addEventListeners = function() {
            var a = {}
              , b = this
              , c = b.dataset.settings;
            this.dataset.definitionList = [],
            a["videoPlay.clientbubble"] = function() {
                var a = b.context.userApi.getDefinitionList();
                a && a.length > 0 && (b.dataset.definitionList = a.map(function(a) {
                    return a.name
                }))
            }
            ,
            a["videoTimeUpdate.clientbubble"] = function() {
                b.dataset.playedTime++,
                !c.freeDefinition.flag && c.freeDefinition.cur < c.freeDefinition.max && !b.isVip() && b.isPay() && b.dataset.playedTime == n && b.dataset.definitionList.indexOf("fhd") > -1 && (c.freeDefinition.cur++,
                b.handleShow("freeDefinition")),
                !c.sign.flag && c.sign.cur < c.sign.max && !b.isVip() && b.dataset.playedTime == n && !b.isPay() && (c.sign.cur++,
                b.handleShow("sign")),
                !c.update.flag && c.update.cur < c.update.max && b.dataset.playedTime % p == 0 && (c.update.cur++,
                b.handleShow("update")),
                !c.preWatch.flag && c.preWatch.cur < c.preWatch.max && b.dataset.playedTime % p == 0 && (c.preWatch.cur++,
                b.handleShow("preWatch")),
                0 != b.dataset.queueTime && b.dataset.queueTime % p == 0 && b.handleQueueShow("timeupdate"),
                b.dataset.queueTime++;
                var a = b.context.dataset.playEndTime || 0
                  , e = b.context.dataset.duration
                  , f = b.context.dataset.skipPrelude && a > 0 ? a : e;
                b.context.dataset.currentTime >= f - 10 && (b.dataset.videoEndFirst || (b.dataset.videoEndFirst = !0,
                d()))
            }
            ,
            a["seekStart.clientbubble"] = function() {
                b.dataset.seekCount++,
                !c.playRate.flag && c.playRate.cur < c.playRate.max && 3 == b.dataset.seekCount && (c.playRate.cur++,
                b.handleShow("playRate"),
                b.dataset.seekCount = 0),
                clearTimeout(b.dataset._seekCountHandle),
                b.dataset._seekCountHandle = setTimeout(function() {
                    b.dataset.seekCount = 0
                }, 1e3 * o)
            }
            ,
            a["videoSeeking.clientbubble"] = function() {
                clearTimeout(b.dataset._seekingHandle),
                b.dataset._seekingHandle = setTimeout(function() {
                    3 === b.context.dataset.playState && b.context.dataset.currentTime && !c.playRate.flag && c.threeTimes.cur < c.threeTimes.max && (c.threeTimes.cur++,
                    b.handleShow("threeTimes"))
                }, 1e3)
            }
            ,
            a["videoEnd.clientbubble"] = function() {
                b.dataset.seekCount = 0
            }
            ;
            var d = function() {
                if ("iqiyi" == Txplayer.util.getPTAG()) {
                    var a, c = "from_iqiyi";
                    "function" === Txplayer.$.type(b.context.config.getUserType) && 2 == b.context.config.getUserType() ? a = "\u4e13\u4eab\u4f1a\u5458\u52a0\u901f" : Txplayer.util.os.mac ? a = "\u4e13\u4eab\u514d\u5e7f\u544a" : Txplayer.util.os.windows && (a = "\u8fde\u7eed\u7b7e\u5230\u62a2\u4f1a\u5458"),
                    l[c].title = a,
                    b.hide(),
                    b.show(l[c]),
                    b.handleMotion(),
                    b.dataset.currentType = c,
                    b.context.msg.broadcast("reportUsrAction", {
                        usr_action: "bubble-show-" + c
                    })
                }
            };
            a["videoPlaying.clientbubble"] = function() {
                b.dataset.videoPlayingFirst || (b.dataset.videoPlayingFirst = !0,
                d())
            }
            ,
            a["userPausePlayer.clientbubble"] = function() {
                d()
            }
            ,
            this.dataset.eventsList = a,
            f.each(a, function(a, c) {
                b.context.msg.on(a, c)
            }),
            this.dataset.$popupContent.on("mouseenter", function(a) {
                b.dataset.$popup.hasClass("txp_hover") || b.dataset.$popup.addClass("txp_hover"),
                b.handleMotion(!0)
            }),
            this.dataset.$popup.on("mouseenter", function(a) {
                "from_iqiyi" != b.dataset.currentType && clearTimeout(b.dataset.autoHideHandle)
            }).on("mouseleave", function() {
                b.dataset.$popup.hasClass("txp_hover") && b.dataset.$popup.removeClass("txp_hover"),
                "from_iqiyi" != b.dataset.currentType && (b.handleMotion(),
                setTimeout(function() {
                    b.hide()
                }, 300))
            }).on("click", function(a) {
                a.preventDefault()
            }),
            this.dataset.$btn.on("click", function() {
                var a = b.context.dataset.vid || ""
                  , c = b.context.dataset.cid || ""
                  , d = ""
                  , e = Math.max(b.context.dataset.currentTime - 5, 0)
                  , f = b.getRfId() || ""
                  , g = "from_iqiyi" == b.dataset.currentType
                  , i = g ? "web.viqiyi" : "web.vkadun";
                "freeDefinition" === b.dataset.currentType && (d = "fhd"),
                h({
                    support: !0,
                    atag: g ? "viqiyi" : "vkadun",
                    sso: "qqlive://sso/vbarid=" + c + "&videoid=" + a + (d ? "&defn=" + d : "") + "&start=" + e + "&rfid=" + f + "&atag=" + i,
                    success: function() {
                        b.context.msg.broadcast("pause"),
                        b.context.msg.broadcast("userPausePlayer")
                    },
                    error: function() {
                        g ? location.href = "http://dldir1.qq.com/qqtv/qt/QQliveSetup_20_740.exe" : location.href = "//node.video.qq.com/x/api/download_pc"
                    }
                }),
                b.context.msg.broadcast("reportUsrAction", {
                    usr_action: "bubble-click-" + b.dataset.currentType
                }),
                b.hide()
            }),
            this.dataset.$close.on("click", function() {
                b.setData({
                    name: b.dataset.currentType,
                    key: "flag",
                    value: 1
                }),
                b.setData({
                    name: b.dataset.currentType,
                    key: "time",
                    value: e()
                }),
                b.hide(),
                b.context.msg.broadcast("reportUsrAction", {
                    usr_action: "bubble-close-" + b.dataset.currentType
                })
            })
        }
        ,
        k.getFromRecent = function() {
            var a = this.getData("queue") || [];
            return 0 === a.length ? null : a.length > 0 ? a[0] : void 0
        }
        ,
        k.pushToRecent = function(a) {
            var b = this.getData("queue") || [];
            b.push(a),
            this.setData({
                name: "queue",
                value: b
            })
        }
        ,
        k.updateRecent = function(a) {
            var b = a.key + "." + a.time
              , c = this.getData("queue") || [];
            c.length && (c.forEach(function(c) {
                c.key + "." + c.time === b && (c.show = a.show)
            }),
            this.setData({
                name: "queue",
                value: c
            }))
        }
        ,
        k.shiftFromRecent = function(a) {
            var b = this.getData("queue") || [];
            b.length && (b.shift(),
            this.setData({
                name: "queue",
                value: b
            }))
        }
        ,
        k.handleQueueShow = function(a) {
            var b = this.getFromRecent();
            if (b && !b.show)
                b.show = 1,
                this.show(l[b.key]),
                this.handleMotion(),
                this.dataset.currentType = b.key,
                this.updateRecent(b),
                this.dataset.queueTime = 0,
                this.context.msg.broadcast("reportUsrAction", {
                    usr_action: "bubble-show-" + this.dataset.currentType
                });
            else if (b && b.show) {
                var c = +new Date
                  , d = c - b.time;
                d >= 1e3 * p && (this.shiftFromRecent(),
                this.handleQueueShow("timeout"))
            }
        }
        ,
        k.handleShow = function(a) {
            var b = this.dataset.settings[a];
            if (b) {
                var c = l[a]
                  , d = +new Date;
                this.setData({
                    name: c.name,
                    key: "cur",
                    value: b.cur
                }),
                this.pushToRecent({
                    key: a,
                    time: d,
                    show: 0
                });
                var e = this.getData("queue") || [];
                1 === e.length && this.handleQueueShow("handleShow")
            }
        }
        ,
        k.hide = function() {
            this.dataset.$popup.addClass(Txplayer.dataset.hideClass).removeClass("txp_hover"),
            this.context.dataset.isOpenClientBubbleShow = !1
        }
        ,
        k.autoHide = function() {
            var a = this;
            clearTimeout(this.dataset.autoHideHandle),
            this.dataset.autoHideHandle = setTimeout(function() {
                a.hide()
            }, 1e4)
        }
        ,
        k.show = function(a) {
            this.dataset.windows = !1,
            a = a || {};
            var b = a.icon || "iconLightning"
              , c = a.title || "\u611f\u53d73\u500d\u6d41\u7545\u5ea6";
            this.dataset.$title.text(c),
            this.dataset.$icons.addClass(Txplayer.dataset.hideClass),
            this.dataset["$" + b].removeClass(Txplayer.dataset.hideClass),
            this.dataset.$popup.removeClass(Txplayer.dataset.hideClass),
            this.autoHide(),
            this.context.msg.broadcast("hideUiTips"),
            this.context.dataset.isOpenClientBubbleShow = !0
        }
        ,
        k.handleMotion = function(a) {
            var b = this;
            window.anime ? this.motion(a) : this.loadAnimeLib(function() {
                window.anime && b.motion(a)
            })
        }
        ,
        k.loadAnimeLib = function(a) {
            a = a || function() {}
            ,
            g.loadScript({
                url: "//vm.gtimg.cn/tencentvideo/txp/js/anime.js",
                onsuccess: a
            })
        }
        ,
        k.motion = function(a) {
            for (var b = [], c = 0; c < 4; c++)
                try {
                    var d = window.anime.path("#txp_popup_download_path" + (c + 1) + " path")
                      , e = "normal";
                    c > 0 && (e = "reverse"),
                    b[c] = window.anime({
                        targets: ".txp_popup_download_dot" + (c + 1),
                        translateX: d("x"),
                        translateY: d("y"),
                        rotate: d("angle"),
                        easing: "linear",
                        duration: function(b) {
                            return a ? 2e3 : f(b).data("duration")
                        },
                        direction: e,
                        loop: !0
                    })
                } catch (g) {}
        }
        ,
        k.getRfId = function() {
            return Txplayer.util.getData(j.RFID) || Txplayer.util.getData(Txplayer.dataset.localStorageKey.adRfid)
        }
        ,
        k.isWideMode = function() {
            return this.context.dataset.$playermod.parents(".player_container_wide").length > 0
        }
        ,
        k.isPay = function() {
            var a = this.context.userApi.getUserPayStatus();
            return 0 == a || 1 == a || 2 == a
        }
        ,
        k.isVip = function() {
            var a = !1;
            return this.context && this.context.config && "function" === f.type(this.context.config.getUserType) && (a = 2 == this.context.config.getUserType()),
            a
        }
        ,
        k.getData = function(a) {
            var b = Txplayer.dataset.localStorageKey.openClientBubble
              , c = Txplayer.util.getData(b);
            if (c)
                try {
                    c = Txplayer.$.parseJSON(c)
                } catch (d) {
                    c = null
                }
            return a ? c && c[a] : c
        }
        ,
        k.setData = function(a) {
            var b = Txplayer.dataset.localStorageKey.openClientBubble
              , c = this.dataset.settings;
            "undefined" != typeof a.key ? c[a.name][a.key] = a.value : c[a.name] = a.value,
            Txplayer.util.setData(b, JSON.stringify(c))
        }
        ,
        Txplayer.register("UiOpenClientBubble", d)
    },
    218: function(a, b, c) {
        function d(a) {
            var b = "qqlivechannel=channel1." + a;
            if (Txplayer.util.browser.ie) {
                var c = new Date;
                c.setTime(c.getTime() + 864e5),
                document.cookie = b + ";path=/;expires=" + c.toGMTString()
            } else {
                var d = Txplayer.$("<input>");
                Txplayer.$("body").append(d),
                d.css({
                    position: "absolute",
                    left: "-9999px"
                }),
                d.val(b),
                d.css({
                    top: Txplayer.$(window).scrollTop() + "px"
                }),
                d.get(0).focus(),
                d.get(0).setSelectionRange(0, b.length),
                document.queryCommandSupported && document.queryCommandSupported("copy") && document.execCommand("copy", !0),
                d.remove()
            }
        }
        var e = c(219);
        a.exports = function(a) {
            if (a.support && a.sso) {
                try {
                    d(a.atag)
                } catch (b) {}
                e(function(b) {
                    b && b.exist().done(function() {
                        b.open(a.sso),
                        a.success && a.success()
                    }).fail(function() {
                        a.error && a.error()
                    })
                })
            }
        }
    },
    219: function(a, b) {
        var c = []
          , d = !1
          , e = 0;
        a.exports = function(a) {
            if (e)
                return void a(e);
            if (c.push(a),
            !d) {
                if (d = !0,
                "qq.com" != document.domain)
                    throw new Error("document.domain is not qq.com");
                var b = document.createElement("iframe");
                b.src = "javascript:'<script>window.onload=function(){document.write(\\'<script>document.domain=\\\"qq.com\\\";<\\\\/script>\\');document.close();};</script>'",
                b.style.cssText = "display:none;",
                document.body.appendChild(b),
                b.getClient = function(a) {
                    e = a;
                    for (var b = c.shift(); b; )
                        b && b(a),
                        b = c.shift()
                }
                ,
                b.src = "//v.qq.com/iframe/client.html"
            }
        }
    },
    220: function(a, b) {
        a.exports = '<txpdiv class="txp_popup_download txp_none" data-role="<%=popup%>">\r\n    <txpdiv class="txp_popup_download_content" data-role="<%=popupContent%>">\r\n        <txpdiv class="txp_popup_download_img txp_popup_download_img_vip">\r\n            <i class="txp_popup_download_icon" data-role="<%=iconHd%>">\r\n                <svg class="txp_icon txp_svg_hd" viewBox="0 0 28 28" width="28" height="28">\r\n                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#txp_svg_hd"></use>\r\n                </svg>\r\n            </i>\r\n            <i class="txp_popup_download_icon" data-role="<%=iconUpdate%>">\r\n                <svg class="txp_icon txp_svg_update" viewBox="0 0 28 28" width="28" height="28">\r\n                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#txp_svg_update"></use>\r\n                </svg>\r\n            </i>\r\n            <i class="txp_popup_download_icon" data-role="<%=iconClock%>">\r\n                <svg class="txp_icon txp_svg_clock" viewBox="0 0 28 28" width="28" height="28">\r\n                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#txp_svg_clock"></use>\r\n                </svg>\r\n            </i>\r\n            <i class="txp_popup_download_icon" data-role="<%=iconLightning%>">\r\n                <svg class="txp_icon txp_svg_lightning" viewBox="0 0 28 28" width="28" height="28">\r\n                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#txp_svg_lightning"></use>\r\n                </svg>\r\n            </i>\r\n            <i class="txp_popup_download_icon" data-role="<%=iconVipStar%>">\r\n                <svg class="txp_icon txp_svg_vip_star_lg" viewBox="0 0 28 28" width="28" height="28">\r\n                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#txp_svg_vip_star_lg"></use>\r\n                </svg>\r\n            </i>\r\n            <txpdiv class="txp_popup_download_cicle1"></txpdiv>\r\n            <txpdiv class="txp_popup_download_cicle2"></txpdiv>\r\n            <txpdiv id="txp_popup_download_path1">\r\n                <txpdiv class="txp_popup_download_dot1" data-duration="10000"></txpdiv>\r\n                <svg viewBox="0 0 75 75"  width="75" height="75" class="txp_none">\r\n                    <path fill="none" stroke-width="1" d="M31.5,67.8C17.9,66.8,7.8,52.6,8.9,36S21.8,6.7,35.4,7.7S59.1,22.9,58,39.5C57,56.1,45.1,68.8,31.5,67.8z"></path>\r\n                </svg>\r\n            </txpdiv>\r\n            <txpdiv id="txp_popup_download_path2">\r\n                <txpdiv class="txp_popup_download_dot2"  data-duration="8000"></txpdiv>\r\n                <svg viewBox="0 0 75 75"  width="75" height="75" class="txp_none">\r\n                    <path fill="none" stroke-width="1" d="M39,5.8c14.2,1.9,24.1,16.7,22.1,33C59.2,55.2,46,67,31.8,65.1c-14.2-1.9-24.1-16.7-22.1-33S24.8,3.9,39,5.8z"></path>\r\n                </svg>\r\n            </txpdiv>\r\n            <txpdiv id="txp_popup_download_path3">\r\n                <txpdiv class="txp_popup_download_dot3"  data-duration="9000"></txpdiv>\r\n                <svg viewBox="0 0 75 75"  width="75" height="75" class="txp_none">\r\n                    <path fill="none" stroke-width="1" d="M15.8,28.8C20.1,18,34,13.4,46.8,18.4S66.5,36.2,62.2,47S44,62.5,31.2,57.5S11.5,39.6,15.8,28.8z"></path>\r\n                </svg>\r\n            </txpdiv>\r\n            <txpdiv id="txp_popup_download_path4">\r\n                <txpdiv class="txp_popup_download_dot4"  data-duration="11000"></txpdiv>\r\n                <svg viewBox="0 0 75 75"  width="75" height="75" class="txp_none">\r\n                    <path fill="none" stroke-width="1"  d="M63.3,41.4c-1.7,13.5-16.5,22.8-33,20.8S1.8,47.6,3.6,34.1s16.5-22.8,33-20.8S65.1,27.9,63.3,41.4z"></path>\r\n                </svg>\r\n            </txpdiv>\r\n        </txpdiv>\r\n        <txpdiv class="txp_popup_download_text">\r\n            <txpdiv class="txp_label">\u4f7f\u7528\u817e\u8baf\u89c6\u9891PC\u5ba2\u6237\u7aef</txpdiv>\r\n            <txpdiv class="txp_title" data-role="<%=title%>">\u500d\u901f\u89c2\u770b\u89c6\u9891</txpdiv>\r\n        </txpdiv>\r\n    </txpdiv>\r\n    <txpdiv class="txp_btn_download" data-role="<%=btn%>">\u7acb\u5373\u4f53\u9a8c</txpdiv>\r\n    <button class="txp_btn txp_btn_close" data-role="<%=close%>"></button>\r\n</txpdiv>'
    }
});
