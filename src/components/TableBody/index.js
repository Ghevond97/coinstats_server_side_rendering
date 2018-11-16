import React, { Component } from 'react';

import styled from 'styled-components';
import Logo from '../../containers/Logo';

const TR = styled.tr`
  background-color: #1c1b1b;
  overflow: scroll;
  border: 3px solid #222222;
  :hover {
    background-color: #424141;
  }
`;

const TD = styled.td`
  text-align: left;
  margin-top: 1px;
  padding: 16px;
`;

const Td = styled.td`
  text-align: left;
  margin-top: 1px;
  padding: 16px;
  color: red;
`;

const TdChange = styled.td`
  text-align: left;
  margin-top: 1px;
  padding: 16px;
  color: green;
`;

class TableBody extends Component {
  render(props = this.props) {
    const { stats } = props;
    return (
      <tbody>
        {stats.map((el, index) => (
          <TR key={el.id}>
            <TD>{index}</TD>
            <TD>
              <Logo id={el.id} />
            </TD>
            <TD>{el.name}</TD>
            <TD>{el.quote['USD']['market_cap']}</TD>
            <TD>{el.quote['USD']['price']}</TD>
            <TD>{el.quote['USD']['volume_24h']}</TD>
            <TD>{el.circulating_supply}</TD>
            {el.quote['USD']['percent_change_24h'] > 0 ? (
              <TdChange>{el.quote['USD']['percent_change_24h']} %</TdChange>
            ) : (
              <Td>{el.quote['USD']['percent_change_24h']}%</Td>
            )}          </TR>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
