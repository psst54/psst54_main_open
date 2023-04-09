import React from "react";
import styled from "styled-components";
import { Color, Font } from "~themes";

import { DefaultText } from "../styles";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 100px;
  padding-bottom: 100px;
`;
const Header1 = styled(DefaultText)`
  font-size: ${Font.size.h1};
  line-height: ${Font.size.h1 + 20}px;
`;
const Header2 = styled(DefaultText)`
  font-size: ${Font.size.h2};
  line-height: ${Font.size.h2 + 15}px;
`;
const Header3 = styled(DefaultText)`
  font-size: ${Font.size.h3};
  line-height: ${Font.size.h3 + 15}px;
`;
const Text = styled(DefaultText)`
  font-size: ${Font.size.standard}px;
  line-height: ${Font.size.standard + 10}px;
`;

const Yet = () => {
  return (
    <Container>
      <Text>내용을 작성중입니다...</Text>
    </Container>
  );
};

export default Yet;
