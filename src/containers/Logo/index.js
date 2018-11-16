import { connect } from 'react-redux';

import Logo from '../../components/Logo';

const mapStateToProps = state => ({
  logo: state.logo
});

export default connect(mapStateToProps)(Logo);
