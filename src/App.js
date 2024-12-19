
import React from 'react'

import { Route, Routes } from 'react-router-dom';
import View from './view'
import Erreur from './erreur';
import Home from './home';
function App() {
  return (
    <div>
       
       < Routes> 
       <Route exact path='/' element={<Home/>} />

       <Route path='/view' element={<View/>}/>

      
       </Routes>

    </div>
  )
}

export default App;