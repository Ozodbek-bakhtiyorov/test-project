import styled from "styled-components";
import { d_flex } from "./../../Styles/mixins";
export const HeaderEl = styled.div`
.logout-btn{
  padding:1rem 2rem ;
  color:black;
  background: transparent;
  cursor: pointer;
  border:none;
  outline:"none";
  font-size:20px;
  font-weight:bold;
  border:1px solid black;
  border-radius: 4px;
  transition:all .3s ease-in;
  &:hover{
    background:red;
    color:white;
  }


}
  nav{
    padding:2rem 0;
    .bars{
      display:none;
    }
    .mobile-nav{
      display: none;
    }
    ${d_flex("row", "center", "space-between")}
    .logo{
      margin-right:5rem;
      flex:.3;
      font-weight: 800;
      font-size: 48px;
      line-height: 59px;
      text-transform: uppercase;
      a{
      color: #193325;
      }
      color: #193325;

    }
    ul{
      flex:.7;
      width:100%;
      ${d_flex("row", "center", "space-between")};
      li{
        a{
          font-weight: bold;
          font-size: 20px;
          line-height: 24px;
          text-transform: uppercase;
          color: #193325;
        }
      }
    }
  }
  @media screen and (max-width:1200px){
    nav{
    padding:2rem 0;
    ${d_flex("row", "center", "space-between")}
    .logo{
      font-size: 38px;
      line-height: 49px;
    }
    ul{
      li{
        a{
          font-size: 17px;
          line-height: 21px;
        }
      }
    }
  }
  }
  @media screen and (max-width:1000px){
    nav{
      ul{
        display:none;
      }
    .bars{
      width:40px;
      height:40px;
      ${d_flex('column','flex-start','space-around')}
      .line{
        width:80%;
        height:4px;
        border-radius:10px;
        background:black;
      }
      .line:first-child{
        width:80%;
      }
      .line:nth-child(2){
        width:60%;
      }
      .line:last-child{
        width:40%;
      }
    }
  
    }}
    
`;
