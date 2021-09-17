export default ({ store }) => {
  if (store) {
    const storeModule = {
      namespaced: true,
      state: () => ({
        sampleItems : [1, 2, 3],
      }),
      mutations: {},
      actions: {},
    }

    store.registerModule('SampleStore', storeModule);
  }
}