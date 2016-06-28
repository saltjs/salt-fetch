(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("saltFetch", [], factory);
	else if(typeof exports === 'object')
		exports["saltFetch"] = factory();
	else
		root["saltFetch"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

var salt = window.salt = window.salt || {};
var nattyFetch = __webpack_require__(1);
var nattyStorage = __webpack_require__(2);
salt.fetch = nattyFetch;
salt.storage = nattyStorage;

module.exports = {
    fetch: nattyFetch,
    storage: nattyStorage
};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(2));
	else if(typeof define === 'function' && define.amd)
		define("nattyFetch", ["natty-storage"], factory);
	else if(typeof exports === 'object')
		exports["nattyFetch"] = factory(require("natty-storage"));
	else
		root["nattyFetch"] = factory(root["nattyStorage"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

'use strict';

module.exports = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var nattyStorage = __webpack_require__(2);

if (nattyStorage === undefined) {
    console.warn('Please install the `natty-storage` script which is required by `natty-fetch`, go on with' + ' https://www.npmjs.com/package/natty-storage');
}

// 下面两个配置了webpack的alias
var ajax = __webpack_require__(3);
var jsonp = __webpack_require__(5);

var Defer = __webpack_require__(6);
var util = __webpack_require__(4);
var event = __webpack_require__(7);

// 内置插件
var pluginLoop = __webpack_require__(8);
var pluginSoon = __webpack_require__(9);

var extend = util.extend;
var runAsFn = util.runAsFn;
var isAbsoluteUrl = util.isAbsoluteUrl;
var isRelativeUrl = util.isRelativeUrl;
var noop = util.noop;
var isBoolean = util.isBoolean;
var isArray = util.isArray;
var isFunction = util.isFunction;
var sortPlainObjectKey = util.sortPlainObjectKey;
var isEmptyObject = util.isEmptyObject;
var isPlainObject = util.isPlainObject;
var dummyPromise = util.dummyPromise;
var isString = util.isString;

var NULL = null;
var EMPTY = '';
var TRUE = true;
var FALSE = !TRUE;

// 全局默认配置
var defaultGlobalConfig = {

    // 默认参数
    data: {},

    // 请求完成钩子函数
    didFetch: noop,

    // 预处理回调
    fit: noop,

    // 自定义header, 只针对非跨域的ajax有效, 跨域时将忽略自定义header
    header: {},

    // 是否忽律接口自身的并发请求
    ignoreSelfConcurrent: FALSE,

    // 有两种格式配置`jsonp`的值
    // {Boolean}
    // {Array} eg: [TRUE, 'cb', 'j{id}']
    jsonp: FALSE,

    // 是否开启log信息
    log: FALSE,

    // 非GET方式对JSONP无效
    method: 'GET',

    // 是否开启mock模式
    mock: FALSE,

    mockUrl: EMPTY,

    // 全局`mockUrl`前缀
    mockUrlPrefix: EMPTY,

    // 成功回调
    process: noop,

    // 默认不执行重试
    retry: 0,

    // 使用已有的request方法
    request: NULL,

    // 0表示不启动超时处理
    timeout: 0,

    // http://zeptojs.com/#$.param
    traditional: FALSE,

    url: EMPTY,

    // 全局`url`前缀
    urlPrefix: EMPTY,

    // 是否在`url`上添加时间戳, 用于避免浏览器的304缓存
    urlStamp: TRUE,

    // TODO 文档中没有暴露
    withCredentials: NULL,

    // 请求之前调用的钩子函数
    willFetch: noop,

    // 扩展: storage
    storage: false,

    // 插件
    // 目前只支持两种插件
    // plugins: [
    //     nattyFetch.plugin.loop
    //     nattyFetch.plugin.soon
    // ]
    plugins: false
};

var runtimeGlobalConfig = extend({}, defaultGlobalConfig);

var API = (function () {
    function API(path, options, contextConfig, contextId) {
        _classCallCheck(this, API);

        var t = this;
        t.contextConfig = contextConfig;
        t._path = path;

        var config = t.config = t.processAPIOptions(options);

        /**
         * 一个`DB`的`api`的实现
         * @param data {Object|Function}
         * @returns {Object} Promise Object
         */
        t.api = function (data) {
            data = data || {};
            // 是否忽略自身的并发请求
            if (config.ignoreSelfConcurrent && t.api.pending) {
                return dummyPromise;
            }

            if (config.overrideSelfConcurrent && config._lastRequester) {
                config._lastRequester.abort();
                delete config._lastRequester;
            }

            var vars = t.makeVars(data);

            if (config.retry === 0) {
                return t.request(vars, config);
            } else {
                return t.tryRequest(vars, config);
            }
        };

        t.api.contextId = contextId;
        t.api._path = path;

        // 标记是否正在等待请求返回
        t.api.pending = FALSE;

        t.api.config = config;

        t.initStorage();

        // 启动插件
        var plugins = isArray(options.plugins) ? options.plugins : [];
        for (var i = 0, l = plugins.length; i < l; i++) {
            plugins[i].call(t, t.api);
        }
    }

    /**
     * 关键词
     *     语意化的
     *     优雅的
     *     功能增强的
     *     底层隔离的
     */

    _createClass(API, [{
        key: 'makeVars',
        value: function makeVars(data) {
            var t = this;
            var config = t.config;

            // 一次请求的私有相关数据
            var vars = {
                mark: {
                    __api: t._path
                }
            };

            if (config.mock) {
                vars.mark.__mock = TRUE;
            }

            if (config.urlStamp) {
                vars.mark.__stamp = +new Date();
            }

            // `data`必须在请求发生时实时创建
            data = extend({}, config.data, runAsFn(data));

            // 将数据参数存在私有标记中, 方便API的`process`方法内部使用
            vars.data = data;

            return vars;
        }

        /**
         * 处理API的配置
         * @param options {Object}
         */
    }, {
        key: 'processAPIOptions',
        value: function processAPIOptions(options) {

            var t = this;
            var config = extend({}, t.contextConfig, options);

            if (config.mock) {
                config.mockUrl = t.getFullUrl(config);
            }

            config.url = t.getFullUrl(config);

            // 按照[boolean, callbackKeyWord, callbackFunctionName]格式处理
            if (isArray(options.jsonp)) {
                config.jsonp = isBoolean(options.jsonp[0]) ? options.jsonp[0] : FALSE;
                // 这个参数只用于jsonp
                if (config.jsonp) {
                    config.jsonpFlag = options.jsonp[1];
                    config.jsonpCallbackName = options.jsonp[2];
                }
            }

            // 配置自动增强 如果`url`的值有`.jsonp`结尾 则认为是`jsonp`请求
            // NOTE jsonp是描述正式接口的 不影响mock接口!!!
            if (!config.mock && !!config.url.match(/\.jsonp(\?.*)?$/)) {
                config.jsonp = TRUE;
            }

            return config;
        }
    }, {
        key: 'initStorage',
        value: function initStorage() {
            var t = this;
            var config = t.config;

            // 开启`storage`的前提条件
            var storagePrecondition = config.method === 'GET' || config.jsonp;

            // 不满足`storage`使用条件的情况下, 开启`storage`将抛出错误
            if (!storagePrecondition && config.storage === TRUE) {
                throw new Error('A `' + config.method + '` request CAN NOT use `storage` which is only for `GET/jsonp`' + ' request! Please check the options for `' + t._path + '`');
            }

            // 简易开启缓存的写法
            if (config.storage === TRUE) {
                config.storage = {};
            }

            // 决定什么情况下缓存可以开启
            t.api.storageUseable = isPlainObject(config.storage) && (config.method === 'GET' || config.jsonp) && nattyStorage.support[config.storage.type || 'localStorage'];

            // 创建缓存实例
            if (t.api.storageUseable) {
                // `key`和`id`的选择原则:
                // `key`只选用相对稳定的值, 减少因为`key`的改变而增加的残留缓存
                // 经常变化的值用于`id`, 如一个接口在开发过程中可能使用方式不一样, 会在`jsonp`和`get`之间切换。
                t.api.storage = nattyStorage(extend({
                    key: [t.api.contextId, t._path].join('_')
                }, config.storage, {
                    async: TRUE,
                    id: [config.storage.id, config.jsonp ? 'jsonp' : config.method, config.url].join('_') // 使用者的`id`和内部的`id`, 要同时生效
                }));
            }
        }

        /**
         * 请求数据(从storage或者从网络)
         * @param vars {Object} 发送的数据
         * @param config {Object} 已经处理完善的请求配置
         * @returns {Object} defer对象
         */
    }, {
        key: 'request',
        value: function request(vars, config) {
            var t = this;

            return new Promise(function (resolve, reject) {
                if (t.api.storageUseable) {

                    // 只有GET和JSONP才会有storage生效
                    vars.queryString = isEmptyObject(vars.data) ? 'no-query-string' : JSON.stringify(sortPlainObjectKey(vars.data));

                    t.api.storage.has(vars.queryString).then(function (data) {
                        // console.warn('has cached: ', hasValue);
                        if (data.has) {
                            // 调用 willFetch 钩子
                            config.willFetch(vars, config, 'storage');
                            return data.value;
                        } else {
                            return t.remoteRequest(vars, config);
                        }
                    }).then(function (data) {
                        resolve(data);
                    })['catch'](function (e) {
                        reject(e);
                    });
                } else {
                    t.remoteRequest(vars, config).then(function (data) {
                        resolve(data);
                    })['catch'](function (e) {
                        reject(e);
                    });
                }
            });
        }

        /**
         * 获取正式接口的完整`url`
         * @param config {Object}
         */
    }, {
        key: 'getFullUrl',
        value: function getFullUrl(config) {
            var url = config.mock ? config.mockUrl : config.url;
            if (!url) return EMPTY;
            var prefixKey = config.mock ? 'mockUrlPrefix' : 'urlPrefix';
            return config[prefixKey] && !isAbsoluteUrl(url) && !isRelativeUrl(url) ? config[prefixKey] + url : url;
        }

        /**
         * 发起网络请求
         * @param vars
         * @param config
         * @returns {Promise}
         */
    }, {
        key: 'remoteRequest',
        value: function remoteRequest(vars, config) {
            var t = this;

            // 调用 willFetch 钩子
            config.willFetch(vars, config, 'remote');

            // 等待状态在此处开启 在相应的`requester`的`complete`回调中关闭
            t.api.pending = TRUE;

            var defer = new Defer();

            // 创建请求实例requester
            if (config.request) {
                // 使用已有的request方法
                vars.requester = config.request(vars, config, defer);
            } else if (config.jsonp) {
                vars.requester = t.sendJSONP(vars, config, defer);
            } else {
                vars.requester = t.sendAjax(vars, config, defer);
            }

            // 如果只响应最新请求
            if (config.overrideSelfConcurrent) {
                config._lastRequester = vars.requester;
            }

            // 超时处理
            if (0 !== config.timeout) {
                setTimeout(function () {
                    if (t.api.pending && vars.requester) {
                        // 取消请求
                        vars.requester.abort();
                        delete vars.requester;
                        var error = {
                            timeout: TRUE,
                            message: 'Timeout By ' + config.timeout + 'ms.'
                        };
                        defer.reject(error);
                        event.fire('g.reject', [error, config]);
                        event.fire(t.api.contextId + '.reject', [error, config]);

                        // 调用 didFetch 钩子
                        config.didFetch(vars, config);
                    }
                }, config.timeout);
            }
            return defer.promise;
        }

        /**
         * 重试功能的实现
         * @param vars {Object} 发送的数据
         * @param config
         * @returns {Object} defer对象
         */
    }, {
        key: 'tryRequest',
        value: function tryRequest(vars, config) {
            var t = this;

            return new Promise(function (resolve, reject) {
                var retryTime = 0;
                var request = function request() {
                    // 更新的重试次数
                    vars.mark.__retryTime = retryTime;
                    t.request(vars, config).then(function (content) {
                        resolve(content);
                        event.fire('g.resolve', [content, config], config);
                        event.fire(t.api.contextId + '.resolve', [content, config], config);
                    }, function (error) {
                        if (retryTime === config.retry) {
                            reject(error);
                        } else {
                            retryTime++;
                            request();
                        }
                    });
                };

                request();
            });
        }

        /**
         * 处理结构化的响应数据
         * @param config
         * @param response
         * @param defer
         */
    }, {
        key: 'processResponse',
        value: function processResponse(vars, config, defer, response) {
            var t = this;

            // 调用 didFetch 钩子函数
            config.didFetch(vars, config);

            // 非标准格式数据的预处理
            response = config.fit(response, vars);

            if (response.success) {
                (function () {
                    // 数据处理
                    var content = config.process(response.content, vars);

                    var resolveDefer = function resolveDefer() {
                        defer.resolve(content);
                        event.fire('g.resolve', [content, config], config);
                        event.fire(t.api.contextId + '.resolve', [content, config], config);
                    };

                    if (t.api.storageUseable) {
                        t.api.storage.set(vars.queryString, content).then(function () {
                            resolveDefer();
                        })['catch'](function (e) {
                            resolveDefer();
                        });
                    } else {
                        resolveDefer();
                    }
                })();
            } else {
                var error = extend({
                    message: 'Processing Failed: ' + t._path
                }, response.error);
                // NOTE response是只读的对象!!!
                defer.reject(error);
                event.fire('g.reject', [error, config]);
                event.fire(t.api.contextId + '.reject', [error, config]);
            }
        }

        /**
         * 发起Ajax请求
         * @param config {Object} 请求配置
         * @param defer {Object} defer对象
         * @param retryTime {undefined|Number} 如果没有重试 将是undefined值 见`createAPI`方法
         *                                     如果有重试 将是重试的当前次数 见`tryRequest`方法
         * @returns {Object} xhr对象实例
         */
    }, {
        key: 'sendAjax',
        value: function sendAjax(vars, config, defer) {
            var t = this;

            return ajax({
                traditional: config.traditional,
                cache: config.cache,
                mark: vars.mark,
                log: config.log,
                url: config.mock ? config.mockUrl : config.url,
                method: config.method,
                data: vars.data,
                header: config.header,
                withCredentials: config.withCredentials,
                // 强制约定json
                accept: 'json',
                success: function success(response /*, xhr*/) {
                    t.processResponse(vars, config, defer, response);
                },
                error: function error(status /*, xhr*/) {

                    var message = undefined;
                    var flag = undefined;
                    switch (status) {
                        case 404:
                            message = 'Not Found';
                            break;
                        case 500:
                            message = 'Internal Server Error';
                            break;
                        // TODO 是否要补充其他明确的服务端错误
                        default:
                            message = 'Unknown Server Error';
                            break;
                    }

                    defer.reject({
                        status: status,
                        message: message
                    });
                },
                complete: function complete() /*status, xhr*/{
                    if (vars.retryTime === undefined || vars.retryTime === config.retry) {
                        //C.log('ajax complete');

                        t.api.pending = FALSE;
                        vars.requester = NULL;

                        // 如果只响应最新请求
                        if (config.overrideSelfConcurrent) {
                            delete config._lastRequester;
                        }
                    }
                    //console.log('__complete: pending:', config.pending, 'retryTime:', retryTime, Math.random());
                }
            });
        }

        /**
         * 发起jsonp请求
         * @param vars {Object} 一次请求相关的私有数据
         * @param config {Object} 请求配置
         * @param defer {Object} defer对象
         * @param retryTime {undefined|Number} 如果没有重试 将是undefined值 见`createAPI`方法
         *                                     如果有重试 将是重试的当前次数 见`tryRequest`方法
         * @returns {Object} 带有abort方法的对象
         */
    }, {
        key: 'sendJSONP',
        value: function sendJSONP(vars, config, defer) {
            var t = this;
            return jsonp({
                traditional: config.traditional,
                log: config.log,
                mark: vars.mark,
                url: config.mock ? config.mockUrl : config.url,
                data: vars.data,
                cache: config.cache,
                flag: config.jsonpFlag,
                callbackName: config.jsonpCallbackName,
                success: function success(response) {
                    t.processResponse(vars, config, defer, response);
                },
                error: function error(e) {
                    defer.reject({
                        message: 'Not Accessable JSONP `'
                        //    TODO show url
                    });
                },
                complete: function complete() {
                    if (vars.retryTime === undefined || vars.retryTime === config.retry) {
                        t.api.pending = FALSE;
                        vars.requester = NULL;

                        // 如果只响应最新请求
                        if (config.overrideSelfConcurrent) {
                            delete config._lastRequester;
                        }
                    }
                }
            });
        }
    }]);

    return API;
})();

var context = (function () {
    var count = 0;

    return function (contextId, options) {

        if (isString(contextId)) {
            options = options || {};
        } else {
            options = contextId || {};
            contextId = 'c' + count++;
        }

        var storage = nattyStorage({
            type: 'variable',
            key: contextId
        });

        var ctx = {};

        ctx.api = storage.get();

        ctx._contextId = contextId;

        ctx._config = extend({}, runtimeGlobalConfig, options);

        /**
         * 创建api
         * @param namespace {String} optional
         * @param APIs {Object} 该`namespace`下的`api`配置
         */
        ctx.create = function (namespace, APIs) {
            var hasNamespace = arguments.length === 2 && isString(namespace);

            if (!hasNamespace) {
                APIs = namespace;
            }

            for (var path in APIs) {
                storage.set(hasNamespace ? namespace + '.' + path : path, new API(hasNamespace ? namespace + '.' + path : path, runAsFn(APIs[path]), ctx._config, contextId).api);
            }

            ctx.api = storage.get();
        };

        // 绑定上下文事件
        ctx.on = function (name, fn) {
            if (!isFunction(fn)) return;
            event.on(ctx._contextId + '.' + name, fn);
            return ctx;
        };

        return ctx;
    };
})();

var VERSION = undefined;
(VERSION = "2.0.0");

var ONLY_FOR_MODERN_BROWSER = undefined;
(ONLY_FOR_MODERN_BROWSER = true);

/**
 * 简易接口
 * @param options
 * @note 这个接口尝试做过共享`api`实例, 但是结果证明不现实, 不科学, 不要再尝试了!
 *       因为无法共享实例, 所以有些功能是不支持的:
 *       - ignoreSelfConcurrent
 *       - overrideSelfConcurrent
 *       - 所有缓存相关的功能
 */
var nattyFetch = function nattyFetch(options) {
    return new API('nattyFetch', runAsFn(options), defaultGlobalConfig, 'global').api();
};

extend(nattyFetch, {
    onlyForModern: ONLY_FOR_MODERN_BROWSER,
    version: VERSION,
    // Context,
    _util: util,
    _event: event,
    context: context,
    ajax: ajax,
    jsonp: jsonp,

    /**
     * 执行全局配置
     * @param options
     */
    setGlobal: function setGlobal(options) {
        runtimeGlobalConfig = extend({}, defaultGlobalConfig, options);
        return this;
    },

    /**
     * 获取全局配置
     * @param property {String} optional
     * @returns {*}
     */
    getGlobal: function getGlobal(property) {
        return property ? runtimeGlobalConfig[property] : runtimeGlobalConfig;
    },

    // 绑定全局事件
    on: function on(name, fn) {
        if (!isFunction(fn)) return;
        event.on('g.' + name, fn);
        return this;
    },

    /**
     * 插件名称空间
     */
    plugin: {
        loop: pluginLoop,
        soon: pluginSoon
    }
});

// 内部直接将运行时的全局配置初始化到默认值
nattyFetch.setGlobal(defaultGlobalConfig);

module.exports = nattyFetch;

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

/**
 * file: ajax.js
 * ref https://xhr.spec.whatwg.org
 * ref https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
 * ref https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
 * ref https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
 * ref https://hacks.mozilla.org/2009/07/cross-site-xmlhttprequest-with-cors/
 * ref http://www.html5rocks.com/en/tutorials/cors/
 * @link http://enable-cors.org/index.html
 */
'use strict';

var _require = __webpack_require__(4);

var extend = _require.extend;
var appendQueryString = _require.appendQueryString;
var noop = _require.noop;
var isCrossDomain = _require.isCrossDomain;
var isBoolean = _require.isBoolean;
var param = _require.param;

var FALSE = false;
var UNDEFINED = 'undefined';
var NULL = null;
var GET = 'GET';
var SCRIPT = 'script';
var XML = 'xml';
var JS0N = 'json'; // NOTE 不能使用`JSON`，这里用数字零`0`代替了字母`O`

var supportCORS = UNDEFINED !== typeof XMLHttpRequest && 'withCredentials' in new XMLHttpRequest();

// minetype的简写映射
// TODO 考虑是否优化
var acceptToRequestHeader = {
    // IIS returns `application/x-javascript` 但应该不需要支持
    '*': '*/' + '*',
    script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
    json: 'application/json, text/json',
    xml: 'application/xml, text/xml',
    html: 'text/html',
    text: 'text/plain'
};

// 设置请求头
// 没有处理的事情：跨域时使用者传入的多余的Header没有屏蔽 没必要
var setHeaders = function setHeaders(xhr, options) {
    var header = {
        Accept: acceptToRequestHeader[options.accept]
    };
    // 如果没有跨域 则打该标识 业界通用做法
    // TODO 如果是跨域的 只有有限的requestHeader是可以使用的 待补充注释
    if (!isCrossDomain(options.url)) {
        header['X-Requested-With'] = 'XMLHttpRequest';
    }

    extend(header, options.header);

    // 如果是`POST`请求，需要`urlencode`
    if (options.method === 'POST' && !options.header['Content-Type']) {
        header['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    }

    for (var key in header) {
        xhr.setRequestHeader(key, header[key]);
    }
};

// 绑定事件
// NOTE 还得继续使用readystatechange事件
//      比较遗憾 到现在了依然不能安全的使用load和error等事件 就连PC端的chrome都有下面的问题
//      500: 触发load loadend 不触发error
//      404: 触发load loadend 不触发error
var setEvents = function setEvents(xhr, options) {

    // 再高级的浏览器都有低级错误! 已经不能在相信了!
    // MAC OSX Yosemite Safari上的低级错误: 一次`ajax`请求的`loadend`事件完成之后,
    // 如果执行`xhr.abort()`, 居然还能触发一遍`abort`和`loadend`事件!!!
    // `__finished`标识一次完整的请求是否结束, 如果已结束, 则不再触发任何事件
    xhr.__finished = FALSE;

    var readyStateChangeFn = function readyStateChangeFn(e) {

        //console.log('xhr.readyState', xhr.readyState, 'xhr.status', xhr.status, xhr);
        if (xhr.readyState === 4) {
            // 如果请求被取消(aborted) 则`xhr.status`会是0 所以不会进入`success`回调
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                //let mime = xhr.getResponseHeader('Content-Type');
                var data = xhr.responseText;
                switch (options.accept) {
                    case JS0N:
                        try {
                            data = JSON.parse(data);
                        } catch (e) {
                            console.warn('The response can NOT be parsed to JSON object.', data);
                        }
                        break;
                    case SCRIPT:
                        (1, eval)(data);
                        break;
                    case XML:
                        data = xhr.responseXML;
                        break;
                    //case HTML:
                    //case TEXT:
                    default:
                        break;
                }
                options.success(data, xhr);
            } else {
                // 如果请求被取消(aborted) 则`xhr.status`会是0 程序也会到达这里 需要排除 不应该触发error
                !xhr.__aborted && options.error(xhr.status, xhr);
            }
        }
    };

    // readyState value:
    //   0: UNSET 未初始化
    //   1: OPENED
    //   2: HEADERS_RECEIVED
    //   3: LOADING
    //   4: DONE 此时触发load事件
    xhr.addEventListener("readystatechange", readyStateChangeFn);

    //xhr.addEventListener('error', function () {
    //    console.log('xhr event: error');
    //});

    //xhr.addEventListener('load', function () {
    //    console.log('xhr event: load');
    //});

    var abortFn = function abortFn() {
        if (xhr.__finished) {
            return;
        }
        //options.log && console.info('~abort');
        options.abort(xhr.status, xhr);
    };

    xhr.addEventListener('abort', abortFn);

    var loadedFn = function loadedFn() {
        if (xhr.__finished) {
            return;
        }
        xhr.__finished = true;
        //options.log && console.info('~loadend');
        options.complete(xhr.status, xhr);
        delete xhr.__aborted;
    };

    xhr.addEventListener('loadend', loadedFn);
};

var defaultOptions = {
    url: '',
    mark: {},
    method: GET,
    accept: '*',
    data: null,
    header: {},
    withCredentials: NULL, // 根据`url`是否跨域决定默认值. 如果显式配置该值(必须是布尔值), 则个使用配置值
    success: noop,
    error: noop,
    complete: noop,
    abort: noop,
    log: FALSE,
    traditional: FALSE
};

var ajax = function ajax(options) {

    options = extend({}, defaultOptions, options);

    // 如果跨域了, 则禁止发送自定义的`header`信息
    if (isCrossDomain(options.url)) {
        // 重置`header`, 统一浏览器的行为.
        // 如果在跨域时发送了自定义`header`, 则:
        //   标准浏览器会报错: Request header field xxx is not allowed by Access-Control-Allow-Headers in preflight response.
        //   IE浏览器不报错
        options.header = {};
    }

    var xhr = new XMLHttpRequest();

    setEvents(xhr, options);

    xhr.open(options.method, appendQueryString(options.url, extend({}, options.mark, options.method === GET ? options.data : {}), options.traditional));

    // NOTE 生产环境的Server端, `Access-Control-Allow-Origin`的值一定不要配置成`*`!!! 而且`Access-Control-Allow-Credentials`应该是true!!!
    // NOTE 如果Server端的`responseHeader`配置了`Access-Control-Allow-Origin`的值是通配符`*` 则前端`withCredentials`是不能使用true值的
    // NOTE 如果Client端`withCredentials`使用了true值 则后端`responseHeader`中必须配置`Access-Control-Allow-Credentials`是true
    xhr.withCredentials = isBoolean(options.withCredentials) ? options.withCredentials : isCrossDomain(options.url);

    // 设置requestHeader
    setHeaders(xhr, options);

    // 文档建议说 send方法如果不发送请求体数据 则null参数在某些浏览器上是必须的
    xhr.send(options.method === GET ? NULL : options.data !== NULL ? param(options.data, options.traditional) : NULL);

    var originAbort = xhr.abort;

    // 重写`abort`方法
    xhr.abort = function () {
        xhr.__aborted = true;
        // NOTE 直接调用`originAbort()`时 浏览器会报 `Illegal invocation` 错误
        originAbort.call(xhr);
    };

    return xhr;
};

// 移动端不需要fallback
ajax.fallback = false;
ajax.supportCORS = supportCORS;

module.exports = ajax;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

'use strict';

var hasWindow = 'undefined' !== typeof window;
var doc = hasWindow ? document : null;
var escape = encodeURIComponent;
var NULL = null;
var toString = Object.prototype.toString;
var ARRAY_TYPE = '[object Array]';
var OBJECT_TYPE = '[object Object]';
var TRUE = true;
var FALSE = !TRUE;

/**
 * 伪造的`promise`对象
 * NOTE 伪造的promise对象要支持链式调用 保证和`new Promise`返回的对象行为一致
 *      dummyPromise.then().catch().finally()
 */
var dummyPromise = {
    dummy: TRUE
};
dummyPromise.then = dummyPromise['catch'] = function () {
    // NOTE 这里用了剪头函数 不能用`return this`
    return dummyPromise;
};

/**
 * 判断是否是IE8~11, 不包含Edge
 * @returns {boolean}
 * @note IE11下 window.ActiveXObject的值很怪异, 所有需要追加 'ActiveXObject' in window 来判断
 */
var isIE = hasWindow && (!!window.ActiveXObject || 'ActiveXObject' in window);

var noop = function noop(v) {
    return v;
};

/**
 * 变换两个参数的函数到多个参数
 * @param  {Function} fn 基函数
 * @return {Function} 变换后的函数
 * @demo
 *      function add(x, y) { return x+y; }
 *      add = redo(add);
 *      add(1,2,3) => 6
 */
var redo = function redo(fn) {
    return function () {
        var args = arguments;
        var ret = fn(args[0], args[1]);
        for (var i = 2, l = args.length; i < l; i++) {
            ret = fn(ret, args[i]);
        }
        return ret;
    };
};

var random = Math.random;
var floor = Math.floor;
var makeRandom = function makeRandom() {
    return floor(random() * 9e9);
};

var absoluteUrlReg = /^(https?:)?\/\//;
var isAbsoluteUrl = function isAbsoluteUrl(url) {
    return !!url.match(absoluteUrlReg);
};

var relativeUrlReg = /^[\.\/]/;
var isRelativeUrl = function isRelativeUrl(url) {
    return !!url.match(relativeUrlReg);
};

var BOOLEAN = 'boolean';
var isBoolean = function isBoolean(v) {
    return typeof v === BOOLEAN;
};

var STRING = 'string';
var isString = function isString(v) {
    return typeof v === STRING;
};

var FUNCTION = 'function';
var isFunction = function isFunction(v) {
    return typeof v === FUNCTION;
};

var runAsFn = function runAsFn(v) {
    return isFunction(v) ? v() : v;
};

var NUMBER = 'number';
var isNumber = function isNumber(v) {
    return !isNaN(v) && typeof v === NUMBER;
};

var OBJECT = 'object';
var isObject = function isObject(v) {
    return typeof v === OBJECT;
};

var isWindow = function isWindow(v) {
    return v !== NULL && v === v.window;
};

// 参考了zepto
var isPlainObject = function isPlainObject(v) {
    return v !== NULL && isObject(v) && !isWindow(v) && Object.getPrototypeOf(v) === Object.prototype;
};

var isEmptyObject = function isEmptyObject(v) {
    var count = 0;
    for (var i in v) {
        if (v.hasOwnProperty(i)) {
            count++;
        }
    }
    return count === 0;
};

var isArray = Array.isArray;
if (false) {
    if (!isArray) {
        isArray = function (v) {
            return toString.call(v) === ARRAY_TYPE;
        };
    }
}

/**
 * 判断是否跨域
 * @type {Element}
 * @note 需要特别关注IE8~11的行为是不一样的!!!
 */
var originA = undefined;
if (doc) {
    originA = doc.createElement('a');
    originA.href = location.href;
}
var isCrossDomain = function isCrossDomain(url) {

    var requestA = doc.createElement('a');
    requestA.href = url;
    //console.log(originA.protocol + '//' + originA.host + '\n' + requestA.protocol + '//' + requestA.host);

    // 如果`url`的值不包含`protocol`和`host`(比如相对路径), 在标准浏览器下, 会自定补全`requestA`对象的`protocal`和`host`属性.
    // 但在IE8~11下, 不会自动补全. 即`requestA.protocol`和`requestA.host`的值都是空的.
    // 在IE11的不同小版本下, requestA.protocol的值有的是`:`, 有的是空字符串, 太奇葩啦!
    if (false) {
        if (isIE && (requestA.protocol === ':' || requestA.protocol === '')) {
            if (requestA.hostname === '') {
                //alert(0)
                return false;
            } else {
                //alert('1:'+(originA.hostname !== requestA.hostname || originA.port !== requestA.port))
                return originA.hostname !== requestA.hostname || originA.port !== requestA.port;
            }
        }
    }

    //let log = {
    //    'originA.hostname': originA.hostname,
    //    'requestA.hostname': requestA.hostname,
    //    'originA.port': originA.port,
    //    'requestA.port': requestA.port,
    //    'originA.protocol': originA.protocol,
    //    'requestA.protocol': requestA.protocol
    //}
    //
    //alert(JSON.stringify(log));

    // 标准浏览器
    return originA.hostname !== requestA.hostname || originA.port !== requestA.port || originA.protocol !== requestA.protocol;
};

/**
 * 对象扩展
 * @param  {Object} receiver
 * @param  {Object} supplier
 * @return {Object} 扩展后的receiver对象
 * @note 这个extend方法是定制的, 不要拷贝到其他地方用!!!
 * @note 这个extend方法是深拷贝方式的!!!
 * TODO
 */
var extend = function extend() {
    var receiver = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var supplier = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    var deepCopy = arguments.length <= 2 || arguments[2] === undefined ? FALSE : arguments[2];

    for (var key in supplier) {
        // `supplier`中不是未定义的键 都可以执行扩展
        if (supplier.hasOwnProperty(key) && supplier[key] !== undefined) {
            if (deepCopy === TRUE) {
                if (isArray(supplier[key])) {
                    receiver[key] = [].concat(supplier[key]);
                } else if (isPlainObject(supplier[key])) {
                    receiver[key] = extend({}, supplier[key]);
                } else {
                    receiver[key] = supplier[key];
                }
            } else {
                receiver[key] = supplier[key];
            }
        }
    }
    return receiver;
};

var likeArray = function likeArray(v) {
    if (!v) {
        return false;
    }
    return typeof v.length === NUMBER;
};

/**
 *
 * @param v {Array|Object} 遍历目标对象
 * @param fn {Function} 遍历器 会被传入两个参数, 分别是`value`和`key`
 */
var each = function each(v, fn) {
    var i = undefined,
        l = undefined;
    if (likeArray(v)) {
        for (i = 0, l = v.length; i < l; i++) {
            if (fn.call(v[i], v[i], i) === false) return;
        }
    } else {
        for (i in v) {
            if (fn.call(v[i], v[i], i) === false) return;
        }
    }
};

/**
 * 将对象的`键`排序后 返回一个新对象
 *
 * @param obj {Object} 被操作的对象
 * @returns {Object} 返回的新对象
 * @case 这个函数用于对比两次请求的参数是否一致
 */
var sortPlainObjectKey = function sortPlainObjectKey(obj) {
    var clone = {};
    var key = undefined;
    var keyArray = [];
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            keyArray.push(key);
            if (isPlainObject(obj[key])) {
                obj[key] = sortPlainObjectKey(obj[key]);
            }
        }
    }
    keyArray.sort();
    for (var i = 0, l = keyArray.length; i < l; i++) {
        clone[keyArray[i]] = obj[keyArray[i]];
    }
    return clone;
};

var serialize = function serialize(params, obj, traditional, scope) {
    var type = undefined,
        array = isArray(obj),
        hash = isPlainObject(obj);
    each(obj, function (value, key) {
        type = toString.call(value);
        if (scope) {
            key = traditional ? scope : scope + '[' + (hash || type == OBJECT_TYPE || type == ARRAY_TYPE ? key : '') + ']';
        }

        // 递归
        if (!scope && array) {
            params.add(value.name, value.value);
        }
        // recurse into nested objects
        else if (type == ARRAY_TYPE || !traditional && type == OBJECT_TYPE) {
                serialize(params, value, traditional, key);
            } else {
                params.add(key, value);
            }
    });
};

/**
 * 功能和`Zepto.param`一样
 * @param obj {Object}
 * @param traditional {Boolean}
 * @returns {string}
 * $.param({ foo: { one: 1, two: 2 }}) // "foo[one]=1&foo[two]=2)"
 * $.param({ ids: [1,2,3] })           // "ids[]=1&ids[]=2&ids[]=3"
 * $.param({ ids: [1,2,3] }, true)     // "ids=1&ids=2&ids=3"
 * $.param({ foo: 'bar', nested: { will: 'not be ignored' }})    // "foo=bar&nested[will]=not+be+ignored"
 * $.param({ foo: 'bar', nested: { will: 'be ignored' }}, true)  // "foo=bar&nested=[object+Object]"
 * $.param({ id: function(){ return 1 + 2 } })  // "id=3"
 */
var param = function param(obj, traditional) {
    var params = [];
    params.add = function (key, value) {
        if (isFunction(value)) value = value();
        if (value == NULL) value = '';
        params.push(escape(key) + '=' + escape(value));
    };
    serialize(params, obj, traditional);
    return params.join('&').replace(/%20/g, '+');
};

var decodeParam = function decodeParam(str) {
    return decodeURIComponent(str.replace(/\+/g, ' '));
};

// 给URL追加查询字符串
var appendQueryString = function appendQueryString(url, obj, traditional) {
    var queryString = param(obj, traditional);

    if (queryString) {
        return url + (~url.indexOf('?') ? '&' : '?') + queryString;
    } else {
        return url;
    }
};

module.exports = {
    appendQueryString: appendQueryString,
    decodeParam: decodeParam,
    dummyPromise: dummyPromise,
    each: each,
    extend: redo(extend),
    isAbsoluteUrl: isAbsoluteUrl,
    isArray: isArray,
    isBoolean: isBoolean,
    isCrossDomain: isCrossDomain,
    isEmptyObject: isEmptyObject,
    isFunction: isFunction,
    isIE: isIE,
    isNumber: isNumber,
    isPlainObject: isPlainObject,
    isRelativeUrl: isRelativeUrl,
    isString: isString,
    makeRandom: makeRandom,
    noop: noop,
    sortPlainObjectKey: sortPlainObjectKey,
    param: param,
    runAsFn: runAsFn
};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = __webpack_require__(4);

var appendQueryString = _require.appendQueryString;
var noop = _require.noop;
var extend = _require.extend;
var makeRandom = _require.makeRandom;

var hasWindow = 'undefined' !== typeof window;
var win = hasWindow ? window : null;
var doc = hasWindow ? document : null;
var NULL = null;
var SCRIPT = 'script';
var FALSE = false;

var removeScript = function removeScript(script) {
    script.onerror = NULL;
    script.parentNode.removeChild(script);
    script = NULL;
};
var head = NULL;
var insertScript = function insertScript(url, options) {
    var script = doc.createElement(SCRIPT);
    script.src = url;
    script.async = true;

    script.onerror = function (e) {
        win[options.callbackName] = NULL;
        options.error(e);
        options.complete();
    };

    head = head || doc.getElementsByTagName('head')[0];
    head.insertBefore(script, head.firstChild);
    return script;
};

var defaultOptions = {
    url: '',
    mark: {},
    data: {},
    success: noop,
    error: noop,
    complete: noop,
    log: false,
    flag: 'callback',
    callbackName: 'jsonp{id}',
    traditional: FALSE
};

var jsonp = function jsonp(options) {

    options = extend({}, defaultOptions, options);

    var callbackName = options.callbackName = options.callbackName.replace(/\{id\}/, makeRandom());

    var originComplete = options.complete;

    var script = undefined;

    // 二次包装的`complete`回调
    options.complete = function () {
        // 删除脚本
        removeScript(script);
        originComplete();
    };

    // 成功回调
    win[callbackName] = function (data) {
        win[callbackName] = NULL;
        options.success(data);
        options.complete();
    };

    // 生成`url`
    var url = appendQueryString(options.url, extend(_defineProperty({}, options.flag, callbackName), options.mark, options.data), options.traditional);

    // 插入脚本
    script = insertScript(url, options);

    return {
        abort: function abort() {
            // 覆盖成功回调为无数据处理版本
            win[callbackName] = function () {
                win[callbackName] = NULL;
            };
            removeScript(script);
        }
    };
};

module.exports = jsonp;

/***/ },
/* 6 */
/***/ function(module, exports) {

"use strict";

function Defer() {
  var t = this;
  t.promise = new Promise(function (resolve, reject) {
    t._resolve = resolve;
    t._reject = reject;
  });
}
Defer.prototype.resolve = function (value) {
  this._resolve.call(this.promise, value);
};
Defer.prototype.reject = function (reason) {
  this._reject.call(this.promise, reason);
};
module.exports = Defer;

/***/ },
/* 7 */
/***/ function(module, exports) {

'use strict';

var pre = '__';

var Event = {
    on: function on() {
        var t = this;
        var args = arguments;
        if (typeof args[0] === 'string' && typeof args[1] === 'function') {
            var type = rename(args[0]);
            t[type] = t[type] || [];
            t[type].push(args[1]);
        } else if (typeof args[0] === 'object') {
            var hash = args[0];
            for (var i in hash) {
                t.on(i, hash[i]);
            }
        }
    },
    off: function off(type, fn) {
        var t = this;
        var type = rename(type);
        if (!fn) {
            delete t[type];
        } else {
            var fns = t[type];
            fns.splice(fns.indexOf(fn), 1);
            if (!t[type].length) delete t[type];
        }
    },
    // @param {array} args
    fire: function fire(type, args, context) {
        var t = this;
        var fns = t[rename(type)];
        if (!fns) return 'NO_EVENT';
        for (var i = 0, fn; fn = fns[i]; i++) {
            fn.apply(context || t, [].concat(args));
        }
    },
    hasEvent: function hasEvent(type) {
        return !!this[rename(type)];
    }
};

function rename(type) {
    return pre + type;
}

module.exports = Event;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

/**
 * 创建轮询支持
 * @param api {Function} 需要轮询的函数
 */
'use strict';

var FALSE = false;
var TRUE = true;
var NULL = null;

var _require = __webpack_require__(4);

var isNumber = _require.isNumber;
var noop = _require.noop;

/**
 * 创建轮询支持
 * @param api {Function} 需要轮询的函数
 */
module.exports = function (api) {
    var loopTimer = NULL;
    api.looping = FALSE;
    // 开启轮询
    api.startLoop = function (options) {
        var resolveFn = arguments.length <= 1 || arguments[1] === undefined ? noop : arguments[1];
        var rejectFn = arguments.length <= 2 || arguments[2] === undefined ? noop : arguments[2];

        if (!options.duration || !isNumber(options.duration)) {
            throw new Error('Illegal `duration` value for `startLoop` method.');
            return api;
        }

        var sleepAndRequest = function sleepAndRequest() {
            api.looping = TRUE;
            loopTimer = setTimeout(function () {
                api(options.data).then(resolveFn, rejectFn);
                sleepAndRequest();
            }, options.duration);
        };

        // NOTE 轮询过程中是不响应服务器端错误的 所以第二个参数是`noop`
        api(options.data).then(resolveFn, rejectFn);
        sleepAndRequest();
    };
    // 停止轮询
    api.stopLoop = function () {
        clearTimeout(loopTimer);
        api.looping = FALSE;
        loopTimer = NULL;
    };
};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

'use strict';

var FALSE = false;
var TRUE = true;

var _require = __webpack_require__(4);

var noop = _require.noop;
var isEmptyObject = _require.isEmptyObject;
var sortPlainObjectKey = _require.sortPlainObjectKey;
var extend = _require.extend;
var runAsFn = _require.runAsFn;

module.exports = function (api) {
    var t = this;
    var config = api.config;

    api.soon = function (data) {
        var successFn = arguments.length <= 1 || arguments[1] === undefined ? noop : arguments[1];
        var errorFn = arguments.length <= 2 || arguments[2] === undefined ? noop : arguments[2];

        // 是否忽略自身的并发请求
        // NOTE 这个地方和内置的api方法不一致
        if (config.ignoreSelfConcurrent && config.pending) {
            return;
        }

        if (config.overrideSelfConcurrent && config._lastRequester) {
            config._lastRequester.abort();
            delete config._lastRequester;
        }

        // 一次请求的私有相关数据
        var vars = t.makeVars(data);

        if (api.storageUseable) {

            // 只有GET和JSONP才会有storage生效
            vars.queryString = isEmptyObject(vars.data) ? 'no-query-string' : JSON.stringify(sortPlainObjectKey(vars.data));

            api.storage.has(vars.queryString).then(function (result) {
                // console.warn('has cached: ', hasValue);
                if (result.has) {
                    // 调用 willFetch 钩子
                    config.willFetch(vars, config, 'storage');
                    successFn({
                        fromStorage: TRUE,
                        content: result.value
                    });
                }

                // 在`storage`可用的情况下, 远程请求返回的数据会同步到`storage`
                return t.remoteRequest(vars, config);
            }).then(function (content) {
                successFn({
                    fromStorage: FALSE,
                    content: content
                });
            })['catch'](function (e) {
                errorFn(e);
            });
        } else {
            t.remoteRequest(vars, config).then(function (content) {
                successFn({
                    fromStorage: FALSE,
                    content: content
                });
            })['catch'](function (e) {
                errorFn(e);
            });
        }
    };
};

/***/ }
/******/ ])
});
;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("nattyStorage", [], factory);
	else if(typeof exports === 'object')
		exports["nattyStorage"] = factory();
	else
		root["nattyStorage"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

'use strict';

module.exports = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _require = __webpack_require__(2);

var extend = _require.extend;
var isPlainObject = _require.isPlainObject;
var noop = _require.noop;

var win = window;
var hasWindow = 'undefined' !== typeof win;
var NULL = null;
var EMPTY = '';
var TRUE = true;
var FALSE = !TRUE;
var PLACEHOLDER = '_placeholder';

var VERSION = undefined;
(VERSION = "1.0.0");

var support = {
    localStorage: hasWindow && !!win.localStorage && test('localStorage'),
    sessionStorage: hasWindow && !!win.sessionStorage && test('sessionStorage')
};

function test(type) {
    var data = { 'x': 'x' };
    var key = 'natty-storage-test';
    var tester = createStorage(type);
    tester.set(key, data);
    var useable = JSON.stringify(tester.get(key)) === JSON.stringify(data);
    tester.remove(key);
    return useable;
}

// 全局默认配置
var defaultGlobalConfig = {
    // localStorage, sessionStorage, variable
    type: 'localStorage',

    // 存到浏览器缓存中使用的键
    key: EMPTY,

    // 版本号
    tag: EMPTY,

    // 有效期长, 单位ms
    duration: 0,

    // 有效期至, 时间戳
    until: 0,

    // 是否以异步方式使用set/get/has/remove
    async: false
};

// 运行时的全局配置
var runtimeGlobalConfig = extend({}, defaultGlobalConfig);

/**
 *  let ls = new nattyStorage({
 *     type: 'localstorage', // sessionstorage, variable
 *       key: 'city',
 *       // 验证是否有效，如果是首次创建该LS，则不执行验证
 *       id: '1.0'
 *  })
 */

var Storage = (function () {
    /**
     * 构造函数
     * @param options
     */

    function Storage() {
        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Storage);

        var t = this;

        t.config = extend({}, runtimeGlobalConfig, options);

        // 必须配置`key`!!! 无论什么类型!!!
        if (!t.config.key) {
            throw new Error('`key` is missing, please check the options passed in `nattyStorage` constructor.');
        }

        t._storage = support[t.config.type] ? createStorage(t.config.type) : createVariable();

        t._CHECK_KEY = 'nattyStorageCheck:' + t.config.key;
        t._DATA_KEY = 'nattyStorageData:' + t.config.key;
        t._placeholderUsed = FALSE;

        // 每个`storage`实例对象都是全新的, 只有`storage`实例的数据才可能是缓存的.
        t._createStamp = +new Date();
    }

    /**
     * 惰性初始化 在首次调用`set、get、remove`方法时才执行一次 且只执行一次
     * @private
     * @note 为什么要做惰性初始化, 因为
     */

    _createClass(Storage, [{
        key: '_lazyInit',
        value: function _lazyInit() {
            var t = this;

            t._checkData = t._storage.get(t._CHECK_KEY);

            // 当前`key`的`storage`是否已经存在
            t._isNew = t._checkData === NULL;
            // console.log('is new t._checkData', t._isNew);

            // 没有对应的本地缓存 或 本地缓存已过期 则 创建新的`storage`实例
            if (t._isNew || t.isOutdated()) {
                // console.log('create new t._checkData');
                // 新的数据内容
                t._storage.set(t._DATA_KEY, t._data = {});
            }
            // 使用已有的本地缓存
            else {
                    // console.log('use cached t._checkData');
                    t._data = t._storage.get(t._DATA_KEY);
                    if (t._data === NULL) {
                        t._storage.set(t._DATA_KEY, t._data = {});
                    }
                }

            // 更新验证数据
            t._storage.set(t._CHECK_KEY, t._checkData = {
                id: t.config.id,
                lastUpdate: t._createStamp,
                duration: t.config.duration,
                until: t.config.until
            });
        }

        /**
         * 判断当前`key`的`storage`是否已经过期
         * @returns {boolean}
         */
    }, {
        key: 'isOutdated',
        value: function isOutdated() {
            var t = this;
            if (t.config.id && t.config.id !== t._checkData.id) {
                return TRUE;
            }

            var now = +new Date();
            // 注意要使用`_checkData`的`duration`验证, 而不是用`config`的`duration`验证!!
            if (t._checkData.duration && now - t._checkData.lastUpdate > t._checkData.duration) {
                return TRUE;
            }

            if (t._checkData.until && now > t._checkData.until) {
                return TRUE;
            }

            // console.log('outdated: false');
            return FALSE;
        }

        /**
         * 设置指指定路径的数据
         * @param path {Any} optional 要设置的值的路径 或 要设置的完整值
         * @param value {Any} 值
         *
         * instance.set(object)
         * instance.set('foo', any-type)
         * instance.set('foo.bar', any-type)
         * @note ls.set('x') 则 整个值为 'x'
         */
    }, {
        key: 'set',
        value: function set(path, data) {

            var t = this;
            var argumentLength = arguments.length;

            var todo = function todo(resolve, reject) {
                try {
                    if (!t._data) {
                        t._lazyInit();
                    }

                    if (argumentLength === 1) {
                        if (isPlainObject(path)) {
                            t._data = path;
                        } else {
                            t._data[PLACEHOLDER] = path;
                            t._placeholderUsed = TRUE;
                        }
                    } else {
                        setValueByPath(path, data, t._data);
                    }
                    t._storage.set(t._DATA_KEY, t._data);
                    resolve();
                } catch (e) {
                    reject(e);
                }
            };

            if (t.config.async) {
                return new Promise(todo);
            } else {
                todo(noop, throwError);
            }
        }

        /**
         * 获取指定的路径的数据
         * @param path {String} optional 要获取的值的路径 如果不传 则返回整体值
         * @returns {ny}
         *
         * instance.get()
         * instance.get('foo')
         * instance.get('foo.bar')
         */
    }, {
        key: 'get',
        value: function get(path) {
            var t = this;
            var data = undefined;
            var todo = function todo(resolve, reject) {
                try {
                    if (!t._data) {
                        t._lazyInit();
                    }

                    if (path) {
                        data = getValueByPath(path, t._data);
                    } else if (t._placeholderUsed) {
                        data = t._data[PLACEHOLDER];
                    } else {
                        data = t._data;
                    }
                    resolve(data);
                } catch (e) {
                    reject(e);
                }
            };

            if (t.config.async) {
                return new Promise(todo);
            } else {
                todo(noop, throwError);
                return data;
            }
        }

        /**
         * 返回指定的路径是否有值
         * @param path {String} optional 要查询的路径
         * @returns {Promise}
         */
    }, {
        key: 'has',
        value: function has(path) {
            var t = this;
            var result = undefined;
            var todo = function todo(resolve, reject) {
                try {
                    if (!t._data) {
                        t._lazyInit();
                    }

                    // 如果有数据 且 没有使用内置`placeholder`, 说明是使用`path`方式设置的值
                    if (!t._placeholderUsed && !isEmptyPlainObject(t._data)) {
                        if (!path) {
                            throw new Error('a `path` argument should be passed into the `has` method');
                        }

                        result = hasValueByPath(path, t._data) ? {
                            has: true,
                            value: getValueByPath(path, t._data)
                        } : {};

                        resolve(result);
                    } else {
                        result = t._data.hasOwnProperty(PLACEHOLDER) ? {
                            has: true,
                            value: t._data[PLACEHOLDER]
                        } : {};
                        resolve(result);
                    }
                } catch (e) {
                    reject(e);
                }
            };

            if (t.config.async) {
                return new Promise(todo);
            } else {
                todo(noop, throwError);
                return result;
            }
        }

        /**
         * 删除指定的路径的数据, 包括键本身
         * @param path {String} optional 要获取的值的路径 如果不传 则返回整体值
         */
    }, {
        key: 'remove',
        value: function remove(path) {
            var t = this;
            var todo = function todo(resolve, reject) {
                try {
                    if (!t._data) {
                        t._lazyInit();
                    }
                    if (path) {
                        removeKeyAndValueByPath(path, t._data);
                        t._storage.set(t._DATA_KEY, t._data);
                    } else {
                        // 删除所有数据, 复原到初始空对象
                        t.set({});
                    }
                    resolve();
                } catch (e) {
                    reject(e);
                }
            };

            if (t.config.async) {
                return new Promise(todo);
            } else {
                todo(noop, throwError);
            }
        }

        /**
         * 销毁当前`storage`实例
         */
    }, {
        key: 'destroy',
        value: function destroy() {
            var t = this;
            t._storage.remove(t._CHECK_KEY);
            t._storage.remove(t._DATA_KEY);
        }
    }, {
        key: 'dump',
        value: function dump() {
            if (JSON && console) {
                console.log(JSON.stringify(this._data, NULL, 4));
            }
        }
    }]);

    return Storage;
})();

