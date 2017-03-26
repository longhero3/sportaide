const NavReducer = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_TODO':
      if(state.className == undefined || state.className == '') {
        return Object.assign({}, state, {
          className: 'is-active'
        })
      } else {
        return Object.assign({}, state, {
          className: ''
        })
      }
    default:
      return state
  }
}

export default NavReducer