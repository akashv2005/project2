import React from 'react'
import MovieNavbar from '../components/Navbar/MovieNavbar.Component'
const MovielayoutHoc = 
(Components) => 
({...props}) =>
{
  return (
    <div>
    <MovieNavbar/>
      <Components {...props}/>
      <div>Footer</div>
    </div>
  )
}

export default MovielayoutHoc