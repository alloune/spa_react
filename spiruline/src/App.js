import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><button onClick={onSuppliersListClick}>Suppliers</button></li>
            <li><button onClick={onMapClick}>Map</button></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

function onSuppliersListClick(){
  alert('Cliqué sur la liste des fournisseur')
}

function onMapClick(){
  alert('Cliqué sur la map')
}

export default App;
