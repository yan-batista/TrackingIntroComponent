import { createGlobalStyle } from "styled-components";
import colors from "./colors";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        max-width: 100vw;
    }

    *, input, button, span {
        font-size: 18px;
        font-family: 'Barlow', sans-serif;
        font-weight: 400;
        color: ${colors.veryDarkBlue}
    }

    button {
        cursor: pointer;
    }

    .disabled {
      color: ${colors.grayishBlue};
    }

    .disabled:hover {
      border-bottom: 1px solid ${colors.grayishBlue};
    }
`;
