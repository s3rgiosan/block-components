import { CoreIconRecord, Icon } from '../../stores/icons/types';
/**
 * An icon flattened into the shape the picker consumes, tagged with the
 * icon set it belongs to.
 */
export type FlattenedIcon = Icon & {
    iconSet: string;
};
/**
 * The `select` function passed to a `useSelect` callback.
 */
type WPSelect = (store: any) => any;
/**
 * Strip the leading `<collection>/` prefix from a core icon name so it lines
 * up with the bare names used by the internal icon store.
 *
 * @param {string} name Icon name, e.g. `example/smiley`.
 * @param {string} collection Collection slug the icon belongs to.
 *
 * @returns {string} The icon name without its collection prefix.
 */
export declare function stripCollectionPrefix(name: string, collection: string): string;
/**
 * Give a core icon's root `<svg>` a `fill="currentColor"` when it has no fill
 * of its own.
 *
 * Core's icon sanitizer strips the root `fill` and leaves colour to CSS (its
 * Icon block sets `fill: currentColor`). Outside that block the icon would
 * render black instead of following the text colour like `registerIcons`
 * icons do.
 *
 * @param {string} svg SVG markup from a core icon record.
 *
 * @returns {string} The markup with a root fill.
 */
export declare function withCurrentColor(svg: string): string;
/**
 * Map a core icon record onto the flattened shape the picker consumes.
 *
 * @param {CoreIconRecord} record A record from `getEntityRecords('root','icon')`.
 *
 * @returns {FlattenedIcon} The mapped icon.
 */
export declare function mapCoreIconRecord(record: CoreIconRecord): FlattenedIcon;
/**
 * Merge core icons into the internal icons, deduping by `iconSet` + `name`.
 * Internal icons win on collision, so an explicit `registerIcons` override
 * beats a core-registered icon of the same name.
 *
 * @param {FlattenedIcon[]} internalIcons Icons from the internal `registerIcons` store.
 * @param {FlattenedIcon[]} coreIcons Icons mapped from the core icon store.
 *
 * @returns {FlattenedIcon[]} The merged, deduped list.
 */
export declare function mergeIcons(internalIcons: FlattenedIcon[], coreIcons: FlattenedIcon[]): FlattenedIcon[];
/**
 * Read the WordPress 7.1+ core icon store and map its records onto the
 * flattened picker shape.
 *
 * Feature-detected by entity presence: on WordPress < 7.1 the `root/icon`
 * entity is not registered, so this returns an empty array and the internal
 * `registerIcons` store remains the sole source of icons.
 *
 * @param {WPSelect} select The `select` function from a `useSelect` callback.
 * @param {string} iconSet Optionally limit the result to a single collection.
 *
 * @returns {FlattenedIcon[]} The mapped core icons.
 */
export declare function getCoreIcons(select: WPSelect, iconSet?: string): FlattenedIcon[];
export {};
//# sourceMappingURL=map-core-icons.d.ts.map