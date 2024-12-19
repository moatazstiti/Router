import React from 'react'
import { Card } from 'react-bootstrap'
import MovieRating from './Rating'
import View from '../view'

const Moviecard = ({Movie}) => {
  
  return (
    <div>
            <Card style={{ width: "18rem", marginBottom:"30px", cursor: "pointer" }}  >
      <Card.Img variant="top" src={Movie.posterUrl} />
      <Card.Body>
        <Card.Title> {Movie.title}    </Card.Title>
        <Card.Text>
        <MovieRating ismovieRating={true} movieRating={Movie.rate} />
       
      
        </Card.Text>
        <Card.Text>
        {Movie.description}
        
     
          </Card.Text>
          <Card.Text>
         <a href={Movie.trailer} target="_blank"> {Movie.trailer} </a> 
          </Card.Text>

      </Card.Body>
    </Card>
    </div>
  )
}

export default Moviecard