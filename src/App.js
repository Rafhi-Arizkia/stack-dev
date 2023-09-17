import NavbarComponent from './Components/NavbarComponent'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './Components/Content';
import FooterComponent from './Components/FooterComponent';


function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <NavbarComponent></NavbarComponent>
        <Content></Content>
        <FooterComponent></FooterComponent>
      </div>
    </div>
  );
}

export default App;
