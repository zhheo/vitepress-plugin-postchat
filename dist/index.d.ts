import type { Plugin } from 'vitepress';
export interface PostChatOptions {
    key: string;
    enableSummary?: boolean;
    postSelector?: string;
    title?: string;
    summaryStyle?: string;
    postURL?: string;
    blacklist?: string;
    wordLimit?: number;
    typingAnimate?: boolean;
    beginningText?: string;
    summaryTheme?: string;
    enableAI?: boolean;
    userMode?: 'magic' | 'iframe';
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
        defaultChatQuestions?: Array<{
            question: string;
        }>;
        defaultSearchQuestions?: Array<{
            question: string;
        }>;
    };
}
export declare function postChat(options: PostChatOptions): Plugin;
