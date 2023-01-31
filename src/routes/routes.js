import { Route,Routes } from 'react-router-dom';
import { Home } from '../pages/home';
import { Profile } from '../pages/profile';

export  function Router(){
  return(
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/profile/:user' element={<Profile/>}/>
    </Routes>
  )
}