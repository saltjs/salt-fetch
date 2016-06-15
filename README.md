# salt.fetch

独立的`ajax/jsonp`模块。`salt.fetch`就是 [NattyFetch](https://github.com/Jias/natty-fetch) 的引用，看[源代码](https://github.com/saltjs/salt-fetch/blob/master/src/index.js)一眼便知。

## 安装

通过`npm`下载代码，目前最新版本为`1.0.0-rc3`

```shell
npm install salt-fetch@1.0.0-rc3 --save
```

插入代码

```html
<script src="path/to/node_modules/salt-fetch/dist/salt-fetch.js"></script>
```

## 文档

为了给`salt`的使用者提供一致的开发体验，故将`NattyFetch`工具以`fetch`属性的方式集成在`salt`命名空间下。所以，`salt.fetch`的特点和文档，直接见 [NattyFetch](https://github.com/Jias/natty-fetch) 的文档即可。原文档中使用`NattyFetch`的地方，都可以直接使用`salt.fetch`

## 唯一的不同

`salt.fetch`和`NattyFetch`唯一的不同就是`salt.fetch`只有移动端版本。
