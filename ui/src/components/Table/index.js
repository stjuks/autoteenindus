import React, { Component } from 'react';

import { 
     TableStyled, RowStyled
} from './styles';


class Table extends Component {
    render() {
        const {
            data,
            sizes,
            headings,
            clickable,
            onRowClick
        } = this.props;

        return (
            <TableStyled>
                <RowStyled heading>
                    {headings.map(heading => (
                        <td>{heading}</td>
                    ))}
                </RowStyled>
                {data.map(row => (
                    <RowStyled onClick={() => onRowClick(row)} clickable={clickable}>
                        {Object.values(row).map((val, i) => (
                            <td 
                                title={clickable && 'Click to view details'} 
                                width={sizes[i]}>{val}
                            </td>
                        ))}
                    </RowStyled>
                ))}
            </TableStyled>
        );
    }
}

export default Table;
