import { BrowserRouter,Routes,Route } from "react-router-dom";
 import { ShowUsers } from "./components/ShowUsers";
 import {CreateUser} from "./components/CreateUser"
 import {EditUser} from "./components/EditUser"
import './App.css';


function App() {
  return (
    <div className="App">     

     <BrowserRouter>
        <Routes>
         <Route path="/" element= { <ShowUsers />} />
        <Route path="/create" element={<CreateUser/>} />
        <Route path="/edit/:id" element={<EditUser />} /> 
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
