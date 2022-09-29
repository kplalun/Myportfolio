import React from "react";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";

function App() {
  return (
    <div className="App">
      <Nav />
      <Section1 />
      <Section2 />
      <Footer/>
    </div>
  );
}

export default App;
