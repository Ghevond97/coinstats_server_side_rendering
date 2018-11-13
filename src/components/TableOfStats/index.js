import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import Table from '../Table';
import styled from 'styled-components';

const Divtyle = styled.div`
  display: flex;
  justify-content: center;
`;

class TableOfStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      items: 100,
      hasMore: true
    };

    this.fetchMoreData = this.fetchMoreData.bind(this);
  }

  componentDidMount() {
    this.props.getStats();
  }

  fetchMoreData() {
    setTimeout(() => {
      this.setState({
        start: this.state.items,
        items: this.state.items + 100
      });
      this.props.getStats({start: this.state.start, limit:this.props.items});
    }, 1000);
  }

  render() {
    console.log(this.props.stats)
    return (
      <InfiniteScroll
        dataLength={this.state.items}
        next={this.fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        scrollableTarget="scrollableDiv"
      >
        <Divtyle>
          <Table />
        </Divtyle>
      </InfiniteScroll>
    );
  }
}

export default TableOfStats;
