import React from "react";

import Nav from "../../components/Nav/index";
import {
  Container,
  DevicesImg,
  BackgroundElement,
  MainContainer,
  TopMainContainer,
  NewButton,
  MainContainerFooter,
  ScheduleButton,
} from "./styles";

import devicesImg from "../../../images/illustration-devices.svg";

const Home = () => {
  return (
    <>
      <Nav />
      <BackgroundElement />
      <Container>
        <DevicesImg src={devicesImg} alt="cellphone and computer side by side" />

        <MainContainer>
          <TopMainContainer>
            <NewButton>NEW</NewButton>
            <span className="dashboard">MONOGRAPH DASHBOARD</span>
          </TopMainContainer>
          <h1 className="title">POWERFUL INSIGHTS INTO YOUR TEAM</h1>
          <span className="description">Project planning and time tracking for agile teams</span>
          <MainContainerFooter>
            <ScheduleButton>SCHEDULE A DEMO</ScheduleButton>
            <span className="preview-text">TO SEE A PREVIEW</span>
          </MainContainerFooter>
        </MainContainer>
      </Container>
    </>
  );
};

export default Home;
