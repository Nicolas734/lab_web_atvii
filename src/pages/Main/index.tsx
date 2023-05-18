import styled from "styled-components";
import { LeftSld } from "../../components/Left";
import { Right } from "../../components/Right";


function Main() {
  return (
    <BodySld>
      <BarSld>Titulo</BarSld>
      <WrapperSld>
        <LeftSld>oi</LeftSld>
        <Right/>
      </WrapperSld>
    </BodySld>
  );
}

export default Main;

const BodySld = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  box-sizing: border-box;
  background-color: ${(props => props.theme.background)};
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const BarSld = styled.div`
  background-color:beige;
  width: 100%;
`

const WrapperSld = styled.div`
  display: flex;
  flex-direction: row;
  
  @media (max-width: 800px) {
    width: 100%;
    flex-direction: column;
  }
`



