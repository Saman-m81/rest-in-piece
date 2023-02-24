import { types } from "mobx-state-tree";
const MyStore = types
  .model({ someData: types.string })
  .views((self) => ({
    getSomeData() {
      return self.someData;
    },
  }))
  .actions((self) => ({
    setSomeData(val: string) {
      self.someData = val;
    },
  }))
  .create({ someData: "" });

export default MyStore;
