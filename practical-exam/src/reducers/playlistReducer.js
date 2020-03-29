var defaultState = {
  name: "playlist1",
  songs: [
    { id: 1, name: "song1", url: "url", duration: "3:50" },
    { id: 2, name: "song2", url: "url", duration: "3:50" }
  ]
} || JSON.parse(localStorage.getItem("playlists"));

const playlistReducer = (state = defaultState, action) => {
  var arr = [] || JSON.parse(localStorage.getItem("categorys"));
  switch (action.type) {
    case "ADD_PLAYLIST":
      // arr.push(...state, action.category);
      // localStorage.setItem("categorys", JSON.stringify(arr));
      return [...state, action.category];
    case "REMOVE_PLAYLIST":
      // arr.filter(({ id }) => {
      //   return id !== action.id;
      // });
      // localStorage.setItem("categorys", JSON.stringify(arr));
      return state.filter(({ id }) => {
        return id !== action.id;
      });
    case "EDIT_PLAYLIST":
      arr.map(category => {
        if (category.id === action.id) {
          return {
            ...category,
            ...action.updates
          };
        } else {
          return category;
        }
      });
      localStorage.setItem("categorys", JSON.stringify(arr));

      return state.map(category => {
        if (category.id === action.id) {
          return {
            ...category,
            ...action.updates
          };
        } else {
          return category;
        }
      });
    default:
      return state;
  }
};

export default playlistReducer;
