import {createContext} from 'react';
 const LevelContext = createContext({
  tasks:[],
  updateClickHandle:null
});
 export default LevelContext;