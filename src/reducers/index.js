import { combineReducers } from 'redux';

import { requestStatus, stats } from './fetchStats';
import { logo } from './fetchLogo';

const rootReducer = combineReducers({ stats, requestStatus, logo });

export default rootReducer;
