import styled from "styled-components";
import { useContexto } from "../../hooks";


export function Right(){
  const teams = useContexto()
  console.log(teams)
    return(
        <WrapperSld>oi</WrapperSld>
    )
}

export const WrapperSld =  styled.div`
  width: 300px;
  background-color: azure;
  @media (max-width: 800px) {
    width: 100%;
  }
`