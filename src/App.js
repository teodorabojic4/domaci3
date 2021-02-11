
import './App.css';
import valute from './valute.json';
import Navbar from './components/Navbar'
import { Route, Switch } from 'react-router';
import Konvertor from './components/Konvertor';
import SpisakValuta from './components/SpisakValuta';
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/spisak'>
          <SpisakValuta valute={valute.data} />
        </Route>
        <Route path='/'>
          <Konvertor valute={valute.data} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
