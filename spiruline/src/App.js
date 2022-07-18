import './App.css';
import SuppliersList from "./SuppliersList";
import SuppliersMap from "./SuppliersMap";
import { useState } from "react";

function App() {

    const [toggleDisplay, setToggleDisplay] = useState(true)

    function onSuppliersListClick() {
        setToggleDisplay(true);
    }

    function onMapClick() {
        setToggleDisplay(false);
    }

    return (
        <div className="App">
            <header className="App-header">
                <nav>
                    <ul>
                        <li>
                            <button onClick={onSuppliersListClick}>Suppliers</button>
                        </li>
                        <li>
                            <button onClick={onMapClick}>Map</button>
                        </li>
                    </ul>
                </nav>
                <div>
                    { toggleDisplay ? <SuppliersList/> : <SuppliersMap/> }
                </div>
            </header>
        </div>
    );
}



export default App;
