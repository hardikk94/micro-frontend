import * as React from "react";
import { useContext} from 'react';
import TaskListContext from "./TaskList";
 const Contact = () => {
    const {tasks,updateClickHandle} = useContext(TaskListContext);        
    return (
        <>
            {tasks.map((item) => (<div key={item.id}>
                {item.text}           
            </div>))}

            <button onClick={() => {
                updateClickHandle(true);
            }}>add</button>
            <button onClick={() => {
                updateClickHandle(false)
            }}> delete</button>
        </>
    )
}

export default Contact