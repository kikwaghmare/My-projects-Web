import { Contact } from "./Contact";
import { Home } from "./Home";
import { Students } from "./Students";

import { NavLink } from 'react-router-dom';


export function Header(){
   return(
    <nav>
    <NavLink  to={'/'} element={<Home/>}  className={({ isActive }) => 
                      (isActive ? "active-class" : "not-active-class")}     >Home</NavLink>
    <NavLink to={'/Pages/Students'} element={<Students/>}  className={({ isActive }) => 
                      (isActive ? "active-class" : "not-active-class")}>Students</NavLink>
    <NavLink to={'/Pages/Contact'} element={<Contact/>}  className={({ isActive }) => 
                      (isActive ? "active-class" : "not-active-class")} >Contact us</NavLink>
  </nav>
   )
}