import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Sections } from './components/Sections';



function App() {
  return (
    
    <div className="App">
      <Header />

      <Sections />

      <Footer />
    </div>      
  );          
}

export default App;
