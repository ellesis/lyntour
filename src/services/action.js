export const update_toplist = (state, action) => {
  //console.log("action.payload = %s", JSON.stringify(action.payload) )
  const id = action.payload.id
  //console.log("action.payload.id => %s", action.payload.id)

  var newdata = {}
  newdata[id] = {
    title: action.payload.title,
    list: action.payload.data
  }

  const ret = Object.assign({}, state, {
    toplists: Object.assign({}, state.toplists, newdata)
  })

  //console.log('<<< update_toplist:%s >>>', JSON.stringify(ret.toplists))
  return ret
}
