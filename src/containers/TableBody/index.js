import { connect } from 'react-redux';

import TableBody from '../../components/TableBody';

const mapStateToProps = state => ({
  stats: state.stats
});

export default connect(mapStateToProps)(TableBody);
