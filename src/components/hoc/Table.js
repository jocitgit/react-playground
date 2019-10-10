import React from 'react';

function Table(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>{props.col1}</th><th>{props.col2}</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map((row) => {
                        return (
                            <tr key={row.id}>
                                <td>{row.id}</td>
                                <td>{row.letter}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
}

export default Table;