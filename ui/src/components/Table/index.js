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
                <tbody>
                    <RowStyled heading>
                        {headings.map((heading, i) => (
                            <td key={i}>{heading}</td>
                        ))}
                    </RowStyled>
                    {data.map((row, i) => (
                        <RowStyled key={i} onClick={() => onRowClick && onRowClick(row)} clickable={clickable}>
                            {Object.keys(row).map((key, i) => (
                                ignore.indexOf(key) === -1 &&
                                <td key={i} width={sizes[i]}>
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
                </tbody>
            </TableStyled>
        );
    }
}

export default Table;
