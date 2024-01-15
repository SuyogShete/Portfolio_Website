import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Services from "./Components/Services/Services";
import TechStack from "./Components/TechStack/TechStack";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Services />
      <TechStack/>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
