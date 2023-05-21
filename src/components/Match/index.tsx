import styled from "styled-components"


export function Match({host, visitor, date}:{host:string, visitor:string, date:string}){
    const formatDate = (data:string) => {
        const [formated,] = new Date(data).toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"}).split(',')
        return formated;
    }
    return (
        <DivSld>
            <span>{host} X {visitor}</span>
            <span>{formatDate(date)}</span>
        </DivSld>
    )
};


const DivSld = styled.div`
    display: flex;
    flex-direction: column;
`;