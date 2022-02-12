import styled from "styled-components";
import { d_flex } from "./../../Styles/mixins";
import bg from "../../Assets/images/bgimg.png";
export const RegisterEl = styled.div`
  background: #2c473e;
  background-image: url(${bg});
  background-size: cover;
  background-position: bottom;
  height: 100vh;
  display: flex;
  .left {
    flex: 0.5;
    -ms-flex: 0.5;
    .content {
      height: 60%;
      ${d_flex("column", "center", "center")};
      h1,
      h2 {
        max-width: 80%;
        font-weight: bold;
        font-size: 48px;
        padding: 1rem;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.019em;
        color: #ffffff;
        text-transform: uppercase;
      }
    }
  }
  .right {
    flex: 0.5;
    -ms-flex: 0.5;
    background: #ffffff;
    box-shadow: 3.75215px 3.75215px 18.7607px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    margin: 1rem 2rem;
    ${d_flex("row", "center", "center")};
    &__content {
      width: 60%;
      min-width: 300px;
      .reg-button {
        text-align: center;
        padding: 0.5rem 0;
      }
    }
  }
  @media screen and (max-width: 1000px) {
    height: 100%;
    min-height: 100vh;
    flex-direction: column;
    .left {
      flex: 1;
      -ms-flex: 1;
      .content {
        height: 100%;
        ${d_flex("column", "center", "center")};
        h1,
        h2 {
          height: 100%;
          font-size: 28px;
          padding: 0.7rem;
        }
      }
    }
    .right {
      flex: 1;
      -ms-flex: 1;
    }
  }
  @media screen and (max-width: 400px) {
    .left {
      .content {
        h1,
        h2 {
          max-width: 100%;
        }
      }
    }
    .right {
      margin: 0.3rem 0.4rem;
    }
  }
`;
