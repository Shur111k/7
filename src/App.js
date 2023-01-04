
import React from "react";
import Header from './Components/Header';
import {Content} from './Components/Content/Component';
import Image from './Components/Image';
import Cards from './Components/GoodCards';

function App() {
  return (
      <>
        <Header />
        <Content />
        <Image />
        <Cards />
      </>
  );
}

export default App;