import React from "react";
import styled from "styled-components";
import { Color, Font } from "~themes";

import Laptop_Twitter from "~assets/images/laptop_twitter.png";
import ICPCTeam from "~assets/images/icpcTeam.png";

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

const Club = () => {
  return (
    <Container>
      <ItemContainer>
        <IconWrapper>
          <IconContainer src={Laptop_Twitter} />
        </IconWrapper>
        <TextWrapper>
          <Text>SoGang Computer Club</Text>
          <Text>: 서강대학교 중앙 컴퓨터 동아리</Text>
          <Text>동아리원 (2019.03.~ 현재)</Text>
          <Text>부회장 (2020.03.~ 2022.02.)</Text>
        </TextWrapper>
      </ItemContainer>

      <ItemContainer>
        <IconWrapper>
          <IconContainer src={ICPCTeam} />
        </IconWrapper>
        <TextWrapper>
          <Text>Sogang ICPC Team</Text>
          <Text>: 서강대학교 컴퓨터공학과 학부 소학회</Text>
          <Text>학회원 (2020.11. ~ 현재)</Text>
        </TextWrapper>
      </ItemContainer>
    </Container>
  );
};

export default Club;
