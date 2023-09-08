import logo from './logo.svg';
import Header from './Components/Header';
import Form from './Components/Form';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="App h-[100vh] flex flex-col justify-between">
      <Header/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
