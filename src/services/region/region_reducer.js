import initial_state from './initial_state'
import {
  update_toplist
} from '../action'


//-------------------
const UPDATE_TOPLIST = 'UPDATE_TOPLIST'

export const region_reducer = (state = initial_state, action) => {
  switch(action.type) {
  case UPDATE_TOPLIST:
    return update_toplist(state, action)

  default:
    return state
  }
}
