import { defineAsyncComponent, type App } from "vue";
export function createTooltip() {
  return (app: App) => { 

    app.component('ToolTip', defineAsyncComponent(() => import('./ToolTip.vue')))
  }
}