var nattyStorage = function nattyStorage(options) {
    return new Storage(options);
};

nattyStorage.version = VERSION;
nattyStorage._variable = variable;
nattyStorage.support = support;

/**
 * 执行全局配置
 * @param options
 */
nattyStorage.setGlobal = function (options) {
    runtimeGlobalConfig = extend({}, defaultGlobalConfig, options);
    return undefined;
};

/**
 * 获取全局配置
 * @param property {String} optional
 * @returns {*}
 */
nattyStorage.getGlobal = function (property) {
    return property ? runtimeGlobalConfig[property] : runtimeGlobalConfig;
};

function throwError(e) {
    throw new Error(e);
}

function createStorage(storage) {
    storage = win[storage];
    return {
        // NOTE  值为undefined的情况, JSON.stringify方法会将键删除
        // JSON.stringify({x:undefined}) === "{}"
        set: function set(key, value) {
            // TODO 看看safari是否还有bug
            // storage.removeItem(key);
            storage.setItem(key, JSON.stringify(value));
        },
        get: function get(key) {
            var value = storage.getItem(key);
            // alert(localStorage[key]);
            if (!value) return NULL;
            try {
                value = JSON.parse(value);
            } catch (e) {}
            return value;
        },
        remove: function remove(key) {
            storage.removeItem(key);
        }
    };
}

