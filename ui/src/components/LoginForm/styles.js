import styled from 'styled-components';

export const LoginFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    width: 15rem;
    border: 1px solid #c0c0c0;
    padding: 2.5rem 2.5rem 5rem 2.5rem;
    border-radius: .5rem;
    box-shadow: 6px 4px 10px ${({ theme }) => theme.BLACK(.1)};
`

export const FormTitleStyled = styled.div`
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 3rem;
`