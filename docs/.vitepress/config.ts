import { defineConfig } from 'vitepress'
import { postChat } from 'vitepress-plugin-postchat'

export default defineConfig({
  vite: {
    plugins: [
      postChat({
        // 账户设置
        key: '70b649f150276f289d1025508f60c5f58a', // 可以到 ai.tianli0.top 获取

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
          frameWidth: "375px", // iframe宽度
          frameHeight: "600px", // iframe高度
          
          // 功能配置
          defaultInput: true, // 自动填充当前页面标题
          upLoadWeb: true,   // 上传网站到知识库
          showInviteLink: true, // 显示邀请链接
          addButton: true,   // 是否显示悬浮按钮
          
          // 界面配置
          userTitle: "PostChat", // 用户标题
          userDesc: "如果你对网站的内容有任何疑问，可以来问我哦～", // 用户描述
          userIcon: "", // 自定义界面图标URL
          
          // 预设问题配置
          defaultChatQuestions: [
            { question: "这个网站是做什么的？" },
            { question: "有什么特色功能？" },
            { question: "如何使用这个网站？" }
          ], // 默认聊天问题
          defaultSearchQuestions: [
            { question: "最新文章" },
            { question: "热门文章" }
          ] // 默认搜索问题
        }
      })
    ]
  }
})