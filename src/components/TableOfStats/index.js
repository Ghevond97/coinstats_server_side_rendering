import React, { Component, Fragment } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { getStats } from '../../actions';

import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 10;
  width: 100%;
  border: 1px solid red;
`;
const style = {
  height: '20',
  border: '1px solid green',
  margin: 6,
  padding: 8
};

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
  overflow: scroll;
`;

class TableOfStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: 100,
      hasMore: true
    };

    this.fetchMoreData = this.fetchMoreData.bind(this);
  }
  
  componentDidMount (){
    this.props.getStats();
  }
  
  fetchMoreData (){
    setTimeout(() => {
      this.setState({
        items: this.state.items + 100
      });
    }, 1000);
  };
  
  render() {
    return (
      <div>
        <h1>demo: react-infinite-scroll-component</h1>
        <hr />
        <div id="scrollableDiv" style={{ height: 800, overflow: "auto" }}>
          <InfiniteScroll
            dataLength={this.state.items}
            next={this.fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            scrollableTarget="scrollableDiv"
          >
            {this.props.stats.map((i, index) => (
              <div style={style} key={index}>
                div - #{index}
              </div>
            ))}
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default TableOfStats;
