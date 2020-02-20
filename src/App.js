import React from 'react';
import Add from './Components/Add';
import List from './Components/List';
import { useState } from './context';
import ToDo from './Components/ToDo';

function App() {
  const {toDos, completed} = useState();
  return (
    <>
      <Add/>
      <h1>Add To Dos</h1>
      <List name={"To Dos"}>
        {toDos.map((toDo) => (
          <ToDo text={toDo.text} id={toDo.id} isCompleted={false} key={toDo.id}/>
        ))}
      </List>
      <List name={completed.length !== 0 ? "Completed" : ""}>
        {completed.map((toDo) => (
            <ToDo text={toDo.text} id={toDo.id} isCompleted={true} key={toDo.id}/>
        ))}
      </List>
    </>
  );
}

export default App;
