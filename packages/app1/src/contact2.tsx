import * as React from "react";
import { useContext} from 'react';
import TaskListContext from "./TaskList";
 const Contact2 = React.memo(React.forwardRef((props, ref) => {
    const {tasks} = useContext(TaskListContext);      
   
    const logHello = React.useCallback(() => {
        console.log('hk:log hello hardik',tasks);
    },[tasks]);

    React.useImperativeHandle(ref, () => {
        return { logHello };
        }, [logHello]);
    
    return (
        <>
            contact2
        </>
    )
}));
export default Contact2