## 功能

页面加载后，将提供的空气质量数据数组，按照某种逻辑（比如空气质量大于60）进行过滤筛选，最后将符合条件的数据按照一定的格式要求显示在网页上

## 笔记

### sort() 方法

sort() 方法对数组的元素做原地的排序，并返回这个数组

`arr.sort([compareFunction])`

[MDN Array.prototype.sort()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

```javascript
function(a, b) {
    return b[1] - a[1];
}
```