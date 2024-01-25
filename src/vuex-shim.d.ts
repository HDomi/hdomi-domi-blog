import { Store } from "vuex";

interface State {
  layout: {
    isLoading: boolean;
  };
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
