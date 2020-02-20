import React, { useReducer, useState } from 'react';
import reducer, {initialState, ADD, DELETE, DONE, UNDO} from './reducer';

function App() {
  //useReducer(function, initvalue)
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newToDo, setNewToDo] = useState("");
  
  const onSubmit = e => {
    e.preventDefault();
    dispatch({type:ADD, payload: newToDo});
    setNewToDo("");
  };

  const onChange = e => {
    const {
      target : {value}
    } = e;
    setNewToDo(value);
  };

  return (
    <>
      <h1>Add To Dos</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Write  to to" onChange={onChange} value={newToDo}/>
      </form>

      <ul>
        <h2>To Dos</h2>
        {state.toDos.map((toDo) => (
        <li key={toDo.id}>
          <span>{toDo.text}</span>
          <span onClick={() => dispatch({type:DELETE, payload:toDo.id})}>X</span>
          <span onClick={() => dispatch({type:DONE, payload:toDo.id})}>V</span>
        </li>
        ))}
      </ul>
      <ul>
        {state.completed.length !== 0 && (
          <>
            <h2>Completed Dos</h2>
              {state.completed.map((toDo) => (
              <li key={toDo.id}>
                <span>{toDo.text}</span>
                <span onClick={() => dispatch({type:DELETE, payload:toDo.id})}>X</span>
                <span onClick={() => dispatch({type:UNDO, payload:toDo.id})}>Undo</span>
              </li>
          ))}
          </>
        )}
      </ul>
    </>
  );
}

export default App;
