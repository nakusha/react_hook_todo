import uuid from "uuid/v4";

export const initialState = {
  toDos: [],
  completed: []
};

export const ADD = "add";
export const DELETE = "del";
export const DONE = "done"

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
        completed: [...state.completed, target],
        toDos: [...state.toDos.filter(toDo => toDo.id !== action.payload)]
        
      }
    default:
      return;
  }
};

export default reducer;