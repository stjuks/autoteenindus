import styled from 'styled-components';

export const NavbarStyled = styled.div`
    background: ${({ theme }) => theme.WHITE()};
    width: 100%;
    box-shadow: 0 6px 10px rgba(0, 0, 0, .1);
    display: flex;
    padding-top: 1rem;
    padding-bottom: 1rem;

    div {
        flex: 1;
    }
`;

export const LeftStyled = styled.div`
    text-align: left;
    padding-left: 1rem;
`;

export const MidStyled = styled.div`
    text-align: center;
    font-weight: bold;
`;

export const RightStyled = styled.div`
    text-align: right;
    padding-right: 1rem;
`;