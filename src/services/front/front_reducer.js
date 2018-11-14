import initial_state from './initial_state'

import { update_toplist } from '../action'

const update_posts = (state, action) => {
  const ret= Object.assign({}, state, {
    posts: action.payload
  })

  return ret
}

const update_item = (state, action) => {
  const ret= Object.assign({}, state, {
    items: action.payload
  })

  return ret
}

//-------------------
const UPDATE_TOPLIST = 'UPDATE_TOPLIST'
const UPDATE_POSTS = 'UPDATE_POSTS'
const UPDATE_ITEM = 'UPDATE_ITEM'

export const front_reducer = (state = initial_state, action) => {
  switch(action.type) {
  case UPDATE_TOPLIST:
    return update_toplist(state, action)
  case UPDATE_POSTS:
    return update_posts(state, action)
  case UPDATE_ITEM:
    return update_item(state, action)

  default:
    return state
  }
}
