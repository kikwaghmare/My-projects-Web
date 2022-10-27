import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Products from './Products';
import Contact from './Contact';

function App() {
  return (
    <div >
      <ol>
        <li>
          <h3>What is the Difference between React and React native ? Which one is library or framework ? </h3>

          <p>
            React is an Javscript library used to develop the user interface for web applications. React Js is made up of two parts - first are the components that it comprises and second is the HTML document where all the components will be rendered.
          </p>
          <p>
            React Native is a framework used for creating mobile application for iOS, Android and Windows. It uses only Javascript to build the corss-platform mobile app. It targets mobile browsers instead for the webpage.
          </p>
          <ul type='circle'>
            <li>
              ReactJs was released in 2013 and it is used for developing web applications. React Native was released in 2015 and is used to build mobile applications.
            </li>
            <li>
              ReactJs uses Javascript library and CSS for styling and animations. React Natvie has an in-built animation library.
            </li>
            <li>
              ReactJs uses the React-Router for navigating throught webpages. React Native has an in-built navigation library used to navigate in mobile apps
            </li>
            <li>
              In ReactJs, the virtual DOM renders the browser code. In React Native, the API is used to render mobile applications.
            </li>
            <li>
              ReactJS uses HTML tags and React Native does not use HTML tags.
            </li>
          </ul>
        </li> <br />
        
        <li>
          <h3>What is the package name you are using for routing ?</h3>
          <p>
            The React-Router is a React library used for routing. It allows the navigation among different web pages in a React application, allows changing the browser URL, and keeps the UI in sync with the URL.
            This package provides the core functionality for both , react-router-dom and react-router-native.
            While using the React-Router, we should import directly from the react-router-dom and NOT the React-Router. This is because react-router-dom helps use to re-export everything from react-router
          </p>
        </li> <br />

        <li>
          <h3>Routing Implementation</h3>

          <BrowserRouter>
          <Routes>
            <Route path='/' element = {<Home/>} />
            <Route path='/About' element = {<About/>} />
            <Route path='/Products' element = {<Products/>} />
            <Route path='Contact' element={<Contact/>} />
          </Routes>
          </BrowserRouter>
        </li>

        <li>
          <h3>How do you switch/navigate form one component to another in React?</h3>

          <p>There are various approaches in React to navigate from one component to another</p>
          <ul>
            <li>
              Using React Router - installing the react-router-dom, installs a react-router library, "BrowserRouter", "Routes" and "Route" that helps us create the navigation between different webpages.
              The Route component will contain path where we should specify the url path, to where it should direct us on clicking the Link. The "Link" should be pasted in the components and have the same URL as mentioned in the "Route"
            </li>

            <li>
              Using window.open - The open() method of the Window interface loads a specified resource into a new or existing browsing context (that is, a tab, a window, or an iframe) under a specified name.
              The syntax is window.open(url, target)
            </li>
            <li>
              The useNavigate Hook - The useNavigate hook returns a function that lets you navigate programmatically. This Hook can be used only in functional components and has two signatures - first is wither pass a "to" value(similar to "Link") , second is pass the data you want to go in the history stack.
            </li>
          </ul>
        </li>

        <li>
          <h3>What is lazy loading in React</h3>
          <p>
          lazy loading means that a component or a part of code must get loaded when it is required. It is also referred to as code splitting and data fetching.

         Talking about React specifically, it bundles the complete code and deploys all of it at the same time. Now, usually, that's not a bad idea, since React SPAs (Single page application) are quite small and do not affect the performance. But what if we have a gigantic application, like a content management system with a customer portal, admin portal etc. In such a case, it does not seem like a smart idea to load the complete application.

It will be a huge application and will cost a lot of unnecessary data transfer which can lead to slow loading of the website.
A customer login, will not have access to admin specific features, so loading it is a waste of memory and time.
In this post, I will try to explain the advantages of lazy loading and how to implement it in React.
          </p>
        </li>

        <li>
          <h3>What are Stateless and Stateful components</h3>
          <p>
            Class components are considered stateful components because they implment state. We can use a state within a class compoent and the this.setState() function is used to change/manipulate the value of the state. On the other hand, functional components,
            do not allow states and are therefore stateless. React Hooks can be used to implement state in the functional component eg. useState()
          </p>
        </li>
        
      </ol>
    </div>
  );
}

export default App;