var variable = {};
function createVariable() {
    var storage = variable;
    return {
        set: function set(key, value) {
            storage[key] = value;
        },
        get: function get(key) {
            // 当对应的键不存在时, 返回值保持和`storage`一致。
            if (!(key in storage)) {
                return NULL;
            }
            return storage[key];
        },
        remove: function remove(key) {
            delete storage[key];
        }
    };
}

function reserveString(str) {
    return str.split(EMPTY).reverse().join(EMPTY);
}

function splitPathToKeys(path) {
    var ret;
    if (path.indexOf('\\.') === -1) {
        ret = path.split('.');
    } else {
        ret = reserveString(path).split(/\.(?!\\)/).reverse();
        for (var i = 0, l = ret.length; i < l; i++) {
            ret[i] = reserveString(ret[i].replace(/\.\\/g, '.'));
        }
    }
    return ret;
}

function setValueByPath(path, value, data) {
    var keys = splitPathToKeys(path);
    var bottomData = data;
    while (keys.length) {
        var key = keys.shift();
        if (keys.length) {
            bottomData[key] = bottomData[key] || {};
            bottomData = bottomData[key];
        } else {
            if (isPlainObject(bottomData)) {
                bottomData[key] = value;
            } else {
                throw new Error('Cannot create property `' + key + '` on non-object value, path:`' + path + '`');
            }
        }
    }
    return data;
}

