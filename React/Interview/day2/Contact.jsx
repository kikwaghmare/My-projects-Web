import React from 'react'
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div>
    <Link to='/'>Home</Link>
    &nbsp;
    <Link to='/About'>About Us</Link>
    &nbsp;
    <Link to='/Products'>Products Page</Link>
    &nbsp;
    <Link to='/Contact'>Contact Page</Link>


    <h2>
        Welcome to Contact Page
    </h2>


    </div>
  )
}
