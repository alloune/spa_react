import SuppliersList from "./SuppliersList";
import SuppliersMap from "./SuppliersMap";
import Home from "./Home";
import Edit from "./Edit";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";


export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/supplier" element = {<Home/>} />
                <Route path = "/supplier/edit/:supplierId" element={<Edit/>}/>
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

