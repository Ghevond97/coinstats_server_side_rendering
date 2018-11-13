import React, { Component } from 'react';

import styled from 'styled-components';
import Logo from '../../containers/Logo';

const TR = styled.tr`
  background-color: #1c1b1b;
  overflow: scroll;
  border: 3px solid #222222;
`;

const TD = styled.td`
  text-align: left;
  margin-top: 1px;
  padding: 16px;
`;

class TableBody extends Component {
  render() {
    const { stats } = this.props;

    return (
      <tbody>
        {stats.length?stats[0].map((el, index) => (
          <TR key={el.id}>
            <TD>{index}</TD>
            <TD>{el.name}</TD>
            <TD>{el.quote['USD']['market_cap']}</TD>
            <TD>{el.quote['USD']['price']}</TD>
            <TD>{el.quote['USD']['volume_24h']}</TD>
            <TD>{el.circulating_supply}</TD>
            <TD>{el.quote['USD']['percent_change_24h']}%</TD>
          </TR>
        ))
        : <div>skjds</div>}
      </tbody>
    );
  }
}

export default TableBody;
