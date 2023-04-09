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
  AddressContainer,
  AddressIconContainer,
  AddressTextWrapper,
  AddressText,
  FilesContainer,
} from "./styles";

import FileItem from "./FileItem";

import { MdArrowBackIos } from "react-icons/md";

import RollingOnTheFloorLaughing_Twitter from "~assets/images/rollingOnTheFloorLaughing_twitter.png";
import FaceBlowingAKiss_Twitter from "~assets/images/faceBlowingAKiss_twitter.png";
import ThinkingFace_Twitter from "~assets/images/thinkingFace_twitter.png";

const LeftDownSide = ({ directoryData }) => {
  const initStack = (stack) => {
    const newStack = { ...stack };
    tabs.map((_, idx) => {
      newStack[idx] = [directoryData.root];
    });
    return newStack;
  };

  const [tabs, setTabs] = React.useState(["Tab1", "Tab2"]);
  const [currentTab, setCurrentTab] = React.useState(0);
  const [stack, setStack] = React.useState(initStack(stack));

  const [files, setFiles] = React.useState(directoryData.root);

  const getPath = () => {
    const path = stack[currentTab].map((item) => item.title);
    return path.join(" > ");
  };

  const goPrevDir = () => {
    setFiles(stack[currentTab][stack[currentTab].length - 2]);
    const newStack = { ...stack };
    newStack[currentTab] = newStack[currentTab].slice(0, -1);
    setStack(newStack);
  };

  const goNextDir = (file) => {
    setFiles(file.dir);
    const newStack = { ...stack };
    newStack[currentTab] = newStack[currentTab].concat([file.dir]);
    setStack(newStack);
  };

  return (
    <Area2>
      <Box>
        <Bar>
          <BarTitle>about</BarTitle>
          <BarIconWrapper>
            <BarIconContainer src={ThinkingFace_Twitter} />
            <BarIconContainer src={FaceBlowingAKiss_Twitter} />
            <BarIconContainer src={RollingOnTheFloorLaughing_Twitter} />
          </BarIconWrapper>
        </Bar>
        <Content>
          <TabsContainer>
            {tabs.map((item, index) => (
              <TabContainer
                selected={index === currentTab}
                onClick={() => {
                  setFiles(stack[index][stack[index].length - 1]);
                  setCurrentTab(index);
                }}
                key={index}
              >
                {item}
              </TabContainer>
            ))}
          </TabsContainer>
          <WindowsContainer>
            <AddressContainer>
              <AddressIconContainer
                onClick={() => {
                  if (stack[currentTab].length - 2 >= 0) {
                    setFiles(stack[currentTab][stack[currentTab].length - 2]);
                    const newStack = { ...stack };
                    newStack[currentTab] = stack[currentTab].slice(0, -1);
                    setStack(newStack);
                  }
                }}
              >
                <MdArrowBackIos color={"white"} />
              </AddressIconContainer>
              <AddressTextWrapper>
                <AddressText>{getPath()}</AddressText>
              </AddressTextWrapper>
            </AddressContainer>
            <FilesContainer>
              {files.content &&
                files.content.map((file, index) => (
                  <FileItem
                    file={file}
                    index={index}
                    goPrevDir={goPrevDir}
                    goNextDir={goNextDir}
                    key={index}
                  />
                ))}
            </FilesContainer>
          </WindowsContainer>
        </Content>
      </Box>
    </Area2>
  );
};

export default LeftDownSide;
