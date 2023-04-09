import React from "react";
import { Color, Font } from "~themes";

import {
  Area1,
  Box,
  TitleContainer,
  FilesContainer,
  FileContainer,
  FileIconContainer,
  FileTitleContainer,
} from "./styles";

import GithubDark from "~assets/images/githubDark.png";
import Kakao from "~assets/images/kakao.png";

const LeftUpSide = () => {
  const files = [
    { title: "GitHub", icon: GithubDark, link: "https://github.com/psst54" },
    {
      title: "OpenChat",
      icon: Kakao,
      link: "https://open.kakao.com/o/sPE2PHge",
    },
  ];

  const renderFile = (item, index) => {
    return (
      <FileContainer
        onClick={() => {
          window.open(item.link);
        }}
        key={index}
      >
        <FileIconContainer src={item.icon} />
        <FileTitleContainer>{item.title}</FileTitleContainer>
      </FileContainer>
    );
  };

  return (
    <Area1>
      <Box>
        <TitleContainer>Contact</TitleContainer>
        <FilesContainer>
          {files.map((item, index) => renderFile(item, index))}
        </FilesContainer>
      </Box>
    </Area1>
  );
};

export default LeftUpSide;