function getValueByPath(path, data, isKey) {
    isKey = isKey || false;
    if (isKey === true || path.indexOf('.') === -1) {
        return data[path];
    } else {
        var keys = splitPathToKeys(path);

        while (keys.length) {
            var key = keys.shift();
            data = getValueByPath(key, data, true);

            if (typeof data !== 'object' || data === undefined) {
                if (keys.length) data = undefined;
                break;
            }
        }
        return data;
    }
}

function hasValueByPath(path, data, isKey) {
    // 首次调用, 如果没有`.`, 就是key的含义
    isKey = isKey || path.indexOf('.') === -1;
    if (isKey) {
        return data.hasOwnProperty(path);
    } else {
        var keys = splitPathToKeys(path);
        while (keys.length) {
            var key = keys.shift();
            // console.log('check key: ', key);
            var hasKey = data.hasOwnProperty(key);
            if (hasKey && keys.length) {
                data = getValueByPath(key, data, true);
                if (!isPlainObject(data)) {
                    return FALSE;
                }
            } else {
                return hasKey;
            }
        }
    }
}

function removeKeyAndValueByPath(path, data) {
    var keys = splitPathToKeys(path);
    var bottomData = data;
    while (keys.length) {
        var key = keys.shift();
        if (keys.length) {
            bottomData[key] = bottomData[key] || {};
            bottomData = bottomData[key];
        } else {
            delete bottomData[key];
        }
    }
    return data;
}

