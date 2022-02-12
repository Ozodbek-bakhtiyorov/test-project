import styled from "styled-components";
import { d_grid } from "../../Styles/mixins";
import { d_flex } from "./../../Styles/mixins";
export const ProfileEl = styled.div`
  padding-bottom: 10rem;
  padding-top: 4rem;
  .content {
    ${d_grid("500px", "2rem")};
    @media screen and (max-width: 600px) {
      ${d_grid("300px", "2rem")};
    }
  }
`;

export const Card = styled.div`
  padding: 2rem 3rem;
  background: #ffffff;
  box-shadow: 3.75215px 3.75215px 18.7607px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 12.5072px 12.5072px;
  .form-section {
    height: 100%;
    ${d_flex("column", "center", "center")};
    .form-info {
      padding: 1rem 0;
      font-weight: normal;
      text-align: center;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      letter-spacing: -0.016em;
    }
    .form-info-sm {
      padding: 1rem 0;
      margin-top: auto;
      font-size: 15px;
      line-height: 25px;
      text-align: center;
      letter-spacing: -0.016em;
      color: #292929;
    }
  }
  .header {
    padding: 2rem 0;
    ${d_flex("row", "center", "flex-start")}
    &_avatar {
      width: 150px;
      height: 150px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 15px;
      }
      .camera {
        ${d_flex("row", "center", "center")};
        border-radius: 50%;
        position: absolute;
        right: -7px;
        bottom: -7px;
        width: 2.5rem;
        height: 2.5rem;
        background: white;
        box-shadow: 0 0 3px black;
        cursor: pointer;
      }
    }
    &_info {
      margin-left: 1rem;
      p {
        padding-bottom: 0.3rem;
        font-size: 18px;
      }
      .name {
        font-weight: bold;
        font-size: 20.5676px;
        line-height: 30px;
        display: flex;
        align-items: center;
        letter-spacing: 0.019em;
        color: #262628;
        ${d_flex("row", "center", "space-between")};
        .edit-btn {
          color: #1666c5;
          border-bottom: 2px solid #1666c5;
          cursor: pointer;
        }
      }
    }
  }
  .body {
    p {
      padding-bottom: 0.4rem;
      span {
        font-weight: bold;
        color: rgba(44, 71, 62, 1);
      }
    }
  }

  @media screen and (max-width: 600px) {

    padding: 1rem 1.4rem;
  .form-section {
    .form-info {
      padding: .5rem 0;
      font-size: 18px;
      line-height: 20px;
    }
    .form-info-sm {
      padding: .5rem 0;
      font-size: 14px;
      line-height: 20px;
    }
  }
  .header {
    padding: 1rem 0;
    &_avatar {
      width: 100px;
      height: 100px;
      .camera {
        border-radius: 50%;
        right: -4px;
        bottom: -4px;
        width: 1.5rem;
        height: 1.5rem;
      }
    }
    &_info {
      margin-left: .5rem;
      p {
        font-size: 16px;
      }
      .name {
        font-weight: bold;
        font-size: 18.5676px;
        line-height: 25px;
      }
    }
  }
  }
  @media screen and (max-width: 600px) {
    .form-info-sm {
      font-size: 12px!important;
      line-height: 18px;
    }
    .form-info{
      font-size:12px!important;
    }
    .header{
      ${d_flex("column", "center", "flex-start")}
    }
  }
`;
