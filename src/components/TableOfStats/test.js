import React, { Component, Fragment } from 'react';

import { getStats } from '../../actions';

import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid dark;
`;

const TH = styled.th`
  text-align: left;
  padding: 16px;
`;

const TD = styled.td`
  text-align: left;
  padding: 16px;
`;

const TR = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

class Stats extends Component {
  static initialAction({ dispatch }) {
    return [dispatch(getStats())];
  }

  componentDidMount() {
    const { getStats } = this.props();

    getStats();
  }

  render() {
    const { stats } = this.props;

    return (
      <div>
        <Table>
          <TR>
            <TH>#</TH>
            <TH>Change(24h)</TH>
            <TH>Price</TH>
            <TH>Price in BTC</TH>
            <TH>Market Cap</TH>
            <TH>Volume (24h)</TH>
          </TR>
          <Fragment>
            {stats.map(el => {
              return (
                <TR>
                  <TD>{el.id}</TD>
                  <TD>{el.name}</TD>
                  <TD>{el.quote['USD']['market_cap']}</TD>
                  <TD>{el.quote['USD']['price']}</TD>
                  <TD>{el.circulating_supply}</TD>
                  <TD>{el.quote['USD']['percent_change_24h']}</TD>
                </TR>
              );
            })}
          </Fragment>
        </Table>
      </div>
    );
  }
}

export default Stats;
