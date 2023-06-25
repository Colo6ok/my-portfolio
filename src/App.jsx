import React from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Form from "./Pages/Form/Form";
import { Container, Aside } from "./components/Container/Container";

function App() {
  return (
    <>
      <Aside>
        <SideBar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </Container>
      </Aside>
    </>
  );
}

export default App;
