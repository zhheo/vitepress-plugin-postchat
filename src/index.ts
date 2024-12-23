import type { Plugin } from 'vitepress'

export interface PostChatOptions {
  // 账户设置
  key?: string

  // 文章摘要设置
  enableSummary?: boolean
  postSelector?: string
  title?: string
  summaryStyle?: string
  postURL?: string
  blacklist?: string
  wordLimit?: number
  typingAnimate?: boolean
  beginningText?: string
  summaryTheme?: string

  // 智能对话设置
  enableAI?: boolean
  userMode?: 'magic' | 'iframe'
  postChatConfig?: {
    backgroundColor?: string
    fill?: string
    bottom?: string
    left?: string
    width?: string
    frameWidth?: string
    frameHeight?: string
    defaultInput?: boolean
    upLoadWeb?: boolean
    showInviteLink?: boolean
    userTitle?: string
    userDesc?: string
    userIcon?: string
    addButton?: boolean
    defaultChatQuestions?: string[]
    defaultSearchQuestions?: string[]
  }
}

export function postChat(options: PostChatOptions): Plugin {
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
    transformIndexHtml(html) {
      const configScript = `
        <!-- PostChat Plugin start -->
        ${enableSummary ? `<link rel="stylesheet" href="${summaryStyle}">` : ''}
        <script>
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
            backgroundColor: "${postChatConfig.backgroundColor}",
            bottom: "${postChatConfig.bottom}",
            left: "${postChatConfig.left}",
            fill: "${postChatConfig.fill}",
            width: "${postChatConfig.width}",
            frameWidth: "${postChatConfig.frameWidth}",
            frameHeight: "${postChatConfig.frameHeight}",
            defaultInput: ${postChatConfig.defaultInput},
            upLoadWeb: ${postChatConfig.upLoadWeb},
            showInviteLink: ${postChatConfig.showInviteLink},
            userTitle: "${postChatConfig.userTitle}",
            userDesc: "${postChatConfig.userDesc}",
            addButton: ${postChatConfig.addButton},
            beginningText: "${beginningText}",
            userMode: "${userMode}",
            userIcon: "${postChatConfig.userIcon}",
            defaultChatQuestions: ${JSON.stringify(postChatConfig.defaultChatQuestions || [])},
            defaultSearchQuestions: ${JSON.stringify(postChatConfig.defaultSearchQuestions || [])}
          };
        </script>
        ${jsPath ? `<script data-postChat_key="${key}" src="${jsPath}" defer></script>` : ''}
        <!-- PostChat Plugin end -->
      `;
      return html.replace('</head>', `${configScript}</head>`);
    }
  };
}