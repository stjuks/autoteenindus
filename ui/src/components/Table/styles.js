import styled from 'styled-components';

export const TableStyled = styled.table`
    font-size: .9rem;
    border-spacing: 0;
    width: 100%;
`

export const RowStyled = styled.tr`
    ${({ heading, theme, clickable }) => `
        :not(:last-child) td { 
            border-bottom: 1px solid ${theme.BLACK(.1)}; 
        }

        td:not(:last-child) {
            border-right: 1px solid ${theme.BLACK(.1)};
        }
        
        td { padding: .5rem; }

        :hover {
            ${clickable && `
                background: ${theme.BLACK(.05)};
                cursor: pointer;
            `}
        }

        ${heading && 'font-weight: bold;'}
    `}
`
