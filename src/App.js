import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import RoutesConfig from "./Route";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <RoutesConfig />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
