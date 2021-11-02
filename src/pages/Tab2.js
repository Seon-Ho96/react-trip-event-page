import React from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./Home.css";

const getData = () => {
  axios
    .get(`https://46344938-b432-4f5a-bdfe-2aaf77f751ee.mock.pstmn.io/trips`)
    .then((response) => {
      console.log(response);
      return response;
    });
};

const Tab2 = () => {
  return (
    <Container>
      <div>{getData()}</div>

      <div className="trip-list">
        <h3># 내가 원하는 제주 여행은?</h3>
        <div className="tabs">
          <Link to="/">
            <button id="tabButton">#자연#힐링</button>
          </Link>
          <Link to="/tab1">
            <button id="tabButton">#활동#재미</button>
          </Link>
          <Link to="/tab2">
            <button
              id="tabButton"
              style={{ color: "white", backgroundColor: "#EC7742" }}
            >
              #가족#아이
            </button>
          </Link>
        </div>
        <div className="list-container">
          <div className="list-flex">
            <div className="list-content">
              <img
                src={require("../img/화조원.png").default}
                alt="화조원"
                id="listImg"
              ></img>
              <div className="content-info">
                <p>
                  입장권<br></br>
                  <b>
                    [제주 애월]<br></br>화조원 조류 동물원<br></br>
                  </b>
                  <span className="discount">
                    <strike>14,000원</strike>
                  </span>
                  <b>11,200원~</b>
                </p>
                <p id="discount">20%</p>
              </div>
            </div>
            <div className="list-content">
              <img
                src={require("../img/공룡랜드.png").default}
                alt="공룡랜드"
                id="listImg"
              ></img>
              <div className="content-info">
                <p>
                  입장권<br></br>
                  <b>
                    [제주 애월]<br></br>공룡랜드<br></br>
                  </b>
                  <span className="discount">
                    <strike>14,000원</strike>
                  </span>
                  <b>11,200원~</b>
                </p>
                <p id="discount">20%</p>
              </div>
            </div>
          </div>
          <div className="list-flex">
            <div className="list-content">
              <img
                src={require("../img/피규어뮤지엄.png").default}
                alt="피규어뮤지엄"
                id="listImg"
              ></img>
              <div className="content-info">
                <p>
                  입장권<br></br>
                  <b>
                    [제주 애월]<br></br>피규어뮤지엄:이색전시<br></br>
                  </b>
                  <span className="discount">
                    <strike>14,000원</strike>
                  </span>
                  <b>11,200원~</b>
                </p>
                <p id="discount">20%</p>
              </div>
            </div>
            <div className="list-content">
              <img
                src={require("../img/퍼시픽랜드.png").default}
                alt="퍼시픽랜드"
                id="listImg"
              ></img>
              <div className="content-info">
                <p>
                  입장권<br></br>
                  <b>
                    [제주 애월]<br></br>퍼시픽랜드 마린스테이지<br></br>
                  </b>
                  <span className="discount">
                    <strike>14,000원</strike>
                  </span>
                  <b>11,200원~</b>
                </p>
                <p id="discount">20%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button id="Button">제주 상품 더 보기</button>
    </Container>
  );
};

export default Tab2;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 2141px;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;

  background: #fef2c6;
`;
