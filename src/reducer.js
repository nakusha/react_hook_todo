import uuid from "uuid/v4";
import { ADD, DELETE, DONE, UNDO, EDIT } from "./action";

export const initialState = {
  toDos: [],
  completed: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      //항상 state를 넣어줘야한다 (추가되는것이 아니라 대치되는것이라서)
      return {...state, toDos: [...state.toDos, {text:action.payload, id:uuid()}]};
    case DELETE:
      return {
        ...state, 
        toDos: state.toDos.filter(toDo => toDo.id !== action.payload),
        completed: state.completed.filter(toDo => toDo.id !== action.payload)
      };
    case DONE:
      const target = state.toDos.find(toDo => toDo.id === action.payload)
      return {
        ...state,
        toDos: state.toDos.filter(toDo => toDo.id !== action.payload),
        completed: [...state.completed, {...target}]
      }
    case UNDO:
      const undoTarget = state.completed.find(toDo => toDo.id === action.payload);
      console.log(undoTarget);
      return {
        ...state,
        toDos: [...state.toDos, {...undoTarget}],
        completed: state.completed.filter(toDo => toDo.id !== action.payload)
      }
    case EDIT:
      const editTarget = state.toDos.find(toDo => toDo.id === action.payload);
      editTarget.text = "edited Todo"
      return{
        ...state,
        toDos: state.toDos.filter(toDo => { 
          if (toDo.id === editTarget) {
            toDo.text = editTarget.text
          }
          return toDo;
        })

      }
    default:
      return;
  }
};

export default reducer;