import React from "react";
import styled from "styled-components";

import { Navbar } from "./styles";

const Root = styled(Navbar)`
  bottom: 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserInteractions = styled.div`
  position: absolute;
  right: 0;
  padding: 12px;
`;

const Title = styled.div``;
const CurrentSong = styled.div``;

const Footer = ({ currentSong = "currentSong" }) => (
  <Root>
    <UserInteractions>UserInteractions</UserInteractions>
    <Container>
      <CurrentSong>{currentSong}</CurrentSong>
    </Container>
    <div></div>
  </Root>
);

export default Footer;
