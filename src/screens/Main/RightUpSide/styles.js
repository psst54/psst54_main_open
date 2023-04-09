import styled from "styled-components";
import { Color, Font } from "~themes";

import {
  DefaultArea,
  DefaultBox,
  DefaultBar,
  DefaultText,
  DefaultBarTitle,
  DefaultBarIconWrapper,
  DefaultBarIconContainer,
  DefaultContent,
} from "../styles";

export const Area2 = styled(DefaultArea)``;
export const Box = styled(DefaultBox)`
  border: 3px solid;
  border-color: #393c72;
`;

export const Bar = styled(DefaultBar)`
  background: #595ee633;
  border: 2px solid;
  border-color: #595ee6;
`;
export const BarTitle = styled(DefaultBarTitle)``;
export const BarIconWrapper = styled(DefaultBarIconWrapper)``;
export const BarIconContainer = styled(DefaultBarIconContainer)``;

export const Content = styled(DefaultContent)`
  height: 100%;

  padding-top: 10px;
  padding-bottom: 5px;
`;
export const WindowsContainer = styled.div`
  height: 100%;

  border: 2px solid;
  border-color: #595ee6;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  padding-top: 10px;
  padding-bottom: 30px;
`;

export const MessageBubble = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;

  background: #595ee622;

  border-radius: 20px 20px 20px 0;
  word-break: keep-all;
`;
export const MessageText = styled(DefaultText)`
  font-weight: 200;
`;
