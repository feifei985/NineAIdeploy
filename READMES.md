# NineAIdeploy

[NineAI 源码包详细部署教程](https://github.com/feifei985/NineAIdeploy/blob/main/READMES.md)

### 系统演示

<img src="https://github.com/feifei985/NineAIdeploy/blob/main/assets/weixin/qun.JPG?raw=true" alt="PHP学习网">

<img src="https://github.com/feifei985/NineAIdeploy/blob/main/assets/weixin/qun.JPG?raw=true" alt="PHP学习网">

<img src="https://github.com/feifei985/NineAIdeploy/blob/main/assets/weixin/qun.JPG?raw=true" alt="PHP学习网">

## 环境准备

1. **安装Node.js环境**
   - Node.js 版本大于 16
   - pnpm 版本大于 6
   - npm 版本大于 9 
   - MySQL 版本大于等于 5.7
   - Redis （最好设置个密码）

2. **目录结构**
    ```
    project-root
    |-- chat           # 用户端代码
    |-- admin          # 管理端代码
    |-- service        # 服务端代码

    ```

3. **本地开发**
   
  在项目根目录执行以下命令进行本地开发：

    1、进入 service 目录，创建 .env 文件，修改为 mysql 和 Redis 配置。
    2、新建数据名称，数据表不用管，创建时会自动创建表
    3、没问题后执行下面的命令：

   - 运行命令：`pnpm install`
   - 启动命令：`pnpm dev`
   - 打包项目：`pnpm build` 本地测试的时候，可以不用打包，上线时打包。

 **启动项目**

    分别安装依赖并启动项目：

    进入 chat 目录，执行以下命令启动用户端：

    ```
    pnpm install
    pnpm dev

    ```
    
    进入 admin 目录，执行以下命令启动管理端：

    ```
    pnpm install
    pnpm dev

    ```
这样就成功了，本地二开，运行都可以。

## 打包上线

# 后端服务

    后端服务sevice执行以下命令即可：
    ```
    pnpm build
    ```
    将生成的文件上传到服务器

# chat（前端项目）

    同样执行以下命令
    ```
    pnpm build
    ```
    将打包的 dist 文件上传到服务，前端打包的配置文件 .env.production 修改文件中的变量即可，如果分开部署，请填写线上后端服务地址。

# admin（管理端）
    部署方法和 chat 一样。

**service 服务端启动**
   - 使用命令：`pnpm start`
   - 这将启动项目，并默认在9520端口监听。

 **访问项目**
   - Nginx 配置反向代理到 `http://127.0.0.1:9520`
   - 在浏览器中通过你的域名访问

## 管理平台

若你是分开配置的，分别访问对应的配置文件
默认账号如下，记得及时更改

- **超级管理员账号**：`super`
- **密码**：`nine-super`

有什么问题进群讨论。

## 学习交流

<div>
  <img src="https://github.com/feifei985/NineAIdeploy/blob/main/assets/weixin/qun.JPG?raw=true" alt="PHP学习网" style="display: inline-block; width: 300px;">
  <img src="https://github.com/feifei985/NineAIdeploy/blob/main/assets/weixin/github-weixin.jpg?raw=true" alt="PHP学习网" style="display: inline-block; width: 300px;">
</div>