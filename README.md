# salt.fetch

独立的`ajax/jsonp`模块。

## 特别说明

`salt.fetch`就是 [nattyFetch](https://github.com/Jias/natty-fetch) 和 [nattyStorage](https://github.com/Jias/natty-storage) 的引用合集，看[源代码](https://github.com/saltjs/salt-fetch/blob/master/src/index.js)便知。

为什么这么做？为了给`salt`的使用者提供一致的开发体验，故将`nattyFetch`工具以`fetch`属性的方式集成在`salt`命名空间下。

## 安装

通过`npm`下载代码，目前最新版本为`2.0.0`

```shell
npm install salt-fetch --save
```

插入代码

```html
<script src="path/to/node_modules/salt-fetch/dist/salt-fetch.js"></script>
```

## 文档

`salt.fetch`的特点和文档，直接见 [nattyFetch](https://github.com/Jias/natty-fetch) 的文档即可。原文档中使用`nattyFetch`的地方，都可以直接使用`salt.fetch`替换，一模一样，如：

原`nattyFetch`文档：

```js
const context = nattyFetch.context({
    urlPrefix: '//example.com/api/'
});
context.create({
    getList: {
        url: 'getList.do',
        plugins: [
            nattyFetch.plugin.soon
        ]
    }
});
module.exports = context.api;
```

使用`salt.fetch`后：

```js
const context = salt.fetch.context({ // 用`salt.fetch`替换`nattyFetch`
    urlPrefix: '//example.com/api/'
});
context.create({
    getList: {
        url: 'getList.do',
        plugins: [
            salt.fetch.plugin.soon // 用`salt.fetch`替换`nattyFetch`
        ]
    }
});
module.exports = context.api;
```

> `salt.fetch`和`nattyFetch`的不同之处：
>
> * `salt.fetch`只有移动端版本。
> * `salt-fetch.js`文件内置了`natty-fetch.js`和`natty-storage.js`两个文件的内容。而`natty-fetch.js`没有内置`natty-storage.js`文件的内容。
