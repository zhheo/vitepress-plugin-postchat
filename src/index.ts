import type { Plugin } from 'vitepress'
import type { HeadConfig, SiteConfig } from 'vitepress'
import type { PostChatOptions } from './types'

function getPostChatHeadConfig(options: PostChatOptions): HeadConfig[] {
  const {
    key,
    enableSummary,
    summaryStyle,
    postSelector,
    title,
    postURL,
    blacklist,
    wordLimit,
    typingAnimate,
    summaryTheme,
    beginningText,
    postChatConfig,
    jsPath
  } = options

  const heads: HeadConfig[] = []

  // 添加样式
  if (enableSummary) {
    heads.push(['link', { rel: 'stylesheet', href: summaryStyle || '' }])
  }

  // 将对象转换为JavaScript对象字面量形式的字符串
  const configStr = Object.entries(postChatConfig || {})
    .map(([key, value]) => {
      if (typeof value === 'string') {
        return `  ${key}: "${value}"`
      } else if (Array.isArray(value)) {
        return `  ${key}: [
    ${value.map(item => `"${item}"`).join(',\n    ')}
  ]`
      }
      return `  ${key}: ${value}`
    })
    .join(',\n')

  // 添加配置脚本
  heads.push([
    'script',
    {},
    `
      let tianliGPT_key = '${key}';
      let tianliGPT_postSelector = '${postSelector}';
      let tianliGPT_Title = '${title}';
      let tianliGPT_postURL = '${postURL}';
      let tianliGPT_blacklist = '${blacklist}';
      let tianliGPT_wordLimit = '${wordLimit}';
      let tianliGPT_typingAnimate = ${typingAnimate};
      let tianliGPT_theme = '${summaryTheme}';
      let tianliGPT_BeginningText = '${beginningText}';
      let postChatConfig = {
${configStr}
      };
    `
  ])

  // 添加主脚本
  if (jsPath) {
    heads.push([
      'script',
      {
        src: jsPath,
        defer: "true",
        'data-postChat_key': key || ''
      }
    ])
  }

  return heads
}

export function postChat(options: PostChatOptions): Plugin {
  let resolveConfig: any
  let vitepressConfig: SiteConfig

  const {
    key = '70b649f150276f289d1025508f60c5f58a',
    enableSummary = true,
    postSelector = '#VPContent .container > .content',
    title = '文章摘要',
    summaryStyle = 'https://ai.tianli0.top/static/public/postChatUser_summary.min.css',
    postURL = '*',
    blacklist = '',
    wordLimit = 1000,
    typingAnimate = true,
    beginningText = '这篇文章介绍了',
    summaryTheme = 'default',
    enableAI = true,
    userMode = 'magic',
    postChatConfig = {
      backgroundColor: "#3e86f6",
      fill: "#FFFFFF",
      bottom: "16px",
      left: "16px",
      width: "44px",
      frameWidth: "375px",
      frameHeight: "600px",
      defaultInput: true,
      upLoadWeb: true,
      showInviteLink: true,
      userTitle: "PostChat",
      userDesc: "如果你对网站的内容有任何疑问，可以来问我哦～",
      userIcon: "",
      addButton: true,
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
  } = options;

  // 在函数内部计算 jsPath
  let jsPath = '';
  if (enableSummary && enableAI) {
    jsPath = 'https://ai.tianli0.top/static/public/postChatUser_summary.min.js';
  } else if (enableAI) {
    jsPath = 'https://ai.tianli0.top/static/public/postChatUser.min.js';
  } else if (enableSummary) {
    jsPath = 'https://ai.tianli0.top/static/public/tianli_gpt.min.js';
  }

  return {
    name: 'vitepress-plugin-postchat',
    enforce: 'pre',
    configResolved(config: any) {
      if (resolveConfig) {
        return
      }
      resolveConfig = config

      vitepressConfig = config.vitepress
      if (!vitepressConfig) {
        return
      }

      const selfTransformPageData = vitepressConfig.transformPageData
      vitepressConfig.transformPageData = async (pageData, ctx) => {
        pageData.frontmatter.head ??= []
        pageData.frontmatter.head.push(...getPostChatHeadConfig({
          ...options,
          jsPath
        }))
        return selfTransformPageData?.(pageData, ctx)
      }
    }
  };
}