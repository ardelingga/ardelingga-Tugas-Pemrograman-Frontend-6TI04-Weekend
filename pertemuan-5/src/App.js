import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import AddMovieForm from "./components/AddMovieForm/AddMovieForm"

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AddMovieForm/>
      <Footer/>
    </div>
  );
}

export default App;
