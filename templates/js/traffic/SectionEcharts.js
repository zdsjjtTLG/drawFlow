var sectionBaseEcharts = {
    name: "Graph数据管理js对象",
    data: {name: {}, columnName: "COUNT", e: {}, w: {}, s: {}, n: {}},

    // e: 数据, t: "COUNT", o: confObj
    setData: function (e, t, o, a) {
        sectionBaseEcharts.data.name = {},
            sectionBaseEcharts.data.columnName = t,
            sectionBaseEcharts.data.e = {},
            sectionBaseEcharts.data.w = {},
            sectionBaseEcharts.data.s = {},
            sectionBaseEcharts.data.n = {},
            setsectionBaseEchartsDirection(e, t),
            sectionBaseRule.maxWidth = null != o.linksSize ? o.linksSize : a.linksSize,
            sectionBaseRule.arrayFont = null != o.arrayFont ? o.arrayFont : a.arrayFont,
            sectionBaseRule.draw = a.draw,
            o.title = null != o.title ? o.title : {},
            sectionBaseRule.title.name = null != o.title.name ? o.title.name : a.title.name,
            sectionBaseRule.title.size = null != o.title.size ? o.title.size : a.title.size,
            sectionBaseRule.title.left = null != o.title.left ? o.title.left : a.title.left,
            sectionBaseRule.title.top = null != o.title.top ? o.title.top : a.title.top
    },
    getOption: getOptionSection
},
    sectionBaseRule = {
    base: 4e3,
    maxWidth: 10,
    arrayFont: [],
    data: [],
    dir: "",
    draw: 0,
    title: {name: "", size: 0, left: 0, top: 0}
};

function getsectionBaseEchartsTypeData(e, t, o, a) {
    e[t] = {}, e[t][a] = o[a]
}

function setsectionBaseEchartsDirection(e, t) {
    for (var o = 0; o < e.length; o++) "东" == e[o].SECTION_DIRECTION ? (sectionBaseRule.dir = "东", "ew" == e[o].SECTION_DIRE ? getsectionBaseEchartsTypeData(sectionBaseEcharts.data.e, "C", e[o], t) : "we" == e[o].SECTION_DIRE && getsectionBaseEchartsTypeData(sectionBaseEcharts.data.e, "J", e[o], t)) : "西" == e[o].SECTION_DIRECTION ? (sectionBaseRule.dir = "西", "we" == e[o].SECTION_DIRE ? getsectionBaseEchartsTypeData(sectionBaseEcharts.data.w, "C", e[o], t) : "ew" == e[o].SECTION_DIRE && getsectionBaseEchartsTypeData(sectionBaseEcharts.data.w, "J", e[o], t)) : "南" == e[o].SECTION_DIRECTION ? (sectionBaseRule.dir = "南", "sn" == e[o].SECTION_DIRE ? getsectionBaseEchartsTypeData(sectionBaseEcharts.data.s, "C", e[o], t) : "ns" == e[o].SECTION_DIRE && getsectionBaseEchartsTypeData(sectionBaseEcharts.data.s, "J", e[o], t)) : "北" == e[o].SECTION_DIRECTION && (sectionBaseRule.dir = "北", "ns" == e[o].SECTION_DIRE ? getsectionBaseEchartsTypeData(sectionBaseEcharts.data.n, "C", e[o], t) : "sn" == e[o].SECTION_DIRE && getsectionBaseEchartsTypeData(sectionBaseEcharts.data.n, "J", e[o], t)), 0 == o && (sectionBaseEcharts.data.name.XX_ROAD = e[o].XX_ROAD, sectionBaseEcharts.data.name.YY_ROAD = e[o].YY_ROAD)
}

function getOptionSection() {
    var e = new Date, t = e.getMonth() + 1, o = e.getDate();
    1 <= t && t <= 9 && (t = "0" + t), 0 <= o && o <= 9 && (o = "0" + o);
    var a = e.getFullYear() + "-" + t + "-" + o + " " + e.getHours() + ":" + e.getMinutes() + ":" + e.getSeconds();
    return {
        title: {
            text: sectionBaseRule.title.name,
            left: sectionBaseRule.title.left,
            top: sectionBaseRule.title.top,
            textStyle: {fontSize: sectionBaseRule.title.size}
        },
        toolbox: {
            show: !0,
            x: "85%",
            y: "15%",
            itemSize: 25,
            feature: {
                saveAsImage: {
                    name: "断面流量图" + a,
                    show: !0,
                    pixelRatio: 1,
                    icon: "image://images/traffic/save.png"
                }
            }
        },
        animationDurationUpdate: 1e3,
        animationEasingUpdate: "quinticInOut",
        series: getSeriesTypeSection(sectionBaseRule.arrayFont)
    }
}

