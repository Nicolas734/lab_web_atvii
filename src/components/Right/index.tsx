import styled from "styled-components";
import { useContexto } from "../../hooks";
import { H4Sld, UlSld } from "../../styles/components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faSquareCheck } from '@fortawesome/free-solid-svg-icons'


export function Right(){
  const {teams, team, setTeam, theme} = useContexto()
  console.log(teams)
    return(
        <WrapperSld>
          <H4Sld>TIMES</H4Sld>
          <UlSld>
            {teams.map(t => (
              <LiSld onClick={() => setTeam(t)} key={t.id}>{t.name} {t.id === team?.id ? (<FontAwesomeIcon icon={theme.name === 'light' ? faCheck : faSquareCheck}/>) : (<></>)} </LiSld>
            ))}
          </UlSld>
        </WrapperSld>
    )
}

export const WrapperSld =  styled.div`
  width: 40%;
  color: ${(props => props.theme.text)};
  background-color: ${(props => props.theme.main)};
  @media (max-width: 800px) {
    width: calc(100% - 2.8rem);
    margin: 0 auto;
  }
`

const LiSld = styled.li`
  border-bottom: 1px solid ${(props => props.theme.text)};
  padding: 10px 0px;
  margin-right:1rem;
  &:first-child{
    border-top: 1px solid ${(props => props.theme.text)}
  }
  &:hover{
    cursor:pointer;
  }
  @media (max-width: 800px) {
    &:first-child{
    border-top: none
  }
  }
`;
