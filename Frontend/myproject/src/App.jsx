import './App.css'
import Home from './Components/pages/Home'
import {Routes,Route, BrowserRouter as Router} from "react-router-dom";
import Login from './Components/pages/Login';
import Register from './Components/pages/Register';
import AdminPage from './Components/pages/AdminPage';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      
      <div>
      <Router>
      
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/admin' element={<AdminPage/>}/>
        </Routes>
      </Router>
      </div>
      
      </>
      )
    }
    
    export default App
    // <Register/>
    // <Login/>
    // <AdminPage/>
    
 
