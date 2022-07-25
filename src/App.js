
import store from './store';
import {Provider} from 'react-redux'
// import { Routes, Route,Link } from "react-router-dom";
import RouterTable from './router/index'
console.log(RouterTable)
function App() {
  return (
    <Provider store={store}>
      <RouterTable></RouterTable>
      {/* <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>  */}
    </Provider>
  );
}

export default App;
