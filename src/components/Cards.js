import React from 'react'
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CardDetails from './CardDetails/CardDetails';

const Cards = ({data}) => {
  return (
    <div>
       {
        data.length ? (data.map((item, index) =>
          <CardDetails key={index} title={item.title} description={item.description} img={item.img} />
        ))
          :
          (<Alert variant='danger'>
            No Data Found
          </Alert>)
      }
      <Link to="/">GO Home</Link>
    </div>
  )
}

export default Cards
