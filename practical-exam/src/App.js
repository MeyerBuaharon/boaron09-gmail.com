import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import configureStore from "./store/configureStore";
import { MusicPlayer } from "./components";
import { Header, Footer } from "./shared";

const store = configureStore();
const Root = styled.div`
  padding-top: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Page = styled.div`
  padding-top: 40px;
`;
const App = () => (
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Root>
          <MusicPlayer />
        </Root>
        <Footer />
      </BrowserRouter>
    </Provider>
  </>
);

export default App;
