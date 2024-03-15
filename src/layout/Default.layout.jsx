import React from 'react'
import Navbar from '../components/Navbar/Navbar.Componenet'
const DefaultlayoutHoc = 
(Components) =>
({...props}) =>
 {
  return (
  <div>
  <Navbar/>
      <Components {...props}/>
      <div>Footer</div>
    </div>
  )
}

export default DefaultlayoutHoc