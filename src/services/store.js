import { createStore, combineReducers } from 'redux'
import { front_reducer } from './front/front_reducer'
import { region_reducer } from './region/region_reducer'

const reducers = combineReducers({ front_reducer, region_reducer })

export const store = createStore(reducers)
