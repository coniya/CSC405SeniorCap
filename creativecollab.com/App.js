
import { logo } from './constants';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
		    <img src={logo} className="img" alt="logo"/>
      </div>

		  <div>
		    <button className="btn" onclick="logIn()">LOG IN</button>

		    <button className="btn" onclick="signUp()">SIGN UP</button>
      </div>
		  <script>
			  function logIn(){
				  //add code to go to log in page
			  }

			  function signUp(){
				  //add code to go to log in page
			  }
		  </script>
    </div>
  );
}

export default App;
