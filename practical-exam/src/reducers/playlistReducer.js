var defaultState =
  {
    name: "playlist1",
    songs: [
      { id: 1, name: "song1", url: "url", duration: "3:50" },
      { id: 2, name: "song2", url: "url", duration: "3:50" }
    ]
  } || JSON.parse(localStorage.getItem("playlists"));

const playlistReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_PLAYLIST":
      state.songs = [...state.songs, action.playlists];
      return state;

    case "REMOVE_PLAYLIST":
      state.songs = state.songs.filter(({ id }) => {
        return id !== action.id;
      });
      return state;

    default:
      return state;
  }
};

export default playlistReducer;
