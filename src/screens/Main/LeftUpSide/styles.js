import styled from "styled-components";
import { Color, Font } from "~themes";

import {
  DefaultArea,
  DefaultBox,
  DefaultBar,
  DefaultBarTitle,
  DefaultBarIconWrapper,
  DefaultBarIconContainer,
  DefaultContent,
  DefaultText,
  DefaultFileIconContainer,
  DefaultFileTitleContainer
} from "../styles";

export const Area1 = styled(DefaultArea)``;
export const Box = styled(DefaultBox)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
`;
export const TitleContainer = styled.div`
  font-weight: 100;
  color: ${Color.dark.text.standard};
  font-size: ${Font.size.h2}px;
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
`;

export const FilesContainer = styled.div`
  display: flex;
`;
export const FileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;

  width: 100px;

  margin-top: 10px;
  margin-bottom: 10px;

  padding-left: 5px;
  padding-right: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
export const FileIconContainer = styled(DefaultFileIconContainer)`
`;
export const FileTitleContainer = styled(DefaultFileTitleContainer)`
`;
