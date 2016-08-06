## 功能

[IFE 地址](http://ife.baidu.com/task/detail?taskId=16)

* 用户输入城市名称和空气质量指数后，点击“确认添加”按钮后，就会将用户的输入在进行验证后，添加到下面的表格中，新增一行进行显示
* 用户输入的城市名必须为中英文字符，空气质量指数必须为整数
* 用户输入的城市名字和空气质量指数需要进行前后去空格及空字符处理（trim）
* 用户输入不合规格时，需要给出提示（允许用alert，也可以自行定义提示方式）
* 用户可以点击表格列中的“删除”按钮，删掉那一行的数据

## 笔记

### trim() 方法

trim() 方法会删除一个字符串两端的空白字符，trim() 方法并不影响原字符串本身，它返回的是一个新的字符串

[MDN String.prototype.trim()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)

### match() 方法

当字符串匹配到正则表达式（regular expression）时，match() 方法会提取匹配项

[MDN String.prototype.match()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match)

### target 事件

target 事件属性可返回事件的目标节点（触发该事件的节点），如生成事件的元素、文档或窗口

[W3School target 事件属性](http://www.w3school.com.cn/jsref/event_target.asp)