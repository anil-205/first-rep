import { combineReducers } from 'redux'

import ATM from './atm';

export const application= combineReducers({
	ATM
})
export const initialState = {
	ATM    				:  ATM({}, {type: "init"}),
}