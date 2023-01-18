import styled from "styled-components";
import colors from "../../styles/colors";
import devices from "../../styles/devices";

export const DevicesImg = styled.img.attrs((props) => {
  src: props.src;
})`
  width: 500px;
  position: relative;
  top: 21px;
  right: -3%;
  overflow-x: hidden;

  @media ${devices.tablet} {
    right: -30%;
  }

  @media ${devices.desktop} {
    position: absolute;
    top: 80px;
    right: -100px;
    width: 600px;
  }

  @media ${devices.desktop_lg} {
    width: 965px;
    top: 35px;
    right: -275px;
  }
`;

export const Container = styled.div`
  max-width: 100vw;
  overflow: hidden;
  position: relative;

  @media ${devices.desktop} {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    margin-top: 50px;
  }

  @media ${devices.desktop_lg} {
    margin-left: 135px;
    margin-top: 75px;
    padding-bottom: 50px;
  }
`;

export const BackgroundElement = styled.div`
  background-color: ${colors.lightGrayishBlue};
  border-bottom-left-radius: 60px;

  width: 50vw;
  height: 425px;

  position: absolute;
  z-index: -10;

  left: 50%;
  top: 0;

  @media ${devices.desktop} {
    width: 50vw;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding-left: 30px;
  max-width: 100vw;
  flex-wrap: wrap;

  max-width: 100%;
  margin-top: 85px;

  .title {
    margin-top: 16px;

    font-size: 40px;
    font-weight: 700;
    font-family: "Barlow Condensed", sans-serif;
    color: ${colors.veryDarkBlue};

    line-height: 40px;
    max-width: 89%;
  }

  .description {
    max-width: 90%;
    padding-right: 30px;
    margin-top: 15px;

    line-height: 25px;
    font-weight: 500;
  }

  @media ${devices.tablet} {
    align-items: center;
  }

  @media ${devices.desktop} {
    align-items: flex-start;
  }

  @media ${devices.desktop_lg} {
    .title {
      font-size: 65px;
      line-height: 65px;
      max-width: 60%;
      margin-top: 6px;
    }

    .description {
      margin-top: 33px;
      max-width: 35%;
    }
  }
`;

export const TopMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & > .dashboard {
    letter-spacing: 5px;
    font-family: "Barlow Condensed", sans-serif;
    font-size: 15px;
    font-weight: 500;
    color: ${colors.grayishBlue};

    position: relative;
    margin-left: 18px;
  }

  @media ${devices.desktop_lg} {
    margin-bottom: 8px;
  }
`;

export const NewButton = styled.span`
  background-color: ${colors.veryDarkBlue};
  border-radius: 100px;

  color: white;

  padding: 4px 8px;
  font-size: 14px;
  font-weight: 700;

  position: relative;
`;

export const MainContainerFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 90%;
  margin-top: 25px;

  .preview-text {
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 1px;
    color: ${colors.grayishBlue};

    margin-left: 8px;
  }

  @media ${devices.tablet} {
    justify-content: center;
  }

  @media ${devices.desktop} {
    justify-content: flex-start;
  }

  @media ${devices.desktop_lg} {
    margin-top: 60px;

    .preview-text {
      margin-left: 20px;
      letter-spacing: 4px;
    }
  }
`;

export const ScheduleButton = styled.button`
  background-color: ${colors.red};
  border: none;

  border-radius: 4px;
  color: white;

  font-size: 12px;
  letter-spacing: 2px;
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 700;

  padding: 12px 22px;

  position: relative;

  @media ${devices.desktop_lg} {
    font-size: 15px;
    width: 185px;
    height: 50px;
  }
`;
