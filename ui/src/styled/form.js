import styled from 'styled-components';

export const ButtonStyled =  styled.button`
    border: none;
    background: ${({ theme }) => theme.COLOR_1()};
    font-size: .9rem;
    color: white;
    font-weight: bold;
    border-radius: .5rem;
    padding: .5rem;
    cursor: pointer;

    :hover {
        background: ${({ theme }) => theme.COLOR_1(.9)};
    }
`;

export const InputStyled = styled.input`
    margin-bottom: 1rem;
    height: 1.5rem;
    font-size: .9rem;
    padding: .25rem;
    border: 1px solid #c0c0c0;
    border-radius: .5rem;
`

export const LabelStyled = styled.label`
    font-weight: bold;
    color: #777;
    margin-bottom: .25rem;
    font-size: .9rem;
`
