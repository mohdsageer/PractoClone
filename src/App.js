import "./App.css";
import Appointment from "./components/Appointment";
import Artical from "./components/Artical";
import Cards from "./components/Cards";
import Consultant from "./components/Consultant";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AppDownload from "./components/AppDownload";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <Navbar />
      <SearchBar />
      <Content />
      <Consultant />
      <Cards />
      <Appointment />
      <Artical />
      <AppDownload />
      <Footer />
    </>
  );
}

export default App;
