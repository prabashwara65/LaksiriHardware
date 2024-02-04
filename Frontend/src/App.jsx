import {BrowserRouter , Routes , Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import DashBoard from './Components/Dashboard//DashBoard';
import NavHome from './Components/Home/NavHome';

import { Provider } from 'react-redux';
import store from '../src/Components/ReduxTool/Store';



function App() {

  return (
   

    <Provider store={store}>
      <BrowserRouter>
      
            <Routes>

                <Route path="/" element={<NavHome />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/DashBoard" element={<DashBoard />} />

            </Routes>

        </BrowserRouter>

    </Provider>
 
   
  

  );
}

export default App
