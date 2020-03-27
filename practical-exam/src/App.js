import React from "react";

const playlists = [
  {
    id: 1,
    name: "playlist1",
    songs: [
      { id: 1, name: "song1", url: "url", duration: "3:50" },
      { id: 2, name: "song2", url: "url", duration: "3:50" }
    ]
  }
];

const App = () => (
  <div>
    <div>Header</div>
    <div>SidePanel</div>
    <div>MainContent</div>
  </div>
);

export default App;
