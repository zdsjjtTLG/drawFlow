function importJS(e) {
    var t = e.toString();
    document.getElementsByTagName("script");
    newElement = document.createElement("script"), newElement.type = "text/javascript", newElement.src = t, document.getElementsByTagName("head")[0].appendChild(newElement)
};var interSectionFlow = {
    name: "调用断面交叉口echarts对象！",
    confObj: {},
    secBaseFlow: secBaseFlowEcharts,
    crosBaseFlow: crosBaseFlowEcharts
};

function defaultConf(e) {
    return 500 == e ? !(interSectionFlow.confObj = {
        arrayFont: [12, 11, 16, 9],
        linksSize: 8,
        typeStr: "",
        draw: 10,
        title: {name: "", size: 16, left: 0, top: 0}
    }) : 600 == e ? !(interSectionFlow.confObj = {
        arrayFont: [14, 13, 17, 10],
        linksSize: 10,
        typeStr: "",
        draw: 30,
        title: {name: "", size: 17, left: 0, top: 0}
    }) : 700 != e || !(interSectionFlow.confObj = {
        arrayFont: [15, 14, 18, 11],
        linksSize: 12,
        typeStr: "",
        draw: 50,
        title: {name: "", size: 18, left: 0, top: 0}
    })
}

function secBaseFlowEcharts(e) {
    if (!defaultConf(e.divSize)) {
        var t = document.getElementById(e.id);
        $(t).css({width: e.divSize + "px", height: e.divSize + "px"}), null == e.confObj && (e.confObj = {});
        var n, i = echarts.init(t);
        sectionBaseEcharts.setData(e.data, "COUNT", e.confObj, interSectionFlow.confObj), (n = sectionBaseEcharts.getOption()) && "object" == typeof n && (i.setOption(n, !0), i.resize())
    }
}

function crosBaseFlowEcharts(e) {
    if (!defaultConf(e.divSize)) {
        null == e.confObj && (e.confObj = {});
        var t = document.getElementById(e.id);
        $(t).css({
            width: null == e.divSize ? 500 : e.divSize + "px",
            height: null == e.divSize ? 500 : e.divSize + "px"
        });
        var n, i = echarts.init(t);
        crossroadsBaseEcharts.setData(e, "COUNT", e.confObj, interSectionFlow.confObj), (n = crossroadsBaseEcharts.getOption()) && "object" == typeof n && (i.setOption(n, !0), i.resize())
    }
}