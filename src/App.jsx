import "@fontsource/inter";
import Home from "./pages/home/home"
import Signup from "./pages/signup/signup"
import Login from "./pages/login/Login"
import Transacation from "./transacation";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route,Navigate, Link} from 'react-router-dom';
import { UseAuthContext } from "./hooks/useAuthContext";

function App() {
  const {authIsReady,user} = UseAuthContext();
  return (
  <div className="wrapper w-full h-full relative">
  
    {authIsReady && (
        <Router>
        <Navbar/>
            <Routes>
                <Route exact path='/' element={user ? <Home/> : <Navigate to="/signup"/>}/>
                <Route path='/login' element={!user ? <Login/> : <Navigate to="/"/>}/>
                <Route path='/signup' element={!user ? <Signup/> : <Navigate to="/"/>}/>
            </Routes>
        </Router>
        )}
        <div className="fixed bottom-0 text-sm px-3 py-2 w-full bg-white flex justify-between items-center"><p>Contact <a  className="text-indigo-500" href="https://www.twitter.com/@rishu541">@rishu541</a></p>
        <p>Created by <a className="text-indigo-500 "href="https://www.linkedin.com/in/rishabh-malviya/"> Rishabh Malviya 🙂</a></p></div>
    </div> 
  );
}
export default App;
