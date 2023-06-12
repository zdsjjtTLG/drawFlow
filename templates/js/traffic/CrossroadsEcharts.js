var crossroadsBaseEcharts = {
    name: "Graph数据管理js对象",
    roadNameType: {},
    data: {columnName: "COUNT", e: {}, w: {}, s: {}, n: {}},
    setData: function (o, e, t, r) {
        setcrossroadsBaseEchartsDirection(o.data), crossroadsBaseEcharts.data.columnName = e, crostionBaseRule.maxWidth = null != t.linksSize ? t.linksSize : r.linksSize, crostionBaseRule.arrayFont = null != t.arrayFont ? t.arrayFont : r.arrayFont, crostionBaseRule.bili = null != o.divSize ? 950 / o.divSize : 1, crostionBaseRule.typeStr = null != t.typeStr ? t.typeStr : r.typeStr, t.title = null != t.title ? t.title : {}, crostionBaseRule.title.name = null != t.title.name ? t.title.name : r.title.name, crostionBaseRule.title.size = null != t.title.size ? t.title.size : r.title.size, crostionBaseRule.title.left = null != t.title.left ? t.title.left : r.title.left, crostionBaseRule.title.top = null != t.title.top ? t.title.top : r.title.top
    },
    getOption: getCrossroadsOption
}, crostionBaseRule = {
    base: 4e3,
    maxWidth: 15,
    bili: 1,
    data: [],
    typeStr: "",
    arrayFont: [],
    title: {name: "", size: 16, left: 0, top: 0}
};

function setcrossroadsBaseEchartsDirection(o) {
    crossroadsBaseEcharts.data.e = o.data.e, crossroadsBaseEcharts.data.w = o.data.w, crossroadsBaseEcharts.data.s = o.data.s, crossroadsBaseEcharts.data.n = o.data.n, crossroadsBaseEcharts.roadNameType = o.roadNameType
}

function getCrossroadsOption() {
    var o = new Date, e = o.getMonth() + 1, t = o.getDate();
    1 <= e && e <= 9 && (e = "0" + e), 0 <= t && t <= 9 && (t = "0" + t);
    var r = o.getFullYear() + "-" + e + "-" + t + " " + o.getHours() + ":" + o.getMinutes() + ":" + o.getSeconds();
    return {
        title: {
            text: crostionBaseRule.title.name,
            left: crostionBaseRule.title.left,
            top: crostionBaseRule.title.top,
            textStyle: {fontSize: crostionBaseRule.title.size}
        },
        toolbox: {
            show: !0,
            x: "85%",
            y: "8%",
            itemSize: 25,
            feature: {
                saveAsImage: {
                    name: "流量图" + r,
                    show: !0,
                    pixelRatio: 1,
                    icon: "image://images/traffic/save.png"
                }
            }
        },
        animationDurationUpdate: 1e3,
        animationEasingUpdate: "quinticInOut",
        series: getSeriesType(crostionBaseRule.typeStr)
    }
}

function initCrossroadsData(o) {
    var e = o;
    return 0 == Object.keys(e).length && (e = {
        right: {COUNT: 0},
        left: {COUNT: 0},
        return: {COUNT: 0},
        front: {COUNT: 0}
    }), e
}

function getCrossroadsNum(o) {
    var e = Math.ceil(o / (0 == crostionBaseRule.base ? 300 : crostionBaseRule.base));
    return e >= crostionBaseRule.maxWidth ? e = crostionBaseRule.maxWidth : e <= 0 && (e = 0), e
}

function getCrossroadsMaxWidth(o) {
    for (var e = o[0], t = 0; t < o.length - 1; t++) o[t + 1] > e && (e = o[t + 1]);
    crostionBaseRule.base = Math.ceil(e / crostionBaseRule.maxWidth)
}

