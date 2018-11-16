import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import Table from '../Table';
import styled from 'styled-components';
import { getStats } from '../../actions';

const Divstyle = styled.div`
  display: flex;
  justify-content: center;
`;

class TableOfStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      limit: 100,
      hasMore: true
    };

    this.fetchMoreData = this.fetchMoreData.bind(this);
  }

  static initialAction({ dispatch }) {
    return [dispatch(getStats())];
  }

  componentDidMount() {
    const { getStats } = this.props;

    getStats();
  }

  fetchMoreData() {
    const { limit, start } = this.state;
    const { getStats } = this.props;
    setTimeout(() => {
      this.setState({
        start: limit + 1,
        items: limit + 100
      });
      getStats({ start, limit });
    }, 1000);
  }

  render() {
    return (
      <InfiniteScroll
        dataLength={this.state.items}
        next={this.fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        scrollableTarget="scrollableDiv"
      >
        <Divstyle>
          <Table />
        </Divstyle>
      </InfiniteScroll>
    );
  }
}

export default TableOfStats;
