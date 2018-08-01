# 基于Webpack和ES6构建NPM包

> 用ES6编写代码，使用Webpack打包导出模块，并发布到NPM社区，添加基于Travis-CI和Coveralls的持续集成到Github项目中

# 特性

1、基于Webpack 4

2、使用ES6编写源码

3、模块支持:

- 在浏览器环境下使用，通过script标签来引入这个类库
- 通过NPM安装使用
- 兼容 ES6(ES2015) 的模块系统、CommonJS 和 AMD 模块规范

4、使用 Jest 自动化测试，并通过 nyc 测试代码覆盖率

5、持续集成（Travis-CI + Coveralls)

6、使用 ESLint + Standrad 检测代码质量

# 启动

```$xslt
yarn install
npm start
```

# 编译

```$xslt
npm run build
```

# 代码检测

```$xslt
npm run lint
```
