import React, { Component } from 'react';

import styled from 'styled-components';

const Image = styled.img`
  width: 45%;
`;

class Logo extends Component {
  render() {
    const { logo, id } = this.props;
    return logo.map(el => (id == el.id ? <Image src={el.logo} /> : ''));
  }
}

export default Logo;
