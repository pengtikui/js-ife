## 功能

[IFE 地址](http://ife.baidu.com/task/detail?taskId=15)

getData方法

* 读取id为source的列表，获取其中城市名字及城市对应的空气质量
* 返回一个数组，格式见函数中示例

sortAqiData

* 按空气质量对data进行从小到大的排序
* 返回一个排序后的数组

render

* 将排好序的城市及空气质量指数，输出显示到id位resort的列表中
* 格式见ul中的注释的部分

init()

在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数

## 笔记

### push() 方法

添加一个或多个元素到数组的末尾，并返回数组新的长度（length 属性值）

[MDN Array.prototype.push()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

### sort() 方法

与 task 14 相同，因为排序从小到大排列，所以改为 `return a[1] - b[1];`