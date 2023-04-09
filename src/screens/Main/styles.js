import styled from "styled-components";
import { Color, Font } from "~themes";

const BREAK_POINT_PC = 1200;
const BREAK_POINT_TABLET = 768;

export const FullPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 80px;

  background-color: ${Color.dark.background.standard};
  width: 100%;
  min-height: 100%;
`;
export const HeaderContainer = styled.div`
  display: flex;

  width: 90%;
  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
    width: 90%;
  }
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
    width: 80%;
  }
  max-width: 1200px;

  margin-bottom: 30px;
`;
export const GridContainer = styled.div`
  display: grid;

  // min-height: 650px;
  // height: 70vh;
  // max-height: 800px;

  width: 90%;
  @media only screen and (max-width: ${BREAK_POINT_TABLET - 1}px) {
    grid-template-rows: 1fr 1fr;
  }
  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
    width: 90%;
    grid-template-columns: 3fr 2fr;
  }
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
    width: 80%;
    grid-template-columns: 5fr 2fr;
  }
  max-width: 1200px;

  column-gap: 20px;
  row-gap: 20px;
`;
export const DefaultText = styled.div`
  font-weight: 400;
  color: ${Color.dark.text.standard};
  font-size: ${Font.size.standard}px;
`;

export const Title = styled.div`
  color: ${Color.dark.text.standard};
  font-size: ${Font.size.title}px;
  font-weight: 100;

  text-shadow: #fff 0px 0px 5px, #595ee6 0px 0px 5px, #595ee6 0px 0px 10px,
    #595ee6 0px 0px 15px, #595ee6 0px 0px 20px, #595ee6 0px 0px 25px,
    #595ee6 0px 0px 30px, #595ee6 0px 0px 40px;
`;

export const Col1 = styled.div`
  display: grid;
  grid-template-rows: 2fr 9fr;
  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
    grid-template-rows: 2fr 9fr;
  }

  column-gap: 20px;
  row-gap: 20px;
`;
export const Col2 = styled.div`
  display: grid;
  grid-template-rows: 5fr 2fr;
  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
    grid-template-rows: 5fr 2fr;
  }

  column-gap: 20px;
  row-gap: 20px;
`;

export const DefaultArea = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Area1 = styled(DefaultArea)``;
export const Area2 = styled(DefaultArea)``;
export const Area3 = styled(DefaultArea)``;
export const Area4 = styled(DefaultArea)``;

export const DefaultBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  border-radius: 12px;
  background: #393c7233;
  box-shadow: 0px 0px 15px 0px #393c7233;
`;

export const DefaultBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;

  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;

  border-radius: 8px;
`;
export const DefaultBarTitle = styled.div`
  color: ${Color.dark.text.standard};
  font-size: ${Font.size.large}px;
  font-weight: 200;
`;
export const DefaultBarIconWrapper = styled.div`
  display: flex;
`;
export const DefaultBarIconContainer = styled.img`
  cursor: pointer;

  width: ${Font.size.veryLarge}px;
  height: ${Font.size.veryLarge}px;

  margin-left: 8px;
`;

export const DefaultContent = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const DefaultFileIconContainer = styled.img`
  width 40px;
  height: 40px;

  margin-bottom: 10px;
`;
export const DefaultFileTitleContainer = styled(DefaultText)`
  font-weight: 200;
  font-size: ${Font.size.littlesmall}px;
  text-align: center;
  word-break: normal;
`;
