import { RichText } from '@wordpress/block-editor';
interface RichTextFieldProps extends Omit<React.ComponentPropsWithoutRef<typeof RichText>, 'isSelected'> {
    className?: string;
}
/**
 * Drop-in `RichText` field for use outside a block's `edit` context
 * (e.g. inside `InspectorControls` or a `Modal`).
 *
 * Handles the three things `RichText` doesn't get for free outside a block:
 *
 * 1. Local `SlotFillProvider` so the format-toolbar fills (which `RichText`
 *    routes through `BlockControls`) resolve inside this field instead of
 *    being captured by the surrounding block's toolbar slot.
 * 2. `inlineToolbar` so the format toolbar renders as a popover near the caret.
 * 3. Manual `isSelected` state plus click-outside deselect, ignoring the
 *    inline toolbar and any popovers it spawns (e.g. the link URL input).
 */
export declare const RichTextField: ({ tagName, className, ...richTextProps }: RichTextFieldProps) => import("react").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map