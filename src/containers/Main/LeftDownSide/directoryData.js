import React from "react";

import SparklingHeart from "~assets/images/sparklingHeart.png";
import OpenBook from "~assets/images/openBook.png";
import OpenFileFolder_Twitter from "~assets/images/openFileFolder_twitter.png";
import BookmarkTabs_Twitter from "~assets/images/bookmarkTabs_twitter.png";
import BackArrow_Twitter from "~assets/images/backArrow_twitter.png";
import Laptop_Twitter from "~assets/images/laptop_twitter.png";
import Bass_Twitter from "~assets/images/bass_twitter.png";
import ArtistPalette_Twitter from "~assets/images/artistPalette_twitter.png";
import MagnifyingGlassTiltedRight_Twitter from "~assets/images/magnifyingGlassTiltedRight_twitter.png";
import GlowingStar_Twitter from "~assets/images/glowingStar_twitter.png";
import Pencil_Twitter from "~assets/images/pencil_twitter.png";
import Pushpin_Twitter from "~assets/images/pushpin_twitter.png";
import Trophy_Twitter from "~assets/images/trophy_twitter.png";
import Handshake_Twitter from "~assets/images/handshake_twitter.png";
import PersonRunning_Twitter from "~assets/images/personRunning_twitter.png";
import Technologist_Twitter from "~assets/images/technologist_twitter.png";
import Memo_Twitter from "~assets/images/memo_twitter.png";

import Yet from "~screens/Main/LeftDownSide/Yet";
import Education from "~screens/Main/LeftDownSide/Education";
import Club from "~screens/Main/LeftDownSide/Club";
import MarkDownViewer from "~screens/Main/LeftDownSide/MarkDownViewer";

import Readme from "./readme.md";
import Award from "./award.md";
import WorkExperience from "./workExperience.md";
import ProblemSolving from "./problemSolving.md";
import Bass from "./bass.md";
import PixelArt from "./pixelArt.md";
import Participation from "./participation.md";
import Graphics from "./graphics.md";
import DBS from "./db.md";
import SsodamSearch from "./ssodamSearch.md";
import SudokuSolver from "./sudokuSolver.md";
import MainPage from "./mainPage.md";
import Blog from "./blog.md";
import TimeTracker from "./timeTracker.md";

const projectDir = {
  title: "project",
  content: [
    { title: "Back", icon: BackArrow_Twitter, extension: "", dir: null },

    {
      title: "Main Page",
      icon: Laptop_Twitter,
      extension: ".\nmd",
      content: <MarkDownViewer file={MainPage} />,
    },
    {
      title: "Blog",
      icon: Laptop_Twitter,
      extension: ".\nmd",
      content: <MarkDownViewer file={Blog} />,
    },
    {
      title: "Time Tracker",
      icon: Laptop_Twitter,
      extension: ".\nmd",
      content: <MarkDownViewer file={TimeTracker} />,
    },
    {
      title: "Ssodam Search",
      icon: MagnifyingGlassTiltedRight_Twitter,
      extension: ".\nmd",
      content: <MarkDownViewer file={SsodamSearch} />,
    },
    {
      title: "MS Sudoku Solver",
      icon: Pencil_Twitter,
      extension: ".\nmd",
      content: <MarkDownViewer file={SudokuSolver} />,
    },
    {
      title: "기초컴퓨터그래픽스",
      icon: Memo_Twitter,
      extension: ".\nmd",
      content: <MarkDownViewer file={Graphics} />,
    },
    {
      title: "데이터베이스시스템",
      icon: Memo_Twitter,
      extension: ".\nmd",
      content: <MarkDownViewer file={DBS} />,
    },
  ],
};

const activityDir = {
  title: "activity",
  content: [
    { title: "Back", icon: BackArrow_Twitter, extension: "", dir: null },
    {
      title: "Work Experience",
      icon: Technologist_Twitter,
      extension: ".\nmd",
      content: <MarkDownViewer file={WorkExperience} />,
    },
    {
      title: "Club",
      icon: Handshake_Twitter,
      extension: ".\npsst",
      content: <Club />,
    },
    {
      title: "Award",
      icon: Trophy_Twitter,
      extension: ".\nmd",
      content: <MarkDownViewer file={Award} />,
    },
    {
      title: "Contest Participation",
      icon: PersonRunning_Twitter,
      extension: ".\nmd",
      content: <MarkDownViewer file={Participation} />,
    },
  ],
};

const likeDir = {
  title: "like",
  content: [
    { title: "Back", icon: BackArrow_Twitter, extension: "", dir: null },
    {
      title: "Problem Solving",
      icon: Laptop_Twitter,
      extension: ".\nmd",
      content: <MarkDownViewer file={ProblemSolving} />,
    },
    {
      title: "Bass",
      icon: Bass_Twitter,
      extension: ".\nmd",
      content: <MarkDownViewer file={Bass} />,
    },
    {
      title: "Pixel Art",
      icon: ArtistPalette_Twitter,
      extension: ".\nmd",
      content: <MarkDownViewer file={PixelArt} />,
    },
  ],
};

const root = {
  title: "root",
  content: [
    {
      title: "Readme",
      icon: Pushpin_Twitter,
      extension: ".\nmd",
      content: <MarkDownViewer file={Readme} />,
    },
    {
      title: "Project",
      icon: OpenFileFolder_Twitter,
      extension: "",
      dir: projectDir,
    },
    {
      title: "Activity",
      icon: BookmarkTabs_Twitter,
      extension: "",
      dir: activityDir,
    },
    { title: "Like", icon: SparklingHeart, extension: "", dir: likeDir },
    {
      title: "Education",
      icon: OpenBook,
      extension: ".\npsst",
      content: <Education />,
    },
  ],
};

export const directoryData = {
  root: root,
  projectDir: projectDir,
  activityDir: activityDir,
  likeDir: likeDir,
};
