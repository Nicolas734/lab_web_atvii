import styled from "styled-components";
import { Left } from "../../components/Left";
import { Right } from "../../components/Right";
import { Header } from "../../components/Header";
import { SwitchTheme } from "../../components/SwitchTheme";


function Main() {
  return (
    <BodySld>
      <Header/>
      <WrapperSld>
        <Left/>
        <Right/>
      </WrapperSld>
      <SwitchTheme/>
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
    
  }
`;

const WrapperSld = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  margin: 1.4rem;
  flex:1;
  width: calc(100% - 2.8rem);
  
  @media (max-width: 800px) {
    width: 100%;
    flex-direction: column;
  }
`
