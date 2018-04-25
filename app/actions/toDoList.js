
const nextTodoId = 0;
export const addList = text => {
    return {
      type: "ADD_LIST",
      id: nextTodoId++,
      text
      }
}
export const deleteTask = id => {
    return {
        type: 'DELETE_TASK',
        payload:id
    }
}
export const doneTask = id => {
    return {
        type: 'DONE_TASK',
        payload: id
    }
}