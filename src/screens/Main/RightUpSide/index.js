import React from "react";
import { Color, Font } from "~themes";

import {
  Area2,
  Box,
  Bar,
  BarTitle,
  BarIconWrapper,
  BarIconContainer,
  Content,
  TabsContainer,
  TabContainer,
  WindowsContainer,
  MessageBubble,
  MessageText,
} from "./styles";
import RollingOnTheFloorLaughing_Twitter from "~assets/images/rollingOnTheFloorLaughing_twitter.png";
import FaceBlowingAKiss_Twitter from "~assets/images/faceBlowingAKiss_twitter.png";
import ThinkingFace_Twitter from "~assets/images/thinkingFace_twitter.png";

const LeftDownSide = () => {
  const tabs = ["First", "Second", "Third"];
  const [currentIdx, setCurrentIdx] = React.useState(0);

  return (
    <Area2>
      <Box>
        <Bar>
          <BarTitle>FREE</BarTitle>
          <BarIconWrapper>
            <BarIconContainer src={ThinkingFace_Twitter} />
            <BarIconContainer src={FaceBlowingAKiss_Twitter} />
            <BarIconContainer src={RollingOnTheFloorLaughing_Twitter} />
          </BarIconWrapper>
        </Bar>
        <Content>
          <WindowsContainer>
            <MessageBubble>
              <MessageText>
                확장자가 없는 파일은 디렉토리에요. 누르면 디렉토리 내부로
                이동합니다.
              </MessageText>
            </MessageBubble>
            <MessageBubble>
              <MessageText>
                .md 파일은 마크다운 파일을 읽어와 화면에 표시해줍니다.
              </MessageText>
            </MessageBubble>
            <MessageBubble>
              <MessageText>
                .psst 파일은 자유로운 형식의 파일입니다.
              </MessageText>
            </MessageBubble>
          </WindowsContainer>
        </Content>
      </Box>
    </Area2>
  );
};

export default LeftDownSide;
