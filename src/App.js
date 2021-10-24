import React, { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import "./App.css";

const Main = styled.div`
  /* Rectangle 12 */

  position: absolute;
  width: 414px;
  height: 443px;
  left: 0px;
  top: 0px;

  background: #fef8ea;
  mix-blend-mode: normal;
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

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
      <Main>
        <p className="cotrip">CONTRIP</p>
        <p className="mainjeju">Jeju</p>
        <p className="maintitle">인생제주</p>
        <p className="mainsubtitle">쉬고 싶으면? 제주! 인생 사진도? 제주!</p>
        <img
          src={require("./img/main.png").default}
          alt="main"
          className="mainimg"
        />
      </Main>
    </div>
  );
};

export default App;
