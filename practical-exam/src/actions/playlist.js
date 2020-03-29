import uuid from "uuid";

//ADD_PLAYLIST
export const addPlaylist = ({ name = "" ,songs} = {}) => ({
  type: "ADD_PLAYLIST",
  playlists: {
    id: uuid(),
    name,
    songs
  }
});

//REMOVE_LOCATION
export const removePlaylist = ({ id }) => ({
  type: "REMOVE_PLAYLIST",
  id
});

//EDIT_LOCATION
export const editPlaylist = (id, updates) => ({
  type: "EDIT_CATEGORY",
  id,
  updates
});
