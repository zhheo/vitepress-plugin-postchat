export interface PostChatOptions {
  key?: string
  enableSummary?: boolean
  summaryStyle?: string
  postSelector?: string
  title?: string
  postURL?: string
  blacklist?: string
  wordLimit?: number
  typingAnimate?: boolean
  summaryTheme?: string
  beginningText?: string
  enableAI?: boolean
  userMode?: string
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
  jsPath?: string
} 