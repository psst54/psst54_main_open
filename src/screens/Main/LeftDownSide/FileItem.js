import React from "react";
import ReactGA from "react-ga4";

import { FileContainer, FileIconContainer, FileTitleContainer } from "./styles";

import NewPage from "./NewPage";

const FileItem = ({ file, index, goPrevDir, goNextDir }) => {
  const [showPage, setShowPage] = React.useState(false);

  return (
    <>
      <FileContainer
        onClick={() => {
          ReactGA.event({
            category: "Button",
            action: "click " + file.title + file.extension,
            label: "file click",
          });

          if (file.extension === "") {
            if (file.dir !== undefined && file.dir !== null) {
              goNextDir(file);
            }
            if (file.dir === null) {
              goPrevDir();
            }
          }
          if (file.extension === ".\npsst" || file.extension === ".\nmd") {
            setShowPage(true);
          }
        }}
        key={index}
      >
        <FileIconContainer src={file.icon} />
        <FileTitleContainer>{file.title + file.extension}</FileTitleContainer>
      </FileContainer>

      {(file.extension === ".\npsst" || file.extension === ".\nmd") && (
        <NewPage
          isVisible={showPage}
          setIsVisible={setShowPage}
          pageTitle={file.title + file.extension}
          pageContent={file.content}
        />
      )}
    </>
  );
};

export default FileItem;
