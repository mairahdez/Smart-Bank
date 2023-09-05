import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Container from "./Components/Container";
import Footer from "./Components/Footer/Footer";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from "./Components/UI/Temas";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";

console.log(temaClaro, temaOscuro)


function App() {

  const StoreTema = localStorage.getItem("tema");
  const [tema, setTema] = useState(StoreTema === "oscuro");


  useEffect(() => {
    if (StoreTema === "oscuro") {
      setTema(true);
    } else {
    setTema(false);
    }
  }, [StoreTema]);

  const toggleTema = () => {
    const nuevoTema = !tema;
    setTema(nuevoTema);
    localStorage.setItem("tema", nuevoTema ? "oscuro" : "claro");

  };
  return (
    <ThemeProvider theme={ tema ? temaClaro : temaOscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema} >
        <SwitcherTema tema={tema} />
      </BtnTema>
      <Header />
      <Container />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
