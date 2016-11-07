export default function counter(state = [], action){
  switch (action.type) {
      case 'ADD_BOOK':
        const newTodo = {
          id: action.id,
          name: action.name,
          completed: false
        }
        return [
          ...state,
          newTodo
        ]
      default:
        return state;
    }
}
