
import { useState } from "react";
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const [currentPage, handlePageChange] = useState("");

  const renderPage = () => {
    switch(currentPage) {
      case "About me":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <ContactForm />;
      case "Resume":
        return <Resume />;
      default: 
        return <About />;
    }
  };

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
    
  );
}

export default App;
