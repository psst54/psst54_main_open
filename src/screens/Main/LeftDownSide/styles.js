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
  DefaultFileTitleContainer,
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
`;
export const TabsContainer = styled.div`
  display: flex;

  margin-top: 10px;
  margin-bottom: 5px;

  scroll-direction: horizontal;
  overflow-x: auto;
  overflow-y: hidden;
  &::-webkit-scrollbar {
  }
  gap: 0.4rem;
`;
export const TabContainer = styled.div`
  cursor: pointer;

  padding: 0.2rem 1.5rem;

  border: 2px solid;
  border-color: ${({ selected }) => (selected ? "#595ee6" : "#595ee633")};
  border-radius: 5px;

  font-weight: 200;
  font-size: ${Font.size.standard}px;
  color: ${Color.dark.text.standard};
  white-space: nowrap;
`;
export const WindowsContainer = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 300px;
  height: calc(100% - 35px - 15px);

  border: 2px solid;
  border-color: #595ee6;
  border-radius: 5px;

  border-radius: 5px;
`;

export const AddressContainer = styled.div`
  display: flex;
  align-items: center;

  border-style: solid;
  border-width: 0 0 2px 0;
  border-color: #595ee633;

  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;

  background: #595ee611;
`;
export const AddressIconContainer = styled.div`
  cursor: pointer;
`;
export const AddressTextWrapper = styled.div`
  margin-left: 30px;
`;
export const AddressText = styled(DefaultText)`
  font-size: ${Font.size.littlesmall};
`;

export const FilesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);

  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
export const FileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;

  width: 100px;
  height: 100px;

  margin-top: 10px;
  margin-bottom: 10px;

  padding-left: 5px;
  padding-right: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
export const FileIconContainer = styled(DefaultFileIconContainer)``;
export const FileTitleContainer = styled(DefaultFileTitleContainer)``;
