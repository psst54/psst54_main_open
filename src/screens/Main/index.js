import React from "react";
import { Color, Font } from "~themes";

import {
  FullPage,
  HeaderContainer,
  Title,
  GridContainer,
  Col1,
  Col2,
} from "./styles";
import LeftUpSide from "./LeftUpSide";
import LeftDownSide from "./LeftDownSide";
import RightUpSide from "./RightUpSide";
import RightDownSide from "./RightDownSide";

const MainScreen = ({ directoryData }) => {
  return (
    <FullPage>
      <HeaderContainer>
        <Title>PSST54</Title>
      </HeaderContainer>
      <GridContainer>
        <Col1>
          <LeftUpSide />
          <LeftDownSide directoryData={directoryData} />
        </Col1>
        <Col2>
          <RightUpSide />
          <RightDownSide />
        </Col2>
      </GridContainer>
    </FullPage>
  );
};

export default MainScreen;
