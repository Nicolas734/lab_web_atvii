import styled from "styled-components";
import { useContexto } from "../../hooks";
import { light, dark } from "../../styles/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'


export function SwitchTheme(){
    const { theme, setTheme } = useContexto();

    const changeTheme = () => {
        const newTheme = theme.name === 'light' ? dark : light;
        setTheme(newTheme)
    }

    return(
        <SwitchButtonSld onClick={changeTheme}><FontAwesomeIcon icon={faCircleHalfStroke} /></SwitchButtonSld>
    )
}

const SwitchButtonSld = styled.button`
    position:absolute;
    bottom: 10px;
    right:10px;
    background-color: transparent;
    font-size: 6rem;
    border: none;
    color: ${(props => props.theme.text)};
    &:hover{
        cursor:pointer;
    }
`