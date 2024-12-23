export function postChat(options) {
    const { key = '70b649f150276f289d1025508f60c5f58a', enableSummary = true, postSelector = '#VPContent .container > .content', title = '文章摘要', summaryStyle = 'https://ai.tianli0.top/static/public/postChatUser_summary.min.css', postURL = '*', blacklist = '', wordLimit = 1000, typingAnimate = true, beginningText = '这篇文章介绍了', summaryTheme = 'default', enableAI = true, userMode = 'magic', postChatConfig = {
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
    } } = options;
    let jsPath = '';
    if (enableSummary && enableAI) {
        jsPath = 'https://ai.tianli0.top/static/public/postChatUser_summary.min.js';
    }
    else if (enableAI) {
        jsPath = 'https://ai.tianli0.top/static/public/postChatUser.min.js';
    }
    else if (enableSummary) {
        jsPath = 'https://ai.tianli0.top/static/public/tianli_gpt.min.js';
    }
    return {
        name: 'vitepress-plugin-postchat',
        transformIndexHtml(html) {
            const configScript = `
        <!-- PostChat Plugin start -->
        ${enableSummary ? `<link rel="stylesheet" href="${summaryStyle}">` : ''}
        <script>
          window.tianliGPT_key = '${key}';
          window.tianliGPT_postSelector = '${postSelector}';
          window.tianliGPT_Title = '${title}';
          window.tianliGPT_postURL = '${postURL}';
          window.tianliGPT_blacklist = '${blacklist}';
          window.tianliGPT_wordLimit = '${wordLimit}';
          window.tianliGPT_typingAnimate = ${typingAnimate};
          window.tianliGPT_theme = '${summaryTheme}';
          window.tianliGPT_BeginningText = '${beginningText}';
          window.postChatConfig = {
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
