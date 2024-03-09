import * as React from "react";
import { useReducer,useCallback} from 'react';
import Contact from './Contact'
import TaskListContext from "./TaskList";
import Contact2 from "./contact2";

export const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum'},
  { id: 1, text: 'Watch a puppet show'},
  { id: 2, text: 'Lennon Wall pic'}
];

export const taskReducer = (tasks:any,action:any) => {
  switch(action.type) {
    case 'add':
      const list = [...tasks,{id:action.id,text:action.text}];      
      return list;
    case 'remove':
       tasks.pop();
       return [...tasks];
    default:
      return tasks;
  }
}

const App = () => {  
  const contactRef = React.useRef(null);
const [task,dispatch]= useReducer(taskReducer,initialTasks);
const updateClickHandle = useCallback((add=false) => {  
  contactRef.current.logHello();
  dispatch({id:Math.random(),text:`hardik ${Math.random()}`,type:add ? 'add' : 'remove'});    
},[]);



return (
<>
  <TaskListContext.Provider value={{
  tasks:task,
  updateClickHandle
 }}>
    <Contact />  
    <Contact2 ref={contactRef} /> 
  </TaskListContext.Provider>
  
</>)

  
  
};

export default App;