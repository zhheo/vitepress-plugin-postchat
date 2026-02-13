export interface PostChatOptions {
    key?: string;
    enableSummary?: boolean;
    summaryStyle?: string;
    postSelector?: string;
    title?: string;
    postURL?: string;
    blacklist?: string;
    wordLimit?: number;
    typingAnimate?: boolean;
    summaryTheme?: string;
    beginningText?: string;
    /** 是否启用 AI 播客功能（文章摘要功能），默认关闭 */
    tianliGPTPodcast?: boolean;
    enableAI?: boolean;
    userMode?: string;
    postChatConfig?: {
        backgroundColor?: string;
        fill?: string;
        bottom?: string;
        left?: string;
        width?: string;
        frameWidth?: string;
        frameHeight?: string;
        defaultInput?: boolean;
        upLoadWeb?: boolean;
        showInviteLink?: boolean;
        userTitle?: string;
        userDesc?: string;
        userIcon?: string;
        addButton?: boolean;
        defaultChatQuestions?: string[];
        defaultSearchQuestions?: string[];
        /** 文章底部推荐文章数量，0 为不显示，最大 10，默认关闭 */
        recommend?: number;
        /** 是否启用热词功能 */
        hotWords?: boolean;
    };
    jsPath?: string;
}
