import * as types from './mutation-types'

export default {
  [types.AUTH_LOGIN] (state, payload) {
    state.auth = payload
  },

  [types.FETCH_ALL_TASKLIST] (state, payload) {
    state.board.lists = payload
  },

  [types.ADD_TASK] (state, payload) {
    const task = payload
    for (let i = 0; i < state.board.lists.length; i++) {
      const list = state.board.lists[i]
      if (list.id === task.listId) {
        list.items.push(task)
        break
      }
    }
  },

  [types.UPDATE_TASK] (state, payload) {
    const task = payload
    for (let i = 0; i < state.board.lists.length; i++) {
      const list = state.board.lists[i]
      if (list.id !== task.listId) { continue }
      for (let j = 0; j < list.items.length; j++) {
        const item = list.items[j]
        if (item.id === task.id) {
          item.name = task.name
          item.description = task.description
          break
        }
      }
    }
  },

  [types.REMOVE_TASK] (state, payload) {
    const { id, listId } = payload
    for (let i = 0; i < state.board.lists.length; i++) {
      const list = state.board.lists[i]
      if (list.id !== listId) { continue }
      list.items = list.items.filter(item => item.id !== id)
    }
  },

  [types.AUTH_LOGOUT] (state, payload) {
    state.auth = payload
  }
}
