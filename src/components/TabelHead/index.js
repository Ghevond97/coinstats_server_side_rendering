import React, { Component, Fragment } from 'react';

import styled from 'styled-components';

const TH = styled.th`
  text-align: left;
  padding: 16px;
`;

const TR = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  overflow: scroll;
`;

class TableHead extends Component {
  render() {
    return (
      <TR>
        <TH>#</TH>
        <TH>Name</TH>
        <TH>Market Cap</TH>
        <TH>Price</TH>
        <TH>Volume (24h)</TH>
        <TH>Circulating Supply</TH>
        <TH>Change (24h)</TH>
      </TR>
    );
  }
}

export default TableHead;
