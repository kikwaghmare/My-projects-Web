import logo from './logo.svg';
import './App.css';
import UseState from './UseState';
import UseEffect from './UseEffect';
import Useeffecttwo from './useeffecttwo';
import UseReducer from './UseReducer';
import Parent from './ParentToChild';
import { Child } from './ParentToChild';
import ParentClass from './ParentToChildClassComp';
import styles from './style';
import Thisstate from './Thisstate';

function App() {
  return (
    <div>
      <ol>
        <li>
          <h3>Differnces between axios and fetch</h3>
          <ul>
            <li>
              With Axios, the data is sent through the data property of the options, and in Fetch API uses the body property
            </li>
            <li>
              Axios is a stand-wlone third party package that can be easilt installed, on the other hand, fetch is built in and no installation is required
            </li>
            <li>
              Axios data contains the object whereas Fetch's body needs to be stringified
            </li>
            <li>
              The URL is provided to Fetch as an argument , whereas in Axios it is set in the options object.
            </li>
            <li>
              Axios performs automatic transforms of JSON data, but fetch is a two-step process when handling JSON data, first to make the actual request and second to call the .json() mtheod upon response.
            </li>
          </ul>
        </li>

        <li>
          <h3>UseState Implementation</h3>
          <UseState/>
        </li>

        <li>
          <h3>UseEffect Implementation</h3>
          <UseEffect/> <br />
          {/* <Useeffecttwo /> */}
        </li>

        <li>
          <h3>UseReducer Implementation </h3>
          <UseReducer/>
        </li>
<br />
        <li>
          <Parent />
          <span>(Using a Functional Component)</span> <br /> <br />
          <ParentClass/>
          <span>(Using Class component)</span>
        </li>
      </ol>
    </div>
  );
}

export default App;
