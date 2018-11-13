import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getLogo } from '../../actions';

import TableBody from '../../components/TableBody';

const mapStateToProps = state => ({
  stats: state.stats,
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
)(TableBody);
