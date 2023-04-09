import React from "react";
import styled from "styled-components";
import { Color, Font } from "~themes";

import BlueBook_Twitter from "~assets/images/blueBook_twitter.png";
import Laptop_Twitter from "~assets/images/laptop_twitter.png";
import FlagUnitedStates_Twitter from "~assets/images/flagUnitedStates_twitter.png";
import FlagJapan_Twitter from "~assets/images/flagJapan_twitter.png";

import { DefaultText } from "../styles";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 40px;
  padding-bottom: 40px;
`;
const ItemContainer = styled.div`
  display: flex;

  padding-top: 5px;
  padding-bottom: 10px;
`;
const IconWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;
const IconContainer = styled.img`
  width: ${Font.size.standard + 5 + 5};
  height: ${Font.size.standard + 5 + 5};

  margin-right: 8px;
`;
const TextWrapper = styled.div``;
const Text = styled(DefaultText)`
  font-size: ${Font.size.standard}px;
  line-height: ${Font.size.standard + 10}px;
`;

const Education = () => {
  return (
    <Container>
      <ItemContainer>
        <IconWrapper>
          <IconContainer src={BlueBook_Twitter} />
          <IconContainer src={Laptop_Twitter} />
        </IconWrapper>
        <TextWrapper>
          <Text>서강대학교 철학과/컴퓨터공학과 학부과정 (2019.03. ~ 현재)</Text>
        </TextWrapper>
      </ItemContainer>

      <ItemContainer>
        <IconWrapper>
          <IconContainer src={FlagUnitedStates_Twitter} />
          <IconContainer src={FlagJapan_Twitter} />
        </IconWrapper>
        <TextWrapper>
          <Text>김해외국어고등학교 영어일본어과 (2016.03. ~ 2019.02)</Text>
        </TextWrapper>
      </ItemContainer>
    </Container>
  );
};

export default Education;
