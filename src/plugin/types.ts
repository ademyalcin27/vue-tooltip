import type {  Props } from "tippy.js";
import type ToolTip from "./ToolTip.vue";
export declare type PluginOptions = Partial<Props>;
export * from "./index";

declare module "vue" {
  interface GlobalComponents {
    ToolTip: typeof ToolTip;
  }
}