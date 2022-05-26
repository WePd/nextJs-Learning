### nextJs 笔记

#### 1. 基于文件的路由

```js
就例如

pages
 -----index.js   ------------>当路由为localhopst:8000/pages的时候就会显示index.js
 -----product
      -------index.js --------> localhost:8000/pages/product的时候就显示的是index.js文件
      -------[id].js  ---------> 相当于一个动态的路由，id是可以自定义的
```
