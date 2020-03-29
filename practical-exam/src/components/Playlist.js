import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 500px;
`;

const Playlist = () => <Image src={require("../assets/download.jpg")} />;

export default Playlist;
