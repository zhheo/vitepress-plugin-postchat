<div align="center">
    <a href="https://ai.tianli0.top/" target="_blank" rel="noopener noreferrer">
        <img src="https://img.zhheo.com/i/2024/06/21/6674f00f3eb9d.webp" alt="icon"/>
    </a>
    <h1 align="center">PostChat</h1>
    <span>PostChat的VitePress插件，也支持文章摘要用户使用</span>
</div>

## 简介

![quickshot.webp](https://img.zhheo.com/i/2024/12/16/675fa3d24b0f7.webp)

PostChat是一个专为中小开发者与站长开发的AI增强工具，可以在网站中插入聊天机器人和智能摘要生成的功能。本项目提供专为Halo博客系统的插件安装包，你可以在Halo博客中安装使用，避免了插入代码的繁琐。

## 功能

这个插件支持PostChat用户和文章摘要用户使用。文章摘要用户可以在插件设置中关闭“智能对话”功能即可。

- 文章摘要生成功能
- 文章知识库功能
- 文章知识库对话功能
- 文章AI搜索功能

更多功能可以参见：https://ai.tianli0.top/

## 本插件在VitePress中的表现

[预览地址](https://postchat.zhheo.com/)

## 安装

执行：`npm i vitepress-plugin-postchat`

进入vitepress配置文件config.mts文件。

例如：`docs/.vitepress/config.mts`

在顶部插入行`import { postChat } from 'vitepress-plugin-postchat'`

在defineConfig中添加配置（在指定位置添加对应代码，而不是直接插入到后面）：

```ts
export default defineConfig({
  vite: {
    plugins: [
      postChat({
        // 账户设置
        key: '70b649f150276f289d1025508f60c5f58a', //可以到 https://ai.tianli0.top/ 获取账户KEY

        // 文章摘要设置
        enableSummary: true, // 是否启用文章摘要
        postSelector: '#VPContent .container > .content', // 文章选择器
        title: '文章摘要', // 文章摘要标题
        summaryStyle: 'https://ai.tianli0.top/static/public/postChatUser_summary.min.css', // 文章摘要样式
        postURL: '*', // 文章URL
        blacklist: '', // 黑名单
        wordLimit: 1000, // 字数限制
        typingAnimate: true, // 是否启用打字动画
        beginningText: '这篇文章介绍了', // 开始文本
        summaryTheme: 'default', // 文章摘要主题

        // 智能对话设置
        enableAI: true, // 是否启用智能对话
        userMode: 'magic', // 可选 'magic' 或 'iframe'
        postChatConfig: {
          // 按钮样式配置
          backgroundColor: "#3e86f6", // 按钮背景颜色
          fill: "#FFFFFF", // 按钮填充颜色
          bottom: "16px", // 按钮底部位置
          left: "16px", // 按钮左侧位置
          width: "44px", // 按钮宽度
          
          // iframe模式配置
          frameWidth: "375px", // iframe宽度（仅在iframe模式下有效）
          frameHeight: "600px", // iframe高度（仅在iframe模式下有效）
          
          // 功能配置
          defaultInput: false, // 自动填充当前页面标题
          upLoadWeb: true,   // 上传网站到知识库
          showInviteLink: true, // 显示邀请链接
          addButton: true,   // 是否显示悬浮按钮
          
          // 界面配置
          userTitle: "PostChat", // 用户标题
          userDesc: "如果你对网站的内容有任何疑问，可以来问我哦～", // 用户描述
          userIcon: "", // 自定义界面图标URL
          
          // 预设问题配置
          defaultChatQuestions: [
            "你好",
            "你是谁",
            "你是做什么的",
            "你有什么功能",
            "你有什么用"
          ],
          defaultSearchQuestions: [
            "视频压缩",
            "制作黄焖鸡"
          ]
        }
      })
    ]
  }
})
```

## 更新插件

`npm install vitepress-plugin-postchat@latest`

## 开发

测试

npm run docs:dev

发布

npm login

npm publish