
import './App.css';
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';


function App() {
  return (
    <div className="App">
      <h1>Welcome to the react world</h1>
      <Home name={'Jeevan'} age = {22}/>
      <Contact/>
      <About/>
      

    </div>
  );
}

export default App;
