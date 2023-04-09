import React from "react";
import styled from "styled-components";
import { Color, Font } from "~themes";

const BREAK_POINT_PC = 1200;
const BREAK_POINT_TABLET = 768;

import RollingOnTheFloorLaughing_Twitter from "~assets/images/rollingOnTheFloorLaughing_twitter.png";
import FaceBlowingAKiss_Twitter from "~assets/images/faceBlowingAKiss_twitter.png";
import ThinkingFace_Twitter from "~assets/images/thinkingFace_twitter.png";

import {
  DefaultBar,
  DefaultBarTitle,
  DefaultBarIconWrapper,
  DefaultBarIconContainer,
  DefaultContent,
  DefaultText,
} from "../styles";

const Window = styled.div`
  position: fixed;

  background: ${Color.dark.background.standard};
  border: 3px solid;
  border-color: #393c72;

  width: 90%;
  top: calc(${(props) => props.y}px + 20%);
  left: calc(${(props) => props.x}px + 30px);

  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
    width: 80%;

    top: calc(${(props) => props.y}px + 20%);
    left: calc(${(props) => props.x}px + 30px);
  }

  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
    width: 70%;

    top: calc(${(props) => props.y}px + 20%);
    left: calc(${(props) => props.x}px + 25%);
  }
  max-width: 900px;

  background: #1e202d;
  box-shadow: 0px 0px 15px 0px #1e202d;
  border-radius: 12px;

  cursor: auto;
`;

export const Bar = styled(DefaultBar)`
  background: #595ee633;
  border: 2px solid;
  border-color: #9270ff;

  cursor: pointer;
`;
export const BarTitle = styled(DefaultBarTitle)``;
export const BarIconWrapper = styled(DefaultBarIconWrapper)``;
export const BarIconContainer = styled(DefaultBarIconContainer)``;

export const Content = styled(DefaultContent)`
  padding-top: 10px;
  padding-bottom: 5px;
`;
export const WindowsContainer = styled.div`
  max-height: 450px;

  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 20px;
  padding-right: 20px;
  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
    padding-left: 30px;
    padding-right: 30px;
  }
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  border: 2px solid;
  border-color: #9270ff;
  border-radius: 5px;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: #9270ff33;
  }
`;

const NewPage = ({ isVisible, setIsVisible, pageTitle, pageContent }) => {
  const [{ x, y }, setPosition] = React.useState({
    x: 0,
    y: 0,
  });

  return isVisible ? (
    <Window x={x} y={y} set={setPosition}>
      <Bar
        onMouseDown={(clickEvent) => {
          const mouseMoveHandler = (moveEvent) => {
            const deltaX = moveEvent.screenX - clickEvent.screenX;
            const deltaY = moveEvent.screenY - clickEvent.screenY;

            setPosition({
              x: x + deltaX,
              y: y + deltaY,
            });
          };

          const mouseUpHandler = () => {
            document.removeEventListener("mousemove", mouseMoveHandler);
          };

          document.addEventListener("mousemove", mouseMoveHandler);
          document.addEventListener("mouseup", mouseUpHandler, {
            once: true,
          });
        }}
      >
        <BarTitle>{pageTitle}</BarTitle>
        <BarIconWrapper>
          <BarIconContainer
            src={RollingOnTheFloorLaughing_Twitter}
            onClick={() => setIsVisible(false)}
          />
        </BarIconWrapper>
      </Bar>
      <Content>
        <WindowsContainer>{pageContent}</WindowsContainer>
      </Content>
    </Window>
  ) : (
    <></>
  );
};

export default NewPage;
