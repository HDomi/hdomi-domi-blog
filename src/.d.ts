declare module "showdown";
declare module "vue-spinner/src/FadeLoader.vue";
declare module "*.md" {
  import type { ComponentOptions } from "vue";
  const Component: ComponentOptions;
  export default Component;
}
