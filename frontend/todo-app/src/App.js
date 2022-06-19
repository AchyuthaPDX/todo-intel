
import './App.css';
import Header from './state_comp/Header'
import Mainlist from './state_comp/Mainlist'
import Addlists from './state_comp/Addlists'
import {Provider} from './func-context'

function App() {
  return (
  <Provider>
    <div className="app-container">
      <Header></Header>
      <Mainlist></Mainlist>
      <Addlists></Addlists>
    </div>
  </Provider>
  );
}

export default App;
