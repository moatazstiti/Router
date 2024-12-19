
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'https://kit.fontawesome.com/a076d05399.js';
import './App.css';
import Addmovie from './component/Addmovie';

import Movieliste from './component/Movieliste';
import { moviesData } from './component/Data/Data';
import FilterByrate from './component/Rating'
import Navbar from './navbar';




function Home() {

  const [Movies,SetMovies]=useState (moviesData)
const [inputSerch,SetinputSerch]=useState("")
  const Add= (Newmovie)=> {
  SetMovies([...Movies,Newmovie])
 
}
const [Rating, setRating] = useState(0)



  return (
    <div className="App">
   
   
     <Navbar inputSerch={inputSerch} SetinputSerch={SetinputSerch}/>
   
      <FilterByrate ismovieRating={false} rating={Rating} setRating={setRating} />
     
      < Movieliste Movies={Movies}   inputSerch={inputSerch} SetinputSerch={SetinputSerch} Rating={Rating} />

    <footer className='footer'> 
     <Addmovie Add={Add} /> 
     </footer>
    
   
    </div>
  );
}

export default Home;
