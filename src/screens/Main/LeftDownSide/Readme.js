import React from "react";
import styled from "styled-components";
import { Color, Font } from "~themes";

import { DefaultText } from "../styles";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 40px;
  padding-bottom: 40px;
`;
const Header1 = styled(DefaultText)`
  font-size: ${Font.size.h1};
  line-height: ${Font.size.h1 + 20}px;
`;
const Text = styled(DefaultText)`
  font-size: ${Font.size.standard}px;
  line-height: ${Font.size.standard + 10}px;
  word-break: keep-all;
`;

const Readme = () => {
  return (
    <Container>
      <Header1>반가워요!</Header1>
      <Text>
        이 페이지에 방문해 주셔서 감사해요. 여기는 psst54가 리액트 연습 및
        자기소개를 목적으로 만든 페이지에요.
      </Text>
      <Text>
        수정할 부분이나 궁금한 부분이 있다면 페이지 위쪽 Contact 박스에서 편하신
        방법으로 연락 주세요.
      </Text>
      <Text>사적인 질문이라도 상관없어요! 저도 당신과 친해지고 싶어요😊</Text>
    </Container>
  );
};

export default Readme;
