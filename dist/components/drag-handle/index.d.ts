import type { HTMLAttributes } from 'react';
interface DragHandleProps extends HTMLAttributes<HTMLSpanElement> {
    isDragging?: boolean;
}
/**
 * Renders an SVG drag handle.
 *
 * @param {object} props The prop object.
 * @param {boolean} props.isDragging Whether the item is being dragged. It sets the cursor and is not passed to the DOM.
 * @returns {*} React JSX
 */
export declare const DragHandle: React.FC<DragHandleProps>;
export {};
//# sourceMappingURL=index.d.ts.map