function initDataSection(e, t) {
    var o = e;
    return 0 == Object.keys(o).length ? (o.C = {}, o.J = {}, o.C[t] = 0, o.J[t] = 0) : null == o.C ? (o.C = {}, o.C[t] = 0) : null == o.J && (o.J = {}, o.J[t] = 0), o
}

function getSectionNum(e) {
    var t = Math.ceil(e / (0 == sectionBaseRule.base ? 300 : sectionBaseRule.base));
    return t >= sectionBaseRule.maxWidth ? t = sectionBaseRule.maxWidth : t <= 0 && (t = 0), t
}

function getMaxWidthSection(e) {
    for (var t = e[0], o = 0; o < e.length - 1; o++) e[o + 1] > t && (t = e[o + 1]);
    sectionBaseRule.base = Math.ceil(t / sectionBaseRule.maxWidth)
}

function getSeriesTypeSection(e) {
    var t = sectionBaseEcharts.data.columnName, o = initDataSection(sectionBaseEcharts.data.e, t),
        a = initDataSection(sectionBaseEcharts.data.w, t), s = initDataSection(sectionBaseEcharts.data.s, t),
        l = initDataSection(sectionBaseEcharts.data.n, t);
    sectionBaseRule.data[0] = o.C[t], sectionBaseRule.data[1] = a.C[t], sectionBaseRule.data[2] = s.C[t], sectionBaseRule.data[3] = l.C[t], sectionBaseRule.data[4] = o.J[t], sectionBaseRule.data[5] = a.J[t], sectionBaseRule.data[6] = s.J[t], sectionBaseRule.data[7] = l.J[t], getMaxWidthSection(sectionBaseRule.data);
    var i = sectionBaseEcharts.data.name, n = "#383C48", c = 0, m = 0, r = 0, S = 0;
    return "东" == sectionBaseRule.dir ? c = sectionBaseRule.draw : "西" == sectionBaseRule.dir ? m = sectionBaseRule.draw : "南" == sectionBaseRule.dir ? r = sectionBaseRule.draw : "北" == sectionBaseRule.dir && (S = sectionBaseRule.draw), {
        name: t,
        type: "graph",
        layout: "none",
        hoverAnimation: !1,
        data: [{
            name: "节点1",
            x: 200,
            y: 550,
            value: 0,
            fixed: !0,
            symbolSize: [90 + m, 0 == getSectionNum(a.C[t]) ? 7 : 3 + getSectionNum(a.C[t])],
            symbolOffset: [0, 0],
            symbol: "rect",
            itemStyle: {color: 0 == getSectionNum(a.C[t]) ? n : "#5B47C2"},
            label: {
                normal: {
                    show: 0 != getSectionNum(a.C[t]),
                    formatter: a.C[t] + "",
                    offset: [15, 17],
                    color: "#000",
                    fontSize: e[0]
                }
            }
        }, {
            name: "节点2",
            x: 200,
            y: 450,
            value: 0,
            symbolSize: [90 + m, 0 == getSectionNum(a.J[t]) ? 7 : 3 + getSectionNum(a.J[t])],
            symbolOffset: [30, 0],
            symbol: "rect",
            itemStyle: {color: 0 == getSectionNum(a.J[t]) ? n : "#5B47C2"},
            label: {
                normal: {
                    show: 0 != a.J[t],
                    formatter: a.J[t] + "",
                    offset: [-15, -17],
                    color: "#000",
                    fontSize: e[0]
                }
            }
        }, {
            name: "节点3",
            x: 550,
            y: 200,
            value: 0,
            symbolSize: [0 == getSectionNum(l.J[t]) ? 7 : 3 + getSectionNum(l.J[t]), 90 + S],
            symbol: "rect",
            symbolOffset: [0, 30],
            itemStyle: {color: 0 == getSectionNum(l.J[t]) ? n : "#E50100"},
            label: {
                normal: {
                    show: 0 != l.J[t],
                    formatter: l.J[t] + "",
                    offset: [25, -15],
                    color: "#000",
                    fontSize: e[0]
                }
            }
        }, {
            name: "节点4",
            x: 550,
            y: 800,
            value: 0,
            symbolSize: [0 == getSectionNum(s.C[t]) ? 7 : 3 + getSectionNum(s.C[t]), 90 + r],
            symbol: "rect",
            symbolOffset: [0, 0],
            itemStyle: {color: 0 == getSectionNum(s.C[t]) ? n : "#159E56"},
            label: {
                normal: {
                    show: 0 != getSectionNum(s.C[t]),
                    formatter: s.C[t] + "",
                    offset: [25, -15],
                    color: "#000",
                    fontSize: e[0]
                }
            }
        }, {
            name: "节点5",
            x: 450,
            y: 800,
            value: 0,
            symbolSize: [0 == getSectionNum(s.J[t]) ? 7 : 3 + getSectionNum(s.J[t]), 90 + r],
            symbolOffset: [0, -30],
            symbol: "rect",
            itemStyle: {color: 0 == getSectionNum(s.J[t]) ? n : "#159E56"},
            label: {
                normal: {
                    show: 0 != s.J[t],
                    formatter: s.J[t] + "",
                    offset: [-25, 15],
                    color: "#000",
                    fontSize: e[0]
                }
            }
        }, {
            name: "节点6",
            x: 450,
            y: 200,
            value: 1605,
            symbolSize: [0 == getSectionNum(l.C[t]) ? 7 : 3 + getSectionNum(l.C[t]), 90 + S],
            symbol: "rect",
            symbolOffset: [0, 0],
            itemStyle: {color: 0 == getSectionNum(l.C[t]) ? n : "#E50100"},
            label: {
                normal: {
                    show: 0 != l.C[t],
                    formatter: l.C[t] + "",
                    offset: [-25, 15],
                    color: "#000",
                    fontSize: e[0]
                }
            }
        }, {
            name: "节点7",
            x: 800,
            y: 550,
            value: 0,
            symbolSize: [90 + c, 0 == getSectionNum(o.J[t]) ? 7 : 3 + getSectionNum(o.J[t])],
            symbolOffset: [-30, 0],
            symbol: "rect",
            itemStyle: {color: 0 == getSectionNum(o.J[t]) ? n : "#FF8801"},
            label: {
                normal: {
                    show: 0 != o.J[t],
                    formatter: o.J[t] + "",
                    offset: [15, 17],
                    color: "#000",
                    fontSize: e[0]
                }
            }
        }, {
            name: "节点8",
            x: 800,
            y: 450,
            value: 2e3,
            symbolSize: [90 + c, 0 == getSectionNum(o.C[t]) ? 7 : 3 + getSectionNum(o.C[t])],
            symbolOffset: [0, 0],
            symbol: "rect",
            itemStyle: {color: 0 == getSectionNum(o.C[t]) ? n : "#FF8801"},
            label: {
                normal: {
                    show: 0 != o.C[t],
                    formatter: o.C[t] + "",
                    offset: [-15, -17],
                    color: "#000",
                    fontSize: e[0]
                }
            }
        }, {
            name: "节点9",
            x: 200,
            y: 450,
            value: 0,
            symbol: "triangle",
            symbolSize: [0 == getSectionNum(a.J[t]) ? 14 : 2 * (3 + getSectionNum(a.J[t])), 40],
            symbolOffset: [-(90 + m) / 2 + 20, 0],
            symbolRotate: 90,
            itemStyle: {color: 0 == getSectionNum(a.J[t]) ? n : "#5B47C2"},
            label: {show: !1}
        }, {
            name: "节点10",
            x: 800,
            y: 550,
            symbol: "triangle",
            symbolSize: [0 == getSectionNum(o.J[t]) ? 14 : 2 * (3 + getSectionNum(o.J[t])), 40],
            symbolOffset: [(90 + c) / 2 - 20, 0],
            symbolRotate: -90,
            itemStyle: {color: 0 == getSectionNum(o.J[t]) ? n : "#FF8801"},
            label: {show: !1}
        }, {
            name: "节点11",
            x: 450,
            y: 800,
            symbol: "triangle",
            symbolSize: [0 == getSectionNum(s.J[t]) ? 14 : 2 * (3 + getSectionNum(s.J[t])), 40],
            symbolOffset: [0, (90 + r) / 2 - 20],
            symbolRotate: 180,
            itemStyle: {color: 0 == getSectionNum(s.J[t]) ? n : "#159E56"},
            label: {show: !1}
        }, {
            name: "节点12",
            x: 550,
            y: 200,
            symbol: "triangle",
            symbolSize: [0 == getSectionNum(l.J[t]) ? 14 : 2 * (3 + getSectionNum(l.J[t])), 40],
            symbolOffset: [0, -(90 + S) / 2 + 20],
            symbolRotate: 0,
            itemStyle: {color: 0 == getSectionNum(l.J[t]) ? n : "#E50100"},
            label: {show: !1}
        }, {
            name: "节点13",
            x: 800,
            y: 450,
            value: 0,
            symbol: "triangle",
            symbolSize: [0 == getSectionNum(o.C[t]) ? 14 : 2 * (3 + getSectionNum(o.C[t])), 40],
            symbolOffset: [-(90 + c) / 2 - 10, 0],
            symbolRotate: 90,
            itemStyle: {color: 0 == getSectionNum(o.C[t]) ? n : "#FF8801"},
            label: {show: !1}
        }, {
            name: "节点14",
            x: 200,
            y: 550,
            value: 0,
            symbol: "triangle",
            symbolSize: [0 == getSectionNum(a.C[t]) ? 14 : 2 * (3 + getSectionNum(a.C[t])), 40],
            symbolOffset: [(90 + m) / 2 + 10, 0],
            symbolRotate: 270,
            itemStyle: {color: 0 == getSectionNum(a.C[t]) ? n : "#5B47C2"},
            label: {show: !1}
        }, {
            name: "节点15",
            x: 550,
            y: 800,
            value: 0,
            symbol: "triangle",
            symbolSize: [0 == getSectionNum(s.C[t]) ? 14 : 2 * (3 + getSectionNum(s.C[t])), 40],
            symbolOffset: [0, -(90 + r) / 2 - 10],
            symbolRotate: 0,
            itemStyle: {color: 0 == getSectionNum(s.C[t]) ? n : "#159E56"},
            label: {show: !1}
        }, {
            name: "节点16",
            x: 450,
            y: 200,
            value: 0,
            symbol: "triangle",
            symbolSize: [0 == getSectionNum(l.C[t]) ? 14 : 2 * (3 + getSectionNum(l.C[t])), 40],
            symbolOffset: [0, (90 + S) / 2 + 10],
            symbolRotate: 180,
            itemStyle: {color: 0 == getSectionNum(l.C[t]) ? n : "#E50100"},
            label: {show: !1}
        }, {
            name: i.YY_ROAD + "w", label: {
                normal: {
                    show: 0 != a.C[t], formatter: function () {
                        return i.XX_ROAD.split("").join("\n")
                    }, color: "#000000", fontWeight: "bold", fontSize: e[2], rotate: 90
                }
            }, x: 50 - m / 2, y: 500, symbolOffset: [0, 0], symbolSize: [1, 0], itemStyle: {}
        }, {
            name: i.YY_ROAD + "e", label: {
                normal: {
                    show: 0 != o.C[t], formatter: function () {
                        return i.XX_ROAD.split("").join("\n")
                    }, color: "#000000", fontWeight: "bold", fontSize: e[2], rotate: 90
                }
            }, x: 950 + c / 2, y: 500, symbolOffset: [0, 0], symbolSize: [1, 0], itemStyle: {color: "red"}
        }, {
            name: i.XX_ROAD + "n",
            label: {
                normal: {
                    show: 0 != l.C[t],
                    formatter: i.YY_ROAD,
                    color: "#000000",
                    fontWeight: "bold",
                    fontSize: e[2],
                    rotate: 90
                }
            },
            x: 500,
            y: 50 - S / 2,
            symbolOffset: [0, 0],
            symbolSize: [1, 0],
            itemStyle: {color: "red"}
        }, {
            name: i.XX_ROAD + "s",
            label: {
                normal: {
                    show: 0 != s.C[t],
                    formatter: i.YY_ROAD,
                    color: "#000000",
                    fontWeight: "bold",
                    fontSize: e[2],
                    rotate: 90
                }
            },
            x: 500,
            y: 950 + r / 2,
            symbolOffset: [0, 0],
            symbolSize: [1, 0],
            itemStyle: {color: "red"}
        }, {
            name: "sCount",
            label: {
                normal: {
                    show: s.J[t] + s.C[t] != 0,
                    formatter: s.J[t] + s.C[t] + "",
                    color: "#000000",
                    fontSize: e[1]
                }
            },
            x: 500,
            y: 850 + r / 2,
            symbolOffset: [0, 0],
            symbolSize: [1, 0],
            itemStyle: {color: "red"}
        }, {
            name: "nCount",
            label: {
                normal: {
                    show: l.J[t] + l.C[t] != 0,
                    formatter: l.J[t] + l.C[t] + "",
                    color: "#000000",
                    fontSize: e[1]
                }
            },
            x: 500,
            y: 150 - S / 2,
            symbolOffset: [0, 0],
            symbolSize: [1, 0],
            itemStyle: {color: "red"}
        }, {
            name: "WCount",
            label: {
                normal: {
                    show: a.J[t] + a.C[t] != 0,
                    formatter: a.J[t] + a.C[t] + "",
                    color: "#000000",
                    fontSize: e[1]
                }
            },
            x: 150 - m / 2,
            y: 500,
            symbolOffset: [0, 0],
            symbolSize: [1, 0],
            itemStyle: {color: "red"}
        }, {
            name: "eCount",
            label: {
                normal: {
                    show: o.J[t] + o.C[t] != 0,
                    formatter: o.J[t] + o.C[t] + "",
                    color: "#000000",
                    fontSize: e[1]
                }
            },
            x: 850 + c / 2,
            y: 500,
            symbolOffset: [0, 0],
            symbolSize: [1, 0],
            itemStyle: {color: "red"}
        }]
    }
}