function isEmptyPlainObject(v) {
    var ret = TRUE;
    for (var i in v) {
        ret = FALSE;
        break;
    }
    return ret;
}

module.exports = nattyStorage;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

'use strict';

var NULL = null;

/**
 * 变换两个参数的函数到多个参数
 * @param  {Function} fn 基函数
 * @return {Function} 变换后的函数
 * @demo
 *      function add(x, y) { return x+y; }
 *      add = redo(add);
 *      add(1,2,3) => 6
 */
var redo = function redo(fn) {
	return function () {
		var args = arguments;
		var ret = fn(args[0], args[1]);
		for (var i = 2, l = args.length; i < l; i++) {
			ret = fn(ret, args[i]);
		}
		return ret;
	};
};

var OBJECT = 'object';
var isObject = function isObject(v) {
	return typeof v === OBJECT;
};

var isWindow = function isWindow(v) {
	return v !== NULL && v === v.window;
};

// 参考了zepto
var isPlainObject = function isPlainObject(v) {
	return v !== NULL && isObject(v) && !isWindow(v) && Object.getPrototypeOf(v) === Object.prototype;
};

var isArray = Array.isArray;
if (false) {
	if (!isArray) {
		isArray = function (v) {
			return toString.call(v) === ARRAY_TYPE;
		};
	}
}

/**
 * 对象扩展
 * @param  {Object} receiver
 * @param  {Object} supplier
 * @return {Object} 扩展后的receiver对象
 * @note 这个extend方法是定制的, 不要拷贝到其他地方用!!!
 */
var extend = function extend() {
	var receiver = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	var supplier = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	for (var key in supplier) {
		// `supplier`中不是未定义的键 都可以执行扩展
		if (supplier.hasOwnProperty(key) && supplier[key] !== undefined) {
			if (isArray(supplier[key])) {
				receiver[key] = [].concat(supplier[key]);
			} else if (isPlainObject(supplier[key])) {
				receiver[key] = extend({}, supplier[key]);
			} else {
				receiver[key] = supplier[key];
			}
		}
	}
	return receiver;
};

var noop = function noop() {};

module.exports = {
	extend: redo(extend),
	noop: noop,
	isPlainObject: isPlainObject
};

/***/ }
/******/ ])
});
;

/***/ }
/******/ ])
});
;