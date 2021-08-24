import './App.css';
import MenuLateral from './components/menulateral/menulateral';
import Screen from './components/screen/screen';
import UnderScreen from './components/underscreen/underscreen';
import MenuFinal from './components/menufinal/menufinal';

function App() {
  return (
    <div className="container">
      <MenuLateral />

      <div className="main">
      <Screen />
      <UnderScreen />
      </div>
      <MenuFinal />
     
    </div>
  );
}

export default App;
