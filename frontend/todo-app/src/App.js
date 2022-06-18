
import './App.css';
import Header from './state_comp/Header'
import Mainlist from './state_comp/Mainlist'
import Addlists from './state_comp/Addlists'

function App() {
  return (
    <div className="app-container">
      <Header></Header>
      <Mainlist></Mainlist>
      <Addlists></Addlists>
    </div>
  );
}

export default App;
