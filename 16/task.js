/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var aqiCity = document.getElementById('aqi-city-input').value.trim();
    var aqiValue = document.getElementById('aqi-value-input').value.trim();

    if (!aqiCity.match(/^[A-Za-z\u4E00-\u9FA5]+$/)) {
        alert("城市名称必须为中英文字符！");
        return;
    }
    if (!aqiValue.match(/^\d+$/)) {
        alert("空气质量指数必须为整数！");
        return;
    }

    aqiData[aqiCity] = aqiValue;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var items = "<tr><th>城市</th><th>空气质量</th><th>操作</th></tr>";
    for (var aqiCity in aqiData) {
        items += "<tr><td>"+aqiCity+"</td><td>"+aqiData[aqiCity]+"</td><td><button>删除</button></td></tr>";
    };
    document.getElementById('aqi-table').innerHTML = items;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(target) {
    var tr = target.parentElement.parentElement;
    console.log(tr);
    var strCity = tr.children[0].innerHTML;
    delete aqiData[strCity];

    renderAqiList();
}

function init() {
    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    document.getElementById("add-btn").addEventListener("click", addBtnHandle);

    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    var table = document.getElementById("aqi-table");

    table.addEventListener("click", function(e) {
        if (e.target && e.target.nodeName === "BUTTON") {
            delBtnHandle(e.target);
        }
    })
}

init();