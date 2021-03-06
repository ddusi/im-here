import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styled from "styled-components";
import icon_share from "./assets/hw-icon_share.png";

const Share = ({ mymap }) => {
  const shareText = `๐ค ํ์ฌ ์์น๋ ${mymap.roadAddress}์๋๋ค. 
  w3w์ฃผ์ : ${mymap.w3w}
  ์๋ : ${mymap.location.latitude}
  ๊ฒฝ๋ : ${mymap.location.longitude}
  ์นด์นด์ค๋งต : ${mymap.kakaoMap}`;
  return (
    <Container>
      <CopyToClipboard text={shareText}>
        <Button>๋ด ํ์์น ๋ณต์ฌ</Button>
      </CopyToClipboard>
      <Button_share>
        <img src={icon_share} />
      </Button_share>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-top: 15px;
  justify-content: center;
`;
const Button = styled.button`
  background: #000000;
  width: 323px;
  height: 60px;
  margin: 10px
  z-index: 1;
  border: none;
  border-radius: 15px;
  padding: 15px 24px 15px 24px;
  text-decoration: none;
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;

  &: hover {
    background: #454545;
  }
`;

const Button_share = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  background: #d5d5d5;
  border: none;
  margin-left: 5px;
  cursor: pointer;
`;

export default Share;
