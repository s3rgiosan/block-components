interface PostDatePickerProps {
    date?: string;
    setDate: (date: string | null) => void;
}
export declare const PostDatePicker: React.FC<PostDatePickerProps>;
interface PostDateProps {
    /**
     * The placeholder to show when no date is set.
     */
    placeholder: string;
    /**
     * The date format to use.
     */
    format?: string;
    /**
     * The timezone to use for formatting.
     * When not provided, dateI18n falls back to the WordPress site timezone.
     */
    timezone?: string;
    /**
     * Remaining props to pass to the time element.
     */
    [key: string]: unknown;
}
export declare const PostDate: React.FC<PostDateProps>;
export {};
//# sourceMappingURL=index.d.ts.map