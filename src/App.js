import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Register from './register/register';
import Login from './login/login';
import Home from './home/home';

import {UserProvider} from './context/userContext';
import './App.css';

function App() {
 
  
  
  return (
    <UserProvider>
    <div className='app-root'>
  <BrowserRouter>
    <div className='app'>
    <Routes>
    <Route exact path='/' element={<Home />} />

    <Route exact path='/register' element={<Register/>} />
    <Route exact path='/login' element={<Login />} />


    </Routes>

    </div>
    </BrowserRouter>
    </div>
    </UserProvider>
  );
}

export default App;
