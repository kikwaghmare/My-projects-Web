import React from 'react'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
    <Link to='/'>Home</Link>
    &nbsp;
    <Link to='/About'>About Us</Link>
    &nbsp;
    <Link to='/Products'>Products Page</Link>
    &nbsp;
    <Link to='/Contact'>Contact Page</Link>

    <h2>Welcome to the About Page</h2>
    
    </>

  )
}
