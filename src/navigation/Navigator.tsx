import { observer } from "mobx-react";
import React, { FC } from "react";
import "react-native-gesture-handler";
import { Authentication } from "../app/Authentication/Authentication";
import { UnAuthentication } from "../app/UnAuthentication/UnAuthentication";
import rootStore from "../store/Store";

const Navigator: FC = observer(() => {
  const GetActive = rootStore.getRegisterationData()[0];
  return GetActive.Active ? <Authentication /> : <UnAuthentication />;
});

export { Navigator };
