import { combineReducers } from 'redux'

import resourcesReducer from './resources'
import errorMessage from './errorMessage'

export default combineReducers({ resources: resourcesReducer, errorMessage })
