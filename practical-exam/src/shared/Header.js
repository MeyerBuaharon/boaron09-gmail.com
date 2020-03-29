import React from "react";
import styled from "styled-components";

const Root = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 64px;
  padding: 8px 0;
  right: 0;
  color: white;
  background: #1d1d1d;
  transition: opacity 0.2s;
  will-change: opacity;
  
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  position: absolute;
  right: 0;
  padding: 12px;
`;

const Title = styled.div``;
const CurrentSong = styled.div``;

const Header = ({
  title = "NAME_OF_PLAYLIST",
  currentSong = "CURRENT_SONG_PLAYING"
}) => (
  <Root>
    <Logo>LOGO</Logo>
    <Container>
      <Title>{title}</Title>
      <CurrentSong>{currentSong}</CurrentSong>
    </Container>
  </Root>
);

export default Header;
