import React, { useState } from "react";
import styled from "styled-components";
import { connect, useDispatch } from "react-redux";
import { addToPlaylist, removeFromPlaylist } from "../actions/playlist";

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
  background: ${({ isSelected }) => isSelected && "rgba(255, 255, 255, 0.1)"};

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const AddSong = styled.div`
  color: lightblue;
  text-decoration: underline;
  cursor: pointer;
  padding: 16px;
`;

const DeleteItem = styled.div`
  color: crimson;
  margin-right: 5px;
`;

const Player = ({ songs, currSong, setCurrSong }) => {
  const [addSong, setAddSong] = useState(false);
  const [newSong, setNewSong] = useState();
  const dispatch = useDispatch();

  const onAddSong = () => {
    dispatch(addToPlaylist({ name: newSong }));
    setNewSong("");
  };

  const onDelteItem = id => {
    dispatch(removeFromPlaylist({ id: id }));
  };

  return (
    <Root>
      <TopBar>Queue:</TopBar>
      <Container>
        {songs.map(song => (
          <ItemContainer
            onClick={() => setCurrSong(song)}
            isSelected={currSong.id === song.id}
            Key={song.id}
          >
            <DeleteItem onClick={() => onDelteItem(song.id)}>X</DeleteItem>
            <Item>{song.name}</Item>
            <Duration>{song.duration}</Duration>
          </ItemContainer>
        ))}
        {addSong ? (
          <div>
            <input value={newSong} onChange={e => setNewSong(e.target.value)} />
            <button onClick={() => onAddSong()}>submit</button>
          </div>
        ) : (
          <AddSong onClick={() => setAddSong(true)}>
            Add a new song to the playlist
          </AddSong>
        )}
      </Container>
    </Root>
  );
};

export default connect()(Player);
