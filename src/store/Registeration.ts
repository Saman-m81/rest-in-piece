import { types } from "mobx-state-tree";

export const Registreration = types
  .model({
    Active: types.boolean,
  })
  .actions((self) => ({
    SetActive() {
      self.Active = true;
    },
    SetDeActive() {
      self.Active = false;
    },
  }));

// const filteringStore = FilteringStore.create({
//   somedata: "",
// });
