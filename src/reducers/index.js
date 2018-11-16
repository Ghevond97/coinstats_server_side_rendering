import { combineReducers } from 'redux';

import { stats } from './fetchStats';
import { logo } from './fetchLogo';

const rootReducer = combineReducers({ stats, logo });

export default rootReducer;
