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

const Home = () => {
  return (
    <Container>
      <div>{getData()}</div>
      <div className="header">
        <p id="cotrip">CONTRIP</p>
        <p id="mainJeju">Jeju</p>
        <p id="mainSubtitle">쉬고 싶으면? 제주! 인생 사진도? 제주!</p>
        <p id="mainTitle">인생제주</p>
        <img src={require("../img/main.png").default} alt="main" id="mainImg" />
      </div>
      <div className="campaign-info">
        <h3 id="infoMsg">
          <span style={{ color: "#518b0e" }}>제주 쉬기좋은</span> 지역별 안내
        </h3>
      </div>
      <img
        src={require("../img/제주지도2 1.png").default}
        alt="jeju"
        id="jejuImg"
      />
      <div className="location-info">
        <div className="info-detail">
          <img
            src={require("../img/제주북동쪽.png").default}
            alt="infoimg"
            id="infoImg"
          ></img>
          <div className="info-description">
            <h3>
              <span className="description-red">01.</span> 제주 북동쪽
            </h3>
            <p id="descriptionMsg" style={{ width: "185px" }}>
              다양하게 볼 것이 많은 지역이다. 제주의 산과 바다를 다양하게 만나볼
              수 있고 두무포항을 통해 우도를 갔다오기에 매력적이다.
              <span className="description-green">
                추천명소 : 비자림, 산궁부리, 다람뒤오룸
              </span>
            </p>
          </div>
        </div>
        <div className="info-detail" style={{ top: "150px" }}>
          <div className="info-description">
            <h3>
              <span className="description-red">02.</span> 제주 북서쪽
            </h3>
            <p id="descriptionMsg" style={{ width: "185px" }}>
              해안 산책로와 드라이브를 즐기기 좋은 지역이다. 이호테우, 해협
              해변이 유명하며, 공항 가기 전 근처에 둘러볼 곳이 꽤 많다.
              <span className="description-green">
                추천명소 : 도두봉, 이호테우 해변, 협재 해수욕장 등
              </span>
            </p>
          </div>
          <img
            src={require("../img/제주북서쪽.png").default}
            alt="infoimg"
            id="infoImg"
          ></img>
        </div>
        <div className="info-detail" style={{ top: "295px" }}>
          <img
            src={require("../img/서귀포남동쪽.png").default}
            alt="infoimg"
            id="infoImg"
          ></img>
          <div className="info-description">
            <h3>
              <span className="description-red">03.</span> 서귀포 남동쪽
            </h3>
            <p id="descriptionMsg" style={{ width: "190px" }}>
              제주도 여행의 전통적인 유명 관광지가 많은 지역이다. 성산일출봉부터
              섭지코지, 쇠소깍 등이 있으며, 자연과 테마가 어우러져 있다.
              <span className="description-green">
                추천명소 : 성산일출봉, 섭지코지, 쇠소깍 등
              </span>
            </p>
          </div>
        </div>
        <div className="info-detail" style={{ top: "440px" }}>
          <div className="info-description">
            <h3>
              <span className="description-red">04.</span> 서귀포 남서쪽
            </h3>
            <p id="descriptionMsg" style={{ width: "170px" }}>
              테마 위주의 제주 명소가 많은 지역이다. 식물관과 박물관, 체험장들이
              많으며, 인생사진을 찍기 좋은 곳들이 많다.
              <span className="description-green">
                추천명소 : 오설록, 카멜리아힐, 천지연폭포 등
              </span>
            </p>
          </div>
          <img
            src={require("../img/서귀포남서쪽.png").default}
            alt="infoimg"
            id="infoImg"
          ></img>
        </div>
      </div>
      <div className="trip-list">
        <h3># 내가 원하는 제주 여행은?</h3>
        <div className="tabs">
          <Link to="/">
            <button
              id="tabButton"
              style={{ color: "white", backgroundColor: "#EC7742" }}
            >
              #자연#힐링
            </button>
          </Link>
          <Link to="/tab1">
            <button id="tabButton">#활동#재미</button>
          </Link>
          <Link to="/tab2">
            <button id="tabButton">#가족#아이</button>
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

export default Home;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;

  background: #fef2c6;
`;
