import './App.css';
import Signin from './components/SignIn/Signin';
import SignUp from './components/SignUp/SignUp';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Homepage from './components/Homepage/Homepage';
import Addbook from './components/Addbook/Addbook';
import Editbook from './components/Editbook/Editbook';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Signin/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/homepage' element={<Homepage/>}/>
    <Route path='/addbook' element={<Addbook/>}/>
    <Route path='/editbook' element={<Editbook/>}/>
    </Routes> 
    </BrowserRouter>
    </>
  );
}

export default App;