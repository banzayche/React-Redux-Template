let nextTodoId = 0
export const addBook = (name) => {
  return {
    type: 'ADD_BOOK',
    id: nextTodoId++,
    name
  }
}
