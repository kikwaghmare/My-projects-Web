import React from 'react'
import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <div>
        
        <Link to='/'>Home</Link>
    &nbsp;
    <Link to='/About'>About Us</Link>
    &nbsp;
    <Link to='/Products'>Products Page</Link>
    &nbsp;
    <Link to='/Contact'>Contact Page</Link>

        
    <h2>Welcome to the Products Page</h2>
        
    </div>
  )
}
