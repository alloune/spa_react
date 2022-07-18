import './App.css';
import SuppliersList from "./SuppliersList";
import SuppliersMap from "./SuppliersMap";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./Home";

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/supplier" element = {<Home/>} />
                <Route path = "/" element = {<Home/>} />
                <Route path = "/suppliers" element = {<SuppliersList/>} />
                <Route path = "/map" element = {<SuppliersMap/>} />
            </Routes>
        </BrowserRouter>
    );
}

function onSuppliersListClick() {

}

function onMapClick() {

}

