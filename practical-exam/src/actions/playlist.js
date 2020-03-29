import uuid from "uuid";

//ADD_PLAYLIST
export const addToPlaylist = ({ name = "", duration = "3:50" } = {}) => ({
  type: "ADD_PLAYLIST",
  playlists: {
    id: uuid(),
    name,
    duration
  }
});

//REMOVE_LOCATION
export const removeFromPlaylist = ({ id }) => ({
  type: "REMOVE_PLAYLIST",
  id
});

//EDIT_LOCATION
export const editPlaylist = (id, updates) => ({
  type: "EDIT_CATEGORY",
  id,
  updates
});
