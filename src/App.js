import './App.css';
import {Header} from '../src/components/header/Header'
import {Footer} from '../src/components/footer/Footer'
import {NavigationRoutes} from './router/NavigationRoutes';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <NavigationRoutes></NavigationRoutes>
      <Footer></Footer>
    </div>
  );
}

export default App;
