import type { Components, JSX } from "../types/components";

interface HalloName extends Components.HalloName, HTMLElement {}
export const HalloName: {
  prototype: HalloName;
  new (): HalloName;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
