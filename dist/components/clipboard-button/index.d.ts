import { Button } from '@wordpress/components';
type ButtonProps = React.ComponentProps<typeof Button>;
interface ClipboardButtonProps extends Partial<Omit<ButtonProps, 'children'>> {
    /**
     * The text to copy to the clipboard.
     */
    text: string;
    /**
     * Function to run when the text is successfully copied.
     */
    onSuccess?: Function;
    /**
     * Labels for the button.
     */
    labels?: ButtonLabels;
}
interface ButtonLabels {
    /**
     * Label for the button when it's ready to copy.
     */
    copy?: string;
    /**
     * Label for the button when the text has been copied.
     */
    copied?: string;
}
export declare const ClipboardButton: React.FC<ClipboardButtonProps>;
export {};
//# sourceMappingURL=index.d.ts.map