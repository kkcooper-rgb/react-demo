
import store from './store';
import {Provider} from 'react-redux'
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";

import Home from "./pages/home"
import Login from "./pages/login"
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Link to='home'>HOME</Link>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes> 
      </BrowserRouter>
    </Provider>
  );
}

export default App;
