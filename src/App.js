import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import About from './components/about';
import Education from './components/education';
import Skills from './components/Skills';
import Hobby from './components/hobbies';

function App() {
  return(  
    <>
    <Navbar /> 
    <About />
    <Education />
    <Skills />
    <Hobby />
    </>
    );
}

export default App;
