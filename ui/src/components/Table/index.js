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
            onRowClick,
            ignoreValues,
            addCol,
            addColClick
        } = this.props;

        const ignore = ignoreValues || [];

        return (
            <TableStyled>
                <RowStyled heading>
                    {headings.map(heading => (
                        <td>{heading}</td>
                    ))}
                </RowStyled>
                {data.map(row => (
                    <RowStyled onClick={() => onRowClick && onRowClick(row)} clickable={clickable}>
                        {Object.keys(row).map((key, i) => (
                            ignore.indexOf(key) === -1 &&
                            <td width={sizes[i]}>
                                {row[key]}
                            </td>
                        ))}
                        {addCol &&
                            <td onClick={() => addColClick(row)}>
                                {addCol}
                            </td>
                        }
                    </RowStyled>
                ))}
            </TableStyled>
        );
    }
}

export default Table;
