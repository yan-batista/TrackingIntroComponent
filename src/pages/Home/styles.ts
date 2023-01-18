import styled from "styled-components";
import colors from "../../styles/colors";

export const DevicesImg = styled.img.attrs((props) => {
  src: props.src;
})`
  width: 500px;
  position: relative;
  //left: 10px;
  top: 21px;
  right: -3%;
  overflow-x: hidden;
`;

export const Container = styled.div`
  max-width: 100vw;
  overflow-x: hidden;
  padding-bottom: 20px;
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
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  max-width: 100%;
  margin-top: 85px;

  .title {
    margin-top: 16px;

    font-size: 40px;
    font-weight: 700;
    font-family: "Barlow Condensed", sans-serif;
    color: ${colors.veryDarkBlue};

    line-height: 40px;
    max-width: 85%;
    padding-left: 5px;
  }

  .description {
    max-width: 85%;
    padding-right: 30px;
    margin-top: 17px;

    line-height: 25px;
    font-weight: 500;
    padding-left: 5px;
  }
`;

export const TopMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & > .dashboard {
    font-family: "Barlow Condensed", sans-serif;
    letter-spacing: 5px;
    font-size: 15px;
    font-weight: 500;
    position: relative;
    left: -2%;
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
  left: -8%;
`;

export const MainContainerFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 85%;
  margin-top: 29px;

  .preview-text {
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 1px;
    margin-left: 8px;
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
  left: -14px;
`;
