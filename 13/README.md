## 功能

用户可以在输入框中输入任何内容，点击“确认填写”按钮后，用户输入的内容会显示在“您输入的值是”文字的右边

## 笔记

* onlick
当同一个对象使用 `.onclick` 的写法触发多个方法的时候，后一个方法会把前一个方法覆盖掉
```javascript
window.onload = function(){ 
    var btn = document.getElementById("yuanEvent"); 
    btn.onclick = function(){ 
        alert("第一个事件"); 
    } 
    btn.onclick = function(){ 
        alert("第二个事件"); 
    } 
    btn.onclick = function(){ 
        alert("第三个事件"); 
    } 
}
```
最后只输出第三个事件!

[MDN GlobalEventHandlers.onclick](https://developer.mozilla.org/zh-CN/docs/Web/API/GlobalEventHandlers/onclick)

* addEventListener
[MDN EventTarget.addEventListener()](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)
