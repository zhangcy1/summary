#### 图片懒加载
- 先给图片一个占位资源（默认图片）
- 通过 scroll 事件判断图片到达视口
- 获取视口高度（clientHeight），滚动高度（scrollTop），判断图片到达高度后设置图片路径
- getBoundingClientRect 获取图片出现在当前视口中的位置