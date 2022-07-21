import SuppliersList from "./views/SuppliersList";
import SuppliersMap from "./views/SuppliersMap";
import Home from "./views/Home";
import Edit from "./views/Edit";
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

