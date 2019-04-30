import styled from 'styled-components';

import { BLUE, RED, BOX_SHADOW } from '../../styles/styles';

const StyledButton = styled.button`
    height: 60px;
    ${BOX_SHADOW}
    ${props => props.red ? `background: ${RED}` : `background: ${BLUE}`};
    ${props => props.block ? 'width: 100%' : 'width: 250px'};
    ${props => props.red ? `border: ${RED}` : `border: ${BLUE}`};
    opacity: 1;
    border-radius: 10px;
    margin-top: 80px;
    font-size: 20px;
    font-weight: bold;
    color:white;
    transition: 0.8s;

    :hover{
        cursor: pointer;
        opacity: 0.7;
    }
`

export default StyledButton