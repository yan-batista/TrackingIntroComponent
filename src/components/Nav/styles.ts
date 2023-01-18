import styled from "styled-components";
import devices from "../../styles/devices";

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

export const Container = styled.div`
  padding: 37px;

  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${devices.desktop} {
    width: 80%;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${devices.desktop} {
    justify-content: center;
  }
`;
