import styled from 'styled-components';

import { BLUE, RED, DARK_RED, BOX_SHADOW } from '../../styles/styles';

const StyledButton = styled.button`
    height: 3.5rem;
    ${BOX_SHADOW}
    ${props => props.red ? `background: ${RED}` : `background: ${BLUE}`};
    ${props => props.block ? 'width: 100%' : 'width: 15rem'};
    ${props => props.red ? `border: ${RED}` : `border: ${BLUE}`};
    opacity: 1;
    border-radius: 10px;
    margin-top: 80px;
    font-size: 1.3rem;
    font-weight: bold;
    color:white;
    transition: 0.7s;

    :hover{
        cursor: pointer;
        ${props => props.red ? `background: ${DARK_RED}` : `background: ${BLUE}`};
    }
`

export default StyledButton