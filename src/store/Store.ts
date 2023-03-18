// import { observable, action, makeObservable } from "mobx";
// export class MyStore {
//   somedata = "";

//   SetData(data: string) {
//     this.somedata = data;
//   }

//   constructor() {
//     makeObservable(this, {
//       somedata: observable,
//       SetData: action,
//     });
//   }
// }

import { types } from "mobx-state-tree";
import { FilteringStore } from "./FiltereingStore";
import { Registreration } from "./Registeration";

const RootStore = types
  .model({
    filteringStore: types.array(FilteringStore),
    registeration: types.array(Registreration),
  })
  .views((self) => ({
    getFilteringData() {
      return self.filteringStore;
    },
    getRegisterationData() {
      return self.registeration;
    },
  }));

const rootStore = RootStore.create({
  filteringStore: [
    {
      somedata: "",
      SortDirection: "asc",
      SearchOption: "Course",
      Sort: "",
      max: 0,
      maxCapacity: 0,
      Cost: [0, 0],
      Capacity: [0, 0],
      SubmitFilter: {
        sort: "",
        sortdir: "",
        searchOp: "Course",
        cost: [0, 0],
        capacity: [0, 0],
      },
      isOn: false,
    },
  ],
  registeration: [
    {
      Active: false,
    },
  ],
});

export default rootStore;
