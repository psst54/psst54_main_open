import React from "react";

import MainScreen from "~screens/Main";
import { directoryData } from "./LeftDownSide";

const MainContainer = () => {
  return <MainScreen directoryData={directoryData} />;
};

export default MainContainer;
