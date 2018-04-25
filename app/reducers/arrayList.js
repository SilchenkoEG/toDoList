
 export default function arrayList(state = [], action) {
   switch (action.type) {
     case "ADD_LIST":
     return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
      case "DELETE_TASK":
      return [
           ...state.filter(item => item.id !== action.payload)
      ]
      case 'DONE_TASK': 
      return state.map(todo =>
        (todo.id === action.payload)
          ? {...todo, completed: !todo.completed}
          : todo
      )
     default:
       return state;
   }
 }
 