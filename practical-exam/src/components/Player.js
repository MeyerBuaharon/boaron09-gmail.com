import React from "react";
import styled from "styled-components";

const Item = styled.div`
  font-weight: 500;
  color: #fff;
  flex: 1;
`;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  max-width: 800px;
`;

const TopBar = styled.div`
  display: flex;
  flex: none;
  padding: 8px;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

const Container = styled.div`
  overflow-x: hidden;
`;

const Duration = styled.div`
  font-weight: 400;
  color: #aaa;
`;
const ItemContainer = styled.div`
  position: relative;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  cursor: pointer;
  padding: 16px;
  display: flex;
`;

const Player = ({ songs }) => {
  return (
    <Root>
      <TopBar>Queue:</TopBar>
      <Container>
        {songs.map(song => (
          <ItemContainer>
            <Item>{song.name}</Item>
            <Duration>{song.duration}</Duration>
          </ItemContainer>
        ))}
      </Container>
    </Root>
  );
};

export default Player;
