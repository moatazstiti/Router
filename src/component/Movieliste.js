import React from 'react'
import Moviecard from './Moviecard'
import '../component/Movielist.css'


const Movieliste = ({Movies,inputSerch,Rating} ) => {
  return (
    <div className='Movielist'>
    {    Movies
    .filter(Movie => Movie.title.toUpperCase().includes(inputSerch.toUpperCase())   &&  Movie.rate >=Rating)
   
    .map(Movie => < Moviecard Movie={Movie} key={Movie.id} /> ) }
    </div>
  )
}

export default Movieliste