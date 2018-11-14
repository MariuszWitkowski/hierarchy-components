import { Store } from "./store";

describe("MobxStore", () => {
  test("default loader", () => {
    const store = new Store();
    expect(store.loader).toBe(false);
  });

  test("Set loader to true", () => {
    const store = new Store();
    store.setLoader(true);
    expect(store.loader).toBe(true);
  });
});
