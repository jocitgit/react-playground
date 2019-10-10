import React from 'react';
import withData from './hoc';
import Table from './Table';

const TableWithEvenData = withData(Table, (datasource) => {
    return datasource.filter((row) => (row.id % 2 === 0));
});

const TableWithOddData = withData(Table, (datasource) => {
    return datasource.filter((row) => (row.id % 2 !== 0));
});

function HocDemo(props) {
    return (
        <div>
            <TableWithEvenData col1='id' col2='letter'/>
            <TableWithOddData col1='id' col2='letter'/>
        </div>
    );
}

export default HocDemo;
