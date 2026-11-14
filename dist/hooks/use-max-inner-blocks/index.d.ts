type NoticeStatus = 'warning' | 'info' | 'success' | 'error';
interface UseMaxInnerBlocksOptions {
    clientId: string;
    max: number;
    message: string;
    status?: NoticeStatus;
    noticeOptions?: Record<string, unknown>;
}
/**
 * Enforce an upper bound on a block's direct innerBlocks.
 *
 * Identifies over-limit additions by diffing clientIds against the prior
 * snapshot, so existing (potentially filled) children are never removed —
 * even if a duplicate lands between them (e.g. [A, A-copy, B] → remove A-copy,
 * keep [A, B]). Fires a notice whenever an extra is removed.
 */
export declare const useMaxInnerBlocks: ({ clientId, max, message, status, noticeOptions, }: UseMaxInnerBlocksOptions) => void;
export {};
//# sourceMappingURL=index.d.ts.map