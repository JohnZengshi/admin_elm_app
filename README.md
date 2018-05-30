## 技术栈

vue2 + vuex + vue-router + webpack + ES6/7 + less + element-ui


## 项目运行


```

npm install 或 yarn(推荐)

npm run dev (访问线上后台系统)

npm run local (访问本地后台系统，需运行node-elm后台系统)


访问: http://localhost:8002

```


# 功能列表

- [x] 管理员登陆/注册/退出/自动登录 -- 完成 （退出和自动登录还没完成）
<!-- - [x] 添加商铺 -- 完成
- [x] 添加商品 -- 完成
- [x] 数据展示 -- 完成
- [x] 管理用户 -- 完成
- [x] 管理商铺 -- 完成
- [x] 食品管理 -- 完成
- [x] 权限验证 -- 完成
- [x] 管理员设置 -- 完成
- [x] 图表📈 -- 完成
- [x] 富文本编辑器 -- 完成 -->

# 遇到的问题
用express-session操作session在不同的接口中,访问的session有问题，前一个接口增加了seesion.id，第二个接口却访问不到session.id,

用户重复登录的问题（新打开一个网页或浏览器也可以登录），也是session保存的问题