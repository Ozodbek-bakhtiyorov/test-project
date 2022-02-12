import styled from "styled-components";
import { d_flex } from "./../../Styles/mixins";

export default function Title({ title, fontSize, texttransform }) {
  return (
    <TitleEl 
      fontSize={fontSize} 
      texttransform={texttransform}
    >
      {title}
    </TitleEl>
  );
}
const TitleEl = styled.div`
  padding: 0.5rem 1rem;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "25.5676px")};
  text-transform:${props=>props.texttransform?props.texttransform:"none"};
  line-height: 30px;
  ${d_flex("row", "center", "center")};
  letter-spacing: 0.019em;

  width: 100%;
`;
