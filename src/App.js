import Addtask from "./Addtask";
import ListTask from "./ListTask";
import { Todoreducer } from "./redux/reducer";
import "./App.css"


function App() {
  return (
    <div className="Apo">
    <div className="App">
     
     <Addtask/>
    
     <ListTask/>
     
    
    
    </div>
    </div>
  );
}

export default App;