function getSeriesType(o) {
    var e = initCrossroadsData(crossroadsBaseEcharts.data.e), t = initCrossroadsData(crossroadsBaseEcharts.data.w),
        r = initCrossroadsData(crossroadsBaseEcharts.data.s), s = initCrossroadsData(crossroadsBaseEcharts.data.n),
        l = crossroadsBaseEcharts.data.columnName, a = Math.round(e.left[l] + e.right[l] + e.front[l] + e.return[l]),
        m = Math.round(t.left[l] + t.right[l] + t.front[l] + t.return[l]),
        n = Math.round(r.left[l] + r.right[l] + r.front[l] + r.return[l]),
        i = Math.round(s.left[l] + s.right[l] + s.front[l] + s.return[l]);
    crostionBaseRule.data[0] = a, crostionBaseRule.data[1] = m, crostionBaseRule.data[2] = n, crostionBaseRule.data[3] = i;
    var u = Math.round(s.left[l] + r.right[l] + t.front[l] + e.return[l]),
        y = Math.round(r.left[l] + s.right[l] + e.front[l] + t.return[l]),
        f = Math.round(e.left[l] + t.right[l] + s.front[l] + r.return[l]),
        d = Math.round(t.left[l] + e.right[l] + r.front[l] + s.return[l]);
    crostionBaseRule.data[4] = u, crostionBaseRule.data[5] = y, crostionBaseRule.data[6] = f, crostionBaseRule.data[7] = d;
    var c = e.front[l], g = t.front[l], b = r.front[l], h = s.front[l];
    getCrossroadsMaxWidth(crostionBaseRule.data), "COUNT" == o && (e.left[l] = e.right[l] = e.return[l] = e.front[l] = 0, t.left[l] = t.right[l] = t.return[l] = t.front[l] = 0, r.left[l] = r.right[l] = r.return[l] = r.front[l] = 0, s.left[l] = s.right[l] = s.return[l] = s.front[l] = 0);
    var C = crossroadsBaseEcharts.roadNameType, S = .1, N = crostionBaseRule.bili, z = crostionBaseRule.arrayFont;
    return {
        name: "crosGroup",
        type: "graph",
        layout: "none",
        hoverAnimation: !1,
        data: [{
            name: "节点1",
            x: 200,
            y: 550,
            value: 0,
            fixed: !0,
            symbolSize: [110, 0 == getCrossroadsNum(m) ? 0 : 3 + getCrossroadsNum(m)],
            symbolOffset: [0, 0],
            symbol: "rect",
            itemStyle: {color: "#5B47C2"},
            label: {
                normal: {
                    show: 0 != getCrossroadsNum(m),
                    formatter: Math.round(m) + "",
                    offset: [15, 17],
                    color: "#000",
                    fontSize: z[0]
                }
            }
        }, {
            name: "节点1-1",
            x: 200 + 55 * N,
            y: 550 - N * (3 + getCrossroadsNum(m) - (3 + getCrossroadsNum(m)) * t.left[l] / (S + m)) / 2,
            value: 0,
            fixed: !0,
            symbolSize: [0, (3 + getCrossroadsNum(m)) * t.left[l] / (S + m)],
            symbolOffset: [0, 0],
            symbol: "rect",
            itemStyle: {color: "#5B47C2"},
            label: {show: !1}
        }, {
            name: "节点1-2",
            x: 200 + 55 * N,
            y: 550 - N * (3 + getCrossroadsNum(m) - 2 * (3 + getCrossroadsNum(m)) * t.left[l] / (S + m) - (3 + getCrossroadsNum(m)) * (t.front[l] + t.return[l]) / (S + m)) / 2,
            value: 0,
            fixed: !0,
            symbolSize: [0, (3 + getCrossroadsNum(m)) * (t.front[l] + t.return[l]) / (S + m)],
            symbolOffset: [0, 0],
            symbol: "rect",
            itemStyle: {color: "#5B47C2"},
            label: {show: !1}
        }, {
            name: "节点1-3",
            x: 200 + 55 * N,
            y: 550 + N * (3 + getCrossroadsNum(m) - (3 + getCrossroadsNum(m)) * t.right[l] / (S + m)) / 2,
            value: 0,
            symbolSize: [0, (3 + getCrossroadsNum(m)) * t.right[l] / (S + m)],
            symbolOffset: [0, 0],
            symbol: "rect",
            itemStyle: {color: "#5B47C2"},
            label: {show: !1}
        }, {
            name: "节点2",
            x: 200 + 15 * N,
            y: 450,
            value: 0,
            symbolSize: [80, 0 == getCrossroadsNum(y) ? 0 : 3 + getCrossroadsNum(y)],
            symbolOffset: [0, 0],
            symbol: "rect",
            itemStyle: {color: "#5B47C2"},
            label: {
                normal: {
                    show: 0 != y,
                    formatter: Math.round(y) + "",
                    offset: [0, -17],
                    color: "#000",
                    fontSize: z[0]
                }
            }
        }, {
            name: "节点2-1",
            x: 200 + 55 * N,
            y: 450 - N * (3 + getCrossroadsNum(y) - (3 + getCrossroadsNum(y)) * s.right[l] / (S + y)) / 2,
            value: 0,
            symbolSize: [0, (3 + getCrossroadsNum(y)) * s.right[l] / (S + y)],
            symbolOffset: [0, 0],
            symbol: "rect",
            itemStyle: {color: "#5B47C2"},
            label: {show: !1}
        }, {
            name: "节点2-2",
            x: 200 + 55 * N,
            y: 450 - N * (3 + getCrossroadsNum(y) - 2 * (3 + getCrossroadsNum(y)) * s.right[l] / (S + y) - (3 + getCrossroadsNum(y)) * (e.front[l] + t.return[l]) / (S + y)) / 2,
            value: 0,
            symbolSize: [0, (3 + getCrossroadsNum(y)) * (e.front[l] + t.return[l]) / (S + y)],
            symbolOffset: [0, 0],
            symbol: "rect",
            itemStyle: {color: "#5B47C2"},
            label: {show: !1}
        }, {
            name: "节点2-3",
            x: 200 + 55 * N,
            y: 450 + N * (3 + getCrossroadsNum(y) - (3 + getCrossroadsNum(y)) * r.left[l] / (S + y)) / 2,
            value: 0,
            symbolSize: [0, (3 + getCrossroadsNum(y)) * r.left[l] / (S + y)],
            symbolOffset: [0, 0],
            symbol: "rect",
            itemStyle: {color: "#5B47C2"},
            label: {show: !1}
        }, {
            name: "节点3",
            x: 550,
            y: 200 + 15 * N,
            value: 0,
            symbolSize: [0 == getCrossroadsNum(d) ? 0 : 3 + getCrossroadsNum(d), 80],
            symbol: "rect",
            symbolOffset: [0, 0],
            itemStyle: {color: "#E50100"},
            label: {
                normal: {
                    show: 0 != d,
                    formatter: Math.round(d) + "",
                    offset: [25, 0],
                    color: "#000",
                    fontSize: z[0]
                }
            }
        }, {
            name: "节点3-1",
            y: 200 + 55 * N,
            x: 550 - N * (3 + getCrossroadsNum(d) - (3 + getCrossroadsNum(d)) * t.left[l] / (S + d)) / 2,
            value: 0,
            symbolSize: [(3 + getCrossroadsNum(d)) * t.left[l] / (S + d), 0],
            symbolOffset: [0, 0],
            symbol: "rect",
            itemStyle: {color: "#E50100"},
            label: {show: !1}
        }, {
            name: "节点3-2",
            y: 200 + 55 * N,
            x: 550 - N * (3 + getCrossroadsNum(d) - 2 * (3 + getCrossroadsNum(d)) * t.left[l] / (S + d) - (3 + getCrossroadsNum(d)) * (r.front[l] + s.return[l]) / (S + d)) / 2,
            value: 0,
            symbolSize: [(3 + getCrossroadsNum(d)) * (r.front[l] + s.return[l]) / (S + d), 0],
            symbolOffset: [0, 0],
            symbol: "rect",
            itemStyle: {color: "#E50100"},
            label: {show: !1}
        }, {
            name: "节点3-3",
            y: 200 + 55 * N,
            x: 550 + N * (3 + getCrossroadsNum(d) - (3 + getCrossroadsNum(d)) * e.right[l] / (S + d)) / 2,
            value: 0,
            symbolSize: [(3 + getCrossroadsNum(d)) * e.right[l] / (S + d), 0],
            symbolOffset: [0, 0],
            symbol: "rect",
            itemStyle: {color: "#E50100"},
            label: {show: !1}
        }, {
            name: "节点4",
            x: 550,
            y: 800,
            value: 0,
            symbolSize: [0 == getCrossroadsNum(n) ? 0 : 3 + getCrossroadsNum(n), 110],
            symbol: "rect",
            symbolOffset: [0, 0],
            itemStyle: {color: "#159E56"},
            label: {
                normal: {
                    show: 0 != getCrossroadsNum(n),
                    formatter: Math.round(n) + "",
                    offset: [25, -15],
                    color: "#000",
                    fontSize: z[0]
                }
            }
        }, {
            name: "节点4-1",
            y: 800 - 55 * N,
            x: 550 - N * (3 + getCrossroadsNum(n) - (3 + getCrossroadsNum(n)) * r.left[l] / (S + n)) / 2,
            value: 0,
            symbolSize: [(3 + getCrossroadsNum(n)) * r.left[l] / (S + n), 0],
            symbolOffset: [0, 0],
            symbol: "rect",
            itemStyle: {color: "#159E56"},
            label: {show: !1}
        }, {
            name: "节点4-2",
            y: 800 - 55 * N,
            x: 550 - N * (3 + getCrossroadsNum(n) - 2 * (3 + getCrossroadsNum(n)) * r.left[l] / (S + n) - (3 + getCrossroadsNum(n)) * (r.front[l] + r.return[l]) / (S + n)) / 2,
            value: 0,
            symbolSize: [(3 + getCrossroadsNum(n)) * (r.front[l] + r.return[l]) / (S + n), 0],
            symbolOffset: [0, 0],
            symbol: "rect",
            itemStyle: {color: "#159E56"},
            label: {show: !1}
        }, {
            name: "节点4-3",
            y: 800 - 55 * N,
            x: 550 + N * (3 + getCrossroadsNum(n) - (3 + getCrossroadsNum(n)) * r.right[l] / (S + n)) / 2,
            value: 0,
            symbolSize: [(3 + getCrossroadsNum(n)) * r.right[l] / (S + n), 0],
            symbolOffset: [0, 0],
            symbol: "rect",
            itemStyle: {color: "#159E56"},
            label: {show: !1}
        }, {
            name: "节点5",
            x: 450,
            y: 800 - 15 * N,
            value: 0,
            symbolSize: [0 == getCrossroadsNum(f) ? 0 : 3 + getCrossroadsNum(f), 80],
            symbolOffset: [0, 0],
            symbol: "rect",
            itemStyle: {color: "#159E56"},
            label: {
                normal: {
                    show: 0 != f,
                    formatter: Math.round(f) + "",
                    offset: [-25, 0],
                    color: "#000",
                    fontSize: z[0]
                }
            }
        }, {
            name: "节点5-1",
            y: 800 - 55 * N,
            x: 450 - N * (3 + getCrossroadsNum(f) - (3 + getCrossroadsNum(f)) * t.right[l] / (S + f)) / 2,
            value: 0,
            symbolSize: [(3 + getCrossroadsNum(f)) * t.right[l] / (S + f), 0],
            symbolOffset: [0, 0],
            symbol: "rect",
            itemStyle: {color: "#159E56"},
            label: {show: !1}
        }, {
            name: "节点5-2",
            y: 800 - 55 * N,
            x: 450 - N * (3 + getCrossroadsNum(f) - 2 * (3 + getCrossroadsNum(f)) * t.right[l] / (S + f) - (3 + getCrossroadsNum(f)) * (s.front[l] + r.return[l]) / (S + f)) / 2,
            value: 0,
            symbolSize: [(3 + getCrossroadsNum(f)) * (s.front[l] + r.return[l]) / (S + f), 0],
            symbolOffset: [0, 0],
            symbol: "rect",
            itemStyle: {color: "#159E56"},
            label: {show: !1}
        }, {
            name: "节点5-3",
            y: 800 - 55 * N,
            x: 450 + N * (3 + getCrossroadsNum(f) - (3 + getCrossroadsNum(f)) * e.left[l] / (S + f)) / 2,
            value: 0,
            symbolSize: [(3 + getCrossroadsNum(f)) * e.left[l] / (S + f), 0],
            symbolOffset: [0, 0],
            symbol: "rect",
            itemStyle: {color: "#159E56"},
            label: {show: !1}
        }, {
            name: "节点6",
            x: 450,
            y: 200,
            value: 0,
            symbolSize: [0 == getCrossroadsNum(i) ? 0 : 3 + getCrossroadsNum(i), 110],
            symbol: "rect",
            symbolOffset: [0, 0],
            itemStyle: {color: "#E50100"},
            label: {
                normal: {
                    show: 0 != i,
                    formatter: Math.round(i) + "",
                    offset: [-25, 15],
                    color: "#000",
                    fontSize: z[0]
                }
            }
        }, {
            name: "节点6-1",
            y: 200 + 55 * N,
            x: 450 - N * (3 + getCrossroadsNum(i) - (3 + getCrossroadsNum(i)) * s.right[l] / (S + i)) / 2,
            value: 0,
            symbolSize: [(3 + getCrossroadsNum(i)) * s.right[l] / (S + i), 0],
            symbolOffset: [0, 0],
            symbol: "rect",
            itemStyle: {color: "#E50100"},
            label: {show: !1}
        }, {
            name: "节点6-2",
            y: 200 + 55 * N,
            x: 450 - N * (3 + getCrossroadsNum(i) - 2 * (3 + getCrossroadsNum(i)) * s.right[l] / (S + i) - (3 + getCrossroadsNum(i)) * (s.front[l] + s.return[l]) / (S + i)) / 2,
            value: 0,
            symbolSize: [(3 + getCrossroadsNum(i)) * (s.front[l] + s.return[l]) / (S + i), 0],
            symbolOffset: [0, 0],
            symbol: "rect",
            itemStyle: {color: "#E50100"},
            label: {show: !1}
        }, {
            name: "节点6-3",
            y: 200 + 55 * N,
            x: 450 + N * (3 + getCrossroadsNum(i) - (3 + getCrossroadsNum(i)) * s.left[l] / (S + i)) / 2,
            value: 0,
            symbolSize: [(3 + getCrossroadsNum(i)) * s.left[l] / (S + i), 0],
            symbolOffset: [0, 0],
            symbol: "rect",
            itemStyle: {color: "#E50100"},
            label: {show: !1}
        }, {
            name: "节点7",
            x: 800 - 15 * N,
            y: 550,
            value: 0,
            symbolSize: [80, 0 == getCrossroadsNum(u) ? 0 : 3 + getCrossroadsNum(u)],
            symbolOffset: [0, 0],
            symbol: "rect",
            itemStyle: {color: "#FF8801"},
            label: {
                normal: {
                    show: 0 != u,
                    formatter: Math.round(u) + "",
                    offset: [0, 17],
                    color: "#000",
                    fontSize: z[0]
                }
            }
        }, {
            name: "节点7-1",
            x: 800 - 55 * N,
            y: 550 + N * (3 + getCrossroadsNum(u) - (3 + getCrossroadsNum(u)) * r.right[l] / (S + u)) / 2,
            value: 0,
            symbolSize: [0, (3 + getCrossroadsNum(u)) * r.right[l] / (S + u)],
            symbolOffset: [0, 0],
            symbol: "rect",
            itemStyle: {color: "#FF8801"},
            label: {show: !1}
        }, {
            name: "节点7-2",
            x: 800 - 55 * N,
            y: 550 + N * (3 + getCrossroadsNum(u) - 2 * (3 + getCrossroadsNum(u)) * r.right[l] / (S + u) - (3 + getCrossroadsNum(u)) * (t.front[l] + e.return[l]) / (S + u)) / 2,
            value: 0,
            symbolSize: [0, (3 + getCrossroadsNum(u)) * (t.front[l] + e.return[l]) / (S + u)],
            symbolOffset: [0, 0],
            symbol: "rect",
            itemStyle: {color: "#FF8801"},
            label: {show: !1}
        }, {
            name: "节点7-3",
            x: 800 - 55 * N,
            y: 550 - N * (3 + getCrossroadsNum(u) - (3 + getCrossroadsNum(u)) * s.left[l] / (S + u)) / 2,
            value: 0,
            symbolSize: [0, (3 + getCrossroadsNum(u)) * s.left[l] / (S + u)],
            symbolOffset: [0, 0],
            symbol: "rect",
            itemStyle: {color: "#FF8801"},
            label: {show: !1}
        }, {
            name: "节点8",
            x: 800,
            y: 450,
            value: 2e3,
            symbolSize: [110, 0 == getCrossroadsNum(a) ? 0 : 3 + getCrossroadsNum(a)],
            symbolOffset: [0, 0],
            symbol: "rect",
            itemStyle: {color: "#FF8801"},
            label: {
                normal: {
                    show: 0 != a,
                    formatter: Math.round(a) + "",
                    offset: [-15, -17],
                    color: "#000",
                    fontSize: z[0]
                }
            }
        }, {
            name: "节点8-1",
            x: 800 - 55 * N,
            y: 450 - N * (3 + getCrossroadsNum(a) - (3 + getCrossroadsNum(a)) * e.right[l] / (S + a)) / 2,
            value: 0,
            symbolSize: [0, (3 + getCrossroadsNum(a)) * e.right[l] / (S + a)],
            symbolOffset: [0, 0],
            symbol: "rect",
            itemStyle: {color: "#FF8801"},
            label: {show: !1}
        }, {
            name: "节点8-2",
            x: 800 - 55 * N,
            y: 450 - N * (3 + getCrossroadsNum(a) - 2 * (3 + getCrossroadsNum(a)) * e.right[l] / (S + a) - (3 + getCrossroadsNum(a)) * (e.front[l] + e.return[l]) / (S + a)) / 2,
            value: 0,
            symbolSize: [0, (3 + getCrossroadsNum(a)) * (e.front[l] + e.return[l]) / (S + a)],
            symbolOffset: [0, 0],
            symbol: "rect",
            itemStyle: {color: "#FF8801"},
            label: {show: !1}
        }, {
            name: "节点8-3",
            x: 800 - 55 * N,
            y: 450 + N * (3 + getCrossroadsNum(a) - (3 + getCrossroadsNum(a)) * e.left[l] / (S + a)) / 2,
            value: 0,
            symbolSize: [0, (3 + getCrossroadsNum(a)) * e.left[l] / (S + a)],
            symbolOffset: [0, 0],
            symbol: "rect",
            itemStyle: {color: "#FF8801"},
            label: {show: !1}
        }, {
            name: "节点9",
            x: 200,
            y: 450,
            value: 0,
            symbol: "triangle",
            symbolSize: [0 == getCrossroadsNum(y) ? 0 : 2 * (3 + getCrossroadsNum(y)), 40],
            symbolOffset: [-40, 0],
            symbolRotate: 90,
            itemStyle: {color: "#5B47C2"},
            label: {show: !1}
        }, {
            name: "节点10",
            x: 800,
            y: 550,
            symbol: "triangle",
            symbolSize: [0 == getCrossroadsNum(u) ? 0 : 2 * (3 + getCrossroadsNum(u)), 40],
            symbolOffset: [40, 0],
            symbolRotate: -90,
            itemStyle: {color: "#FF8801"},
            label: {show: !1}
        }, {
            name: "节点11",
            x: 450,
            y: 800,
            symbol: "triangle",
            symbolSize: [0 == getCrossroadsNum(f) ? 0 : 2 * (3 + getCrossroadsNum(f)), 40],
            symbolOffset: [0, 40],
            symbolRotate: 180,
            itemStyle: {color: "#159E56"},
            label: {show: !1}
        }, {
            name: "节点12",
            x: 550,
            y: 200,
            symbol: "triangle",
            symbolSize: [0 == getCrossroadsNum(d) ? 0 : 2 * (3 + getCrossroadsNum(d)), 40],
            symbolOffset: [0, -40],
            symbolRotate: 0,
            itemStyle: {color: "#E50100"},
            label: {show: !1}
        }, {
            name: C.YY_ROAD + "w", label: {
                normal: {
                    show: 0 != m, formatter: function () {
                        return C.YY_ROAD.split("").join("\n")
                    }, color: "#000000", fontWeight: "bold", fontSize: z[2], rotate: 90
                }
            }, x: 50, y: 500, symbolOffset: [0, 0], symbolSize: [1, 0], itemStyle: {}
        }, {
            name: C.YY_ROAD + "e", label: {
                normal: {
                    show: 0 != a, formatter: function () {
                        return C.YY_ROAD.split("").join("\n")
                    }, color: "#000000", fontWeight: "bold", fontSize: z[2], rotate: 90
                }
            }, x: 950, y: 500, symbolOffset: [0, 0], symbolSize: [1, 0], itemStyle: {color: "red"}
        }, {
            name: C.XX_ROAD + "n",
            label: {
                normal: {
                    show: 0 != i,
                    formatter: C.XX_ROAD,
                    color: "#000000",
                    fontWeight: "bold",
                    fontSize: z[2],
                    rotate: 90
                }
            },
            x: 500,
            y: 50,
            symbolOffset: [0, 0],
            symbolSize: [1, 0],
            itemStyle: {color: "red"}
        }, {
            name: C.XX_ROAD + "s",
            label: {
                normal: {
                    show: 0 != n,
                    formatter: C.XX_ROAD,
                    color: "#000000",
                    fontWeight: "bold",
                    fontSize: z[2],
                    rotate: 90
                }
            },
            x: 500,
            y: 950,
            symbolOffset: [0, 0],
            symbolSize: [1, 0],
            itemStyle: {color: "red"}
        }, {
            name: "sCount",
            label: {normal: {show: 0 != n && "COUNT" == o, formatter: f + n + "", color: "#000000", fontSize: z[1]}},
            x: 500,
            y: 850,
            symbolOffset: [0, 10],
            symbolSize: [1, 0],
            itemStyle: {color: "red"}
        }, {
            name: "nCount",
            label: {normal: {show: 0 != n && "COUNT" == o, formatter: d + i + "", color: "#000000", fontSize: z[1]}},
            x: 500,
            y: 150,
            symbolOffset: [0, -10],
            symbolSize: [1, 0],
            itemStyle: {color: "red"}
        }, {
            name: "WCount",
            label: {normal: {show: 0 != n && "COUNT" == o, formatter: y + m + "", color: "#000000", fontSize: z[1]}},
            x: 150,
            y: 500,
            symbolOffset: [-10, 0],
            symbolSize: [1, 0],
            itemStyle: {color: "red"}
        }, {
            name: "eCount",
            label: {normal: {show: 0 != n && "COUNT" == o, formatter: u + a + "", color: "#000000", fontSize: z[1]}},
            x: 850,
            y: 500,
            symbolOffset: [10, 0],
            symbolSize: [1, 0],
            itemStyle: {color: "red"}
        }, {
            name: "Eupper",
            label: {
                normal: {
                    show: 0 != e.right[l],
                    formatter: Math.round(e.right[l]) + "",
                    color: "#000000",
                    fontSize: z[3]
                }
            },
            x: 650,
            y: 420,
            symbolOffset: [0, 0],
            symbolSize: [1, 0],
            itemStyle: {}
        }, {
            name: "Ecenter",
            symbolRotate: 90,
            label: {
                normal: {
                    show: 0 != e.front[l],
                    formatter: Math.round(e.front[l]) + "",
                    color: "#000000",
                    fontSize: z[3]
                }
            },
            x: 610,
            y: 450,
            symbolOffset: [0, 0],
            symbolSize: [1, 0],
            itemStyle: {}
        }, {
            name: "Edown",
            symbolRotate: 90,
            label: {
                normal: {
                    show: 0 != e.left[l],
                    formatter: Math.round(e.left[l]) + "",
                    color: "#000000",
                    fontSize: z[3]
                }
            },
            x: 650,
            y: 480,
            symbolOffset: [0, 0],
            symbolSize: [1, 0],
            itemStyle: {}
        }, {
            name: "Wupper",
            symbolRotate: 90,
            label: {
                normal: {
                    show: 0 != t.left[l],
                    formatter: Math.round(t.left[l]) + "",
                    color: "#000000",
                    fontSize: z[3]
                }
            },
            x: 350,
            y: 520,
            symbolOffset: [0, 0],
            symbolSize: [1, 0],
            itemStyle: {}
        }, {
            name: "Wcenter",
            symbolRotate: 90,
            label: {
                normal: {
                    show: 0 != t.front[l],
                    formatter: Math.round(t.front[l]) + "",
                    color: "#000000",
                    fontSize: z[3]
                }
            },
            x: 390,
            y: 550,
            symbolOffset: [0, 0],
            symbolSize: [1, 0],
            itemStyle: {}
        }, {
            name: "Wdown",
            symbolRotate: 90,
            label: {
                normal: {
                    show: 0 != t.right[l],
                    formatter: Math.round(t.right[l]) + "",
                    color: "#000000",
                    fontSize: z[3]
                }
            },
            x: 350,
            y: 580,
            symbolOffset: [0, 0],
            symbolSize: [1, 0],
            itemStyle: {}
        }, {
            name: "Supper",
            symbolRotate: 90,
            label: {
                normal: {
                    show: 0 != r.left[l],
                    formatter: Math.round(r.left[l]) + "",
                    color: "#000000",
                    fontSize: z[3]
                }
            },
            x: 510,
            y: 670,
            symbolOffset: [0, -10],
            symbolSize: [1, 0],
            itemStyle: {}
        }, {
            name: "Scenter",
            symbolRotate: 90,
            label: {
                normal: {
                    show: 0 != r.front[l],
                    formatter: Math.round(r.front[l]) + "",
                    color: "#000000",
                    fontSize: z[3]
                }
            },
            x: 550,
            y: 610,
            symbolOffset: [0, 5],
            symbolSize: [1, 0],
            itemStyle: {}
        }, {
            name: "Sdown",
            symbolRotate: 90,
            label: {
                normal: {
                    show: 0 != r.right[l],
                    formatter: Math.round(r.right[l]) + "",
                    color: "#000000",
                    fontSize: z[3]
                }
            },
            x: 590,
            y: 670,
            symbolOffset: [0, -10],
            symbolSize: [1, 0],
            itemStyle: {}
        }, {
            name: "Nupper",
            symbolRotate: 90,
            label: {
                normal: {
                    show: 0 != s.right[l],
                    formatter: Math.round(s.right[l]) + "",
                    color: "#000000",
                    fontSize: z[3]
                }
            },
            x: 410,
            y: 330,
            symbolOffset: [0, 10],
            symbolSize: [1, 0],
            itemStyle: {}
        }, {
            name: "Ncenter",
            symbolRotate: 90,
            label: {
                normal: {
                    show: 0 != s.front[l],
                    formatter: Math.round(s.front[l]) + "",
                    color: "#000000",
                    fontSize: z[3]
                }
            },
            x: 450,
            y: 390,
            symbolOffset: [0, -5],
            symbolSize: [1, 0],
            itemStyle: {}
        }, {
            name: "Ndown",
            symbolRotate: 90,
            label: {
                normal: {
                    show: 0 != s.left[l],
                    formatter: Math.round(s.left[l]) + "",
                    color: "#000000",
                    fontSize: z[3]
                }
            },
            x: 490,
            y: 330,
            symbolOffset: [0, 10],
            symbolSize: [1, 0],
            itemStyle: {}
        }],
        links: [{
            source: "节点1-1",
            target: "节点3-1",
            label: {normal: {show: !1}},
            lineStyle: {
                normal: {
                    width: 0 < t.left[l] ? (3 + getCrossroadsNum(m)) * t.left[l] / (S + m) < 1 ? 1 : (3 + getCrossroadsNum(m)) * t.left[l] / (S + m) : 0,
                    curveness: -.5,
                    color: "#5B47C2"
                }
            }
        }, {
            source: "节点1-2",
            target: "节点2-2",
            value: t.return[l],
            label: {
                normal: {
                    show: 0 != t.return[l],
                    position: "middle",
                    fontSize: z[3],
                    color: "#000000",
                    formatter: function (o) {
                        return Math.round(o.value)
                    }
                }
            },
            lineStyle: {
                normal: {
                    width: 0 < t.return[l] ? (3 + getCrossroadsNum(m)) * t.return[l] / (S + m) < 1 ? 1 : (3 + getCrossroadsNum(m)) * t.return[l] / (S + m) : 0,
                    curveness: 0,
                    type: "dotted",
                    color: "#5B47C2"
                }
            }
        }, {
            source: "节点1-2",
            target: "节点7-2",
            label: {normal: {show: !1}},
            lineStyle: {
                normal: {
                    width: 0 < t.front[l] ? (3 + getCrossroadsNum(m)) * t.front[l] / (S + m) < 1 ? 1 : (3 + getCrossroadsNum(m)) * t.front[l] / (S + m) : 0,
                    curveness: 0,
                    color: "#5B47C2"
                }
            }
        }, {
            source: "节点6-1",
            target: "节点2-1",
            label: {normal: {show: !1}},
            lineStyle: {
                normal: {
                    width: 0 < s.right[l] ? (3 + getCrossroadsNum(i)) * s.right[l] / (S + i) < 1 ? 1 : (3 + getCrossroadsNum(i)) * s.right[l] / (S + i) : 0,
                    curveness: .5,
                    color: "#E50100"
                }
            }
        }, {
            source: "节点6-2",
            target: "节点3-2",
            value: s.return[l],
            label: {
                normal: {
                    show: 0 != s.return[l],
                    position: "middle",
                    fontSize: z[3],
                    color: "#000000",
                    formatter: function (o) {
                        return Math.round(o.value)
                    }
                }
            },
            lineStyle: {
                normal: {
                    width: 0 < s.return[l] ? (3 + getCrossroadsNum(i)) * s.return[l] / (S + i) < 1 ? 1 : (3 + getCrossroadsNum(i)) * s.return[l] / (S + i) : 0,
                    curveness: 0,
                    type: "dotted",
                    color: "#E50100"
                }
            }
        }, {
            source: "节点1-3",
            target: "节点5-1",
            label: {normal: {show: !1}},
            lineStyle: {
                normal: {
                    width: 0 < t.right[l] ? (3 + getCrossroadsNum(m)) * t.right[l] / (S + m) < 1 ? 1 : (3 + getCrossroadsNum(m)) * t.right[l] / (S + m) : 0,
                    curveness: .5,
                    color: "#5B47C2"
                }
            }
        }, {
            source: "节点8-2",
            target: "节点2-2",
            lineStyle: {
                normal: {
                    width: 0 < e.front[l] ? (3 + getCrossroadsNum(a)) * e.front[l] / (S + a) < 1 ? 1 : (3 + getCrossroadsNum(a)) * e.front[l] / (S + a) : 0,
                    curveness: 0,
                    color: "#FF8801"
                }
            }
        }, {
            source: "节点6-2",
            target: "节点5-2",
            lineStyle: {
                normal: {
                    width: 0 < s.front[l] ? (3 + getCrossroadsNum(i)) * s.front[l] / (S + i) < 1 ? 1 : (3 + getCrossroadsNum(i)) * s.front[l] / (S + i) : 0,
                    curveness: 0,
                    color: "#E50100"
                }
            }
        }, {
            source: "节点4-2",
            target: "节点5-2",
            value: r.return[l],
            label: {
                normal: {
                    show: 0 != r.return[l],
                    position: "middle",
                    fontSize: z[3],
                    color: "#000000",
                    formatter: function (o) {
                        return Math.round(o.value)
                    }
                }
            },
            lineStyle: {
                normal: {
                    width: 0 < r.return[l] ? (3 + getCrossroadsNum(n)) * r.return[l] / (S + n) < 1 ? 1 : (3 + getCrossroadsNum(n)) * r.return[l] / (S + n) : 0,
                    curveness: 0,
                    type: "dotted",
                    color: "#159E56"
                }
            }
        }, {
            source: "节点6-3",
            target: "节点7-3",
            lineStyle: {
                normal: {
                    width: 0 < s.left[l] ? (3 + getCrossroadsNum(i)) * s.left[l] / (S + i) < 1 ? 1 : (3 + getCrossroadsNum(i)) * s.left[l] / (S + i) : 0,
                    curveness: -.5,
                    color: "#E50100"
                }
            }
        }, {
            source: "节点8-1",
            target: "节点3-3",
            lineStyle: {
                normal: {
                    width: 0 < e.right[l] ? (3 + getCrossroadsNum(a)) * e.right[l] / (S + a) < 1 ? 1 : (3 + getCrossroadsNum(a)) * e.right[l] / (S + a) : 0,
                    curveness: .5,
                    color: "#FF8801"
                }
            }
        }, {
            source: "节点8-3",
            target: "节点5-3",
            lineStyle: {
                normal: {
                    width: 0 < e.left[l] ? (3 + getCrossroadsNum(a)) * e.left[l] / (S + a) < 1 ? 1 : (3 + getCrossroadsNum(a)) * e.left[l] / (S + a) : 0,
                    curveness: -.5,
                    color: "#FF8801"
                }
            }
        }, {
            source: "节点8-2",
            target: "节点7-2",
            value: e.return[l],
            label: {
                normal: {
                    show: 0 != e.return[l],
                    position: "middle",
                    fontSize: z[3],
                    color: "#000000",
                    formatter: function (o) {
                        return Math.round(o.value)
                    }
                }
            },
            lineStyle: {
                normal: {
                    width: 0 < e.return[l] ? (3 + getCrossroadsNum(a)) * e.return[l] / (S + a) < 1 ? 1 : (3 + getCrossroadsNum(a)) * e.return[l] / (S + a) : 0,
                    curveness: 0,
                    type: "dotted",
                    color: "#FF8801"
                }
            }
        }, {
            source: "节点4-2",
            target: "节点3-2",
            lineStyle: {
                normal: {
                    width: 0 < r.front[l] ? (3 + getCrossroadsNum(n)) * r.front[l] / (S + n) < 1 ? 1 : (3 + getCrossroadsNum(n)) * r.front[l] / (S + n) : 0,
                    curveness: 0,
                    color: "#159E56"
                }
            }
        }, {
            source: "节点4-3",
            target: "节点7-1",
            lineStyle: {
                normal: {
                    width: 0 < r.right[l] ? (3 + getCrossroadsNum(n)) * r.right[l] / (S + n) < 1 ? 1 : (3 + getCrossroadsNum(n)) * r.right[l] / (S + n) : 0,
                    curveness: .5,
                    color: "#159E56"
                }
            }
        }, {
            source: "节点4-1",
            target: "节点2-3",
            lineStyle: {
                normal: {
                    width: 0 < r.left[l] ? (3 + getCrossroadsNum(n)) * r.left[l] / (S + n) < 1 ? 1 : (3 + getCrossroadsNum(n)) * r.left[l] / (S + n) : 0,
                    curveness: -.5,
                    color: "#159E56"
                }
            }
        }, {
            source: "节点1",
            target: "节点7",
            lineStyle: {
                normal: {
                    width: 0 < g && "COUNT" == o ? (3 + getCrossroadsNum(m)) * g / (S + m) < 1 ? 1 : (3 + getCrossroadsNum(m)) * g / (S + m) : 0,
                    curveness: 0,
                    type: "dotted",
                    color: "#5B47C2"
                }
            }
        }, {
            source: "节点8",
            target: "节点2",
            lineStyle: {
                normal: {
                    width: 0 < c && "COUNT" == o ? (3 + getCrossroadsNum(a)) * g / (S + a) < 1 ? 1 : (3 + getCrossroadsNum(a)) * c / (S + a) : 0,
                    curveness: 0,
                    type: "dotted",
                    color: "#FF8801"
                }
            }
        }, {
            source: "节点4",
            target: "节点3",
            lineStyle: {
                normal: {
                    width: 0 < b && "COUNT" == o ? (3 + getCrossroadsNum(n)) * b / (S + n) < 1 ? 1 : (3 + getCrossroadsNum(n)) * b / (S + n) : 0,
                    curveness: 0,
                    type: "dotted",
                    color: "#159E56"
                }
            }
        }, {
            source: "节点6",
            target: "节点5",
            lineStyle: {
                normal: {
                    width: 0 < h && "COUNT" == o ? (3 + getCrossroadsNum(i)) * h / (S + i) < 1 ? 1 : (3 + getCrossroadsNum(i)) * h / (S + i) : 0,
                    curveness: 0,
                    type: "dotted",
                    color: "#E50100"
                }
            }
        }],
        lineStyle: {normal: {opacity: 1, width: 2, curveness: 0}}
    }
}