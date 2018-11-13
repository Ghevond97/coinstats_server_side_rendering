import React, { Component, Fragment } from 'react';

import styled from 'styled-components';

import TableHead from '../TabelHead';
import TableBody from '../../containers/TableBody';

const TableStyle = styled.table`
  margin-top: 20px;
  border-collapse: collapse;
  color: #dcdcdc;
  width: 90%;
`;

class Table extends Component {
  render() {
    return (
      <TableStyle>
        <TableHead />
        <TableBody />
      </TableStyle>
    );
  }
}

export default Table;
