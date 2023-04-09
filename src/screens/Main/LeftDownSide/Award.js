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
const TextWrapper = styled.div``;
const Text = styled(DefaultText)`
  font-size: ${Font.size.standard}px;
  line-height: ${Font.size.standard + 10}px;
`;
const IndentedText = styled(Text)`
  margin-left: 2rem;
`;

const Award = () => {
  return (
    <Container>
      <ItemContainer>
        <TextWrapper>
          <Text>
            2020 신촌지역 대학생 프로그래밍 대회 동아리 연합 겨울 대회 (SUAPC
            2020 Winter)
          </Text>
          <IndentedText>6th place (Team app)</IndentedText>
        </TextWrapper>
      </ItemContainer>

      <ItemContainer>
        <TextWrapper>
          <Text>
            2020 서강대학교 프로그래밍 경진 대회 (Sogang Programming Contest;
            SPC) Master division
          </Text>
          <IndentedText>5th place</IndentedText>
        </TextWrapper>
      </ItemContainer>
    </Container>
  );
};

export default Award;
