import React, { useEffect } from "react";
import axios from "axios";

const App = (props) => {
  useEffect(() => {
    const apiCall = async () => {
      // let username = "hoonkk";
      const response = await axios.get(
        `https://46344938-b432-4f5a-bdfe-2aaf77f751ee.mock.pstmn.io/trips`
      );
      console.log(response.data);
    };
    apiCall();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={"./logo192.png"} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

  // function App() {
};

export default App;
