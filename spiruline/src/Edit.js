import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Nav from "./Nav";
import Loading from "./Loading";
import EditForm from "./EditForm";

export default function Edit() {
    let {supplierId} = useParams();
    const [supplier, setSupplier] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState(null);


    useEffect(() => {
        axios.get(`https://heroku-campus-suppliers.herokuapp.com/api/suppliers/` + supplierId)
            .then(res => {
                setSupplier(res.data)
                setLoading(false);
            }).catch(function (e) {
            setLoading(false);
            setErrors(e);
        })
    }, [])


    return (
        <>
            {console.log(supplier)}
            <Nav/>
            {
                supplier.id ? <EditForm
                        supplierId={supplierId}
                        name={supplier.name}
                        status={supplier.status}
                        latitude={supplier.latitude}
                        longitude={supplier.longitude}
                    />
                    :
                    <Loading/>
            }
        </>

    )
}