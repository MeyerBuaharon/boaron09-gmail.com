import React, { useState } from "react";
import { Playlist, Player } from "./";

import styled from "styled-components";

const Root = styled.div`
  position: fixed;
  top: 64px;
  right: 0;
  width: 100vw;
  height: calc(100vh - 64px - 64px);
  z-index: 2;
  display: flex;
  padding: 48px 64px 0;
  justify-content: space-around;
  box-sizing: border-box;
`;

const MusicPlayer = ({ currSong, playlists, setCurrSong }) => {
  return (
    <Root>
      <Player
        currSong={currSong}
        songs={playlists.songs}
        setCurrSong={setCurrSong}
      ></Player>
      <Playlist></Playlist>
    </Root>
  );
};

export default MusicPlayer;
