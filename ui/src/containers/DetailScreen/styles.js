import styled from 'styled-components';

export const DetailScreenStyled = styled.div`
    width: 100%;
    padding-top: 2rem;
    
`;

export const DetailTableStyled = styled.table`
    border-spacing: 0;
    width: 100%;

    td {
        padding: .6rem .6rem;
    }

    tr:nth-child(even) {
        background: ${({ theme }) => theme.COLOR_1(.1)};
    }
`

export const TitleStyled = styled.div`
    background: ${({ theme }) => theme.COLOR_1()};
    width: 100%;
    padding: .5rem .75rem;
    font-weight: bold;
    color: white;
    box-sizing: border-box;
    border-radius: .5rem .5rem 0 0;
`