import AsyncStorage from "@react-native-async-storage/async-storage";
import { types } from "mobx-state-tree";

export const SettingStore = types
  .model({
    Darkmode: types.boolean,
    Lock: types.model({
      password: types.string,
      lock: types.boolean,
      shouldNavigate: types.boolean,
    }),
  })
  .actions((self) => ({
    SetDarkmode(data: boolean) {
      self.Darkmode = data;
    },
    SetLock(data: boolean) {
      self.Lock.lock = data;
      AsyncStorage.setItem(
        "password",
        JSON.stringify({
          lock: self.Lock.lock,
          password: self.Lock.password,
        })
      );
    },
    SetPassword(data: string) {
      self.Lock.password = data;
      JSON.stringify({
        lock: self.Lock.lock,
        password: self.Lock.password,
      });
    },
    SetNavigate(data: boolean) {
      self.Lock.shouldNavigate = data;
    },
  }));
