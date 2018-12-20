import styled from 'styled-components';

export const SectionStyled = styled.div`
    border-radius: .5rem;
    overflow: hidden;
    margin: 2rem 0;
    box-shadow: 4px 6px 10px rgba(0, 0, 0, .1);
`;

export const TitleStyled = styled.div`
    background: ${({ theme, color }) => color || theme.COLOR_1()};
    padding: .5rem .75rem;
    color: white;
    font-weight: bold;
    cursor: pointer;
    display: flex;

    img {
        height: 1rem;
        width: 1rem;
        margin-left: .5rem;
    }
`;

export const ContentStyled = styled.div`
    height: ${({ isOpened }) => isOpened ? '100%' : 0};
    border: 1px solid #c0c0c0;
    border-width: 0 1px 1px 1px;
    border-radius: 0 0 .5rem .5rem;
    overflow: hidden;
`;

export const ExpandIconStyled = styled.div`
    float: right;
`

export const TitleTextStyled = styled.div`
    margin-right: auto;
    
`