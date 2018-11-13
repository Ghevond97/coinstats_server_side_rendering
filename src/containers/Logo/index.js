import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getLogo } from '../../actions';

import Logo from '../../components/Logo';

const mapStateToProps = state => ({
  logo: state.logo
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getLogo
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logo);
