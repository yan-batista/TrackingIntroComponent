import styled from "styled-components";
import devices from "../../styles/devices";
import colors from "../../styles/colors";

export const IconImg = styled.img.attrs((props) => {
  src: props.src;
})`
  position: relative;
  width: 24px;

  @media ${devices.desktop} {
    width: 30px;
    top: 25px;
  }
`;

export const Logo = styled(IconImg)`
  left: -7px;

  @media ${devices.desktop} {
    left: -15px;
  }
`;

export const CloseIcon = styled(IconImg)`
  left: 7px;

  @media ${devices.desktop} {
    display: none;
  }
`;

export const Container = styled.div<{ menuActive: boolean }>`
  position: absolute;
  z-index: 20;
  top: 100px;
  left: 0;

  width: 100%;

  display: ${(props) => (props.menuActive ? "flex" : "none")};
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & > ul {
    width: 85%;
    height: 230px;

    background-color: white;
    border-radius: 3px;

    -webkit-box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    padding-top: 25px;

    list-style: none;
  }

  & > ul > li {
    font-size: 18px;
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 700;

    text-transform: uppercase;
    letter-spacing: 1px;

    margin-bottom: 25px;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    & > .menuDivider {
      background-color: ${colors.grayishBlue};
      width: 85%;
      height: 1px;
      align-self: center;
    }
  }

  @media ${devices.desktop} {
    display: none;
  }
`;
