import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import styled from "styled-components";
import { MusicPlayer } from "./";
import { Header, Footer } from "../shared";

const Root = styled.div`
  padding-top: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const selector = state => ({
  playlists: state.playlists
});

const MainApp = () => {
  const { playlists } = useSelector(selector);
  console.log(playlists);
  const [currSong, setCurrSong] = useState(playlists.songs[0]);

  return (
    <>
      <Header currSong={currSong.name} title={playlists.name} />
      <Root>
        <MusicPlayer
          playlists={playlists}
          currSong={currSong}
          setCurrSong={setCurrSong}
        />
      </Root>
      <Footer currSong={currSong.name} />
    </>
  );
};
export default connect()(MainApp);
