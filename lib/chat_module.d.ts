import { AppConfig } from "./config";
import { InitProgressCallback, ChatInterface, ChatOptions, GenerateProgressCallback } from "./types";
/**
 * This is the main interface to the chat module.
 */
export declare class ChatModule implements ChatInterface {
    private logger;
    private pipeline?;
    private initProgressCallback?;
    private interruptSignal;
    setInitProgressCallback(initProgressCallback: InitProgressCallback): void;
    reload(localId: string, chatOpts?: ChatOptions, appConfig?: AppConfig): Promise<void>;
    generate(input: string, progressCallback?: GenerateProgressCallback, streamInterval?: number): Promise<string>;
    interruptGenerate(): Promise<void>;
    runtimeStatsText(): Promise<string>;
    resetChat(): Promise<void>;
    unload(): Promise<void>;
    /**
     * @returns Whether the generation stopped.
     */
    stopped(): boolean;
    /**
     * Get the current generated response.
     *
     * @returns The current output message.
     */
    getMessage(): string;
    /**
     * Run a prefill step with a given input.
     * @param input The input prompt.
     */
    prefill(input: string): Promise<void>;
    /**
     * Run a decode step to decode the next token.
     */
    decode(): Promise<void>;
    private getPipeline;
    private asyncLoadTokenizer;
}
//# sourceMappingURL=chat_module.d.ts.map