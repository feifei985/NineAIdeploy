# NineAIdeploy

NineAI 源码包详细部署教程

------------------- NineAI 整合包安装教程 ----------------------

版本库中是原版的整合包，下面是整合包的安装教程，上面是源码包的安装教程

### 系统演示

<img src="https://github.com/feifei985/NineAIdeploy/blob/main/assets/nineai/01.png" alt="PHP学习网">

<img src="https://github.com/feifei985/NineAIdeploy/blob/main/assets/nineai/02.png" alt="PHP学习网">

<img src="https://github.com/feifei985/NineAIdeploy/blob/main/assets/nineai/03.png" alt="PHP学习网">

<img src="https://github.com/feifei985/NineAIdeploy/blob/main/assets/nineai/04.png" alt="PHP学习网">

<img src="https://github.com/feifei985/NineAIdeploy/blob/main/assets/nineai/05.png" alt="PHP学习网">

## 环境准备

1. **安装Node.js环境**
   - Node.js 版本大于 16
   - pnpm 版本大于 6
   - npm 版本大于 9 
   - MySQL 版本大于等于 5.7
   - Redis （最好设置个密码）

2. **安装PM2**
   - 使用npm安装PM2：`npm install pm2 -g`
   - PM2是负责管理 Node 应用的进程。

3. **安装PNPM**
   - 使用 npm 安装PNPM：`npm install -g pnpm`

## 配置项目

1. **配置环境变量**
   - 复制`.env.example`文件为`.env`，修改 `.env` 文件改为你自己的配置

2. **安装项目依赖**
   - 运行命令：`pnpm install`

## 启动项目

1. **启动服务**
   - 使用命令：`pnpm start`
   - 这将启动项目，并默认在9520端口监听。

2. **访问项目**
   - Nginx 配置反向代理到 `http://127.0.0.1:9520`
   - 在浏览器中通过你的域名访问

## 管理平台

- **管理端地址**：`/nineai/admin`
- **超级管理员账号**：`super`
- **密码**：`nine-super`

## 学习交流

<div>
  <img src="https://github.com/feifei985/NineAIdeploy/blob/main/assets/weixin/qun.JPG?raw=true" alt="PHP学习网" style="display: inline-block; width: 300px;">
  <img src="https://github.com/feifei985/NineAIdeploy/blob/main/assets/weixin/github-weixin.jpg?raw=true" alt="PHP学习网" style="display: inline-block; width: 300px;">
</div>